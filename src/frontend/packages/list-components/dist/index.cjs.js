"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-admin"),r=require("@mui/material"),n=require("@mui/styles/makeStyles"),a=require("@mui/icons-material/AddCircle"),l=require("@mui/icons-material/Launch"),i=require("@semapps/semantic-data-provider"),o=require("react-masonry-css"),u=require("react-router");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var d=s(e),f=c(e),m=s(n),p=s(a),h=s(l),v=s(o);function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var k=["classes","className","children","linkType","component","primaryText","appendLink","externalLinks"],x=m.default((function(e){return{root:{display:"flex",flexWrap:"wrap"},link:{textDecoration:"none",maxWidth:"100%"},chipField:{maxWidth:"100%"},addIcon:{cursor:"pointer",fontSize:35,position:"relative",top:-2,left:-2},launchIcon:{width:16,paddingRight:6,marginLeft:-10}}})),C=function(e){return e.stopPropagation()},L=function(){},w=function(e){return e.stopPropagation()},P=function(){},O=function(e){var n=e.children,a=e.linkType,l=e.externalLinks,o=e.spacing,u=e.xs,s=e.sm,c=e.md,d=e.lg,m=e.xl,p=t.useListContext(),h=p.data,v=p.basePath,y=p.isLoading,b=i.useGetExternalLink(l);return y?null:f.createElement(r.Grid,{container:!0,spacing:o},h.map((function(e){if(!e||e._error)return null;var l,i=b(e);return l=i?f.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",onClick:w},f.cloneElement(f.Children.only(n),{externalLink:!0,onClick:P})):a?f.createElement(t.Link,{to:t.linkToRecord(v,e.id,a),onClick:w},f.cloneElement(f.Children.only(n),{onClick:P})):n,f.createElement(r.Grid,{item:!0,key:e.id,xs:u,sm:s,md:c,lg:d,xl:m},f.createElement(t.RecordContextProvider,{value:e},l))})))};O.defaultProps={xs:6,spacing:3,linkType:"edit",externalLinks:!1};var j=m.default((function(){return{grid:{display:"flex",marginLeft:-20,marginBottom:-20,width:"auto"},column:{paddingLeft:20,backgroundClip:"padding-box"},card:{marginBottom:20},media:{height:0,paddingTop:"56.25%"}}})),F=function(e){var n=e.image,a=e.content,l=e.actions,i=e.breakpointCols,o=e.linkType,u=j(),s=t.useListContext(),c=s.ids,f=s.data,m=s.basePath;return d.default.createElement(v.default,{breakpointCols:i,className:u.grid,columnClassName:u.column},c.map((function(e){if(!f[e]||f[e]._error)return null;var i="function"==typeof n?n(f[e]):n;return d.default.createElement(r.Card,{key:e,className:u.card},d.default.createElement(t.Link,{to:t.linkToRecord(m,e)+"/"+o},d.default.createElement(r.CardActionArea,null,i&&d.default.createElement(r.CardMedia,{className:u.media,image:i}),a&&d.default.createElement(r.CardContent,null,a(f[e])))),l&&d.default.createElement(r.CardActions,null,l.map((function(t){return d.default.createElement(t,{record:f[e],basePath:m})}))))})))};F.defaultProps={breakpointCols:{default:3,1050:2,700:1},linkType:"edit"};var R=function(e){var r=e.source,n=e.id,a=t.useResourceContext(),l=t.useGetList(a),i=l.data,o=l.isLoading;return d.default.createElement(d.default.Fragment,null," ",!o&&d.default.createElement("span",{className:"filter-count"},"("+Object.values(i).filter((function(e){return[].concat(e[r]).includes(n)})).length+")"))},I=function(r){var n,a=r.reference,l=r.source,o=r.inverseSource,u=r.limit,s=r.sort,c=r.filter,f=r.label,m=r.icon,p=r.showCounters,h=t.useGetList(a,{page:1,perPage:u},s,c),v=h.data,y=h.isLoading,b=t.useResourceDefinition({resource:a}),g=t.useResourceContext();i.useDataModel(g);var E=i.useContainers(g),k=t.useListContext();k.displayedFilters,k.filterValues;var x=k.setFilters;k.hideFilter,e.useEffect((function(){var e=new URLSearchParams(window.location.search);Object.fromEntries(e.entries()).filter||y||x({})}),[]);return d.default.createElement(t.FilterList,{label:f||(null==b||null===(n=b.options)||void 0===n?void 0:n.label)||"",icon:m||null!=b&&b.icon?d.default.createElement(b.icon):void 0},v&&v.filter((function(e){return function(e){if(!o)return!0;if(!E||!e)return!1;var t=!1;return Object.values(E).forEach((function(r){r.forEach((function(r){[].concat(e[o]).forEach((function(e){null!=e&&e.startsWith(r)&&(t=!0)}))}))})),t}(e)})).map((function(e){return d.default.createElement(t.FilterListItem,{key:e.id,label:d.default.createElement("span",{className:"filter-label"},e["pair:label"],p&&d.default.createElement(R,{source:l,id:e.id})),value:(r={},n=l,a=e.id,n in r?Object.defineProperty(r,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[n]=a,r)});var r,n,a})))};I.defaultProps={limit:25,showCounters:!0};var N=d.default.createContext({views:null,currentView:null,setView:function(){return null}}),T=function(){var e=new URLSearchParams(u.useLocation().search),r=d.default.useContext(N),n=r.views,a=r.currentView,l=r.setView;return n?Object.entries(n).filter((function(e){return g(e,1)[0]!==a})).map((function(r){var n=g(r,2),a=n[0],i=n[1];return e.set("view",a),e.set("page",1),e.set("perPage",i.perPage),i.sort&&(e.set("sort",i.sort.field),e.set("order",i.sort.order)),d.default.createElement(t.Link,{key:a,to:"?"+e.toString()},d.default.createElement(t.Button,{onClick:function(){return l(a)},label:i.label},d.default.createElement(i.icon)))})):null},S=["bulkActions","basePath","sort","displayedFilters","exporter","filters","filterValues","onUnselectItems","resource","selectedIds","showFilter","total"],V=function(e){var n=e.bulkActions,a=e.basePath,l=e.sort,i=e.displayedFilters,o=e.exporter,u=e.filters,s=e.filterValues,c=e.onUnselectItems,f=e.resource,m=e.selectedIds,p=e.showFilter,h=e.total,v=b(e,S),y=g(t.useTheme(),1)[0],E=r.useMediaQuery((function(){return y.breakpoints.down("sm")})),k=t.useResourceDefinition(v);return d.default.createElement(t.TopToolbar,null,d.default.createElement(T,null),u&&d.default.cloneElement(u,{resource:f,showFilter:p,displayedFilters:i,filterValues:s,context:"button"}),k.hasCreate&&d.default.createElement(t.CreateButton,{basePath:a}),!E&&!1!==o&&d.default.createElement(t.ExportButton,{disabled:0===h,resource:f,sort:l,filter:s,exporter:o}),n&&d.default.cloneElement(n,{basePath:a,filterValues:s,resource:f,selectedIds:m,onUnselectItems:c}))},A=["children","actions","views","ListComponent"],q=function(t){t.children;var r=t.actions,n=t.views,a=t.ListComponent,l=b(t,A),i=new URLSearchParams(u.useLocation().search),o=i.has("view")?i.get("view"):Object.keys(n)[0],s=g(e.useState(o),2),c=s[0],f=s[1];return d.default.createElement(N.Provider,{value:{views:n,currentView:c,setView:f}},d.default.createElement(a,y({actions:r,pagination:n[c].pagination,perPage:n[o].perPage,sort:n[o].sort},l),n[c].list))};q.defaultProps={actions:d.default.createElement(V,null),ListComponent:t.List},exports.ChipList=function(e){e.classes,e.className,e.children;var n=e.linkType,a=void 0===n?"edit":n,l=e.component,o=void 0===l?"div":l,u=e.primaryText,s=e.appendLink,c=e.externalLinks,f=void 0!==c&&c,m=b(e,k),v=t.useListContext(e),g=v.data,E=v.isLoading,w=v.basePath,P=i.useGetExternalLink(f),O=x(e),j=o;return E?d.default.createElement(r.LinearProgress,null):d.default.createElement(j,y({className:O.root},t.sanitizeListRestProps(m)),g.map((function(e){if(!e||e._error)return null;var r=P(e);return r?d.default.createElement(t.RecordContextProvider,{value:e,key:e.id},d.default.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:O.link,onClick:C},d.default.createElement(t.ChipField,{source:u,className:O.chipField,color:"secondary",deleteIcon:d.default.createElement(h.default,{className:O.launchIcon}),onClick:L,onDelete:L}))):a?d.default.createElement(t.RecordContextProvider,{value:e,key:e.id},d.default.createElement(t.Link,{className:O.link,to:t.linkToRecord(w,e.id,a),onClick:C},d.default.createElement(t.ChipField,{source:u,className:O.chipField,color:"secondary",onClick:L}))):d.default.createElement(t.RecordContextProvider,{value:e,key:e.id},d.default.createElement(t.ChipField,{source:u,className:O.chipField,color:"secondary",onClick:L}))})),s&&d.default.createElement(p.default,{color:"primary",className:O.addIcon,onClick:s}))},exports.GridList=O,exports.ListActionsWithViews=V,exports.ListViewContext=N,exports.MasonryList=F,exports.MultiViewsList=q,exports.ReferenceFilter=I,exports.ViewsButtons=T;
//# sourceMappingURL=index.cjs.js.map
