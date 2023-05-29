import*as e from"react";import t,{useEffect as r,useState as n}from"react";import{useListContext as a,useCreatePath as l,sanitizeListRestProps as i,RecordContextProvider as o,ChipField as c,Link as s,useGetList as u,useResourceDefinition as m,useResourceContext as d,FilterList as f,FilterListItem as p,Button as v,useTheme as y,TopToolbar as h,CreateButton as g,ExportButton as b,List as E}from"react-admin";import{LinearProgress as k,Grid as w,Card as x,CardActionArea as C,CardMedia as P,CardContent as L,CardActions as O,useMediaQuery as j}from"@mui/material";import N from"@mui/styles/makeStyles";import I from"@mui/icons-material/AddCircle";import F from"@mui/icons-material/Launch";import{useGetExternalLink as S,useDataModel as V,useContainers as T}from"@semapps/semantic-data-provider";import A from"react-masonry-css";import{useLocation as U}from"react-router";function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var D=["classes","className","children","linkType","component","primaryText","appendLink","externalLinks"],z=N((function(){return{root:{display:"flex",flexWrap:"wrap"},link:{textDecoration:"none",maxWidth:"100%"},chipField:{maxWidth:"100%"},addIcon:{cursor:"pointer",fontSize:35,position:"relative",top:2},launchIcon:{width:20,paddingRight:6,marginLeft:-10}}})),M=function(e){return e.stopPropagation()},$=function(){},q=function(e){e.classes,e.className,e.children;var r=e.linkType,n=void 0===r?"edit":r,u=e.component,m=void 0===u?"div":u,d=e.primaryText,f=e.appendLink,p=e.externalLinks,v=void 0!==p&&p,y=R(e,D),h=a(e),g=h.data,b=h.isLoading,E=h.resource,w=S(v),x=l(),C=z(e),P=m;return b?t.createElement(k,null):t.createElement(P,_({className:C.root},i(y)),g.map((function(e){if(!e||e._error)return null;var r=w(e);return r?t.createElement(o,{value:e,key:e.id},t.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:C.link,onClick:M},t.createElement(c,{source:d,className:C.chipField,color:"secondary",deleteIcon:t.createElement(F,{className:C.launchIcon}),onClick:$,onDelete:$}))):n?t.createElement(o,{value:e,key:e.id},t.createElement(s,{className:C.link,to:x({resource:E,id:e.id,type:n}),onClick:M},t.createElement(c,{source:d,className:C.chipField,color:"secondary",onClick:$}))):t.createElement(o,{value:e,key:e.id},t.createElement(c,{source:d,className:C.chipField,color:"secondary",onClick:$}))})),f&&t.createElement(I,{color:"primary",className:C.addIcon,onClick:f}))},G=function(e){return e.stopPropagation()},H=function(){},J=function(t){var r=t.children,n=t.linkType,i=t.externalLinks,c=t.spacing,u=t.xs,m=t.sm,d=t.md,f=t.lg,p=t.xl,v=a(),y=v.data,h=v.resource,g=v.isLoading,b=S(i),E=l();return g?null:e.createElement(w,{container:!0,spacing:c},y.map((function(t){if(!t||t._error)return null;var a,l=b(t);return a=l?e.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",onClick:G},e.cloneElement(e.Children.only(r),{externalLink:!0,onClick:H})):n?e.createElement(s,{to:E({resource:h,id:t.id,type:n}),onClick:G},e.cloneElement(e.Children.only(r),{onClick:H})):r,e.createElement(w,{item:!0,key:t.id,xs:u,sm:m,md:d,lg:f,xl:p},e.createElement(o,{value:t},a))})))};J.defaultProps={xs:6,spacing:3,linkType:"edit",externalLinks:!1};var K=N((function(){return{grid:{display:"flex",marginLeft:-20,marginBottom:-20,width:"auto"},column:{paddingLeft:20,backgroundClip:"padding-box"},card:{marginBottom:20},media:{height:0,paddingTop:"56.25%"}}})),Q=function(e){var r=e.image,n=e.content,i=e.actions,c=e.breakpointCols,u=e.linkType,m=K(),d=a(),f=d.data,p=d.resource,v=l();return t.createElement(A,{breakpointCols:c,className:m.grid,columnClassName:m.column},f.map((function(e){if(!e||e._error)return null;var a="function"==typeof r?r(e):r;return t.createElement(o,{value:e},t.createElement(x,{key:e.id,className:m.card},t.createElement(s,{to:v({resource:p,id:e.id,type:u})},t.createElement(C,null,a&&t.createElement(P,{className:m.media,image:a}),n&&t.createElement(L,null,n(e)))),i&&t.createElement(O,null,i.map((function(e){return t.createElement(e)})))))})))};Q.defaultProps={breakpointCols:{default:3,1050:2,700:1},linkType:"edit"};var X=function(e){var r=e.source,n=e.id,a=d(),l=u(a),i=l.data,o=l.isLoading;return t.createElement(t.Fragment,null," ",!o&&t.createElement("span",{className:"filter-count"},"("+Object.values(i).filter((function(e){return[].concat(e[r]).includes(n)})).length+")"))},Y=function(e){var n,l=e.reference,i=e.source,o=e.inverseSource,c=e.limit,s=e.sort,v=e.filter,y=e.label,h=e.icon,g=e.showCounters,b=u(l,{page:1,perPage:c},s,v),E=b.data,k=b.isLoading,w=m({resource:l}),x=d();V(x);var C=T(x),P=a();P.displayedFilters,P.filterValues;var L=P.setFilters;P.hideFilter,r((function(){var e=new URLSearchParams(window.location.search);Object.fromEntries(e.entries()).filter||k||L({})}),[]);return t.createElement(f,{label:y||(null==w||null===(n=w.options)||void 0===n?void 0:n.label)||"",icon:h||null!=w&&w.icon?t.createElement(w.icon):void 0},E&&E.filter((function(e){return function(e){if(!o)return!0;if(!C||!e)return!1;var t=!1;return Object.values(C).forEach((function(r){r.forEach((function(r){[].concat(e[o]).forEach((function(e){null!=e&&e.startsWith(r)&&(t=!0)}))}))})),t}(e)})).map((function(e){return t.createElement(p,{key:e.id,label:t.createElement("span",{className:"filter-label"},e["pair:label"],g&&t.createElement(X,{source:i,id:e.id})),value:(r={},n=i,a=e.id,n in r?Object.defineProperty(r,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[n]=a,r)});var r,n,a})))};Y.defaultProps={limit:25,showCounters:!0};var Z=t.createContext({views:null,currentView:null,setView:function(){return null}}),ee=function(){var e=new URLSearchParams(U().search),r=t.useContext(Z),n=r.views,a=r.currentView,l=r.setView;return n?Object.entries(n).filter((function(e){return W(e,1)[0]!==a})).map((function(r){var n=W(r,2),a=n[0],i=n[1];return e.set("view",a),e.set("page",1),e.set("perPage",i.perPage),i.sort&&(e.set("sort",i.sort.field),e.set("order",i.sort.order)),t.createElement(s,{key:a,to:"?"+e.toString()},t.createElement(v,{onClick:function(){return l(a)},label:i.label},t.createElement(i.icon)))})):null},te=["bulkActions","basePath","sort","displayedFilters","exporter","filters","filterValues","onUnselectItems","resource","selectedIds","showFilter","total"],re=function(e){var r=e.bulkActions,n=e.basePath,a=e.sort,l=e.displayedFilters,i=e.exporter,o=e.filters,c=e.filterValues,s=e.onUnselectItems,u=e.resource,d=e.selectedIds,f=e.showFilter,p=e.total,v=R(e,te),E=W(y(),1)[0],k=j((function(){return E.breakpoints.down("sm")})),w=m(v);return t.createElement(h,null,t.createElement(ee,null),o&&t.cloneElement(o,{resource:u,showFilter:f,displayedFilters:l,filterValues:c,context:"button"}),w.hasCreate&&t.createElement(g,{basePath:n}),!k&&!1!==i&&t.createElement(b,{disabled:0===p,resource:u,sort:a,filter:c,exporter:i}),r&&t.cloneElement(r,{basePath:n,filterValues:c,resource:u,selectedIds:d,onUnselectItems:s}))},ne=["children","actions","views","ListComponent"],ae=function(e){e.children;var r=e.actions,a=e.views,l=e.ListComponent,i=R(e,ne),o=new URLSearchParams(U().search),c=o.has("view")?o.get("view"):Object.keys(a)[0],s=W(n(c),2),u=s[0],m=s[1];return t.createElement(Z.Provider,{value:{views:a,currentView:u,setView:m}},t.createElement(l,_({actions:r,pagination:a[u].pagination,perPage:a[c].perPage,sort:a[c].sort},i),a[u].list))};ae.defaultProps={actions:t.createElement(re,null),ListComponent:E};export{q as ChipList,J as GridList,re as ListActionsWithViews,Z as ListViewContext,Q as MasonryList,ae as MultiViewsList,Y as ReferenceFilter,ee as ViewsButtons};
//# sourceMappingURL=index.es.js.map
