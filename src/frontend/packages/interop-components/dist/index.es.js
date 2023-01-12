import e,{useState as t,useMemo as r,useEffect as n,useCallback as o}from"react";import{Form as i}from"react-final-form";import{useLocale as a,useTranslate as c,useNotify as u,useInput as l,FieldTitle as s,useCreateSuggestionContext as f,useResourceContext as p,useCreate as h,useDataProvider as m,useRedirect as d,useTheme as v,SimpleForm as y,required as g}from"react-admin";import{TextField as b,Grid as x,Typography as w,Dialog as E,DialogContent as O,DialogActions as j,Button as A,useMediaQuery as S,Box as k,Tabs as L,Tab as I,Divider as P,Toolbar as T}from"@mui/material";import U from"@mui/styles/makeStyles";import C from"@mui/material/Autocomplete";import N from"@mui/icons-material/Language";import F from"@mui/icons-material/Add";import"@mui/icons-material/SaveAlt";import{useContainers as R,useDataModel as W}from"@semapps/semantic-data-provider";import"@semapps/input-components";import _ from"@mui/icons-material/Save";import G from"@mui/icons-material/StarBorder";function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){Y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
$=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,a),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var s={};function f(){}function p(){}function h(){}var m={};c(m,o,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(j([])));v&&v!==t&&r.call(v,o)&&(m=v);var y=h.prototype=f.prototype=Object.create(m);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(o,i){function a(){return new t((function(n,a){!function n(o,i,a,c){var u=l(e[o],e,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(f).then((function(e){s.value=e,a(s)}),(function(e){return n("throw",e,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:A}}function A(){return{value:void 0,done:!0}}return p.prototype=h,c(y,"constructor",h),c(h,"constructor",p),p.displayName=c(h,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,a,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(y),c(y,a,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}function B(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function V(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){B(i,n,o,a,c,"next",e)}function c(e){B(i,n,o,a,c,"throw",e)}a(void 0)}))}}function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(){return(q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,t)||K(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||K(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){if(e){if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(e,t):void 0}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var J="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Q(e,t){return e(t={exports:{}},t.exports),t.exports}var ee=Q((function(e,t){var r,n;e.exports=(r={772:(e,t,r)=>{const n=r(826).remove,o=/[.*+?^${}()|[\]\\]/g,i=/[a-z0-9_]/i,a=/\s+/;e.exports=function(e,t,r){var c,u;u={insideWords:!1,findAllOccurrences:!1,requireMatchAll:!1},c=(c=r)||{},Object.keys(c).forEach(e=>{u[e]=!!c[e]}),r=u;const l=Array.from(e).map(e=>n(e));let s=l.join("");return(t=n(t)).trim().split(a).filter(e=>e.length>0).reduce((e,t)=>{const n=t.length,a=!r.insideWords&&i.test(t[0])?"\\b":"",c=new RegExp(a+t.replace(o,"\\$&"),"i");let u,f;if(u=c.exec(s),r.requireMatchAll&&null===u)return s="",[];for(;u;){f=u.index;const t=n-l.slice(f,f+n).join("").length,o=f-l.slice(0,f).join("").length,i=[f+o,f+n+o+t];if(i[0]!==i[1]&&e.push(i),s=s.slice(0,f)+new Array(n+1).join(" ")+s.slice(f+n),!r.findAllOccurrences)break;u=c.exec(s)}return e},[]).sort((e,t)=>e[0]-t[0])}},826:e=>{var t={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ấ":"A","Ắ":"A","Ẳ":"A","Ẵ":"A","Ặ":"A","Æ":"AE","Ầ":"A","Ằ":"A","Ȃ":"A","Ç":"C","Ḉ":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ế":"E","Ḗ":"E","Ề":"E","Ḕ":"E","Ḝ":"E","Ȇ":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ḯ":"I","Ȋ":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ố":"O","Ṍ":"O","Ṓ":"O","Ȏ":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ấ":"a","ắ":"a","ẳ":"a","ẵ":"a","ặ":"a","æ":"ae","ầ":"a","ằ":"a","ȃ":"a","ç":"c","ḉ":"c","è":"e","é":"e","ê":"e","ë":"e","ế":"e","ḗ":"e","ề":"e","ḕ":"e","ḝ":"e","ȇ":"e","ì":"i","í":"i","î":"i","ï":"i","ḯ":"i","ȋ":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ố":"o","ṍ":"o","ṓ":"o","ȏ":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","C̆":"C","c̆":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","Ǵ":"G","ĝ":"g","ǵ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ḫ":"H","ḫ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĳ":"IJ","ĳ":"ij","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","Ḱ":"K","ḱ":"k","K̆":"K","k̆":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"l","ł":"l","Ḿ":"M","ḿ":"m","M̆":"M","m̆":"m","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","ŉ":"n","N̆":"N","n̆":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","P̆":"P","p̆":"p","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","R̆":"R","r̆":"r","Ȓ":"R","ȓ":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","Ș":"S","ș":"s","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","ț":"t","Ț":"T","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","T̆":"T","t̆":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ȗ":"U","ȗ":"u","V̆":"V","v̆":"v","Ŵ":"W","ŵ":"w","Ẃ":"W","ẃ":"w","X̆":"X","x̆":"x","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Y̆":"Y","y̆":"y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ſ":"s","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ǎ":"A","ǎ":"a","Ǐ":"I","ǐ":"i","Ǒ":"O","ǒ":"o","Ǔ":"U","ǔ":"u","Ǖ":"U","ǖ":"u","Ǘ":"U","ǘ":"u","Ǚ":"U","ǚ":"u","Ǜ":"U","ǜ":"u","Ứ":"U","ứ":"u","Ṹ":"U","ṹ":"u","Ǻ":"A","ǻ":"a","Ǽ":"AE","ǽ":"ae","Ǿ":"O","ǿ":"o","Þ":"TH","þ":"th","Ṕ":"P","ṕ":"p","Ṥ":"S","ṥ":"s","X́":"X","x́":"x","Ѓ":"Г","ѓ":"г","Ќ":"К","ќ":"к","A̋":"A","a̋":"a","E̋":"E","e̋":"e","I̋":"I","i̋":"i","Ǹ":"N","ǹ":"n","Ồ":"O","ồ":"o","Ṑ":"O","ṑ":"o","Ừ":"U","ừ":"u","Ẁ":"W","ẁ":"w","Ỳ":"Y","ỳ":"y","Ȁ":"A","ȁ":"a","Ȅ":"E","ȅ":"e","Ȉ":"I","ȉ":"i","Ȍ":"O","ȍ":"o","Ȑ":"R","ȑ":"r","Ȕ":"U","ȕ":"u","B̌":"B","b̌":"b","Č̣":"C","č̣":"c","Ê̌":"E","ê̌":"e","F̌":"F","f̌":"f","Ǧ":"G","ǧ":"g","Ȟ":"H","ȟ":"h","J̌":"J","ǰ":"j","Ǩ":"K","ǩ":"k","M̌":"M","m̌":"m","P̌":"P","p̌":"p","Q̌":"Q","q̌":"q","Ř̩":"R","ř̩":"r","Ṧ":"S","ṧ":"s","V̌":"V","v̌":"v","W̌":"W","w̌":"w","X̌":"X","x̌":"x","Y̌":"Y","y̌":"y","A̧":"A","a̧":"a","B̧":"B","b̧":"b","Ḑ":"D","ḑ":"d","Ȩ":"E","ȩ":"e","Ɛ̧":"E","ɛ̧":"e","Ḩ":"H","ḩ":"h","I̧":"I","i̧":"i","Ɨ̧":"I","ɨ̧":"i","M̧":"M","m̧":"m","O̧":"O","o̧":"o","Q̧":"Q","q̧":"q","U̧":"U","u̧":"u","X̧":"X","x̧":"x","Z̧":"Z","z̧":"z"},r=Object.keys(t).join("|"),n=new RegExp(r,"g"),o=new RegExp(r,""),i=function(e){return e.replace(n,(function(e){return t[e]}))};e.exports=i,e.exports.has=function(e){return!!e.match(o)},e.exports.remove=i}},n={},function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return r[t](i,i.exports,e),i.exports}(772))}));ee.AutosuggestHighlightMatch;var te=Q((function(e,t){var r,n;e.exports=(r={705:e=>{e.exports=function(e,t){const r=[];return 0===t.length?r.push({text:e,highlight:!1}):t[0][0]>0&&r.push({text:e.slice(0,t[0][0]),highlight:!1}),t.forEach((n,o)=>{const i=n[0],a=n[1];r.push({text:e.slice(i,a),highlight:!0}),o===t.length-1?a<e.length&&r.push({text:e.slice(a,e.length),highlight:!1}):a<t[o+1][0]&&r.push({text:e.slice(a,t[o+1][0]),highlight:!1})}),r}}},n={},function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return r[t](i,i.exports,e),i.exports}(705))}));te.AutosuggestHighlightParse;var re=/^\s+|\s+$/g,ne=/^[-+]0x[0-9a-f]+$/i,oe=/^0b[01]+$/i,ie=/^0o[0-7]+$/i,ae=parseInt,ce="object"==typeof J&&J&&J.Object===Object&&J,ue="object"==typeof self&&self&&self.Object===Object&&self,le=ce||ue||Function("return this")(),se=Object.prototype.toString,fe=Math.max,pe=Math.min,he=function(){return le.Date.now()};function me(e,t,r){var n,o,i,a,c,u,l=0,s=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,l=t,a=e.apply(i,r)}function m(e){return l=e,c=setTimeout(v,t),s?h(e):a}function d(e){var r=e-u;return void 0===u||r>=t||r<0||f&&e-l>=i}function v(){var e=he();if(d(e))return y(e);c=setTimeout(v,function(e){var r=t-(e-u);return f?pe(r,i-(e-l)):r}(e))}function y(e){return c=void 0,p&&n?h(e):(n=o=void 0,a)}function g(){var e=he(),r=d(e);if(n=arguments,o=this,u=e,r){if(void 0===c)return m(u);if(f)return c=setTimeout(v,t),h(u)}return void 0===c&&(c=setTimeout(v,t)),a}return t=ve(t)||0,de(r)&&(s=!!r.leading,i=(f="maxWait"in r)?fe(ve(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),g.cancel=function(){void 0!==c&&clearTimeout(c),l=0,n=u=o=c=void 0},g.flush=function(){return void 0===c?a:y(he())},g}function de(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ve(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==se.call(e)}(e))return NaN;if(de(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=de(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(re,"");var r=oe.test(e);return r||ie.test(e)?ae(e.slice(2),r?2:8):ne.test(e)?NaN:+e}var ye=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return de(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),me(e,t,{leading:n,maxWait:t,trailing:o})},ge=["fetchLexicon","resource","source","initialValue","label","parse","optionText","helperText"],be=U((function(e){return{icon:{color:e.palette.text.secondary,marginRight:e.spacing(2)}}})),xe=function(e,t){return"string"==typeof e?e:e.label?e.label:"string"==typeof t?e[t]:"function"==typeof t?t(e):void 0},we=function(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)},Ee=function(o){var i=o.fetchLexicon,f=o.resource,p=o.source,h=o.initialValue,m=o.label,d=o.parse,v=o.optionText;o.helperText;var y=H(o,ge),g=be(),E=a(),O=c(),j=u(),A=l(M({source:p,initialValue:h},y)),S=A.input,k=S.value,L=S.onChange,I=S.onBlur,P=S.onFocus,T=A.isRequired,U=A.meta,R=U.error,W=U.submitError,_=U.touched,G=X(t(h),2),D=G[0],$=G[1],B=X(t([]),2),V=B[0],Y=B[1],K=r((function(){return ye((function(e,t){i({keyword:e,locale:E}).then((function(e){return t(e)})).catch((function(e){return j(e.message,"error")}))}),200)}),[E,i,j]);return n((function(){D&&K(D,(function(e){return Y(e)}))}),[k,D,v,K]),e.createElement(C,{freeSolo:!0,autoComplete:!0,value:k||null,openOnFocus:!!h,options:k?[k].concat(z(V)):V,filterSelectedOptions:!0,filterOptions:function(e,t){return D&&e.push({label:we(D),summary:'Ajouter "'.concat(we(D),'" au dictionnaire'),icon:F}),e},clearOnBlur:!0,selectOnFocus:!0,handleHomeEndKeys:!0,getOptionLabel:function(e){return xe(e,v)},isOptionEqualToValue:function(e,t){return xe(e,v)===xe(t,v)},onChange:function(e,t){t&&d&&(t=d(t)),L(t),Y([])},onInputChange:function(e,t){return $(t)},noOptionsText:O("ra.navigation.no_results"),renderInput:function(t){return t.inputProps.autoComplete="new-password",e.createElement(b,q({},t,{autoFocus:!0,inputProps:M(M({},t.inputProps),{},{onBlur:function(e){I(e),t.inputProps.onBlur&&t.inputProps.onBlur(e)},onFocus:function(e){P(e),t.inputProps.onFocus&&t.inputProps.onFocus(e)}}),label:""!==m&&!1!==m&&e.createElement(s,{label:m,source:p,resource:f,isRequired:T}),error:!(!_||!R&&!W)},y))},renderOption:function(t){var r=ee(t.label,D),n=te(t.label,r);return e.createElement(x,{container:!0,alignItems:"center"},e.createElement(x,{item:!0},e.createElement(t.icon||N,{className:g.icon})),e.createElement(x,{item:!0,xs:!0},"string"==typeof n?n:n.map((function(t,r){return e.createElement("span",{key:r,style:{fontWeight:t.highlight?700:400}},t.text)})),e.createElement(w,{variant:"body2",color:"textSecondary"},t.summary)))}})};Ee.defaultProps={variant:"filled",margin:"dense"};var Oe=function(r){var n=r.fetchLexicon,a=r.selectData,c=f(),u=c.filter,l=c.onCancel,s=c.onCreate,m=p(),d=X(t(u||""),2),v=d[0],y=d[1],g=X(h(m),1)[0],b=o((function(e){var t=e.lexicon;t.uri||delete t.summary,g({payload:{data:a(t)}},{onSuccess:function(e){var t=e.data;y(""),s(t)}})}),[g,s,a]);return e.createElement(E,{open:!0,onClose:l,fullWidth:!0,maxWidth:"sm"},e.createElement(i,{onSubmit:b,render:function(t){var r=t.handleSubmit,o=t.dirtyFields;return e.createElement("form",{onSubmit:r},e.createElement(O,null,e.createElement(Ee,{label:"Titre",source:"lexicon",initialValue:v,fetchLexicon:n})),e.createElement(j,null,e.createElement(A,{onClick:l},"Annuler"),e.createElement(A,{variant:"contained",color:"primary",type:"submit",disabled:!o.lexicon},"Ajouter")))}}))},je=function(e){var t=m(),r=d(),n=u();return o(function(){var o=V($().mark((function o(i){var a,c,u,l,s,f,p=arguments;return $().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return a=p.length>1&&void 0!==p[1]?p[1]:[],o.next=3,t.getOne(e,{id:i});case 3:return c=o.sent,u=c.data,(l=M({},u))["http://www.w3.org/ns/prov#wasDerivedFrom"]=l.id,delete l.id,delete l["@context"],a.forEach((function(e){delete l[e]})),o.next=12,t.create(e,{data:l});case 12:s=o.sent,f=s.data,r("/"+e+"/"+encodeURIComponent(f.id)+"/show"),n("La ressource a bien été copiée",{type:"success"});case 16:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}(),[e,t,r,n])},Ae=function(e){var t=m(),r=u(),n=d();return o(function(){var o=V($().mark((function o(i){return $().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.create(e,{id:i});case 2:n("/"+e+"/"+encodeURIComponent(i)+"/show"),r("La ressource a bien été importée",{type:"success"});case 4:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r])},Se=U((function(e){return{toolbar:{backgroundColor:"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900],marginTop:e.spacing(2)},field:{marginBottom:23,minWidth:e.spacing(20)}}})),ke=function(t){t.basePath,t.record;var r=t.resource,n=t.stripProperties;Se(),R(r,"@remote");var i=W(r),a=je(r),c=Ae(r);return o(function(){var e=V($().mark((function e(t){var r;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.plainUri,"fork"!==t.method){e.next=6;break}return e.next=4,a(r,n);case 4:e.next=8;break;case 6:return e.next=8,c(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a,c,n]),i?e.createElement(e.Fragment,null," "):null},Le=["stripProperties"],Ie=U((function(e){return{tab:{maxWidth:"unset",padding:"6px 24px"}}})),Pe=function(r){var n=r.stripProperties,o=H(r,Le),i=X(t(0),2),a=i[0],c=i[1],u=v().theme,l=S((function(){return u.breakpoints.down("sm")}),{noSsr:!0}),s=Ie();return e.createElement(e.Fragment,null,e.createElement(k,{pb:2,fullWidth:!0},e.createElement(L,{value:a,onChange:function(e,t){return c(t)},indicatorColor:"primary"},e.createElement(I,{className:s.tab,label:"Créer"}),e.createElement(I,{className:s.tab,label:l?"Importer":"Importer une ressource distante"})),e.createElement(P,null)),0===a&&e.createElement(y,o),1===a&&e.createElement(ke,q({stripProperties:n||[]},o)))},Te=["resource","fetchLexicon","selectData","redirect","save","saving"],Ue=U((function(e){return{toolbar:{backgroundColor:"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900],marginTop:e.spacing(2)},field:{marginBottom:23,minWidth:e.spacing(20)}}})),Ce=function(t){t.resource;var r=t.fetchLexicon,n=t.selectData,a=t.redirect,c=t.save;t.saving,H(t,Te);var u=Ue(),l=o(function(){var e=V($().mark((function e(t){var r;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=t.lexicon).uri||delete r.summary,"string"==typeof r&&(r={label:r}),e.next=5,c(n(r),a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n,c,a]);return e.createElement(i,{onSubmit:l,render:function(t){var n=t.handleSubmit,o=t.dirtyFields;return e.createElement("form",{onSubmit:n},e.createElement(k,{m:"1em"},e.createElement(Ee,{label:"Titre",source:"lexicon",fetchLexicon:r,validate:g()})),e.createElement(T,{className:u.toolbar},e.createElement(A,{type:"submit",startIcon:e.createElement(_,null),variant:"contained",color:"primary",disabled:!o.lexicon},"Créer")))}})},Ne=function(e){return e&&e[0].toUpperCase()+e.slice(1)||""},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://www.wikidata.org/w/api.php";return function(){var t=V($().mark((function t(r){var n,o,i,a;return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.keyword,o=r.locale,t.next=3,fetch("".concat(e,"?action=wbsearchentities&format=json&language=").concat(o,"&uselang=").concat(o,"&type=item&limit=10&origin=*&search=").concat(encodeURIComponent(n)));case 3:if(!(i=t.sent).ok){t.next=11;break}return t.next=7,i.json();case 7:return a=t.sent,t.abrupt("return",a.search.map((function(e){return{uri:e.concepturi,label:Ne(e.match.text),summary:Ne(e.description),icon:N}})));case 11:throw new Error("Failed to fetch Wikidata server");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Re=Q((function(e){var t,r;t=J,r=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var r=e.shift();e[0]=r+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var o=e[n];if("string"!=typeof o)throw new TypeError("Url must be a string. Received "+o);""!==o&&(n>0&&(o=o.replace(/^[\/]+/,"")),o=n<e.length-1?o.replace(/[\/]+$/,""):o.replace(/[\/]+$/,"/"),t.push(o))}var i=t.join("/"),a=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=a.shift()+(a.length>0?"?":"")+a.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=r():t.urljoin=r()})),We=function(e){return e&&e[0].toUpperCase()+e.slice(1)||""},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://ec.europa.eu/esco/api";return function(){var t=V($().mark((function t(r){var n,o,i,a;return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.keyword,o=r.locale,t.next=3,fetch(Re(e,"suggest2?text=".concat(encodeURIComponent(n),"&language=").concat(o,"&type=skill&isInScheme=&facet=&offset=&limit=&full=&selectedVersion=&viewObsolete=")));case 3:if(!(i=t.sent).ok){t.next=11;break}return t.next=7,i.json();case 7:return a=t.sent,t.abrupt("return",a._embedded.results.map((function(e){return{uri:e.uri,label:We(e.title.replace("’","'")),icon:G}})));case 11:throw new Error("Failed to fetch ESCO server");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};export{Pe as CreateOrImportForm,ke as ImportForm,Ee as LexiconAutocompleteInput,Oe as LexiconCreateDialog,Ce as LexiconImportForm,_e as fetchESCO,Fe as fetchWikidata,je as useFork,Ae as useSync};
//# sourceMappingURL=index.es.js.map
