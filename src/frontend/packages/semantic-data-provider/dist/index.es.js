import e,{useState as r,useEffect as t,useContext as n}from"react";import{ImageField as a,ReferenceArrayField as o,ReferenceField as i,useQueryWithStore as c,DateTimeInput as u,useResourceContext as s,ReferenceArrayInput as f,ReferenceInput as l,ArrayInput as p,SimpleFormIterator as d,TextInput as h,DataProviderContext as v,fetchUtils as y}from"react-admin";import{makeStyles as m}from"@material-ui/core/styles";import g from"jsonld";import b from"speakingurl";import w from"crypto";function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){O(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,r,t,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,a)}function E(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){j(o,n,a,i,c,"next",e)}function c(e){j(o,n,a,i,c,"throw",e)}i(void 0)}))}}function O(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function R(){return(R=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function C(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function A(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,a,o=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw a}}return o}(e,r)||P(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||P(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,r){if(e){if("string"==typeof e)return I(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?I(e,r):void 0}}function I(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function _(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=P(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw o}}}}var U=["record","source"],B=function(r){var t=r.record,n=r.source,o=C(r,U);return"string"==typeof t&&(t=O({},n,t)),e.createElement(a,R({record:t,source:n},o))},L=["record","source"],F=function(r){var t=r.record,n=r.source,a=C(r,L);return null!=t&&t[n]&&(Array.isArray(t[n])||(t[n]=[t[n]]),t[n]=t[n].map((function(e){return e["@id"]||e.id||e}))),e.createElement(o,R({record:t,source:n},a))};F.defaultProps={addLabel:!0};var H=["record","source"],M=function(r){var t=r.record,n=r.source,a=C(r,H);return t[n]&&"object"===S(t[n])&&(t[n]=t[n]["@id"]||t[n].id),e.createElement(i,R({record:t,source:n},a))};M.defaultProps={addLabel:!0};var N=["children","record","filter","source"],D=function(n){var a=n.children,o=n.record,i=n.filter,c=n.source,u=C(n,N),s=A(r(),2),f=s[0],l=s[1];return t((function(){if(o&&c&&Array.isArray(null==o?void 0:o[c])){var e=null==o?void 0:o[c].filter((function(e){var r=!0;for(var t in i){var n=e[t];Array.isArray(n)?n.includes(i[t])||(r=!1):n!==i[t]&&(r=!1)}return r})),r=k({},o);r[c]=e.length>0?e:void 0,l(r)}}),[o,c,i]),e.createElement(e.Fragment,null,e.Children.map(a,(function(r,t){return e.cloneElement(r,k(k({},u),{},{record:f,addLabel:!0,source:c}))})))},q=["children","groupReference","groupLabel","groupHeader","filterProperty"],z=function(r){var t=r.children,n=r.groupReference,a=r.groupLabel,o=r.groupHeader,i=r.filterProperty,u=C(r,q),s=c({type:"getList",resource:n,payload:{}}).data;return e.createElement(e.Fragment,null,null==s?void 0:s.map((function(r,n){var c={};return c[i]=r.id,e.createElement(e.Fragment,null,o&&o(k(k({},u),{},{group:r})),e.createElement(D,R({},u,{filter:c,label:r[a]}),t))})))},$=function(r){return e.createElement(u,R({},r,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},J=function(r){var t=s({});return e.createElement(f,R({},r,{resource:t,format:function(e){return e?(Array.isArray(e)||(e=[e]),r.format&&(e=r.format(e)),e.map((function(e){return"object"===S(e)?e.id||e["@id"]:e}))):e}}))},W=function(r){var t=s({});return e.createElement(l,R({},r,{resource:t,format:function(e){return e?(r.format&&(e=r.format(e)),"object"===S(e)?e.id||e["@id"]:e):e}}))},Y=["reificationClass","children"],V=m({form:{display:"flex"},input:{paddingRight:"20px"}}),G=m({root:{display:"none"}}),X=function(r){var t=r.reificationClass;r.children;var n=C(r,Y),a=V(),o=G();return e.createElement(p,n,e.createElement(d,{classes:{form:a.form}},e.Children.map(r.children,(function(r,t){return e.cloneElement(r,{className:a.input})})),e.createElement(h,{className:o.root,source:"type",initialValue:t})))},Z=function(e){var a=n(v),o=A(r(),2),i=o[0],c=o[1];return t((function(){e&&a.getCreateContainer(e).then((function(e){return c(e)}))}),[e]),i},K=function(e,r){return Object.keys(r).find((function(t){return r[t][e]}))},Q=function(e,r){return Object.keys(r).find((function(t){return e.startsWith(r[t].baseUrl)}))},ee=function(){var e=E(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,c,u,s,f,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.dataServers,i=t.httpClient,c=t.jsonContext,u=K("authServer",o),(s=Q(r,o))===u||null===(n=o[u])||void 0===n||!n.proxyUrl||!0===(null===(a=o[s])||void 0===a?void 0:a.noProxy)){e.next=9;break}return e.next=6,i(o[u].proxyUrl,{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:new URLSearchParams({id:r})});case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,i(r,{noToken:s!==u});case 11:e.t0=e.sent;case 12:if(f=e.t0,(l=f.json).id=l.id||l["@id"],l["@context"]===c){e.next=19;break}return e.next=18,g.compact(l,c);case 18:l=e.sent;case 19:return e.abrupt("return",l);case 20:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),re=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,u,s,f,l,p,d,h,v,y,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.resources,c=i[t]){r.next=4;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 4:return r.next=6,ee(n.id,e);case 6:if(u=r.sent,null!==(a=c.list)&&void 0!==a&&a.forceArray){f=_(null===(s=c.list)||void 0===s?void 0:s.forceArray);try{for(f.s();!(l=f.n()).done;)p=l.value,u[p]&&!Array.isArray(u[p])&&(u[p]=[u[p]])}catch(e){f.e(e)}finally{f.f()}}if(null===(o=c.list)||void 0===o||!o.dereference){r.next=35;break}h=_(null===(d=c.list)||void 0===d?void 0:d.dereference),r.prev=10,h.s();case 12:if((v=h.n()).done){r.next=27;break}if(y=v.value,!u[y]||"string"!=typeof u[y]||!u[y].startsWith("http")){r.next=25;break}return r.prev=15,r.next=18,ee(u[y],e);case 18:delete(m=r.sent)["@context"],u[y]=m,r.next=25;break;case 23:r.prev=23,r.t0=r.catch(15);case 25:r.next=12;break;case 27:r.next=32;break;case 29:r.prev=29,r.t1=r.catch(10),h.e(r.t1);case 32:return r.prev=32,h.f(),r.finish(32);case 35:return r.abrupt("return",{data:u});case 36:case"end":return r.stop()}}),r,null,[[10,29,32,35],[15,23]])})));return function(e,t){return r.apply(this,arguments)}}()},te="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ne(e,r){return e(r={exports:{}},r.exports),r.exports}var ae=ne((function(e){var r,t;r=te,t=function(){function e(e){var r=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var t=e.shift();e[0]=t+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var a=e[n];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(n>0&&(a=a.replace(/^[\/]+/,"")),a=n<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),r.push(a))}var o=r.join("/"),i=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=t():r.urljoin=t()})),oe=function(e){return e&&e.rawFile&&e.rawFile instanceof File},ie=function(e){var r=Object.keys(e.dataServers).find((function(r){return e.dataServers[r].uploadsContainer}));if(r)return ae(e.dataServers[r].baseUrl,e.dataServers[r].uploadsContainer)},ce=function(){var e=E(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=ie(t)){e.next=3;break}throw new Error("You must define an uploadsContainer in one of the server's configuration");case 3:return e.next=5,t.httpClient(n,{method:"POST",body:r,headers:new Headers({Slug:(o=r.name,i=void 0,c=void 0,i="",c=o.split("."),c.length>1&&(i=c.pop(),o=c.join(".")),b(o,{lang:"fr"})+"."+i),"Content-Type":r.type})});case 5:if(201!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",a.headers.get("Location"));case 8:case"end":return e.stop()}var o,i,c}),e)})));return function(r,t){return e.apply(this,arguments)}}(),ue=function(){var e=E(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(r);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(n=e.t1.value,!r.hasOwnProperty(n)){e.next=20;break}if(!Array.isArray(r[n])){e.next=16;break}a=0;case 6:if(!(a<r[n].length)){e.next=14;break}if(!oe(r[n][a])){e.next=11;break}return e.next=10,ce(r[n][a].rawFile,t);case 10:r[n][a]=e.sent;case 11:a++,e.next=6;break;case 14:e.next=20;break;case 16:if(!oe(r[n])){e.next=20;break}return e.next=19,ce(r[n].rawFile,t);case 19:r[n]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),se=function(e,r,t){var n={},a=[];return Object.keys(t).forEach((function(o){Object.keys(t[o].containers).forEach((function(i){r&&!(Array.isArray(r)?r.includes(i):r===i)||Object.keys(t[o].containers[i]).forEach((function(r){e.includes(r)&&t[o].containers[i][r].map((function(e){var r=ae(t[i].baseUrl,e);a.includes(r)||(a.push(r),n[o]||(n[o]=[]),n[o].push(r))}))}))}))})),n},fe=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,u,s,f,l,p,d,h,v,y,m,g,b,w,x;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.dataServers,c=e.resources,u=e.httpClient,s=e.jsonContext,f=c[t],l=new Headers,null!==(a=f.fieldsMapping)&&void 0!==a&&a.title&&l.set("Slug",n.data[null===(p=f.fieldsMapping)||void 0===p?void 0:p.title]),null===(o=f.create)||void 0===o||!o.container){r.next=10;break}d=null===(v=f.create)||void 0===v?void 0:v.container,h=Q(d,i),r.next=20;break;case 10:if(h=(null===(y=f.create)||void 0===y?void 0:y.server)||Object.keys(e.dataServers).find((function(r){return!0===e.dataServers[r].default}))){r.next=13;break}throw new Error("You must define a server for the creation, or a container, or a default server");case 13:if(m=se(f.types,[h],i),(g=Object.keys(m))&&0!==g.length){r.next=17;break}throw new Error("No container with types ".concat(JSON.stringify(f.types)," found on server ").concat(h));case 17:if(!(g.length>1||m[g[0]].length>1)){r.next=19;break}throw new Error("More than one container detected with types ".concat(JSON.stringify(f.types)," on server ").concat(h));case 19:d=m[g[0]][0];case 20:return r.next=22,ue(n.data,e);case 22:return n.data=r.sent,r.next=25,u(d,{method:"POST",headers:l,body:JSON.stringify(k({"@context":s,"@type":f.types},n.data)),noToken:!0!==i[h].authServer});case 25:return b=r.sent,w=b.headers,x=w.get("Location"),r.next=30,re(e)(t,{id:x});case 30:return r.abrupt("return",r.sent);case 31:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},le=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=Q(n.id,a),r.next=4,o(n.id,{method:"DELETE",noToken:!i||!0!==a[i].authServer});case 4:return r.abrupt("return",{data:{id:n.id}});case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},pe=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.httpClient,o=[],i=_(n.ids),r.prev=3,i.s();case 5:if((c=i.n()).done){r.next=17;break}return u=c.value,r.prev=7,r.next=10,a(u,{method:"DELETE"});case 10:o.push(u),r.next=15;break;case 13:r.prev=13,r.t0=r.catch(7);case 15:r.next=5;break;case 17:r.next=22;break;case 19:r.prev=19,r.t1=r.catch(3),i.e(r.t1);case 22:return r.prev=22,i.f(),r.finish(22);case 25:return r.abrupt("return",{data:o});case 26:case"end":return r.stop()}}),r,null,[[3,19,22,25],[7,13]])})));return function(e,t){return r.apply(this,arguments)}}()},de=function(e,r,t){var n=[];if(Object.keys(t[r].containers[r]).forEach((function(a){e.includes(a)&&t[r].containers[r][a].map((function(e){var a=ae(t[r].baseUrl,e);n.includes(a)||n.push(a)}))})),0===n.length)throw new Error("No container found matching with types ".concat(JSON.stringify(e),". You can set explicitely the create.container property of the resource."));if(n.length>1)throw new Error("More than one container found matching with types ".concat(JSON.stringify(e),". You must set the create.server or create.container property for the resource."));return n[0]},he=function(e){return function(r){var t,n,a,o,i=e.dataServers,c=e.resources[r];if(!c)throw new Error("Resource ".concat(r," is not mapped in resources file"));if(null!==(t=c.create)&&void 0!==t&&t.container)return null===(a=c.create)||void 0===a?void 0:a.container;if(null!==(n=c.create)&&void 0!==n&&n.server)return de(c.types,null===(o=c.create)||void 0===o?void 0:o.server,i);var u=K("default",i);return de(c.types,u,i)}},ve=function(){var e=E(regeneratorRuntime.mark((function e(r,t,n,a){var o,i,c,u,s,f,l,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.dataServers,i=a.httpClient,c=a.jsonContext,u=Object.keys(r).reduce((function(e,t){return k(k({},e),Object.fromEntries(r[t].map((function(e){return[e,t]}))))}),{}),s=Object.keys(u).map((function(e){return i(e,{noToken:!u[e]||!0!==o[u[e]].authServer}).then((function(e){var r=e.json;return r["@context"]!==c?g.compact(r,c):r})).then((function(r){if(t="ldp:Container",a=(n=r).type||n["@type"],Array.isArray(a)?a.includes(t):a===t)return r["ldp:contains"];throw new Error(e+" is not a LDP container");var t,n,a}))})),e.next=5,Promise.all(s);case 5:if(0!==(f=e.sent).length){e.next=10;break}return e.abrupt("return",{data:[],total:0});case 10:return f=(l=[].concat).apply.apply(l,T(f)),p=f.map((function(e){return e.id=e.id||e["@id"],e})),n.filter&&(n.filter.a&&(n.filter.type=n.filter.a,delete n.filter.a),n.filter.q&&delete n.filter.q,Object.keys(n.filter).length>0&&(p=p.filter((function(e){return Object.entries(n.filter).some((function(r){var t=A(r,2),n=t[0],a=t[1];return Array.isArray(e[n])?e[n].includes(a):e[n]===a}))})))),n.sort&&(p=p.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(p=p.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:p,total:f.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),ye=function(e){var r,t={};if(e){var n,a=_(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;r=o.includes("/")?o.split("/").reverse():[o],t=k(k({},t),r.reduce((function(e,r){return O({},r,k({"@embed":"@last"},e))}),{}))}}catch(e){a.e(e)}finally{a.f()}return t}},me=ne((function(e,r){var t;e.exports=t=t||function(e,r){var t;if("undefined"!=typeof window&&window.crypto&&(t=window.crypto),"undefined"!=typeof self&&self.crypto&&(t=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(t=globalThis.crypto),!t&&"undefined"!=typeof window&&window.msCrypto&&(t=window.msCrypto),!t&&void 0!==te&&te.crypto&&(t=te.crypto),!t)try{t=w}catch(e){}var n=function(){if(t){if("function"==typeof t.getRandomValues)try{return t.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof t.randomBytes)try{return t.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function e(){}return function(r){var t;return e.prototype=r,t=new e,e.prototype=null,t}}(),o={},i=o.lib={},c=i.Base={extend:function(e){var r=a(this);return e&&r.mixIn(e),r.hasOwnProperty("init")&&this.init!==r.init||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},u=i.WordArray=c.extend({init:function(e,r){e=this.words=e||[],this.sigBytes=null!=r?r:4*e.length},toString:function(e){return(e||f).stringify(this)},concat:function(e){var r=this.words,t=e.words,n=this.sigBytes,a=e.sigBytes;if(this.clamp(),n%4)for(var o=0;o<a;o++){var i=t[o>>>2]>>>24-o%4*8&255;r[n+o>>>2]|=i<<24-(n+o)%4*8}else for(var c=0;c<a;c+=4)r[n+c>>>2]=t[c>>>2];return this.sigBytes+=a,this},clamp:function(){var r=this.words,t=this.sigBytes;r[t>>>2]&=4294967295<<32-t%4*8,r.length=e.ceil(t/4)},clone:function(){var e=c.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var r=[],t=0;t<e;t+=4)r.push(n());return new u.init(r,e)}}),s=o.enc={},f=s.Hex={stringify:function(e){for(var r=e.words,t=e.sigBytes,n=[],a=0;a<t;a++){var o=r[a>>>2]>>>24-a%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(e){for(var r=e.length,t=[],n=0;n<r;n+=2)t[n>>>3]|=parseInt(e.substr(n,2),16)<<24-n%8*4;return new u.init(t,r/2)}},l=s.Latin1={stringify:function(e){for(var r=e.words,t=e.sigBytes,n=[],a=0;a<t;a++){var o=r[a>>>2]>>>24-a%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(e){for(var r=e.length,t=[],n=0;n<r;n++)t[n>>>2]|=(255&e.charCodeAt(n))<<24-n%4*8;return new u.init(t,r)}},p=s.Utf8={stringify:function(e){try{return decodeURIComponent(escape(l.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return l.parse(unescape(encodeURIComponent(e)))}},d=i.BufferedBlockAlgorithm=c.extend({reset:function(){this._data=new u.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=p.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(r){var t,n=this._data,a=n.words,o=n.sigBytes,i=this.blockSize,c=o/(4*i),s=(c=r?e.ceil(c):e.max((0|c)-this._minBufferSize,0))*i,f=e.min(4*s,o);if(s){for(var l=0;l<s;l+=i)this._doProcessBlock(a,l);t=a.splice(0,s),n.sigBytes-=f}return new u.init(t,f)},clone:function(){var e=c.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});i.Hasher=d.extend({cfg:c.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(r,t){return new e.init(t).finalize(r)}},_createHmacHelper:function(e){return function(r,t){return new h.HMAC.init(e,t).finalize(r)}}});var h=o.algo={};return o}(Math)})),ge=ne((function(e,r){var t;e.exports=(t=me,function(e){var r=t,n=r.lib,a=n.WordArray,o=n.Hasher,i=r.algo,c=[];!function(){for(var r=0;r<64;r++)c[r]=4294967296*e.abs(e.sin(r+1))|0}();var u=i.MD5=o.extend({_doReset:function(){this._hash=new a.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,r){for(var t=0;t<16;t++){var n=r+t,a=e[n];e[n]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}var o=this._hash.words,i=e[r+0],u=e[r+1],d=e[r+2],h=e[r+3],v=e[r+4],y=e[r+5],m=e[r+6],g=e[r+7],b=e[r+8],w=e[r+9],x=e[r+10],k=e[r+11],S=e[r+12],j=e[r+13],E=e[r+14],O=e[r+15],R=o[0],C=o[1],A=o[2],T=o[3];R=s(R,C,A,T,i,7,c[0]),T=s(T,R,C,A,u,12,c[1]),A=s(A,T,R,C,d,17,c[2]),C=s(C,A,T,R,h,22,c[3]),R=s(R,C,A,T,v,7,c[4]),T=s(T,R,C,A,y,12,c[5]),A=s(A,T,R,C,m,17,c[6]),C=s(C,A,T,R,g,22,c[7]),R=s(R,C,A,T,b,7,c[8]),T=s(T,R,C,A,w,12,c[9]),A=s(A,T,R,C,x,17,c[10]),C=s(C,A,T,R,k,22,c[11]),R=s(R,C,A,T,S,7,c[12]),T=s(T,R,C,A,j,12,c[13]),A=s(A,T,R,C,E,17,c[14]),R=f(R,C=s(C,A,T,R,O,22,c[15]),A,T,u,5,c[16]),T=f(T,R,C,A,m,9,c[17]),A=f(A,T,R,C,k,14,c[18]),C=f(C,A,T,R,i,20,c[19]),R=f(R,C,A,T,y,5,c[20]),T=f(T,R,C,A,x,9,c[21]),A=f(A,T,R,C,O,14,c[22]),C=f(C,A,T,R,v,20,c[23]),R=f(R,C,A,T,w,5,c[24]),T=f(T,R,C,A,E,9,c[25]),A=f(A,T,R,C,h,14,c[26]),C=f(C,A,T,R,b,20,c[27]),R=f(R,C,A,T,j,5,c[28]),T=f(T,R,C,A,d,9,c[29]),A=f(A,T,R,C,g,14,c[30]),R=l(R,C=f(C,A,T,R,S,20,c[31]),A,T,y,4,c[32]),T=l(T,R,C,A,b,11,c[33]),A=l(A,T,R,C,k,16,c[34]),C=l(C,A,T,R,E,23,c[35]),R=l(R,C,A,T,u,4,c[36]),T=l(T,R,C,A,v,11,c[37]),A=l(A,T,R,C,g,16,c[38]),C=l(C,A,T,R,x,23,c[39]),R=l(R,C,A,T,j,4,c[40]),T=l(T,R,C,A,i,11,c[41]),A=l(A,T,R,C,h,16,c[42]),C=l(C,A,T,R,m,23,c[43]),R=l(R,C,A,T,w,4,c[44]),T=l(T,R,C,A,S,11,c[45]),A=l(A,T,R,C,O,16,c[46]),R=p(R,C=l(C,A,T,R,d,23,c[47]),A,T,i,6,c[48]),T=p(T,R,C,A,g,10,c[49]),A=p(A,T,R,C,E,15,c[50]),C=p(C,A,T,R,y,21,c[51]),R=p(R,C,A,T,S,6,c[52]),T=p(T,R,C,A,h,10,c[53]),A=p(A,T,R,C,x,15,c[54]),C=p(C,A,T,R,u,21,c[55]),R=p(R,C,A,T,b,6,c[56]),T=p(T,R,C,A,O,10,c[57]),A=p(A,T,R,C,m,15,c[58]),C=p(C,A,T,R,j,21,c[59]),R=p(R,C,A,T,v,6,c[60]),T=p(T,R,C,A,k,10,c[61]),A=p(A,T,R,C,d,15,c[62]),C=p(C,A,T,R,w,21,c[63]),o[0]=o[0]+R|0,o[1]=o[1]+C|0,o[2]=o[2]+A|0,o[3]=o[3]+T|0},_doFinalize:function(){var r=this._data,t=r.words,n=8*this._nDataBytes,a=8*r.sigBytes;t[a>>>5]|=128<<24-a%32;var o=e.floor(n/4294967296),i=n;t[15+(a+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),t[14+(a+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),r.sigBytes=4*(t.length+1),this._process();for(var c=this._hash,u=c.words,s=0;s<4;s++){var f=u[s];u[s]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return c},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});function s(e,r,t,n,a,o,i){var c=e+(r&t|~r&n)+a+i;return(c<<o|c>>>32-o)+r}function f(e,r,t,n,a,o,i){var c=e+(r&n|t&~n)+a+i;return(c<<o|c>>>32-o)+r}function l(e,r,t,n,a,o,i){var c=e+(r^t^n)+a+i;return(c<<o|c>>>32-o)+r}function p(e,r,t,n,a,o,i){var c=e+(t^(r|~n))+a+i;return(c<<o|c>>>32-o)+r}r.MD5=o._createHelper(u),r.HmacMD5=o._createHmacHelper(u)}(Math),t.MD5)})),be=function(e){return ge(e)},we=function(e){return e.includes("/")&&e.split("/")[0]},xe=function(e){return e.includes("/")?e.split("/")[1]:e},ke=function e(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.filter((function(e){return e.parentNode===t})).map((function(t){return"\n      OPTIONAL { \n        ".concat(t.query,"\n        ").concat(t.filter,"\n        ").concat(e(r,t.node),"\n      }\n    ")})).join("\n")},Se=function(e){var r=[],t=function(e){var r=[];if(e){var t,n=_(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a.includes("/"))for(var o=a.split("/"),i=1;i<=o.length;i++)r.push(o.slice(0,i).join("/"));else r.push(a)}}catch(e){n.e(e)}finally{n.f()}}return r}(e);if(t){var n,a=_(t);try{for(a.s();!(n=a.n()).done;){var o=n.value,i=we(o),c=xe(o),u=be(o),s=i?be(i):"1";r.push({node:o,parentNode:i,query:"?s".concat(s," ").concat(c," ?s").concat(u," .\n?s").concat(u," ?p").concat(u," ?o").concat(u," ."),filter:""})}}catch(e){a.e(e)}finally{a.f()}return{construct:r.map((function(e){return e.query})).join("\n"),where:ke(r)}}return{construct:"",where:""}},je=function(e){var r=e.containers,t=e.params.filter,n=e.dereference,a=e.ontologies,o="",i="";t&&(t.q&&t.q.length>0&&(o+='\n      {\n        SELECT ?s1\n        WHERE {\n          ?s1 ?p1 ?o1 .\n          FILTER regex(lcase(str(?o1)), "'.concat(t.q.toLowerCase(),'")\n          FILTER NOT EXISTS {?s1 a ?o1}\n        }\n      }\n      '),delete t.q),Object.keys(t).forEach((function(e){if(t[e]){var r=t[e].startsWith("http")?"<".concat(t[e],">"):t[e];i+="?s1 ".concat(e," ").concat(r," .")}})));var c=Se(n);return"\n    ".concat(function(e){return e.map((function(e){return"PREFIX ".concat(e.prefix,": <").concat(e.url,">")})).join("\n")}(a),"\n    CONSTRUCT {\n      ?s1 ?p2 ?o2 .\n      ").concat(c.construct,"\n    }\n    WHERE {\n      ").concat(i,"\n      ?containerUri ldp:contains ?s1 .\n      FILTER( ?containerUri IN (").concat(r.map((function(e){return"<".concat(e,">")})).join(", "),") ) .\n      FILTER( (isIRI(?s1)) ) .\n      ").concat(o,"\n      ").concat(c.where,"\n      ?s1 ?p2 ?o2 .\n    }\n  ")},Ee=function(){var e=E(regeneratorRuntime.mark((function e(r,t,n,a){var o,i,c,u,s,f,l,p,d,h,v,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.dataServers,c=a.resources,u=a.httpClient,s=a.jsonContext,f=a.ontologies,l=c[t],p=k({"@context":s,"@type":l.types,"@embed":"@never"},ye(null===(o=l.list)||void 0===o?void 0:o.dereference)),d=Object.keys(r).map((function(e){return new Promise((function(t,a){var o,c,s=je({containers:r[e],params:k(k({},n),{},{filter:k(k({},null===(o=l.list)||void 0===o?void 0:o.filter),n.filter)}),dereference:null===(c=l.list)||void 0===c?void 0:c.dereference,ontologies:f});u(i[e].sparqlEndpoint,{method:"POST",body:s,noToken:!0!==i[e].authServer}).then((function(e){var r=e.json;return g.frame(r,p,{omitGraph:!1})})).then((function(e){t(e["@graph"]||[])})).catch((function(e){return a(e)}))}))})),e.next=6,Promise.all(d);case 6:if(0!==(h=e.sent).length){e.next=11;break}return e.abrupt("return",{data:[],total:0});case 11:return h=(v=[].concat).apply.apply(v,T(h)),y=h.map((function(e){return e.id=e.id||e["@id"],e})),n.sort&&(y=y.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(y=y.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:y,total:h.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),Oe=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t){var n,a,o,i,c,u,s,f,l,p,d=arguments;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=d.length>1&&void 0!==d[1]?d[1]:{},c=e.dataServers,u=e.resources,s=u[t]){r.next=5;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 5:if(f=null!==(n=s.list)&&void 0!==n&&n.containers&&(null===(a=s.list)||void 0===a?void 0:a.containers.length)>0?null===(l=s.list)||void 0===l?void 0:l.containers:se(s.types,null===(p=s.list)||void 0===p?void 0:p.servers,c),null===(o=s.list)||void 0===o||!o.fetchContainer){r.next=10;break}return r.abrupt("return",ve(f,t,i,e));case 10:return r.abrupt("return",Ee(f,t,i,e));case 11:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},Re=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,u,s,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.returnFailedResources,o=[],i=_(n.ids),r.prev=3,i.s();case 5:if((c=i.n()).done){r.next=21;break}return u="object"===S(u=c.value)?u["@id"]:u,r.prev=8,r.next=11,re(e)(t,{id:u});case 11:s=r.sent,f=s.data,o.push(f),r.next=19;break;case 16:r.prev=16,r.t0=r.catch(8),a&&o.push({id:u});case 19:r.next=5;break;case 21:r.next=26;break;case 23:r.prev=23,r.t1=r.catch(3),i.e(r.t1);case 26:return r.prev=26,i.f(),r.finish(26);case 29:return r.abrupt("return",{data:o});case 30:case"end":return r.stop()}}),r,null,[[3,23,26,29],[8,16]])})));return function(e,t){return r.apply(this,arguments)}}()},Ce=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.filter=k(k({},n.filter),{},O({},n.target,n.id)),delete n.target,r.next=4,Oe(e)(t,n);case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},Ae=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=e.jsonContext,c=Q(n.id,a),r.next=4,ue(n.data,e);case 4:return n.data=r.sent,r.next=7,o(n.id,{method:"PUT",body:JSON.stringify(k({"@context":i},n.data)),noToken:!c||!0!==a[c].authServer});case 7:return r.abrupt("return",{data:n.data});case 8:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()};function Te(e){this.message=e}Te.prototype=new Error,Te.prototype.name="InvalidCharacterError";var Pe="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new Te("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,a=0,o=0,i="";n=r.charAt(o++);~n&&(t=a%4?64*t+n:n,a++%4)?i+=String.fromCharCode(255&t>>(-2*a&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return i};function Ie(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(Pe(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(r)}catch(e){return Pe(r)}}function _e(e){this.message=e}function Ue(e,r){if("string"!=typeof e)throw new _e("Invalid token specified");var t=!0===(r=r||{}).header?0:1;try{return JSON.parse(Ie(e.split(".")[t]))}catch(e){throw new _e("Invalid token specified: "+e.message)}}_e.prototype=new Error,_e.prototype.name="InvalidTokenError";var Be=function(){var e=E(regeneratorRuntime.mark((function e(r){var t,n,a,o,i,c,u,s,f,l,p,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.dataServers,n=r.httpClient,a=localStorage.getItem("token"),o=K("pod",t),i=K("authServer",t),!a){e.next=24;break}return c=Ue(a),u=c.webId,e.prev=6,e.next=9,n(u);case 9:f=e.sent,l=f.json,s=l,e.next=20;break;case 14:return e.prev=14,e.t0=e.catch(6),console.error(e.t0),localStorage.removeItem("token"),window.location.reload(),e.abrupt("return");case 20:o&&(r.dataServers[o].name="My Pod",r.dataServers[o].baseUrl=ae(u,"data"),r.dataServers[o].sparqlEndpoint=(null===(p=s.endpoints)||void 0===p?void 0:p["void:sparqlEndpoint"])||ae(u,"sparql")),i&&(r.dataServers[i].proxyUrl=null===(d=s.endpoints)||void 0===d?void 0:d.proxyUrl),e.next=25;break;case 24:o&&delete r.dataServers[o];case 25:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(r){return e.apply(this,arguments)}}(),Le=function(){var e=E(regeneratorRuntime.mark((function e(r){var t,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.values(r.dataServers).filter((function(e){return!0!==e.pod})).map((function(e){return r.httpClient(new URL("/.well-known/void",e.baseUrl)).then((function(e){return{data:e.json}})).catch((function(e){if(404===e.status)return{error:e};throw e}))})),e.prev=1,e.next=4,Promise.all(t);case 4:n=e.sent,a=_(n);try{for(a.s();!(o=a.n()).done;)o.value.data}catch(e){a.e(e)}finally{a.f()}e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),Fe=function(e){if(!K("default",e.dataServers))throw new Error("You must define a default server in your dataServers config");e.jsonContext||(e.jsonContext=Object.fromEntries(e.ontologies.map((function(e){return[e.prefix,e.url]})))),e.returnFailedResources||(e.returnFailedResources=!1);var r=Be(e),t=Le(e),n=function(e){return E(regeneratorRuntime.mark((function n(){var a=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r;case 2:return n.next=4,t;case 4:return n.next=6,e.apply(void 0,a);case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))};return{getList:n(Oe(e)),getOne:n(re(e)),getMany:n(Re(e)),getManyReference:n(Ce(e)),create:n(fe(e)),update:n(Ae(e)),updateMany:function(){throw new Error("updateMany is not implemented yet")},delete:n(le(e)),deleteMany:n(pe(e)),getCreateContainer:n(he(e))}},He=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.headers||(r.headers=new Headers),r.method){case"POST":case"PATCH":case"PUT":r.headers.has("Accept")||r.headers.set("Accept","application/ld+json"),r.headers.has("Content-Type")||r.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:r.headers.has("Accept")||r.headers.set("Accept","application/ld+json")}if(!r.noToken){var t=localStorage.getItem("token");t&&r.headers.set("Authorization","Bearer ".concat(t))}return y.fetchJson(e,r)};export{$ as DateTimeInput,D as FilterHandler,z as GroupedReferenceHandler,B as ImageField,F as ReferenceArrayField,J as ReferenceArrayInput,M as ReferenceField,W as ReferenceInput,X as ReificationArrayInput,F as UriArrayField,J as UriArrayInput,Se as buildDereferenceQuery,je as buildSparqlQuery,Fe as dataProvider,He as httpClient,Z as useCreateContainer};
//# sourceMappingURL=index.es.js.map
