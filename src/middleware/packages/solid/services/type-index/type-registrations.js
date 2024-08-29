const urlJoin = require('url-join');
const { namedNode, triple, literal } = require('@rdfjs/data-model');
const { MoleculerError } = require('moleculer').Errors;
const { ControlledContainerMixin, arrayOf } = require('@semapps/ldp');
const { MIME_TYPES } = require('@semapps/mime-types');

module.exports = {
  name: 'type-registrations',
  mixins: [ControlledContainerMixin],
  settings: {
    acceptedTypes: ['solid:TypeRegistration'],
    permissions: {
      default: {
        anon: {
          read: true
        }
      }
    },
    excludeFromMirror: true
  },
  actions: {
    register: {
      visibility: 'public',
      params: {
        type: { type: 'string' },
        containerUri: { type: 'string' },
        webId: { type: 'string' }
      },
      async handler(ctx) {
        let { type, containerUri, webId } = ctx.params;

        const [expandedType] = await ctx.call('jsonld.parser.expandTypes', { types: [type] });

        // Check if the container was already registered
        let existingRegistration = await this.actions.getByContainerUri({ containerUri, webId });

        if (existingRegistration) {
          const expandedRegisteredTypes = await ctx.call('jsonld.parser.expandTypes', {
            types: existingRegistration['solid:forClass']
          });

          // If the container is registered with other types, append the new type
          if (!expandedRegisteredTypes.includes(expandedType)) {
            await this.actions.patch({
              resourceUri: existingRegistration.id,
              triplesToAdd: [
                triple(
                  namedNode(existingRegistration.id),
                  namedNode('http://www.w3.org/ns/solid/terms#forClass'),
                  namedNode(expandedType)
                )
              ],
              webId
            });
          }

          return existingRegistration;
        } else {
          // Ensure there is no registration for this type on another container
          // existingRegistration = await this.actions.getByType({ type: expandedType, webId });

          // if (existingRegistration && existingRegistration['solid:instanceContainer'] !== containerUri) {
          //   throw new Error(
          //     `Cannot register ${containerUri} for type ${type} because the container ${existingRegistration['solid:instanceContainer']} is already registered for this type.`
          //   );
          // }

          // Find the TypeIndex linked with the WebId
          const indexUri = await ctx.call('type-indexes.findByWebId', { webId });
          if (!indexUri) throw new Error(`No public type index associated with webId ${webId}`);

          // Create the type registration
          const registrationUri = await this.actions.post(
            {
              resource: {
                type: 'solid:TypeRegistration',
                'solid:forClass': expandedType,
                'solid:instanceContainer': containerUri
              },
              contentType: MIME_TYPES.JSON,
              webId
            },
            { parentCtx: ctx }
          );

          // Attach it to the TypeIndex
          await ctx.call('type-indexes.patch', {
            resourceUri: indexUri,
            triplesToAdd: [
              triple(
                namedNode(indexUri),
                namedNode('http://www.w3.org/ns/solid/terms#hasTypeRegistration'),
                namedNode(registrationUri)
              )
            ],
            webId
          });

          return registrationUri;
        }
      }
    },
    attachDescription: {
      visibility: 'public',
      params: {
        type: { type: 'string' },
        webId: { type: 'string' },
        labelMap: { type: 'object', optional: true },
        labelPredicate: { type: 'string', optional: true },
        openEndpoint: { type: 'string', optional: true },
        icon: { type: 'string', optional: true }
      },
      async handler(ctx) {
        const { type, webId, labelMap, labelPredicate, openEndpoint, icon } = ctx.params;

        const [registration] = await this.actions.getByType({ type, webId }, { parentCtx: ctx });
        if (!registration) throw new Error(`No registration found with type ${type}`);

        let label;

        if (labelMap) {
          const userData = await ctx.call('ldp.resource.get', {
            resourceUri: webId,
            accept: MIME_TYPES.JSON,
            webId
          });

          const userLocale = userData['schema:knowsLanguage'];

          if (userLocale) {
            label = labelMap?.[userLocale] || labelMap?.en;
          }
        }

        await ctx.call('type-registrations.put', {
          resource: {
            ...registration,
            'skos:prefLabel': label,
            'apods:labelPredicate': labelPredicate,
            'apods:openEndpoint': openEndpoint,
            'apods:icon': icon
          },
          contentType: MIME_TYPES.JSON,
          webId
        });
      }
    },
    /**
     * Bind an application to a certain type of resources
     * If no other app is bound with this type yet, it will be marked as the default app and its class description will be used
     * Otherwise, the app will be added to the list of available apps, that the user can switch to
     */
    bindApp: {
      visibility: 'public',
      params: {
        type: { type: 'string' },
        appUri: { type: 'string' },
        webId: { type: 'string' }
      },
      async handler(ctx) {
        const { type, appUri, webId } = ctx.params;

        let [registration] = await this.actions.getByType({ type, webId }, { parentCtx: ctx });
        if (!registration) throw new Error(`No registration found with type ${type}`);

        // Add the app to available apps
        registration['apods:availableApps'] = [...new Set([...arrayOf(registration['apods:availableApps']), appUri])];

        // If no default app is defined for this type, use this one
        if (!registration['apods:defaultApp']) registration['apods:defaultApp'] = appUri;

        // If the app is the default app, update its description
        if (registration['apods:defaultApp'] === appUri) {
          const classDescription = await ctx.call('applications.getClassDescription', {
            type,
            appUri,
            podOwner: webId
          });
          if (classDescription) {
            registration = {
              ...registration,
              'skos:prefLabel': classDescription['skos:prefLabel'],
              'apods:labelPredicate': classDescription['apods:labelPredicate'],
              'apods:openEndpoint': classDescription['apods:openEndpoint'],
              'apods:icon': classDescription['apods:icon']
            };
          }
        }

        await ctx.call('type-registrations.put', {
          resource: registration,
          contentType: MIME_TYPES.JSON,
          webId
        });
      }
    },
    /**
     * Unbind an application from a certain type of resource (Mirror of the above action.)
     * If another application is in the list of available apps, its class description will be used instead.
     * Otherwise, we will keep the label and labelPredicate, but not the icon and openEndpoint
     */
    unbindApp: {
      visibility: 'public',
      params: {
        type: { type: 'string' },
        appUri: { type: 'string' },
        webId: { type: 'string' }
      },
      async handler(ctx) {
        const { type, appUri, webId } = ctx.params;

        let [registration] = await this.actions.getByType({ type, webId }, { parentCtx: ctx });
        if (!registration) throw new Error(`No registration found with type ${type}`);

        // Remove the app from available apps
        registration['apods:availableApps'] = arrayOf(registration['apods:availableApps']).filter(a => a !== appUri);

        if (registration['apods:defaultApp'] === appUri) {
          let alternativeClassDescriptionFound = false;

          // If there are other available apps for this type, set the first one as the default app
          if (registration['apods:availableApps'].length > 0) {
            const newDefaultAppUri = registration['apods:availableApps'][0];

            registration['apods:defaultApp'] = newDefaultAppUri;

            const classDescription = await ctx.call('applications.getClassDescription', {
              type,
              appUri: newDefaultAppUri,
              podOwner: webId
            });

            if (classDescription) {
              registration = {
                ...registration,
                'skos:prefLabel': classDescription['skos:prefLabel'],
                'apods:labelPredicate': classDescription['apods:labelPredicate'],
                'apods:openEndpoint': classDescription['apods:openEndpoint'],
                'apods:icon': classDescription['apods:icon']
              };

              alternativeClassDescriptionFound = true;
            }
          } else {
            registration['apods:defaultApp'] = undefined;
          }

          // If no other available apps, or if the new default app has no class description
          if (!alternativeClassDescriptionFound) {
            // Try to find if the LDP registry has a description
            const containerDescription = await ctx.call('ldp.registry.getDescriptionByType', { type, webId });

            // Keep the label and labelPredicate as it is an useful information for the data browser
            registration = {
              ...registration,
              'skos:prefLabel': containerDescription?.label || registration['skos:prefLabel'],
              'apods:labelPredicate': containerDescription?.labelPredicate || registration['apods:labelPredicate'],
              'apods:openEndpoint': undefined,
              'apods:icon': undefined
            };
          }
        }

        await ctx.call('type-registrations.put', {
          resource: registration,
          contentType: MIME_TYPES.JSON,
          webId
        });
      }
    },
    getByType: {
      visibility: 'public',
      params: {
        type: { type: 'string' },
        webId: { type: 'string' }
      },
      async handler(ctx) {
        const { type, webId } = ctx.params;

        const [expandedType] = await ctx.call('jsonld.parser.expandTypes', { types: [type] });

        const filteredContainer = await this.actions.list(
          {
            filters: { 'http://www.w3.org/ns/solid/terms#forClass': expandedType },
            webId
          },
          { parentCtx: ctx }
        );

        // There can be several TypeRegistration per type
        return arrayOf(filteredContainer['ldp:contains']);
      }
    },
    getByContainerUri: {
      visibility: 'public',
      params: {
        containerUri: { type: 'string' },
        webId: { type: 'string' }
      },
      async handler(ctx) {
        const { containerUri, webId } = ctx.params;

        const filteredContainer = await this.actions.list(
          {
            filters: { 'http://www.w3.org/ns/solid/terms#instanceContainer': containerUri },
            webId
          },
          { parentCtx: ctx }
        );

        // There should be only one TypeRegistration per container
        return arrayOf(filteredContainer['ldp:contains'])[0];
      }
    },
    findContainersUris: {
      visibility: 'public',
      params: {
        type: { type: 'string' },
        webId: { type: 'string' }
      },
      async handler(ctx) {
        const { type, webId } = ctx.params;

        const registrations = await this.actions.getByType({ type, webId }, { parentCtx: ctx });

        return registrations.map(r => r['solid:instanceContainer']);
      }
    },
    addMissing: {
      visibility: 'public',
      async handler(ctx) {
        const accounts = await ctx.call('auth.account.find');
        const registeredContainers = await ctx.call('ldp.registry.list');
        // Go through each Pod
        for (const { webId } of accounts) {
          const podUrl = await ctx.call('pod.getUrl', { webId });
          // Go through each registered container
          for (const container of Object.values(registeredContainers)) {
            if (container.podsContainer !== true) {
              const containerUri = urlJoin(podUrl, container.path);
              for (const type of arrayOf(container.acceptedTypes)) {
                await this.actions.register({ type, containerUri, webId }, { parentCtx: ctx });
              }
            }
          }
        }
      }
    }
  },
  hooks: {
    before: {
      async patch(ctx) {
        const { resourceUri, triplesToAdd, triplesToRemove } = ctx.params;
        const webId = ctx.params.webId || ctx.meta.webId || 'anon';

        const addDefaultAppTriple = triplesToAdd?.find(
          t => t.subject.value === resourceUri && t.predicate.value === 'http://activitypods.org/ns/core#defaultApp'
        );

        const removeDefaultAppTriple = triplesToRemove?.find(
          t => t.subject.value === resourceUri && t.predicate.value === 'http://activitypods.org/ns/core#defaultApp'
        );

        // If the patch operation is about replacing the default app...
        if (addDefaultAppTriple && removeDefaultAppTriple) {
          const newAppUri = addDefaultAppTriple.object.value;
          const oldAppUri = removeDefaultAppTriple.object.value;

          const oldData = await ctx.call(
            'ldp.resource.get',
            {
              resourceUri,
              accept: MIME_TYPES.JSON,
              webId
            },
            {
              meta: { $cache: false }
            }
          );

          if (oldData['apods:defaultApp'] !== oldAppUri) {
            throw new MoleculerError(`The application ${oldAppUri} is not the default app`, 400, 'BAD_REQUEST');
          }

          if (!arrayOf(oldData['apods:availableApps']).includes(newAppUri)) {
            throw new MoleculerError(`The application ${newAppUri} is not in the available apps`, 400, 'BAD_REQUEST');
          }

          // Get the description of the selected app
          const classDescription = await ctx.call('applications.getClassDescription', {
            type: oldData['solid:forClass'],
            appUri: newAppUri,
            podOwner: webId
          });

          // If the new default app has a description for this type, replace the current data in the type registration
          if (classDescription) {
            // TODO set a function to simplify the lines below
            const [expandedNewLabelPredicate] = await ctx.call('jsonld.parser.expandTypes', {
              types: [classDescription['apods:labelPredicate']],
              context: classDescription['@context']
            });

            triplesToAdd.push(
              triple(
                namedNode(resourceUri),
                namedNode('http://www.w3.org/2004/02/skos/core#prefLabel'),
                literal(classDescription['skos:prefLabel'])
              ),
              triple(
                namedNode(resourceUri),
                namedNode('http://activitypods.org/ns/core#labelPredicate'),
                namedNode(expandedNewLabelPredicate)
              ),
              triple(
                namedNode(resourceUri),
                namedNode('http://activitypods.org/ns/core#openEndpoint'),
                literal(classDescription['apods:openEndpoint'])
              ),
              triple(
                namedNode(resourceUri),
                namedNode('http://activitypods.org/ns/core#icon'),
                literal(classDescription['apods:icon'])
              )
            );

            if (oldData['skos:prefLabel']) {
              triplesToRemove.push(
                triple(
                  namedNode(resourceUri),
                  namedNode('http://www.w3.org/2004/02/skos/core#prefLabel'),
                  literal(oldData['skos:prefLabel'])
                )
              );
            }

            if (oldData['apods:labelPredicate']) {
              const [expandedOldLabelPredicate] = await ctx.call('jsonld.parser.expandTypes', {
                types: [oldData['apods:labelPredicate']],
                context: oldData['@context']
              });

              triplesToRemove.push(
                triple(
                  namedNode(resourceUri),
                  namedNode('http://activitypods.org/ns/core#labelPredicate'),
                  namedNode(expandedOldLabelPredicate)
                )
              );
            }

            if (oldData['apods:openEndpoint']) {
              triplesToRemove.push(
                triple(
                  namedNode(resourceUri),
                  namedNode('http://activitypods.org/ns/core#openEndpoint'),
                  literal(oldData['apods:openEndpoint'])
                )
              );
            }

            if (oldData['apods:icon']) {
              triplesToRemove.push(
                triple(
                  namedNode(resourceUri),
                  namedNode('http://activitypods.org/ns/core#icon'),
                  literal(oldData['apods:icon'])
                )
              );
            }
          }
        }
      }
    }
  }
};
