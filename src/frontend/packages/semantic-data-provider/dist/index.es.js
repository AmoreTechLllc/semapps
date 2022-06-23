import e,{useState as r,useEffect as t,useContext as n}from"react";import{ImageField as a,ReferenceArrayField as o,ReferenceField as i,useQueryWithStore as u,DateTimeInput as c,useResourceContext as s,ReferenceArrayInput as f,ReferenceInput as l,ArrayInput as p,SimpleFormIterator as d,TextInput as h,DataProviderContext as v,fetchUtils as y}from"react-admin";import{makeStyles as m}from"@material-ui/core/styles";import g from"jsonld";import b from"speakingurl";import w from"crypto";import x from"@rdfjs/data-model";function k(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?k(Object(t),!0).forEach((function(r){R(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,r,t,n,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void t(e)}u.done?r(c):Promise.resolve(c).then(n,a)}function E(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){O(o,n,a,i,u,"next",e)}function u(e){O(o,n,a,i,u,"throw",e)}i(void 0)}))}}function R(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function A(){return(A=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function C(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function P(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,a,o=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(u)throw a}}return o}(e,r)||_(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e){return function(e){if(Array.isArray(e))return U(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||_(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,r){if(e){if("string"==typeof e)return U(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?U(e,r):void 0}}function U(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function I(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=_(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw o}}}}var M=["record","source"],q=function(r){var t=r.record,n=r.source,o=C(r,M);return"string"==typeof t&&(t=R({},n,t)),e.createElement(a,A({record:t,source:n},o))},B=["record","source"],D=function(r){var t=r.record,n=r.source,a=C(r,B);return null!=t&&t[n]&&(Array.isArray(t[n])||(t[n]=[t[n]]),t[n]=t[n].map((function(e){return e["@id"]||e.id||e}))),e.createElement(o,A({record:t,source:n},a))};D.defaultProps={addLabel:!0};var L=["record","source"],F=function(r){var t=r.record,n=r.source,a=C(r,L);return t[n]&&"object"===j(t[n])&&(t[n]=t[n]["@id"]||t[n].id),e.createElement(i,A({record:t,source:n},a))};F.defaultProps={addLabel:!0};var H=["children","record","filter","source"],N=function(n){var a=n.children,o=n.record,i=n.filter,u=n.source,c=C(n,H),s=P(r(),2),f=s[0],l=s[1];return t((function(){if(o&&u&&Array.isArray(null==o?void 0:o[u])){var e=null==o?void 0:o[u].filter((function(e){var r=!0;for(var t in i){var n=e[t];Array.isArray(n)?n.includes(i[t])||(r=!1):n!==i[t]&&(r=!1)}return r})),r=S({},o);r[u]=e.length>0?e:void 0,l(r)}}),[o,u,i]),e.createElement(e.Fragment,null,e.Children.map(a,(function(r,t){return e.cloneElement(r,S(S({},c),{},{record:f,addLabel:!0,source:u}))})))},z=["children","groupReference","groupLabel","groupHeader","filterProperty"],W=function(r){var t=r.children,n=r.groupReference,a=r.groupLabel,o=r.groupHeader,i=r.filterProperty,c=C(r,z),s=u({type:"getList",resource:n,payload:{}}).data;return e.createElement(e.Fragment,null,null==s?void 0:s.map((function(r,n){var u={};return u[i]=r.id,e.createElement(e.Fragment,null,o&&o(S(S({},c),{},{group:r})),e.createElement(N,A({},c,{filter:u,label:r[a]}),t))})))},$=function(r){return e.createElement(c,A({},r,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},J=function(r){var t=s({});return e.createElement(f,A({},r,{resource:t,format:function(e){return e?(Array.isArray(e)||(e=[e]),r.format&&(e=r.format(e)),e.map((function(e){return"object"===j(e)?e.id||e["@id"]:e}))):e}}))},Y=function(r){var t=s({});return e.createElement(l,A({},r,{resource:t,format:function(e){return e?(r.format&&(e=r.format(e)),"object"===j(e)?e.id||e["@id"]:e):e}}))},G=["reificationClass","children"],V=m({form:{display:"flex"},input:{paddingRight:"20px"}}),K=m({root:{display:"none"}}),X=function(r){var t=r.reificationClass;r.children;var n=C(r,G),a=V(),o=K();return e.createElement(p,n,e.createElement(d,{classes:{form:a.form}},e.Children.map(r.children,(function(r,t){return e.cloneElement(r,{className:a.input})})),e.createElement(h,{className:o.root,source:"type",initialValue:t})))},Z=function(e){var a=n(v),o=P(r(),2),i=o[0],u=o[1];return t((function(){a.getDataModels().then((function(r){return u(r[e])}))}),[a,e,u]),i},Q=function(){var e=n(v),a=P(r(),2),o=a[0],i=a[1];return t((function(){e.getDataServers().then((function(e){return i(e)}))}),[e,i]),o},ee="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function re(e,r){return e(r={exports:{}},r.exports),r.exports}var te=re((function(e){var r,t;r=ee,t=function(){function e(e){var r=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var t=e.shift();e[0]=t+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var a=e[n];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(n>0&&(a=a.replace(/^[\/]+/,"")),a=n<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),r.push(a))}var o=r.join("/"),i=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=t():r.urljoin=t()})),ne=function(e,r){return Object.keys(r).find((function(t){return r[t][e]}))},ae=function(e,r){switch(e){case"@default":return ne("default",r);case"@pod":return ne("pod",r);case"@authServer":return ne("authServer",r);default:return e}},oe=function(e,r,t){var n={},a=[];return r=function(e,r){if(Array.isArray(e))return e.includes("@all")?Object.keys(r):e.map((function(e){return ae(e,r)}));if("string"==typeof e){if("@all"===e)return Object.keys(r);if("@remote"===e){var t=ne("default",r);return Object.keys(r).filter((function(e){return e!==t}))}return[ae(e,r)]}return!1}(r,t),Object.keys(t).forEach((function(o){Object.keys(t[o].containers).forEach((function(i){r&&!r.includes(i)||Object.keys(t[o].containers[i]).forEach((function(r){e.includes(r)&&t[o].containers[i][r].map((function(e){var r=te(t[i].baseUrl,e);a.includes(r)||(a.push(r),n[o]||(n[o]=[]),n[o].push(r))}))}))}))})),n},ie=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"@all",a=Z(e),o=Q(),i=r(),u=P(i,2),c=u[0],s=u[1];return t((function(){a&&o&&s(oe(a.types,n,o))}),[a,o,n]),c},ue=function(e,r,t){var n=[];if(Object.keys(t[r].containers[r]).forEach((function(a){e.includes(a)&&t[r].containers[r][a].map((function(e){var a=te(t[r].baseUrl,e);n.includes(a)||n.push(a)}))})),0===n.length)throw new Error("No container found matching with types ".concat(JSON.stringify(e),". You can set explicitely the create.container property of the resource."));if(n.length>1)throw new Error("More than one container found matching with types ".concat(JSON.stringify(e),". You must set the create.server or create.container property for the resource."));return n[0]},ce=function(e){var n=Z(e),a=Q(),o=P(r(),2),i=o[0],u=o[1];return t((function(){var r,t;if(n&&a)if(null!==(r=n.create)&&void 0!==r&&r.container){var o=P(Object.entries(n.create.container)[0],2),i=o[0],c=o[1];if(!i||!a[i])throw new Error("Wrong key for the dataModel.create.container config of resource "+e);u(te(a[i].baseUrl,c))}else if(null!==(t=n.create)&&void 0!==t&&t.server){var s;u(ue(n.types,null===(s=n.create)||void 0===s?void 0:s.server,a))}else{var f=ne("default",a);u(ue(n.types,f,a))}}),[n,a,u]),i},se=function(){var e=n(v),a=P(r(),2),o=a[0],i=a[1];return t((function(){e.getDataModels().then((function(e){return i(e)}))}),[e,i]),o},fe=function(e,r){return Object.keys(r).find((function(t){return e.startsWith(r[t].baseUrl)}))},le=function(){var e=E(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,u,c,s,f,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.dataServers,i=t.httpClient,u=t.jsonContext,c=ne("authServer",o),(s=fe(r,o))===c||null===(n=o[c])||void 0===n||!n.proxyUrl||!0===(null===(a=o[s])||void 0===a?void 0:a.noProxy)){e.next=9;break}return e.next=6,i(o[c].proxyUrl,{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:new URLSearchParams({id:r})});case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,i(r,{noToken:s!==c});case 11:e.t0=e.sent;case 12:if(f=e.t0,(l=f.json).id=l.id||l["@id"],l["@context"]===u){e.next=19;break}return e.next=18,g.compact(l,u);case 18:l=e.sent;case 19:return e.abrupt("return",l);case 20:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),pe=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,c,s,f,l,p,d,h,v,y,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.resources,u=i[t]){r.next=4;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 4:return r.next=6,le(n.id,e);case 6:if(c=r.sent,null!==(a=u.list)&&void 0!==a&&a.forceArray){f=I(null===(s=u.list)||void 0===s?void 0:s.forceArray);try{for(f.s();!(l=f.n()).done;)p=l.value,c[p]&&!Array.isArray(c[p])&&(c[p]=[c[p]])}catch(e){f.e(e)}finally{f.f()}}if(null===(o=u.list)||void 0===o||!o.dereference){r.next=35;break}h=I(null===(d=u.list)||void 0===d?void 0:d.dereference),r.prev=10,h.s();case 12:if((v=h.n()).done){r.next=27;break}if(y=v.value,!c[y]||"string"!=typeof c[y]||!c[y].startsWith("http")){r.next=25;break}return r.prev=15,r.next=18,le(c[y],e);case 18:delete(m=r.sent)["@context"],c[y]=m,r.next=25;break;case 23:r.prev=23,r.t0=r.catch(15);case 25:r.next=12;break;case 27:r.next=32;break;case 29:r.prev=29,r.t1=r.catch(10),h.e(r.t1);case 32:return r.prev=32,h.f(),r.finish(32);case 35:return r.abrupt("return",{data:c});case 36:case"end":return r.stop()}}),r,null,[[10,29,32,35],[15,23]])})));return function(e,t){return r.apply(this,arguments)}}()},de=function(e){return e&&e.rawFile&&e.rawFile instanceof File},he=function(e){var r=Object.keys(e.dataServers).find((function(r){return e.dataServers[r].uploadsContainer}));if(r)return te(e.dataServers[r].baseUrl,e.dataServers[r].uploadsContainer)},ve=function(){var e=E(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=he(t)){e.next=3;break}throw new Error("You must define an uploadsContainer in one of the server's configuration");case 3:return e.next=5,t.httpClient(n,{method:"POST",body:r,headers:new Headers({Slug:(o=r.name,i=void 0,u=void 0,i="",u=o.split("."),u.length>1&&(i=u.pop(),o=u.join(".")),b(o,{lang:"fr"})+"."+i),"Content-Type":r.type})});case 5:if(201!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",a.headers.get("Location"));case 8:case"end":return e.stop()}var o,i,u}),e)})));return function(r,t){return e.apply(this,arguments)}}(),ye=function(){var e=E(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(r);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(n=e.t1.value,!r.hasOwnProperty(n)){e.next=20;break}if(!Array.isArray(r[n])){e.next=16;break}a=0;case 6:if(!(a<r[n].length)){e.next=14;break}if(!de(r[n][a])){e.next=11;break}return e.next=10,ve(r[n][a].rawFile,t);case 10:r[n][a]=e.sent;case 11:a++,e.next=6;break;case 14:e.next=20;break;case 16:if(!de(r[n])){e.next=20;break}return e.next=19,ve(r[n].rawFile,t);case 19:r[n]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),me=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,c,s,f,l,p,d,h,v,y,m,g,b;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.dataServers,u=e.resources,c=e.httpClient,s=e.jsonContext,f=u[t],l=new Headers,null!==(a=f.fieldsMapping)&&void 0!==a&&a.title&&(Array.isArray(f.fieldsMapping.title)?l.set("Slug",f.fieldsMapping.title.map((function(e){return n.data[e]})).join(" ")):l.set("Slug",n.data[f.fieldsMapping.title])),null===(o=f.create)||void 0===o||!o.container){r.next=10;break}d=Object.keys(f.create.container)[0],p=te(i[d].baseUrl,Object.values(f.create.container)[0]),r.next=20;break;case 10:if(d=(null===(h=f.create)||void 0===h?void 0:h.server)||Object.keys(e.dataServers).find((function(r){return!0===e.dataServers[r].default}))){r.next=13;break}throw new Error("You must define a server for the creation, or a container, or a default server");case 13:if(v=oe(f.types,[d],i),(y=Object.keys(v))&&0!==y.length){r.next=17;break}throw new Error("No container with types ".concat(JSON.stringify(f.types)," found on server ").concat(d));case 17:if(!(y.length>1||v[y[0]].length>1)){r.next=19;break}throw new Error("More than one container detected with types ".concat(JSON.stringify(f.types)," on server ").concat(d));case 19:p=v[y[0]][0];case 20:return r.next=22,ye(n.data,e);case 22:return n.data=r.sent,r.next=25,c(p,{method:"POST",headers:l,body:JSON.stringify(S({"@context":s,"@type":f.types},n.data)),noToken:!0!==i[d].authServer});case 25:return m=r.sent,g=m.headers,b=g.get("Location"),r.next=30,pe(e)(t,{id:b});case 30:return r.abrupt("return",r.sent);case 31:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},ge=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=fe(n.id,a),r.next=4,o(n.id,{method:"DELETE",noToken:!i||!0!==a[i].authServer});case 4:return r.abrupt("return",{data:{id:n.id}});case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},be=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.httpClient,o=[],i=I(n.ids),r.prev=3,i.s();case 5:if((u=i.n()).done){r.next=17;break}return c=u.value,r.prev=7,r.next=10,a(c,{method:"DELETE"});case 10:o.push(c),r.next=15;break;case 13:r.prev=13,r.t0=r.catch(7);case 15:r.next=5;break;case 17:r.next=22;break;case 19:r.prev=19,r.t1=r.catch(3),i.e(r.t1);case 22:return r.prev=22,i.f(),r.finish(22);case 25:return r.abrupt("return",{data:o});case 26:case"end":return r.stop()}}),r,null,[[3,19,22,25],[7,13]])})));return function(e,t){return r.apply(this,arguments)}}()},we=function(e){return function(){return e.dataServers}},xe=function(e){return function(){return e.resources}},ke=function(){var e=E(regeneratorRuntime.mark((function e(r,t,n,a){var o,i,u,c,s,f,l,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.dataServers,i=a.httpClient,u=a.jsonContext,c=Object.keys(r).reduce((function(e,t){return S(S({},e),Object.fromEntries(r[t].map((function(e){return[e,t]}))))}),{}),s=Object.keys(c).map((function(e){return i(e,{noToken:!c[e]||!0!==o[c[e]].authServer}).then((function(e){var r=e.json;return r["@context"]!==u?g.compact(r,u):r})).then((function(r){if(t="ldp:Container",a=(n=r).type||n["@type"],Array.isArray(a)?a.includes(t):a===t)return r["ldp:contains"];throw new Error(e+" is not a LDP container");var t,n,a}))})),e.next=5,Promise.all(s);case 5:if(0!==(f=e.sent).length){e.next=10;break}return e.abrupt("return",{data:[],total:0});case 10:return f=(l=[].concat).apply.apply(l,T(f)),p=f.map((function(e){return e.id=e.id||e["@id"],e})),n.filter&&(n.filter.a&&(n.filter.type=n.filter.a,delete n.filter.a),n.filter.q&&delete n.filter.q,Object.keys(n.filter).length>0&&(p=p.filter((function(e){return Object.entries(n.filter).some((function(r){var t=P(r,2),n=t[0],a=t[1];return Array.isArray(e[n])?e[n].includes(a):e[n]===a}))})))),n.sort&&(p=p.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(p=p.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:p,total:f.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),Se=function(e){var r,t={};if(e){var n,a=I(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;r=o.includes("/")?o.split("/").reverse():[o],t=S(S({},t),r.reduce((function(e,r){return R({},r,S({"@embed":"@last"},e))}),{}))}}catch(e){a.e(e)}finally{a.f()}return t}},je=re((function(e,r){var t;e.exports=t=t||function(e,r){var t;if("undefined"!=typeof window&&window.crypto&&(t=window.crypto),"undefined"!=typeof self&&self.crypto&&(t=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(t=globalThis.crypto),!t&&"undefined"!=typeof window&&window.msCrypto&&(t=window.msCrypto),!t&&void 0!==ee&&ee.crypto&&(t=ee.crypto),!t)try{t=w}catch(e){}var n=function(){if(t){if("function"==typeof t.getRandomValues)try{return t.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof t.randomBytes)try{return t.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function e(){}return function(r){var t;return e.prototype=r,t=new e,e.prototype=null,t}}(),o={},i=o.lib={},u=i.Base={extend:function(e){var r=a(this);return e&&r.mixIn(e),r.hasOwnProperty("init")&&this.init!==r.init||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},c=i.WordArray=u.extend({init:function(e,r){e=this.words=e||[],this.sigBytes=null!=r?r:4*e.length},toString:function(e){return(e||f).stringify(this)},concat:function(e){var r=this.words,t=e.words,n=this.sigBytes,a=e.sigBytes;if(this.clamp(),n%4)for(var o=0;o<a;o++){var i=t[o>>>2]>>>24-o%4*8&255;r[n+o>>>2]|=i<<24-(n+o)%4*8}else for(var u=0;u<a;u+=4)r[n+u>>>2]=t[u>>>2];return this.sigBytes+=a,this},clamp:function(){var r=this.words,t=this.sigBytes;r[t>>>2]&=4294967295<<32-t%4*8,r.length=e.ceil(t/4)},clone:function(){var e=u.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var r=[],t=0;t<e;t+=4)r.push(n());return new c.init(r,e)}}),s=o.enc={},f=s.Hex={stringify:function(e){for(var r=e.words,t=e.sigBytes,n=[],a=0;a<t;a++){var o=r[a>>>2]>>>24-a%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(e){for(var r=e.length,t=[],n=0;n<r;n+=2)t[n>>>3]|=parseInt(e.substr(n,2),16)<<24-n%8*4;return new c.init(t,r/2)}},l=s.Latin1={stringify:function(e){for(var r=e.words,t=e.sigBytes,n=[],a=0;a<t;a++){var o=r[a>>>2]>>>24-a%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(e){for(var r=e.length,t=[],n=0;n<r;n++)t[n>>>2]|=(255&e.charCodeAt(n))<<24-n%4*8;return new c.init(t,r)}},p=s.Utf8={stringify:function(e){try{return decodeURIComponent(escape(l.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return l.parse(unescape(encodeURIComponent(e)))}},d=i.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=p.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(r){var t,n=this._data,a=n.words,o=n.sigBytes,i=this.blockSize,u=o/(4*i),s=(u=r?e.ceil(u):e.max((0|u)-this._minBufferSize,0))*i,f=e.min(4*s,o);if(s){for(var l=0;l<s;l+=i)this._doProcessBlock(a,l);t=a.splice(0,s),n.sigBytes-=f}return new c.init(t,f)},clone:function(){var e=u.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});i.Hasher=d.extend({cfg:u.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(r,t){return new e.init(t).finalize(r)}},_createHmacHelper:function(e){return function(r,t){return new h.HMAC.init(e,t).finalize(r)}}});var h=o.algo={};return o}(Math)})),Oe=re((function(e,r){var t;e.exports=(t=je,function(e){var r=t,n=r.lib,a=n.WordArray,o=n.Hasher,i=r.algo,u=[];!function(){for(var r=0;r<64;r++)u[r]=4294967296*e.abs(e.sin(r+1))|0}();var c=i.MD5=o.extend({_doReset:function(){this._hash=new a.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,r){for(var t=0;t<16;t++){var n=r+t,a=e[n];e[n]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}var o=this._hash.words,i=e[r+0],c=e[r+1],d=e[r+2],h=e[r+3],v=e[r+4],y=e[r+5],m=e[r+6],g=e[r+7],b=e[r+8],w=e[r+9],x=e[r+10],k=e[r+11],S=e[r+12],j=e[r+13],O=e[r+14],E=e[r+15],R=o[0],A=o[1],C=o[2],P=o[3];R=s(R,A,C,P,i,7,u[0]),P=s(P,R,A,C,c,12,u[1]),C=s(C,P,R,A,d,17,u[2]),A=s(A,C,P,R,h,22,u[3]),R=s(R,A,C,P,v,7,u[4]),P=s(P,R,A,C,y,12,u[5]),C=s(C,P,R,A,m,17,u[6]),A=s(A,C,P,R,g,22,u[7]),R=s(R,A,C,P,b,7,u[8]),P=s(P,R,A,C,w,12,u[9]),C=s(C,P,R,A,x,17,u[10]),A=s(A,C,P,R,k,22,u[11]),R=s(R,A,C,P,S,7,u[12]),P=s(P,R,A,C,j,12,u[13]),C=s(C,P,R,A,O,17,u[14]),R=f(R,A=s(A,C,P,R,E,22,u[15]),C,P,c,5,u[16]),P=f(P,R,A,C,m,9,u[17]),C=f(C,P,R,A,k,14,u[18]),A=f(A,C,P,R,i,20,u[19]),R=f(R,A,C,P,y,5,u[20]),P=f(P,R,A,C,x,9,u[21]),C=f(C,P,R,A,E,14,u[22]),A=f(A,C,P,R,v,20,u[23]),R=f(R,A,C,P,w,5,u[24]),P=f(P,R,A,C,O,9,u[25]),C=f(C,P,R,A,h,14,u[26]),A=f(A,C,P,R,b,20,u[27]),R=f(R,A,C,P,j,5,u[28]),P=f(P,R,A,C,d,9,u[29]),C=f(C,P,R,A,g,14,u[30]),R=l(R,A=f(A,C,P,R,S,20,u[31]),C,P,y,4,u[32]),P=l(P,R,A,C,b,11,u[33]),C=l(C,P,R,A,k,16,u[34]),A=l(A,C,P,R,O,23,u[35]),R=l(R,A,C,P,c,4,u[36]),P=l(P,R,A,C,v,11,u[37]),C=l(C,P,R,A,g,16,u[38]),A=l(A,C,P,R,x,23,u[39]),R=l(R,A,C,P,j,4,u[40]),P=l(P,R,A,C,i,11,u[41]),C=l(C,P,R,A,h,16,u[42]),A=l(A,C,P,R,m,23,u[43]),R=l(R,A,C,P,w,4,u[44]),P=l(P,R,A,C,S,11,u[45]),C=l(C,P,R,A,E,16,u[46]),R=p(R,A=l(A,C,P,R,d,23,u[47]),C,P,i,6,u[48]),P=p(P,R,A,C,g,10,u[49]),C=p(C,P,R,A,O,15,u[50]),A=p(A,C,P,R,y,21,u[51]),R=p(R,A,C,P,S,6,u[52]),P=p(P,R,A,C,h,10,u[53]),C=p(C,P,R,A,x,15,u[54]),A=p(A,C,P,R,c,21,u[55]),R=p(R,A,C,P,b,6,u[56]),P=p(P,R,A,C,E,10,u[57]),C=p(C,P,R,A,m,15,u[58]),A=p(A,C,P,R,j,21,u[59]),R=p(R,A,C,P,v,6,u[60]),P=p(P,R,A,C,k,10,u[61]),C=p(C,P,R,A,d,15,u[62]),A=p(A,C,P,R,w,21,u[63]),o[0]=o[0]+R|0,o[1]=o[1]+A|0,o[2]=o[2]+C|0,o[3]=o[3]+P|0},_doFinalize:function(){var r=this._data,t=r.words,n=8*this._nDataBytes,a=8*r.sigBytes;t[a>>>5]|=128<<24-a%32;var o=e.floor(n/4294967296),i=n;t[15+(a+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),t[14+(a+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),r.sigBytes=4*(t.length+1),this._process();for(var u=this._hash,c=u.words,s=0;s<4;s++){var f=c[s];c[s]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return u},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});function s(e,r,t,n,a,o,i){var u=e+(r&t|~r&n)+a+i;return(u<<o|u>>>32-o)+r}function f(e,r,t,n,a,o,i){var u=e+(r&n|t&~n)+a+i;return(u<<o|u>>>32-o)+r}function l(e,r,t,n,a,o,i){var u=e+(r^t^n)+a+i;return(u<<o|u>>>32-o)+r}function p(e,r,t,n,a,o,i){var u=e+(t^(r|~n))+a+i;return(u<<o|u>>>32-o)+r}r.MD5=o._createHelper(c),r.HmacMD5=o._createHmacHelper(c)}(Math),t.MD5)})),Ee=x.namedNode,Re=x.quad,Ae=x.variable,Ce=function(e){return Oe(e)},Pe=function(e){return e.map((function(r){var t=r.query,n=e.find((function(e){return r.parentNode===e.node}));return void 0!==n&&(t=t.concat(n.query[0])),{type:"bgp",triples:t}}))},Te=function(e,r){var t=[],n=function(e){var r=[];if(e){var t,n=I(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a.includes("/"))for(var o=a.split("/"),i=1;i<=o.length;i++)r.push(o.slice(0,i).join("/"));else r.push(a)}}catch(e){n.e(e)}finally{n.f()}}return r}(e);if(n&&r&&r.length>0){var a,o=I(n);try{var i=function(){var e=a.value,n=function(e){return e.includes("/")&&e.split("/")[0]}(e),o=function(e){return e.includes("/")?e.split("/")[1]:e}(e),i=Ce(e),u=n?Ce(n):"1",c=o.split(":")[0],s=o.split(":")[1],f=r.find((function(e){return e.prefix===c})),l=[Re(Ae("s"+u),Ee(f.url+s),Ae("s"+i)),Re(Ae("s"+i),Ae("p"+i),Ae("o"+i))];t.push({node:e,parentNode:n,query:l,filter:""})};for(o.s();!(a=o.n()).done;)i()}catch(e){o.e(e)}finally{o.f()}var u=[{type:"bgp",triples:[Re(Ae("s1"),Ae("p1"),Ae("o1"))]}];return{construct:t.length>0?t.map((function(e){return e.query})).reduce((function(e,r){return e.concat(r)})):null,where:{type:"union",patterns:u.concat(Pe(t))}}}return{construct:"",where:""}},_e=x.literal,Ue=x.namedNode,Ie=x.triple,Me=x.variable,qe=new(0,require("sparqljs").Generator)({}),Be=["q","sparqlWhere","dereference","_servers"],De=function(e){var r=e.containers,t=e.params.filter,n=e.dereference,a=e.ontologies,o={queryType:"CONSTRUCT",template:[Ie(Me("s1"),Me("p1"),Me("o1"))],where:[{type:"filter",expression:{type:"operation",operator:"in",args:[Me("containerUri"),r.map((function(e){return Ue(e)}))]}},{type:"bgp",triples:[Ie(Me("containerUri"),Ue("http://www.w3.org/ns/ldp#contains"),Me("s1"))]},{type:"filter",expression:{type:"operation",operator:"isiri",args:[Me("s1")]}}],type:"query",prefixes:Object.fromEntries(a.map((function(e){return[e.prefix,e.url]})))};if(t&&Object.keys(t).length>0){var i=t.sparqlWhere&&Object.keys(t.sparqlWhere).length>0,u=t.q&&t.q.length>0;i&&[].concat(t.sparqlWhere).forEach((function(e){o.where.push(e)})),u&&o.where.push({type:"group",patterns:[{queryType:"SELECT",variables:[Me("s1")],where:[{type:"bgp",triples:[Ie(Me("s1"),Me("p1"),Me("o1"))]},{type:"filter",expression:{type:"operation",operator:"isliteral",args:[Me("o1")]}},{type:"filter",expression:{type:"operation",operator:"regex",args:[{type:"operation",operator:"lcase",args:[{type:"operation",operator:"str",args:[Me("o1")]}]},_e(t.q.toLowerCase(),"",Ue("http://www.w3.org/2001/XMLSchema#string"))]}}],type:"query"}]}),Object.keys(t).forEach((function(e){if(!Be.includes(e)){var r="a"===e?t[e]:e,n=r.split(":")[0],i=r.split(":")[1],u=a.find((function(e){return e.prefix===n})),c="a"===e?"http://www.w3.org/1999/02/22-rdf-syntax-ns#type":u.url+i,s="a"===e?u.url+i:t[e];o.where.unshift({type:"bgp",triples:[Ie(Me("s1"),Ue(c),Ue(s))]})}}))}var c=Te(n,a);return c&&c.construct&&(o.where=o.where.concat(c.where),o.template=o.template.concat(c.construct)),o.where.push({type:"bgp",triples:[Ie(Me("s1"),Me("p1"),Me("o1"))]}),qe.stringify(o)},Le=function(e,r){switch(j(e)){case"string":return e.localeCompare(r);case"number":case"bigint":return e-r;default:return 0}},Fe=function(){var e=E(regeneratorRuntime.mark((function e(r,t,n,a){var o,i,u,c,s,f,l,p,d,h,v,y,m,b;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.dataServers,s=a.resources,f=a.httpClient,l=a.jsonContext,p=a.ontologies,d=s[t],h=!1!==(null===(o=d.list)||void 0===o?void 0:o.explicitEmbedOnFraming)?S({"@context":l,"@type":d.types,"@embed":"@never"},Se((null===(i=n.filter)||void 0===i?void 0:i.dereference)||(null===(u=d.list)||void 0===u?void 0:u.dereference))):{"@context":l,"@type":d.types},v=Object.keys(r).map((function(e){return new Promise((function(t,a){var o,i,u,s=De({containers:r[e],params:S(S({},n),{},{filter:S(S({},null===(o=d.list)||void 0===o?void 0:o.filter),n.filter)}),dereference:(null===(i=n.filter)||void 0===i?void 0:i.dereference)||(null===(u=d.list)||void 0===u?void 0:u.dereference),ontologies:p});f(c[e].sparqlEndpoint,{method:"POST",body:s,noToken:!0!==c[e].authServer}).then((function(e){var r=e.json;return g.frame(r,h,{omitGraph:!1})})).then((function(e){t(e["@graph"]||[])})).catch((function(e){return a(e)}))}))})),e.next=6,Promise.all(v);case 6:if(0!==(y=e.sent).length){e.next=11;break}return e.abrupt("return",{data:[],total:0});case 11:return y=(m=[].concat).apply.apply(m,T(y)),b=y.map((function(e){return e.id=e.id||e["@id"],e})),n.sort&&(b=b.sort((function(e,r){return void 0!==e[n.sort.field]&&void 0!==r[n.sort.field]?"ASC"===n.sort.order?Le(e[n.sort.field],r[n.sort.field]):Le(r[n.sort.field],e[n.sort.field]):0}))),n.pagination&&(b=b.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:b,total:y.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),He=function(e,r){var t={};return Object.keys(e).forEach((function(n){if(!r[n])throw new Error("No server found with key "+n);t[n]=[],e[n].forEach((function(e){t[n].push(te(r[n].baseUrl,e))}))})),t},Ne=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t){var n,a,o,i,u,c,s,f,l,p,d,h=arguments;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=h.length>1&&void 0!==h[1]?h[1]:{},u=e.dataServers,c=e.resources,s=c[t]){r.next=5;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 5:if(null!==(n=i.filter)&&void 0!==n&&n._servers||null===(a=s.list)||void 0===a||!a.containers){r.next=11;break}if(!Array.isArray(null===(l=s.list)||void 0===l?void 0:l.containers)){r.next=8;break}throw new Error("The list.containers property of ".concat(t," dataModel must be of type object ({ serverKey: [containerUri] })"));case 8:f=He(s.list.containers,u),r.next=12;break;case 11:f=oe(s.types,(null===(p=i.filter)||void 0===p?void 0:p._servers)||(null===(d=s.list)||void 0===d?void 0:d.servers),u);case 12:if(null===(o=s.list)||void 0===o||!o.fetchContainer){r.next=16;break}return r.abrupt("return",ke(f,t,i,e));case 16:return r.abrupt("return",Fe(f,t,i,e));case 17:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},ze=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,c,s,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.returnFailedResources,o=[],i=I(n.ids),r.prev=3,i.s();case 5:if((u=i.n()).done){r.next=21;break}return c="object"===j(c=u.value)?c["@id"]:c,r.prev=8,r.next=11,pe(e)(t,{id:c});case 11:s=r.sent,f=s.data,o.push(f),r.next=19;break;case 16:r.prev=16,r.t0=r.catch(8),a&&o.push({id:c});case 19:r.next=5;break;case 21:r.next=26;break;case 23:r.prev=23,r.t1=r.catch(3),i.e(r.t1);case 26:return r.prev=26,i.f(),r.finish(26);case 29:return r.abrupt("return",{data:o});case 30:case"end":return r.stop()}}),r,null,[[3,23,26,29],[8,16]])})));return function(e,t){return r.apply(this,arguments)}}()},We=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.filter=S(S({},n.filter),{},R({},n.target,n.id)),delete n.target,r.next=4,Ne(e)(t,n);case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},$e=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=e.jsonContext,u=fe(n.id,a),r.next=4,ye(n.data,e);case 4:return n.data=r.sent,r.next=7,o(n.id,{method:"PUT",body:JSON.stringify(S({"@context":i},n.data)),noToken:!u||!0!==a[u].authServer});case 7:return r.abrupt("return",{data:n.data});case 8:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()};function Je(e){this.message=e}Je.prototype=new Error,Je.prototype.name="InvalidCharacterError";var Ye="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new Je("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,a=0,o=0,i="";n=r.charAt(o++);~n&&(t=a%4?64*t+n:n,a++%4)?i+=String.fromCharCode(255&t>>(-2*a&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return i};function Ge(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(Ye(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(r)}catch(e){return Ye(r)}}function Ve(e){this.message=e}function Ke(e,r){if("string"!=typeof e)throw new Ve("Invalid token specified");var t=!0===(r=r||{}).header?0:1;try{return JSON.parse(Ge(e.split(".")[t]))}catch(e){throw new Ve("Invalid token specified: "+e.message)}}Ve.prototype=new Error,Ve.prototype.name="InvalidTokenError";var Xe=function(){var e=E(regeneratorRuntime.mark((function e(r){var t,n,a,o,i,u,c,s,f,l,p,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.dataServers,n=r.httpClient,a=localStorage.getItem("token"),o=ne("pod",t),i=ne("authServer",t),!a){e.next=24;break}return u=Ke(a),c=u.webId,e.prev=6,e.next=9,n(c);case 9:f=e.sent,l=f.json,s=l,e.next=20;break;case 14:return e.prev=14,e.t0=e.catch(6),console.error(e.t0),localStorage.removeItem("token"),window.location.reload(),e.abrupt("return");case 20:o&&(r.dataServers[o].name="My Pod",r.dataServers[o].baseUrl=te(c,"data"),r.dataServers[o].sparqlEndpoint=(null===(p=s.endpoints)||void 0===p?void 0:p["void:sparqlEndpoint"])||te(c,"sparql")),i&&(r.dataServers[i].proxyUrl=null===(d=s.endpoints)||void 0===d?void 0:d.proxyUrl),e.next=25;break;case 24:o&&delete r.dataServers[o];case 25:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(r){return e.apply(this,arguments)}}(),Ze=function(){var e=E(regeneratorRuntime.mark((function e(r){var t,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.values(r.dataServers).filter((function(e){return!0!==e.pod})).map((function(e){return r.httpClient(new URL("/.well-known/void",e.baseUrl)).then((function(e){return{data:e.json}})).catch((function(e){if(404===e.status)return{error:e};throw e}))})),e.prev=1,e.next=4,Promise.all(t);case 4:n=e.sent,a=I(n);try{for(a.s();!(o=a.n()).done;)o.value.data}catch(e){a.e(e)}finally{a.f()}e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),Qe=function(e){if(!ne("default",e.dataServers))throw new Error("You must define a default server in your dataServers config");e.jsonContext||(e.jsonContext=Object.fromEntries(e.ontologies.map((function(e){return[e.prefix,e.url]})))),e.returnFailedResources||(e.returnFailedResources=!1);var r=Xe(e),t=Ze(e),n=function(e){return E(regeneratorRuntime.mark((function n(){var a=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r;case 2:return n.next=4,t;case 4:return n.next=6,e.apply(void 0,a);case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))};return{getList:n(Ne(e)),getMany:n(ze(e)),getManyReference:n(We(e)),getOne:n(pe(e)),create:n(me(e)),update:n($e(e)),updateMany:function(){throw new Error("updateMany is not implemented yet")},delete:n(ge(e)),deleteMany:n(be(e)),getDataModels:n(xe(e)),getDataServers:n(we(e))}},er=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.headers||(r.headers=new Headers),r.method){case"POST":case"PATCH":case"PUT":r.headers.has("Accept")||r.headers.set("Accept","application/ld+json"),r.headers.has("Content-Type")||r.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:r.headers.has("Accept")||r.headers.set("Accept","application/ld+json")}if(!r.noToken){var t=localStorage.getItem("token");t&&r.headers.set("Authorization","Bearer ".concat(t))}return y.fetchJson(e,r)};export{$ as DateTimeInput,N as FilterHandler,W as GroupedReferenceHandler,q as ImageField,D as ReferenceArrayField,J as ReferenceArrayInput,F as ReferenceField,Y as ReferenceInput,X as ReificationArrayInput,D as UriArrayField,J as UriArrayInput,Te as buildDereferenceQuery,De as buildSparqlQuery,Qe as dataProvider,er as httpClient,ie as useContainers,ce as useCreateContainer,Z as useDataModel,se as useDataModels,Q as useDataServers};
//# sourceMappingURL=index.es.js.map
