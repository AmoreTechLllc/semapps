import buildDereferenceQuery from './buildDereferenceQuery';
import getRdfPrefixes from './getRdfPrefixes';

const buildSparqlQuery = ({ containers, params: { filter }, dereference, ontologies }) => {
  let whereQuery = '';

  if (filter) {
    if (filter.q && filter.q.length > 0) {
      whereQuery += `
      {
        SELECT ?s1
        WHERE {
          ?s1 ?p1 ?o1 .
          FILTER regex(lcase(str(?o1)), "${filter.q.toLowerCase()}")
          FILTER NOT EXISTS {?s1 a ?o1}
        }
      }
      `;
      delete filter.q;
    }
    Object.keys(filter).forEach(predicate => {
      if (filter[predicate]) {
        const object = filter[predicate].startsWith('http') ? `<${filter[predicate]}>` : filter[predicate];
        whereQuery += `?s1 ${predicate} ${object} .`;
      }
    });
  }

  const dereferenceQuery = buildDereferenceQuery(dereference);

  return `
    ${getRdfPrefixes(ontologies)}
    CONSTRUCT {
      ?s1 ?p2 ?o2 .
      ${dereferenceQuery.construct}
    }
    WHERE {
      ?containerUri ldp:contains ?s1 .
      FILTER( ?containerUri IN (${containers.map(container => `<${container}>`).join(', ')}) ) .
      FILTER( (isIRI(?s1)) ) .
      ${whereQuery}
      ${dereferenceQuery.where}
      ?s1 ?p2 ?o2 .
    }
  `;
};

export default buildSparqlQuery;
