import e,{useState as t,useMemo as r,useEffect as n,useCallback as o}from"react";import{Form as i}from"react-final-form";import{useLocale as a,useTranslate as c,useNotify as u,useInput as l,FieldTitle as s,useCreateSuggestionContext as f,useResourceContext as p,useCreate as h,useDataProvider as m,useRedirect as d,FormInput as v,TextInput as y,RadioButtonGroupInput as g,SimpleForm as b}from"react-admin";import{makeStyles as x,TextField as w,Grid as E,Typography as O,Dialog as j,DialogContent as A,DialogActions as S,Button as k,Box as L,Toolbar as U,useMediaQuery as I,Tabs as P,Tab as C,Divider as T}from"@material-ui/core";import N from"@material-ui/lab/Autocomplete";import R from"@material-ui/icons/Language";import F from"@material-ui/icons/Add";import W from"final-form-calculate";import _ from"@material-ui/icons/SaveAlt";import{useContainers as G,useDataModel as M}from"@semapps/semantic-data-provider";import{ReferenceInput as D,MultiServerAutocompleteInput as $}from"@semapps/input-components";import B from"@material-ui/icons/Save";import V from"@material-ui/icons/StarBorder";function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){K(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
H=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,a),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var s={};function f(){}function p(){}function h(){}var m={};c(m,o,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(j([])));v&&v!==t&&r.call(v,o)&&(m=v);var y=h.prototype=f.prototype=Object.create(m);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(o,i){function a(){return new t((function(n,a){!function n(o,i,a,c){var u=l(e[o],e,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(f).then((function(e){s.value=e,a(s)}),(function(e){return n("throw",e,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:A}}function A(){return{value:void 0,done:!0}}return p.prototype=h,c(y,"constructor",h),c(h,"constructor",p),p.displayName=c(h,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,a,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(y),c(y,a,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}function X(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function z(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){X(i,n,o,a,c,"next",e)}function c(e){X(i,n,o,a,c,"throw",e)}a(void 0)}))}}function K(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(){return(Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,t)||te(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e){return function(e){if(Array.isArray(e))return re(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||te(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){if(e){if("string"==typeof e)return re(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?re(e,t):void 0}}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ne="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function oe(e,t){return e(t={exports:{}},t.exports),t.exports}var ie=oe((function(e,t){var r,n;e.exports=(r={772:(e,t,r)=>{const n=r(826).remove,o=/[.*+?^${}()|[\]\\]/g,i=/[a-z0-9_]/i,a=/\s+/;e.exports=function(e,t,r){var c,u;u={insideWords:!1,findAllOccurrences:!1,requireMatchAll:!1},c=(c=r)||{},Object.keys(c).forEach(e=>{u[e]=!!c[e]}),r=u;const l=Array.from(e).map(e=>n(e));let s=l.join("");return(t=n(t)).trim().split(a).filter(e=>e.length>0).reduce((e,t)=>{const n=t.length,a=!r.insideWords&&i.test(t[0])?"\\b":"",c=new RegExp(a+t.replace(o,"\\$&"),"i");let u,f;if(u=c.exec(s),r.requireMatchAll&&null===u)return s="",[];for(;u;){f=u.index;const t=n-l.slice(f,f+n).join("").length,o=f-l.slice(0,f).join("").length,i=[f+o,f+n+o+t];if(i[0]!==i[1]&&e.push(i),s=s.slice(0,f)+new Array(n+1).join(" ")+s.slice(f+n),!r.findAllOccurrences)break;u=c.exec(s)}return e},[]).sort((e,t)=>e[0]-t[0])}},826:e=>{var t={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ấ":"A","Ắ":"A","Ẳ":"A","Ẵ":"A","Ặ":"A","Æ":"AE","Ầ":"A","Ằ":"A","Ȃ":"A","Ç":"C","Ḉ":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ế":"E","Ḗ":"E","Ề":"E","Ḕ":"E","Ḝ":"E","Ȇ":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ḯ":"I","Ȋ":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ố":"O","Ṍ":"O","Ṓ":"O","Ȏ":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ấ":"a","ắ":"a","ẳ":"a","ẵ":"a","ặ":"a","æ":"ae","ầ":"a","ằ":"a","ȃ":"a","ç":"c","ḉ":"c","è":"e","é":"e","ê":"e","ë":"e","ế":"e","ḗ":"e","ề":"e","ḕ":"e","ḝ":"e","ȇ":"e","ì":"i","í":"i","î":"i","ï":"i","ḯ":"i","ȋ":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ố":"o","ṍ":"o","ṓ":"o","ȏ":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","C̆":"C","c̆":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","Ǵ":"G","ĝ":"g","ǵ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ḫ":"H","ḫ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĳ":"IJ","ĳ":"ij","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","Ḱ":"K","ḱ":"k","K̆":"K","k̆":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"l","ł":"l","Ḿ":"M","ḿ":"m","M̆":"M","m̆":"m","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","ŉ":"n","N̆":"N","n̆":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","P̆":"P","p̆":"p","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","R̆":"R","r̆":"r","Ȓ":"R","ȓ":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","Ș":"S","ș":"s","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","ț":"t","Ț":"T","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","T̆":"T","t̆":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ȗ":"U","ȗ":"u","V̆":"V","v̆":"v","Ŵ":"W","ŵ":"w","Ẃ":"W","ẃ":"w","X̆":"X","x̆":"x","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Y̆":"Y","y̆":"y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ſ":"s","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ǎ":"A","ǎ":"a","Ǐ":"I","ǐ":"i","Ǒ":"O","ǒ":"o","Ǔ":"U","ǔ":"u","Ǖ":"U","ǖ":"u","Ǘ":"U","ǘ":"u","Ǚ":"U","ǚ":"u","Ǜ":"U","ǜ":"u","Ứ":"U","ứ":"u","Ṹ":"U","ṹ":"u","Ǻ":"A","ǻ":"a","Ǽ":"AE","ǽ":"ae","Ǿ":"O","ǿ":"o","Þ":"TH","þ":"th","Ṕ":"P","ṕ":"p","Ṥ":"S","ṥ":"s","X́":"X","x́":"x","Ѓ":"Г","ѓ":"г","Ќ":"К","ќ":"к","A̋":"A","a̋":"a","E̋":"E","e̋":"e","I̋":"I","i̋":"i","Ǹ":"N","ǹ":"n","Ồ":"O","ồ":"o","Ṑ":"O","ṑ":"o","Ừ":"U","ừ":"u","Ẁ":"W","ẁ":"w","Ỳ":"Y","ỳ":"y","Ȁ":"A","ȁ":"a","Ȅ":"E","ȅ":"e","Ȉ":"I","ȉ":"i","Ȍ":"O","ȍ":"o","Ȑ":"R","ȑ":"r","Ȕ":"U","ȕ":"u","B̌":"B","b̌":"b","Č̣":"C","č̣":"c","Ê̌":"E","ê̌":"e","F̌":"F","f̌":"f","Ǧ":"G","ǧ":"g","Ȟ":"H","ȟ":"h","J̌":"J","ǰ":"j","Ǩ":"K","ǩ":"k","M̌":"M","m̌":"m","P̌":"P","p̌":"p","Q̌":"Q","q̌":"q","Ř̩":"R","ř̩":"r","Ṧ":"S","ṧ":"s","V̌":"V","v̌":"v","W̌":"W","w̌":"w","X̌":"X","x̌":"x","Y̌":"Y","y̌":"y","A̧":"A","a̧":"a","B̧":"B","b̧":"b","Ḑ":"D","ḑ":"d","Ȩ":"E","ȩ":"e","Ɛ̧":"E","ɛ̧":"e","Ḩ":"H","ḩ":"h","I̧":"I","i̧":"i","Ɨ̧":"I","ɨ̧":"i","M̧":"M","m̧":"m","O̧":"O","o̧":"o","Q̧":"Q","q̧":"q","U̧":"U","u̧":"u","X̧":"X","x̧":"x","Z̧":"Z","z̧":"z"},r=Object.keys(t).join("|"),n=new RegExp(r,"g"),o=new RegExp(r,""),i=function(e){return e.replace(n,(function(e){return t[e]}))};e.exports=i,e.exports.has=function(e){return!!e.match(o)},e.exports.remove=i}},n={},function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return r[t](i,i.exports,e),i.exports}(772))}));ie.AutosuggestHighlightMatch;var ae=oe((function(e,t){var r,n;e.exports=(r={705:e=>{e.exports=function(e,t){const r=[];return 0===t.length?r.push({text:e,highlight:!1}):t[0][0]>0&&r.push({text:e.slice(0,t[0][0]),highlight:!1}),t.forEach((n,o)=>{const i=n[0],a=n[1];r.push({text:e.slice(i,a),highlight:!0}),o===t.length-1?a<e.length&&r.push({text:e.slice(a,e.length),highlight:!1}):a<t[o+1][0]&&r.push({text:e.slice(a,t[o+1][0]),highlight:!1})}),r}}},n={},function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return r[t](i,i.exports,e),i.exports}(705))}));ae.AutosuggestHighlightParse;var ce=/^\s+|\s+$/g,ue=/^[-+]0x[0-9a-f]+$/i,le=/^0b[01]+$/i,se=/^0o[0-7]+$/i,fe=parseInt,pe="object"==typeof ne&&ne&&ne.Object===Object&&ne,he="object"==typeof self&&self&&self.Object===Object&&self,me=pe||he||Function("return this")(),de=Object.prototype.toString,ve=Math.max,ye=Math.min,ge=function(){return me.Date.now()};function be(e,t,r){var n,o,i,a,c,u,l=0,s=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,l=t,a=e.apply(i,r)}function m(e){return l=e,c=setTimeout(v,t),s?h(e):a}function d(e){var r=e-u;return void 0===u||r>=t||r<0||f&&e-l>=i}function v(){var e=ge();if(d(e))return y(e);c=setTimeout(v,function(e){var r=t-(e-u);return f?ye(r,i-(e-l)):r}(e))}function y(e){return c=void 0,p&&n?h(e):(n=o=void 0,a)}function g(){var e=ge(),r=d(e);if(n=arguments,o=this,u=e,r){if(void 0===c)return m(u);if(f)return c=setTimeout(v,t),h(u)}return void 0===c&&(c=setTimeout(v,t)),a}return t=we(t)||0,xe(r)&&(s=!!r.leading,i=(f="maxWait"in r)?ve(we(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),g.cancel=function(){void 0!==c&&clearTimeout(c),l=0,n=u=o=c=void 0},g.flush=function(){return void 0===c?a:y(ge())},g}function xe(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function we(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==de.call(e)}(e))return NaN;if(xe(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=xe(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(ce,"");var r=le.test(e);return r||se.test(e)?fe(e.slice(2),r?2:8):ue.test(e)?NaN:+e}var Ee=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return xe(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),be(e,t,{leading:n,maxWait:t,trailing:o})},Oe=["fetchLexicon","resource","source","initialValue","label","parse","optionText","helperText"],je=x((function(e){return{icon:{color:e.palette.text.secondary,marginRight:e.spacing(2)}}})),Ae=function(e,t){return"string"==typeof e?e:e.label?e.label:"string"==typeof t?e[t]:"function"==typeof t?t(e):void 0},Se=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},ke=function(o){var i=o.fetchLexicon,f=o.resource,p=o.source,h=o.initialValue,m=o.label,d=o.parse,v=o.optionText;o.helperText;var y=J(o,Oe),g=je(),b=a(),x=c(),j=u(),A=l(q({source:p,initialValue:h},y)),S=A.input,k=S.value,L=S.onChange,U=S.onBlur,I=S.onFocus,P=A.isRequired,C=A.meta,T=C.error,W=C.submitError,_=C.touched,G=Q(t(h),2),M=G[0],D=G[1],$=Q(t([]),2),B=$[0],V=$[1],Y=r((function(){return Ee((function(e,t){i({keyword:e,locale:b}).then((function(e){return t(e)})).catch((function(e){return j(e.message,"error")}))}),200)}),[b,i,j]);return n((function(){M&&Y(M,(function(e){return V(e)}))}),[k,M,v,Y]),e.createElement(N,{freeSolo:!0,autoComplete:!0,value:k||null,openOnFocus:!!h,options:k?[k].concat(ee(B)):B,filterSelectedOptions:!0,filterOptions:function(e,t){return""!==M&&e.push({label:Se(M),summary:'Ajouter "'.concat(Se(M),'" au dictionnaire'),icon:F}),e},clearOnBlur:!0,selectOnFocus:!0,handleHomeEndKeys:!0,getOptionLabel:function(e){return Ae(e,v)},getOptionSelected:function(e,t){return Ae(e,v)===Ae(t,v)},onChange:function(e,t){t&&d&&(t=d(t)),L(t),V([])},onInputChange:function(e,t){return D(t)},noOptionsText:x("ra.navigation.no_results"),renderInput:function(t){return t.inputProps.autoComplete="new-password",e.createElement(w,Z({},t,{autoFocus:!0,inputProps:q(q({},t.inputProps),{},{onBlur:function(e){U(e),t.inputProps.onBlur&&t.inputProps.onBlur(e)},onFocus:function(e){I(e),t.inputProps.onFocus&&t.inputProps.onFocus(e)}}),label:""!==m&&!1!==m&&e.createElement(s,{label:m,source:p,resource:f,isRequired:P}),error:!(!_||!T&&!W)},y))},renderOption:function(t){var r=ie(t.label,M),n=ae(t.label,r);return e.createElement(E,{container:!0,alignItems:"center"},e.createElement(E,{item:!0},e.createElement(t.icon||R,{className:g.icon})),e.createElement(E,{item:!0,xs:!0},"string"==typeof n?n:n.map((function(t,r){return e.createElement("span",{key:r,style:{fontWeight:t.highlight?700:400}},t.text)})),e.createElement(O,{variant:"body2",color:"textSecondary"},t.summary)))}})};ke.defaultProps={variant:"filled",margin:"dense"};var Le=function(r){var n=r.fetchLexicon,a=r.selectData,c=f(),u=c.filter,l=c.onCancel,s=c.onCreate,m=p(),d=Q(t(u||""),2),v=d[0],y=d[1],g=Q(h(m),1)[0],b=o((function(e){var t=e.lexicon;t.uri||delete t.summary,g({payload:{data:a(t)}},{onSuccess:function(e){var t=e.data;y(""),s(t)}})}),[g,s,a]);return e.createElement(j,{open:!0,onClose:l,fullWidth:!0,maxWidth:"sm"},e.createElement(i,{onSubmit:b,render:function(t){var r=t.handleSubmit,o=t.dirtyFields;return e.createElement("form",{onSubmit:r},e.createElement(A,null,e.createElement(ke,{label:"Titre",source:"lexicon",initialValue:v,fetchLexicon:n})),e.createElement(S,null,e.createElement(k,{onClick:l},"Annuler"),e.createElement(k,{variant:"contained",color:"primary",type:"submit",disabled:!o.lexicon},"Ajouter")))}}))},Ue=function(e){var t=m(),r=d(),n=u();return o(function(){var o=z(H().mark((function o(i){var a,c,u,l,s,f,p=arguments;return H().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return a=p.length>1&&void 0!==p[1]?p[1]:[],o.next=3,t.getOne(e,{id:i});case 3:return c=o.sent,u=c.data,(l=q({},u))["http://www.w3.org/ns/prov#wasDerivedFrom"]=l.id,delete l.id,delete l["@context"],a.forEach((function(e){delete l[e]})),o.next=12,t.create(e,{data:l});case 12:s=o.sent,f=s.data,r("/"+e+"/"+encodeURIComponent(f.id)+"/show"),n("La ressource a bien été copiée",{type:"success"});case 16:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}(),[e,t,r,n])},Ie=function(e){var t=m(),r=u(),n=d();return o(function(){var o=z(H().mark((function o(i){return H().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.create(e,{id:i});case 2:n("/"+e+"/"+encodeURIComponent(i)+"/show"),r("La ressource a bien été importée",{type:"success"});case 4:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r])},Pe=x((function(e){return{toolbar:{backgroundColor:"light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900],marginTop:e.spacing(2)},field:{marginBottom:23,minWidth:e.spacing(20)}}})),Ce=W({field:"remoteUri",updates:function(e){return e?{plainUri:e}:{}}},{field:"plainUri",updates:function(e,t,r){return e!==r.remoteUri?{remoteUri:null}:{}}}),Te=function(t){var r=t.basePath,n=t.record,a=t.resource,c=t.stripProperties,u=Pe(),l=G(a,"@remote"),s=M(a),f=Ue(a),p=Ie(a),h=o(function(){var e=z(H().mark((function e(t){var r;return H().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.plainUri,"fork"!==t.method){e.next=6;break}return e.next=4,f(r,c);case 4:e.next=8;break;case 6:return e.next=8,p(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[f,p,c]);return s?e.createElement(i,{onSubmit:h,decorators:[Ce],initialValues:{method:"sync"},render:function(t){var o,i,c=t.handleSubmit,f=t.dirtyFields;return e.createElement("form",{onSubmit:c},e.createElement(L,{m:"1em"},l&&Object.keys(l).length>0&&e.createElement(v,{input:e.createElement(D,{source:"remoteUri",label:"Rechercher...",reference:a,filter:{_servers:"@remote",_predicates:[null==s||null===(o=s.fieldsMapping)||void 0===o?void 0:o.title]},enableGetChoices:function(e){var t=e.q;return!!(t&&t.length>1)},fullWidth:!0},e.createElement($,{optionText:null==s||null===(i=s.fieldsMapping)||void 0===i?void 0:i.title,shouldRenderSuggestions:function(e){return e.length>1},resettable:!0})),basePath:r,record:n,resource:a,variant:"filled",margin:"dense"}),e.createElement(v,{input:e.createElement(y,{source:"plainUri",label:"URL de la ressource distante",fullWidth:!0}),basePath:r,record:n,resource:a,variant:"filled",margin:"dense"}),e.createElement(v,{input:e.createElement(g,{source:"method",label:"Méthode d'importation",choices:[{id:"sync",name:"Garder la ressource locale synchronisée avec la ressource distante"},{id:"fork",name:"Créer une nouvelle version de la ressource (fork)"}]}),basePath:r,record:n,resource:a,variant:"filled",margin:"dense"})),e.createElement(U,{className:u.toolbar},e.createElement(k,{type:"submit",startIcon:e.createElement(_,null),variant:"contained",color:"primary",disabled:!f.plainUri},"Importer")))}}):null},Ne=["stripProperties"],Re=x((function(e){return{tab:{maxWidth:"unset",padding:"6px 24px"}}})),Fe=function(r){var n=r.stripProperties,o=J(r,Ne),i=Q(t(0),2),a=i[0],c=i[1],u=I((function(e){return e.breakpoints.down("xs")}),{noSsr:!0}),l=Re();return e.createElement(e.Fragment,null,e.createElement(L,{pb:2,fullWidth:!0},e.createElement(P,{value:a,onChange:function(e,t){return c(t)},indicatorColor:"primary"},e.createElement(C,{className:l.tab,label:"Créer"}),e.createElement(C,{className:l.tab,label:u?"Importer":"Importer une ressource distante"})),e.createElement(T,null)),0===a&&e.createElement(b,o),1===a&&e.createElement(Te,Z({stripProperties:n||[]},o)))},We=["resource","fetchLexicon","selectData","redirect","save","saving"],_e=x((function(e){return{toolbar:{backgroundColor:"light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900],marginTop:e.spacing(2)},field:{marginBottom:23,minWidth:e.spacing(20)}}})),Ge=function(t){t.resource;var r=t.fetchLexicon,n=t.selectData,a=t.redirect,c=t.save;t.saving,J(t,We);var u=_e(),l=o(function(){var e=z(H().mark((function e(t){var r;return H().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=t.lexicon).uri||delete r.summary,e.next=4,c(n(r),a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n,c,a]);return e.createElement(i,{onSubmit:l,render:function(t){var n=t.handleSubmit,o=t.dirtyFields;return e.createElement("form",{onSubmit:n},e.createElement(L,{m:"1em"},e.createElement(ke,{label:"Titre",source:"lexicon",fetchLexicon:r})),e.createElement(U,{className:u.toolbar},e.createElement(k,{type:"submit",startIcon:e.createElement(B,null),variant:"contained",color:"primary",disabled:!o.lexicon},"Créer")))}})},Me=function(e){return e&&e[0].toUpperCase()+e.slice(1)||""},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://www.wikidata.org/w/api.php";return function(){var t=z(H().mark((function t(r){var n,o,i,a;return H().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.keyword,o=r.locale,t.next=3,fetch("".concat(e,"?action=wbsearchentities&format=json&language=").concat(o,"&uselang=").concat(o,"&type=item&limit=10&origin=*&search=").concat(encodeURIComponent(n)));case 3:if(!(i=t.sent).ok){t.next=11;break}return t.next=7,i.json();case 7:return a=t.sent,t.abrupt("return",a.search.map((function(e){return{uri:e.concepturi,label:Me(e.match.text),summary:Me(e.description),icon:R}})));case 11:throw new Error("Failed to fetch Wikidata server");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},$e=oe((function(e){var t,r;t=ne,r=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var r=e.shift();e[0]=r+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var o=e[n];if("string"!=typeof o)throw new TypeError("Url must be a string. Received "+o);""!==o&&(n>0&&(o=o.replace(/^[\/]+/,"")),o=n<e.length-1?o.replace(/[\/]+$/,""):o.replace(/[\/]+$/,"/"),t.push(o))}var i=t.join("/"),a=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=a.shift()+(a.length>0?"?":"")+a.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=r():t.urljoin=r()})),Be=function(e){return e&&e[0].toUpperCase()+e.slice(1)||""},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://ec.europa.eu/esco/api";return function(){var t=z(H().mark((function t(r){var n,o,i,a;return H().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.keyword,o=r.locale,t.next=3,fetch($e(e,"suggest2?text=".concat(encodeURIComponent(n),"&language=").concat(o,"&type=skill&isInScheme=&facet=&offset=&limit=&full=&selectedVersion=&viewObsolete=")));case 3:if(!(i=t.sent).ok){t.next=11;break}return t.next=7,i.json();case 7:return a=t.sent,t.abrupt("return",a._embedded.results.map((function(e){return{uri:e.uri,label:Be(e.title.replace("’","'")),icon:V}})));case 11:throw new Error("Failed to fetch ESCO server");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};export{Fe as CreateOrImportForm,Te as ImportForm,ke as LexiconAutocompleteInput,Le as LexiconCreateDialog,Ge as LexiconImportForm,Ve as fetchESCO,De as fetchWikidata,Ue as useFork,Ie as useSync};
//# sourceMappingURL=index.es.js.map
