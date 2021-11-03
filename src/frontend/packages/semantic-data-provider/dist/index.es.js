import e,{useState as r,useEffect as t}from"react";import{ImageField as n,ReferenceArrayField as a,ReferenceField as o,useQueryWithStore as i,DateTimeInput as c,useResourceContext as u,ReferenceArrayInput as s,ReferenceInput as l,ArrayInput as f,SimpleFormIterator as p,TextInput as d,fetchUtils as v}from"react-admin";import{makeStyles as h}from"@material-ui/core/styles";import y from"jsonld";import m from"speakingurl";function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,r,t,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,a)}function w(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){g(o,n,a,i,c,"next",e)}function c(e){g(o,n,a,i,c,"throw",e)}i(void 0)}))}}function x(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function k(){return(k=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){x(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function S(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function E(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||C(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,r){if(e){if("string"==typeof e)return A(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?A(e,r):void 0}}function A(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function T(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=C(e))){var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw a}}}}var P=function(r){var t=r.record,a=r.source,o=S(r,["record","source"]);return"string"==typeof t&&(t=x({},a,t)),e.createElement(n,k({record:t,source:a},o))},I=function(r){var t=r.record,n=r.source,o=S(r,["record","source"]);return(null==t?void 0:t[n])&&(Array.isArray(t[n])||(t[n]=[t[n]]),t[n]=t[n].map((function(e){return e["@id"]||e.id||e}))),e.createElement(a,k({record:t,source:n},o))};I.defaultProps={addLabel:!0};var L=function(r){var t=r.record,n=r.source,a=S(r,["record","source"]);return t[n]&&"object"===b(t[n])&&(t[n]=t[n]["@id"]||t[n].id),e.createElement(o,k({record:t,source:n},a))};L.defaultProps={addLabel:!0};var F=function(n){var a=n.children,o=n.record,i=n.filter,c=n.source,u=S(n,["children","record","filter","source"]),s=E(r(),2),l=s[0],f=s[1];return t((function(){if(o&&c&&Array.isArray(null==o?void 0:o[c])){var e=null==o?void 0:o[c].filter((function(e){var r=!0;for(var t in i){var n=e[t];Array.isArray(n)?n.includes(i[t])||(r=!1):n!==i[t]&&(r=!1)}return r})),r=O({},o);r[c]=e.length>0?e:void 0,f(r)}}),[o,c,i]),e.createElement(e.Fragment,null,e.Children.map(a,(function(r,t){return e.cloneElement(r,O(O({},u),{},{record:l,addLabel:!0,source:c}))})))},U=function(r){var t=r.children,n=r.groupReference,a=r.groupLabel,o=r.groupHeader,c=r.filterProperty,u=S(r,["children","groupReference","groupLabel","groupHeader","filterProperty"]),s=i({type:"getList",resource:n,payload:{}}).data;return e.createElement(e.Fragment,null,null==s?void 0:s.map((function(r,n){var i={};return i[c]=r.id,e.createElement(e.Fragment,null,o&&o(O(O({},u),{},{group:r})),e.createElement(F,k({},u,{filter:i,label:r[a]}),t))})))},N=function(r){return e.createElement(c,k({},r,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},M=function(r){var t=u({});return e.createElement(s,k({},r,{resource:t,format:function(e){return e?(Array.isArray(e)||(e=[e]),r.format&&(e=r.format(e)),e.map((function(e){return"object"===b(e)?e.id||e["@id"]:e}))):e}}))},q=function(r){var t=u({});return e.createElement(l,k({},r,{resource:t,format:function(e){return e?(r.format&&(e=r.format(e)),"object"===b(e)?e.id||e["@id"]:e):e}}))},D=h({form:{display:"flex"},input:{paddingRight:"20px"}}),H=h({root:{display:"none"}}),$=function(r){var t=r.reificationClass,n=(r.children,S(r,["reificationClass","children"])),a=D(),o=H();return e.createElement(f,n,e.createElement(p,{classes:{form:a.form}},e.Children.map(r.children,(function(r,t){return e.cloneElement(r,{className:a.input})})),e.createElement(d,{className:o.root,source:"type",initialValue:t})))},J=function(e,r){return Object.keys(r).find((function(t){return e.startsWith(r[t].baseUrl)}))},W=function(){var e=w(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,c,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dataServers,a=t.httpClient,o=t.jsonContext,i=J(r,n),e.next=4,a(r,{noToken:!i||!0!==n[i].authServer});case 4:if(c=e.sent,(u=c.json).id=u.id||u["@id"],u["@context"]===o){e.next=11;break}return e.next=10,y.compact(u,o);case 10:u=e.sent;case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),G=function(e){return function(){var r=w(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,u,s,l,f,p,d,v,h,y,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.resources,c=i[t]){r.next=4;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 4:return r.next=6,W(n.id,e);case 6:if(u=r.sent,null===(a=c.list)||void 0===a?void 0:a.forceArray){l=T(null===(s=c.list)||void 0===s?void 0:s.forceArray);try{for(l.s();!(f=l.n()).done;)p=f.value,u[p]&&!Array.isArray(u[p])&&(u[p]=[u[p]])}catch(e){l.e(e)}finally{l.f()}}if(!(null===(o=c.list)||void 0===o?void 0:o.dereference)){r.next=35;break}v=T(null===(d=c.list)||void 0===d?void 0:d.dereference),r.prev=10,v.s();case 12:if((h=v.n()).done){r.next=27;break}if(y=h.value,!u[y]||"string"!=typeof u[y]||!u[y].startsWith("http")){r.next=25;break}return r.prev=15,r.next=18,W(u[y],e);case 18:delete(m=r.sent)["@context"],u[y]=m,r.next=25;break;case 23:r.prev=23,r.t0=r.catch(15);case 25:r.next=12;break;case 27:r.next=32;break;case 29:r.prev=29,r.t1=r.catch(10),v.e(r.t1);case 32:return r.prev=32,v.f(),r.finish(32);case 35:return r.abrupt("return",{data:u});case 36:case"end":return r.stop()}}),r,null,[[10,29,32,35],[15,23]])})));return function(e,t){return r.apply(this,arguments)}}()},X="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Y=function(e,r){return e(r={exports:{}},r.exports),r.exports}((function(e){var r,t;r=X,t=function(){function e(e){var r=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var t=e.shift();e[0]=t+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var a=e[n];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(n>0&&(a=a.replace(/^[\/]+/,"")),a=n<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),r.push(a))}var o=r.join("/"),i=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=t():r.urljoin=t()})),z=function(e,r,t){var n={},a=[];return Object.keys(t).forEach((function(o){Object.keys(t[o].containers).forEach((function(i){r&&!(Array.isArray(r)?r.includes(i):r===i)||Object.keys(t[o].containers[i]).forEach((function(r){e.includes(r)&&t[o].containers[i][r].map((function(e){var r=Y(t[i].baseUrl,e);a.includes(r)||(a.push(r),n[o]||(n[o]=[]),n[o].push(r))}))}))}))})),n},B=function(){var e=w(regeneratorRuntime.mark((function e(r,t,n,a){var o,i,c,u,s,l,f,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.dataServers,i=a.httpClient,c=a.jsonContext,u=Object.keys(r).reduce((function(e,t){return O(O({},e),Object.fromEntries(r[t].map((function(e){return[e,t]}))))}),{}),s=Object.keys(u).map((function(e){return i(e,{noToken:!u[e]||!0!==o[u[e]].authServer}).then((function(e){var r=e.json;return r["@context"]!==c?y.compact(r,c):r})).then((function(r){if(t="ldp:Container",a=(n=r).type||n["@type"],Array.isArray(a)?a.includes(t):a===t)return r["ldp:contains"];throw new Error(e+" is not a LDP container");var t,n,a}))})),e.next=5,Promise.all(s);case 5:if(0!==(l=e.sent).length){e.next=10;break}return e.abrupt("return",{data:[],total:0});case 10:return l=(f=[].concat).apply.apply(f,R(l)),p=l.map((function(e){return e.id=e.id||e["@id"],e})),n.filter&&(n.filter.a&&(n.filter.type=n.filter.a,delete n.filter.a),n.filter.q&&delete n.filter.q,Object.keys(n.filter).length>0&&(p=p.filter((function(e){return Object.entries(n.filter).some((function(r){var t=E(r,2),n=t[0],a=t[1];return Array.isArray(e[n])?e[n].includes(a):e[n]===a}))})))),n.sort&&(p=p.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(p=p.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:p,total:l.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),V=function(e){var r,t={};if(e){var n,a=T(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;r=o.includes("/")?o.split("/").reverse():[o],t=O(O({},t),r.reduce((function(e,r){return x({},r,O({"@embed":"@last"},e))}),{}))}}catch(e){a.e(e)}finally{a.f()}return t}},Z=function(e){return e.split(":").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")},K=function(e){var r=e.containers,t=e.params.filter,n=e.dereference,a=e.ontologies,o="";t&&(t.q&&t.q.length>0&&(o+='\n      {\n        SELECT ?s1\n        WHERE {\n          ?s1 ?p1 ?o1 .\n          FILTER regex(lcase(str(?o1)), "'.concat(t.q.toLowerCase(),'")\n          FILTER NOT EXISTS {?s1 a ?o1}\n        }\n      }\n      '),delete t.q),Object.keys(t).forEach((function(e){if(t[e]){var r=t[e].startsWith("http")?"<".concat(t[e],">"):t[e];o+="?s1 ".concat(e," ").concat(r," .")}})));var i=function(e){var r=[];if(e)for(var t=e.reduce((function(e,r){return function e(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"root";if(t.includes("/")){var a=t.split(/\/(.+)/);r[a[0]]=n,e(r,a[1],a[0])}else r[t]=n;return r}(e,r)}),{}),n=0,a=Object.entries(t);n<a.length;n++){var o=E(a[n],2),i=o[0],c=o[1],u=Z(i),s="root"===c?"1":Z(c),l="root"===c?i:c;r[l]||(r[l]=[]),r[l].push("\n        ?s".concat(s," ").concat(i," ?s").concat(u," .\n        ?s").concat(u," ?p").concat(u," ?o").concat(u," .\n      "))}return{construct:Object.values(r).map((function(e){return Object.values(e).join("\n")})).join("\n"),where:Object.values(r).map((function(e){return"OPTIONAL { ".concat(Object.values(e).join("\n")," }")})).join("\n")}}(n);return"\n    ".concat(function(e){return e.map((function(e){return"PREFIX ".concat(e.prefix,": <").concat(e.url,">")})).join("\n")}(a),"\n    CONSTRUCT {\n      ?s1 ?p2 ?o2 .\n      ").concat(i.construct,"\n    }\n    WHERE {\n      ?containerUri ldp:contains ?s1 .\n      FILTER( ?containerUri IN (").concat(r.map((function(e){return"<".concat(e,">")})).join(", "),") ) .\n      FILTER( (isIRI(?s1)) ) .\n      ").concat(o,"\n      ").concat(i.where,"\n      ?s1 ?p2 ?o2 .\n    }\n  ")},Q=function(){var e=w(regeneratorRuntime.mark((function e(r,t,n,a){var o,i,c,u,s,l,f,p,d,v,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.dataServers,c=a.resources,u=a.httpClient,s=a.jsonContext,l=a.ontologies,f=c[t],p=O({"@context":s,"@type":f.types,"@embed":"@never"},V(null===(o=f.list)||void 0===o?void 0:o.dereference)),d=Object.keys(r).map((function(e){return new Promise((function(t,a){var o,c,s=K({containers:r[e],params:O(O({},n),{},{filter:O(O({},null===(o=f.list)||void 0===o?void 0:o.filter),n.filter)}),dereference:null===(c=f.list)||void 0===c?void 0:c.dereference,ontologies:l});u(i[e].sparqlEndpoint,{method:"POST",body:s,noToken:!0!==i[e].authServer}).then((function(e){var r=e.json;return y.frame(r,p,{omitGraph:!1})})).then((function(e){t(e["@graph"]||[])})).catch((function(e){return a(e)}))}))})),e.next=6,Promise.all(d);case 6:if(0!==(v=e.sent).length){e.next=11;break}return e.abrupt("return",{data:[],total:0});case 11:return v=(h=[].concat).apply.apply(h,R(v)),m=v.map((function(e){return e.id=e.id||e["@id"],e})),n.sort&&(m=m.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(m=m.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:m,total:v.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),_=function(e){return function(){var r=w(regeneratorRuntime.mark((function r(t){var n,a,o,i,c,u,s,l,f,p,d=arguments;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=d.length>1&&void 0!==d[1]?d[1]:{},c=e.dataServers,u=e.resources,s=u[t],l=(null===(n=s.list)||void 0===n?void 0:n.containers)&&(null===(a=s.list)||void 0===a?void 0:a.containers.length)>0?null===(f=s.list)||void 0===f?void 0:f.containers:z(s.types,null===(p=s.list)||void 0===p?void 0:p.servers,c),!(null===(o=s.list)||void 0===o?void 0:o.fetchContainer)){r.next=9;break}return r.abrupt("return",B(l,t,i,e));case 9:return r.abrupt("return",Q(l,t,i,e));case 10:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},ee=function(e){return function(){var r=w(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,u,s,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.returnFailedResources,o=[],i=T(n.ids),r.prev=3,i.s();case 5:if((c=i.n()).done){r.next=21;break}return u="object"===b(u=c.value)?u["@id"]:u,r.prev=8,r.next=11,G(e)(t,{id:u});case 11:s=r.sent,l=s.data,o.push(l),r.next=19;break;case 16:r.prev=16,r.t0=r.catch(8),a&&o.push({id:u});case 19:r.next=5;break;case 21:r.next=26;break;case 23:r.prev=23,r.t1=r.catch(3),i.e(r.t1);case 26:return r.prev=26,i.f(),r.finish(26);case 29:return console.log("getMany",o),r.abrupt("return",{data:o});case 31:case"end":return r.stop()}}),r,null,[[3,23,26,29],[8,16]])})));return function(e,t){return r.apply(this,arguments)}}()},re=function(e){return function(){var r=w(regeneratorRuntime.mark((function r(t,n){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.filter=O(O({},n.filter),{},x({},n.target,n.id)),delete n.target,r.next=4,_(e)(n);case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},te=function(e){return e&&e.rawFile&&e.rawFile instanceof File},ne=function(e){var r=Object.keys(e.dataServers).find((function(r){return e.dataServers[r].uploadsContainer}));if(r)return Y(e.dataServers[r].baseUrl,e.dataServers[r].uploadsContainer)},ae=function(){var e=w(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=ne(t)){e.next=3;break}throw new Error("You must define an uploadsContainer in one of the server's configuration");case 3:return e.next=5,t.httpClient(n,{method:"POST",body:r,headers:new Headers({Slug:(o=r.name,i=void 0,c=void 0,i="",c=o.split("."),c.length>1&&(i=c.pop(),o=c.join(".")),m(o,{lang:"fr"})+"."+i),"Content-Type":r.type})});case 5:if(201!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",a.headers.get("Location"));case 8:case"end":return e.stop()}var o,i,c}),e)})));return function(r,t){return e.apply(this,arguments)}}(),oe=function(){var e=w(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(r);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(n=e.t1.value,!r.hasOwnProperty(n)){e.next=20;break}if(!Array.isArray(r[n])){e.next=16;break}a=0;case 6:if(!(a<r[n].length)){e.next=14;break}if(!te(r[n][a])){e.next=11;break}return e.next=10,ae(r[n][a].rawFile,t);case 10:r[n][a]=e.sent;case 11:a++,e.next=6;break;case 14:e.next=20;break;case 16:if(!te(r[n])){e.next=20;break}return e.next=19,ae(r[n].rawFile,t);case 19:r[n]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),ie=function(e){return function(){var r=w(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,u,s,l,f,p,d,v,h,y,m,b,g,w,x;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.dataServers,c=e.resources,u=e.httpClient,s=e.jsonContext,l=c[t],f=new Headers,(null===(a=l.fieldsMapping)||void 0===a?void 0:a.title)&&f.set("Slug",n.data[null===(p=l.fieldsMapping)||void 0===p?void 0:p.title]),!(null===(o=l.create)||void 0===o?void 0:o.container)){r.next=10;break}d=null===(h=l.create)||void 0===h?void 0:h.container,v=J(d,i),r.next=20;break;case 10:if(v=(null===(y=l.create)||void 0===y?void 0:y.server)||Object.keys(e.dataServers).find((function(r){return!0===e.dataServers[r].default}))){r.next=13;break}throw new Error("You must define a server for the creation, or a container, or a default server");case 13:if(m=z(l.types,[v],i),(b=Object.keys(m))&&0!==b.length){r.next=17;break}throw new Error("No container with types ".concat(JSON.stringify(l.types)," found on server ").concat(v));case 17:if(!(b.length>1||m[b[0]].length>1)){r.next=19;break}throw new Error("More than one container detected with types ".concat(JSON.stringify(l.types)," on server ").concat(v));case 19:d=m[b[0]][0];case 20:return r.next=22,oe(n.data,e);case 22:return n.data=r.sent,r.next=25,u(d,{method:"POST",headers:f,body:JSON.stringify(O({"@context":s,"@type":l.types},n.data)),noToken:!0!==i[v].authServer});case 25:return g=r.sent,w=g.headers,x=w.get("Location"),r.next=30,G(e)(t,{id:x});case 30:return r.abrupt("return",r.sent);case 31:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},ce=function(e){return function(){var r=w(regeneratorRuntime.mark((function r(t,n){var a,o,i,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=e.jsonContext,c=J(n.id,a),r.next=4,oe(n.data,e);case 4:return n.data=r.sent,r.next=7,o(n.id,{method:"PUT",body:JSON.stringify(O({"@context":i},n.data)),noToken:!c||!0!==a[c].authServer});case 7:return r.abrupt("return",{data:n.data});case 8:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},ue=function(e){return function(){var r=w(regeneratorRuntime.mark((function r(t,n){var a,o,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=J(n.id,a),r.next=4,o(n.id,{method:"DELETE",noToken:!i||!0!==a[i].authServer});case 4:return r.abrupt("return",{data:{id:n.id}});case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},se=function(e){return function(){var r=w(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.httpClient,o=[],i=T(n.ids),r.prev=3,i.s();case 5:if((c=i.n()).done){r.next=17;break}return u=c.value,r.prev=7,r.next=10,a(u,{method:"DELETE"});case 10:o.push(u),r.next=15;break;case 13:r.prev=13,r.t0=r.catch(7);case 15:r.next=5;break;case 17:r.next=22;break;case 19:r.prev=19,r.t1=r.catch(3),i.e(r.t1);case 22:return r.prev=22,i.f(),r.finish(22);case 25:return r.abrupt("return",{data:o});case 26:case"end":return r.stop()}}),r,null,[[3,19,22,25],[7,13]])})));return function(e,t){return r.apply(this,arguments)}}()};function le(e){this.message=e}le.prototype=new Error,le.prototype.name="InvalidCharacterError";var fe="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new le("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,a=0,o=0,i="";n=r.charAt(o++);~n&&(t=a%4?64*t+n:n,a++%4)?i+=String.fromCharCode(255&t>>(-2*a&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return i};function pe(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(fe(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(r)}catch(e){return fe(r)}}function de(e){this.message=e}function ve(e,r){if("string"!=typeof e)throw new de("Invalid token specified");var t=!0===(r=r||{}).header?0:1;try{return JSON.parse(pe(e.split(".")[t]))}catch(e){throw new de("Invalid token specified: "+e.message)}}de.prototype=new Error,de.prototype.name="InvalidTokenError";var he=function(){var e=w(regeneratorRuntime.mark((function e(r){var t,n,a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=Object.keys(r.dataServers).find((function(e){return!0===r.dataServers[e].pod})))&&(n=localStorage.getItem("token"))&&(a=ve(n),o=a.webId,i=o.match(new RegExp("(.*)/.*"))[1],r.dataServers[t].name="My Pod",r.dataServers[t].baseUrl=i,r.dataServers[t].sparqlEndpoint=i+"/sparql");case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),ye=function(){var e=w(regeneratorRuntime.mark((function e(r){var t,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.values(r.dataServers).filter((function(e){return!0!==e.pod})).map((function(e){return r.httpClient(new URL("/.well-known/void",e.baseUrl)).then((function(e){return{data:e.json}})).catch((function(e){if(404===e.status)return{error:e};throw e}))})),e.next=3,Promise.all(t);case 3:n=e.sent,a=T(n);try{for(a.s();!(o=a.n()).done;)o.value.data}catch(e){a.e(e)}finally{a.f()}case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),me=function(e){e.jsonContext||(e.jsonContext=Object.fromEntries(e.ontologies.map((function(e){return[e.prefix,e.url]})))),e.returnFailedResources||(e.returnFailedResources=!1);var r=he(e),t=ye(e),n=function(e){return w(regeneratorRuntime.mark((function n(){var a=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r;case 2:return n.next=4,t;case 4:return n.next=6,e.apply(void 0,a);case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))};return{getList:n(_(e)),getOne:n(G(e)),getMany:n(ee(e)),getManyReference:n(re(e)),create:n(ie(e)),update:n(ce(e)),updateMany:function(){throw new Error("updateMany is not implemented yet")},delete:n(ue(e)),deleteMany:n(se(e))}},be=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.headers||(r.headers=new Headers),r.method){case"POST":case"PATCH":case"PUT":r.headers.has("Accept")||r.headers.set("Accept","application/ld+json"),r.headers.has("Content-Type")||r.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:r.headers.has("Accept")||r.headers.set("Accept","application/ld+json")}if(!r.noToken){var t=localStorage.getItem("token");t&&r.headers.set("Authorization","Bearer ".concat(t))}return v.fetchJson(e,r)};export{N as DateTimeInput,F as FilterHandler,U as GroupedReferenceHandler,P as ImageField,I as ReferenceArrayField,M as ReferenceArrayInput,L as ReferenceField,q as ReferenceInput,$ as ReificationArrayInput,I as UriArrayField,M as UriArrayInput,me as dataProvider,be as httpClient};
//# sourceMappingURL=index.es.js.map
