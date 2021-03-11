import e from"react";import{ImageField as r,ReferenceArrayField as t,ReferenceField as n,DateTimeInput as a,useResourceContext as o,ReferenceArrayInput as i,ReferenceInput as c,ArrayInput as u,SimpleFormIterator as s,TextInput as f,fetchUtils as p}from"react-admin";import{makeStyles as l}from"@material-ui/core/styles";import d from"jsonld";function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,r,t,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,a)}function b(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){m(o,n,a,i,c,"next",e)}function c(e){m(o,n,a,i,c,"throw",e)}i(void 0)}))}}function h(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function g(){return(g=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){h(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function x(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function j(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||O(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,r){if(e){if("string"==typeof e)return k(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?k(e,r):void 0}}function k(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function E(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=O(e))){var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw a}}}}var A=function(t){var n=t.record,a=t.source,o=x(t,["record","source"]);return"string"==typeof n&&(n=h({},a,n)),e.createElement(r,g({record:n,source:a},o))},S=function(r){var n=r.record,a=r.source,o=x(r,["record","source"]);return n[a]&&(Array.isArray(n[a])||(n[a]=[n[a]]),n[a]=n[a].map((function(e){return e["@id"]||e}))),e.createElement(t,g({record:n,source:a},o))};S.defaultProps={addLabel:!0};var R=function(r){var t=r.record,a=r.source,o=x(r,["record","source"]);return t[a]&&"object"===y(t[a])&&(t[a]=t[a]["@id"]||t[a].id),e.createElement(n,g({record:t,source:a},o))};R.defaultProps={addLabel:!0};var P=function(r){return e.createElement(a,g({},r,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},T=function(r){var t=o({});return e.createElement(i,g({},r,{resource:t,format:function(e){return e?(Array.isArray(e)||(e=[e]),r.format&&(e=r.format(e)),e.map((function(e){return"object"===y(e)?e.id||e["@id"]:e}))):e}}))},I=function(r){var t=o({});return e.createElement(c,g({},r,{resource:t,format:function(e){return e?(r.format&&(e=r.format(e)),"object"===y(e)?e.id||e["@id"]:e):e}}))},C=l({form:{display:"flex"},input:{paddingRight:"20px"}}),F=l({root:{display:"none"}}),L=function(r){var t=r.reificationClass,n=(r.children,x(r,["reificationClass","children"])),a=C(),o=F();return e.createElement(u,n,e.createElement(s,{classes:{form:a.form}},e.Children.map(r.children,(function(r,t){return e.cloneElement(r,{className:a.input})})),e.createElement(f,{className:o.root,source:"type",initialValue:t})))},U=function(e){return e.split(":").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")},D=function(e){var r=e.types,t=e.params,n=t.pagination,a=(t.sort,t.filter),o=e.dereference,i=e.ontologies,c="";a&&(a.q&&a.q.length>0&&(c+='\n      {\n        SELECT ?s1\n        WHERE {\n          ?s1 ?p1 ?o1 .\n          FILTER regex(lcase(str(?o1)), "'.concat(a.q.toLowerCase(),'")\n          FILTER NOT EXISTS {?s1 a ?o1}\n        }\n      }\n      '),delete a.q),Object.keys(a).forEach((function(e){var r=a[e].startsWith("http")?"<".concat(a[e],">"):a[e];c+="?s1 ".concat(e," ").concat(r," .")})));var u=function(e){var r=[];if(e)for(var t=e.reduce((function(e,r){return function e(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"root";if(t.includes("/")){var a=t.split(/\/(.+)/);r[a[0]]=n,e(r,a[1],a[0])}else r[t]=n;return r}(e,r)}),{}),n=0,a=Object.entries(t);n<a.length;n++){var o=j(a[n],2),i=o[0],c=o[1],u=U(i),s="root"===c?"1":U(c),f="root"===c?i:c;r[f]||(r[f]=[]),r[f].push("\n        ?s".concat(s," ").concat(i," ?s").concat(u," .\n        ?s").concat(u," ?p").concat(u," ?o").concat(u," .\n      "))}return{construct:Object.values(r).map((function(e){return Object.values(e).join("\n")})).join("\n"),where:Object.values(r).map((function(e){return"OPTIONAL { ".concat(Object.values(e).join("\n")," }")})).join("\n")}}(o);return"\n    ".concat(function(e){return e.map((function(e){return"PREFIX ".concat(e.prefix,": <").concat(e.url,">")})).join("\n")}(i),"\n    CONSTRUCT {\n      ?s1 ?p2 ?o2 .\n      ").concat(u.construct,"\n    }\n    WHERE {\n      ?s1 a ?type .\n      FILTER( ?type IN (").concat(r.join(", "),") ) .\n      FILTER( (isIRI(?s1)) ) .\n      ").concat(c,"\n      ").concat(u.where,"\n      ?s1 ?p2 ?o2 .\n    }\n    # TODO try to make pagination work in SPARQL as this doesn't work.\n    # LIMIT ").concat(n.perPage,"\n    # OFFSET ").concat((n.page-1)*n.perPage,"\n  ")},M=require("speakingurl"),N=function(e){var r={};return e.forEach((function(e){return r[e.prefix]=e.url})),r},q=function(e){return e&&e.rawFile&&e.rawFile instanceof File},H=function(e){var r,t,n,a,o,i,c=e.sparqlEndpoint,u=e.httpClient,s=e.resources,f=e.ontologies,p=e.jsonContext,l=e.uploadsContainerUri,m=function(){var e=b(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l){e.next=2;break}throw new Error("No uploadsContainerUri defined for the data provider");case 2:return e.next=4,u(l,{method:"POST",body:r,headers:new Headers({Slug:(n=r.name,a=void 0,o=void 0,a="",o=n.split("."),o.length>1&&(a=o.pop(),n=o.join(".")),M(n,{lang:"fr"})+"."+a),"Content-Type":r.type})});case 4:if(201!==(t=e.sent).status){e.next=7;break}return e.abrupt("return",t.headers.get("Location"));case 7:case"end":return e.stop()}var n,a,o}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=b(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(r);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(t=e.t1.value,!r.hasOwnProperty(t)){e.next=20;break}if(!Array.isArray(r[t])){e.next=16;break}n=0;case 6:if(!(n<r[t].length)){e.next=14;break}if(!q(r[t][n])){e.next=11;break}return e.next=10,m(r[t][n].rawFile);case 10:r[t][n]=e.sent;case 11:n++,e.next=6;break;case 14:e.next=20;break;case 16:if(!q(r[t])){e.next=20;break}return e.next=19,m(r[t].rawFile);case 19:r[t]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return{getList:(i=b(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,l,y,m,b,h,g,v,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s[r],!t.id&&!t["@id"]&&s[r].types){e.next=26;break}return n=t.id||t["@id"]||s[r].containerUri,e.next=5,u(n);case 5:if(a=e.sent,o=a.json,O="ldp:Container",E=void 0,E=(k=o).type||k["@type"],!(Array.isArray(E)?E.includes(O):E===O)){e.next=14;break}return i=o["ldp:contains"].map((function(e){return e.id=e.id||e["@id"],e})),t.filter&&(t.filter.q&&delete t.filter.q,Object.keys(t.filter).length>0&&(i=i.filter((function(e){return Object.entries(t.filter).some((function(r){var t=j(r,2),n=t[0],a=t[1];return Array.isArray(e[n])?e[n].includes(a):e[n]===a}))})))),t.pagination&&(i=i.slice((t.pagination.page-1)*t.pagination.perPage,t.pagination.page*t.pagination.perPage)),e.abrupt("return",{data:i,total:o["ldp:contains"].length});case 14:if(!o.first){e.next=19;break}return e.next=17,u(o.first);case 17:l=e.sent,o=l.json;case 19:if(y=["as:orderedItems","orderedItems","as:items","items"].find((function(e){return o[e]}))){e.next=22;break}throw new Error("Unknown list type");case 22:return m=o[y].map((function(e){return e.id=e.id||e["@id"],e})),e.abrupt("return",{data:m,total:o.totalItems});case 24:e.next=45;break;case 26:return b=D({types:s[r].types,params:w(w({},t),{},{filter:w(w({},s[r].filter),t.filter)}),dereference:s[r].dereference,ontologies:f}),e.next=29,u(c,{method:"POST",body:b});case 29:return h=e.sent,g=h.json,e.next=33,d.frame(g,{"@context":p||N(f),"@type":s[r].types});case 33:if(v=e.sent,1!==Object.keys(v).length){e.next=38;break}return e.abrupt("return",{data:[],total:0});case 38:if(v["@graph"]){e.next=43;break}return v.id=v.id||v["@id"],e.abrupt("return",{data:[v],total:1});case 43:return x=v["@graph"].map((function(e){return e.id=e.id||e["@id"],e})).sort((function(e,r){return!(t.sort&&e[t.sort.field]&&r[t.sort.field])||("DESC"===t.sort.order?e[t.sort.field].localeCompare(r[t.sort.field]):r[t.sort.field].localeCompare(e[t.sort.field]))})).slice((t.pagination.page-1)*t.pagination.perPage,t.pagination.page*t.pagination.perPage),e.abrupt("return",{data:x,total:v["@graph"].length});case 45:case"end":return e.stop()}var O,k,E}),e)}))),function(e,r){return i.apply(this,arguments)}),getOne:(o=b(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,c,l,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s[r],n=s[r],e.next=4,u(t.id);case 4:return a=e.sent,(o=a.json).id=o.id||o["@id"],e.next=9,d.compact(o,p||N(f));case 9:if(i=e.sent,n.forceArray){c=E(n.forceArray);try{for(c.s();!(l=c.n()).done;)y=l.value,i[y]&&!Array.isArray(i[y])&&(i[y]=[i[y]])}catch(e){c.e(e)}finally{c.f()}}return e.abrupt("return",{data:i});case 12:case"end":return e.stop()}}),e)}))),function(e,r){return o.apply(this,arguments)}),getMany:(a=b(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=E(t.ids),e.prev=2,a.s();case 4:if((o=a.n()).done){e.next=20;break}return i="object"===y(i=o.value)?i["@id"]:i,e.prev=7,e.next=10,u(i);case 10:c=e.sent,(s=c.json).id=s.id||s["@id"],n.push(s),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(7);case 18:e.next=4;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(2),a.e(e.t1);case 25:return e.prev=25,a.f(),e.finish(25);case 28:return e.abrupt("return",{data:n});case 29:case"end":return e.stop()}}),e,null,[[2,22,25,28],[7,16]])}))),function(e,r){return a.apply(this,arguments)}),getManyReference:function(e,r){throw new Error("getManyReference is not implemented yet")},create:(n=b(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,c,l,d,y,m,b;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s[r],n=s[r],a=n.slugField,o=n.containerUri,i=n.types,c=new Headers,a&&c.set("Slug",Array.isArray(a)?a.map((function(e){return t.data[e]})).join(" "):t.data[a]),e.next=6,h(t.data);case 6:return t.data=e.sent,e.next=9,u(o,{method:"POST",headers:c,body:JSON.stringify(w({"@context":p||N(f),"@type":i},t.data))});case 9:return l=e.sent,d=l.headers,y=d.get("Location"),e.next=14,u(y);case 14:return m=e.sent,(b=m.json).id=b.id||b["@id"],e.abrupt("return",{data:b});case 18:case"end":return e.stop()}}),e)}))),function(e,r){return n.apply(this,arguments)}),update:(t=b(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t.data);case 2:return t.data=e.sent,e.next=5,u(t.id,{method:"PUT",body:JSON.stringify(w({"@context":p||N(f)},t.data))});case 5:return e.abrupt("return",{data:t.data});case 6:case"end":return e.stop()}}),e)}))),function(e,r){return t.apply(this,arguments)}),updateMany:function(e,r){throw new Error("updateMany is not implemented yet")},delete:(r=b(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t.id,{method:"DELETE"});case 2:return e.abrupt("return",{data:{id:t.id}});case 3:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)}),deleteMany:function(e,r){throw new Error("deleteMany is not implemented yet")}}},J=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.headers||(r.headers=new Headers),r.method){case"POST":case"PATCH":r.headers.has("Accept")||r.headers.set("Accept","application/ld+json"),r.headers.has("Content-Type")||r.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:r.headers.has("Accept")||r.headers.set("Accept","application/ld+json")}var t=localStorage.getItem("token");return t&&r.headers.set("Authorization","Bearer ".concat(t)),p.fetchJson(e,r)};export{P as DateTimeInput,A as ImageField,S as ReferenceArrayField,T as ReferenceArrayInput,R as ReferenceField,I as ReferenceInput,L as ReificationArrayInput,S as UriArrayField,T as UriArrayInput,H as dataProvider,J as httpClient};
