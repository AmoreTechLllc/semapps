import*as e from"react";import t,{useState as n,useMemo as r,useEffect as a,useLayoutEffect as o,Children as i,isValidElement as l,cloneElement as c}from"react";import{Redirect as s,useLocation as u,useHistory as m}from"react-router";import{getResources as p,AppBar as d,Link as f,MenuItemLink as h,Layout as b,TopToolbar as g,useGetIdentity as v,Notification as y,useResourceDefinition as E,ListButton as w,Create as C,ShowButton as P,Edit as x,useListContext as k,Button as O,CreateButton as N,ExportButton as L,List as S,Pagination as I,SimpleList as T,linkToRecord as R,useGetList as j,FilterList as B,FilterListItem as A,useTranslate as W,getFieldLabelTranslationArgs as F,getTabFullPath as M,escapePath as D,useShowContext as V,useListController as U,ListContextProvider as _,EditButton as z,Show as q,useCreate as H,useNotify as G,ReferenceInput as Y,FormWithRedirect as $,TextInput as J,required as K,SaveButton as Q}from"react-admin";import{Grid as X,Button as Z,TextField as ee,Select as te,MenuItem as ne,makeStyles as re,Zoom as ae,Hidden as oe,ListItemIcon as ie,Typography as le,Tooltip as ce,Collapse as se,List as ue,useMediaQuery as me,Box as pe,Container as de,ThemeProvider as fe,createTheme as he,Accordion as be,AccordionSummary as ge,AccordionDetails as ve,Tabs as ye,Tab as Ee,Card as we,CardActionArea as Ce,CardMedia as Pe,CardContent as xe,CardActions as ke,Divider as Oe,CircularProgress as Ne,LinearProgress as Le,Avatar as Se,Dialog as Ie,DialogTitle as Te,DialogContent as Re,DialogActions as je}from"@material-ui/core";import{Form as Be,Field as Ae,useForm as We}from"react-final-form";import{useHistory as Fe,useLocation as Me,Link as De,useRouteMatch as Ve,Route as Ue}from"react-router-dom";import{useSelector as _e,shallowEqual as ze}from"react-redux";import qe from"@material-ui/core/Typography";import He from"@material-ui/icons/ViewList";import Ge from"@material-ui/icons/ExpandMore";import Ye from"@material-ui/core/Tabs";import $e from"@material-ui/core/Tab";import Je from"react-markdown";import Ke from"@material-ui/icons/Add";import Qe from"@material-ui/icons/Cancel";var Xe=function(e){var n=e.record,r=e.typesMap;if(n){Array.isArray(n.type)||(n.type=[n.type]);var a=Object.keys(r).find((function(e){return n.type.includes(r[e])}));if(a)return t.createElement(s,{to:"/".concat(a,"/").concat(encodeURIComponent(n.id),"/show")})}return null};function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(n),!0).forEach((function(t){nt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function tt(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function nt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rt(){return(rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function at(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ot(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||lt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function it(e){return function(e){if(Array.isArray(e))return ct(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||lt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function lt(e,t){if(e){if("string"==typeof e)return ct(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ct(e,t):void 0}}function ct(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var st=["input"],ut=["input"],mt=function(e){var n=e.input,r=at(e,st);return t.createElement(ee,rt({},n,r))},pt=function(e){var n=e.input,r=at(e,ut),a=_e(p,ze);return t.createElement(te,rt({},n,r),a.filter((function(e){return e.hasList||e.name===n.value})).map((function(e){return t.createElement(ne,{value:e.name,key:e.name},e.options.label)})))},dt=function(){var e=Fe(),n=Me().pathname.match(/^\/([^/]+)/),r=n?n[1]:"Organization";return t.createElement(Be,{onSubmit:function(t){var n=t.filter,r=t.type;n?e.push("/".concat(r,"?filter=").concat(encodeURIComponent('{"q": "'.concat(n,'"}')))):e.push("/".concat(r))},initialValues:{type:r},render:function(e){var n=e.handleSubmit;return t.createElement("form",{onSubmit:n},t.createElement(X,{container:!0,spacing:2},t.createElement(X,{item:!0,xs:5},t.createElement(Ae,{name:"filter",component:mt,placeholder:"Rechercher...",fullWidth:!0})),t.createElement(X,{item:!0,xs:5},t.createElement(Ae,{name:"type",component:pt,fullWidth:!0})),t.createElement(X,{item:!0,xs:2},t.createElement(Z,{variant:"outlined",type:"submit",fullWidth:!0},"Hop"))))}})},ft=re((function(e){var t;return{menuButton:nt({},e.breakpoints.up("sm"),{display:"none"}),toolbar:nt({height:56},e.breakpoints.up("sm"),{paddingLeft:"24px"}),spacer:{flex:1},searchFormContainer:nt({minWidth:240,flex:2,margin:"0 5%"},e.breakpoints.up("md"),{minWidth:360}),searchFormWrapper:{maxWidth:880,margin:"auto"},presContainer:nt({flex:1,overflow:"hidden"},e.breakpoints.up("sm"),{flex:"unset",display:"flex",justifyContent:"flex-start",alignItems:"center"}),logoContainer:nt({display:"none"},e.breakpoints.up("sm"),{height:48,marginLeft:"0.2em",marginRight:"0.2em",display:"block"}),logo:{height:"100%"},title:(t={display:"block",color:e.palette.common.white},nt(t,e.breakpoints.up("sm"),{display:"none"}),nt(t,e.breakpoints.up("md"),{display:"block"}),t)}})),ht=function(e){var n=ft();return t.createElement(d,rt({},e,{classes:et({toolbar:n.toolbar,menuButton:n.menuButton},e.classes),color:"primary"}),t.createElement(f,{to:"/"},t.createElement("div",{className:n.presContainer},t.createElement("div",{className:n.logoContainer},t.createElement(ae,{in:!0,timeout:2e3},t.createElement("img",{className:n.logo,src:process.env.PUBLIC_URL+"/logo192.png",alt:"logo"}))),t.createElement(qe,{className:n.title,variant:"h6",noWrap:!0},e.title))),t.createElement(oe,{only:"xs"},t.createElement("div",{className:n.searchFormContainer},t.createElement("div",{className:n.searchFormWrapper},t.createElement(dt,null)))))},bt=re((function(e){return{icon:{minWidth:e.spacing(5)},sidebarIsOpen:{"& a":{paddingLeft:e.spacing(4),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}},sidebarIsClosed:{"& a":{paddingLeft:e.spacing(2),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}}}})),gt=function(e){var n=e.handleToggle,r=e.sidebarIsOpen,a=e.isOpen,o=e.name,i=e.icon,l=e.children,c=e.dense,s=bt(),u=t.createElement(ne,{dense:c,button:!0,onClick:n},t.createElement(ie,{className:s.icon},a?t.createElement(Ge,null):i),t.createElement(le,{variant:"inherit",color:"textSecondary"},o));return t.createElement(t.Fragment,null,r||a?u:t.createElement(ce,{title:o,placement:"right"},u),t.createElement(se,{in:a,timeout:"auto",unmountOnExit:!0},t.createElement(ue,{dense:c,component:"div",disablePadding:!0,className:r?s.sidebarIsOpen:s.sidebarIsClosed},l)))},vt=function(e){var n=e.resource,r=e.onClick,a=e.open;return t.createElement(h,{to:"/".concat(n.name),primaryText:n.options&&n.options.label||n.name,leftIcon:n.icon?t.createElement(n.icon,null):t.createElement(DefaultIcon,null),onClick:r,sidebarIsOpen:a})},yt=re((function(e){return{treeMenuOneRowLabel:{"& .MuiMenuItem-root":{display:"block",whiteSpace:"nowrap",textOverflow:"ellipsis",maxWidth:240,"& > .MuiListItemIcon-root":{verticalAlign:"middle"}}},treeMenu:function(e){return{"& .MuiMenuItem-root":{whiteSpace:"normal",maxWidth:240,maxHeight:10+24*e.labelNbRows,paddingLeft:56,textOverflow:"ellipsis",overflow:"hidden",display:"-webkit-box","-webkit-line-clamp":e.labelNbRows,"-webkit-box-orient":"vertical","& > .MuiListItemIcon-root":{position:"absolute",left:16}},"& .MuiCollapse-root":{"& .MuiMenuItem-root":{paddingLeft:72,"& > .MuiListItemIcon-root":{left:32}}}}}}})),Et=function(e){var o=e.onMenuClick,i=e.logout,l=e.dense,c=void 0!==l&&l,s=e.openAll,m=void 0!==s&&s,d=e.labelNbRows,f=void 0===d?1:d,h=me((function(e){return e.breakpoints.down("xs")})),b=me((function(e){return e.breakpoints.only("sm")})),g=yt({labelNbRows:f=b?1:f}),v=_e(p),y=u().pathname.match(/^\/([^/]+)/),E=y?y[1]:null,w=ot(n({}),2),C=w[0],P=w[1],x=r((function(){var e=v.reduce((function(e,t){return t.options&&t.options.parent&&e.push(t.options.parent),e}),[]);return v.filter((function(t){return e.includes(t.name)}))}),[v]);return a((function(){var e=v.find((function(e){return e.name===E})),t=e&&x.find((function(t){return t.name===e.options.parent})),n=x.reduce((function(e,n){return e[n.name]=m||t&&n.name===t.name,e}),{});P((function(e){return et(et({},n),e)}))}),[x,v,E,m]),t.createElement(pe,{mt:2,className:1===f?g.treeMenuOneRowLabel:g.treeMenu},x.map((function(e){return t.createElement(gt,{key:e.name,handleToggle:function(){return t=e.name,void P((function(e){return et(et({},e),{},nt({},t,!e[t]))}));var t},isOpen:C[e.name],sidebarIsOpen:!0,name:e.options&&e.options.label||e.name,icon:e.icon?t.createElement(e.icon,null):t.createElement(He,null),dense:c},v.filter((function(t){return t.hasList&&t.options.parent===e.name})).map((function(e){return t.createElement(vt,{key:e.name,resource:e,onClick:o,open:!0})})))})),v.filter((function(e){return e.hasList&&(!e.options||!e.options.parent)})).map((function(e){return t.createElement(vt,{key:e.name,resource:e,onClick:o,open:!0})})),h&&i)},wt=["appBar","menu","userMenu","children","labelNbRows"],Ct=re((function(e){return{appFrame:nt({marginTop:56},e.breakpoints.up("sm"),{"& #main-content":{paddingTop:8,paddingLeft:5}})}})),Pt=function(e){var n=e.appBar,a=e.menu;e.userMenu;var o=e.children,i=e.labelNbRows,l=at(e,wt),c=Ct(),s=r((function(){return function(e){return t.createElement(Et,rt({},e,{labelNbRows:i}))}}),[i]);return t.createElement(b,rt({},l,{classes:{appFrame:c.appFrame},appBar:n,menu:a||s}),o)};Pt.defaultProps={appBar:ht};var xt=re((function(e){return{topToolBar:nt({boxSizing:"border-box",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"},e.breakpoints.down("xs"),{marginTop:8,marginBottom:8}),titleContainer:function(t){return nt({maxWidth:t.sidebarOpen?"calc(100vw - 300px)":"calc(100vw - 100px)",position:"relative",top:-8,marginRight:8},e.breakpoints.down("xs"),{top:0,marginRight:0,maxWidth:"90vw"})},title:nt({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.breakpoints.down("xs"),{fontSize:"1.8rem"}),actionsContainer:function(t){return nt({whiteSpace:"nowrap",marginLeft:"auto",overflow:"hidden"},e.breakpoints.down("xs"),{height:"list"===t.currentView?0:"auto"})}}})),kt=function(e){var n=e.children,r=e.currentView,a=_e((function(e){return e.admin.ui.sidebarOpen})),o=xt({currentView:r,sidebarOpen:a});return t.createElement(g,{className:o.topToolBar},t.createElement("div",{className:o.titleContainer},t.createElement(le,{className:o.title,variant:"h4",color:"primary",id:"react-admin-title",component:"h1"})),t.createElement("div",{className:o.actionsContainer},n))},Ot=re((function(e){return{header:{position:"relative",height:65},logo:nt({position:"absolute",top:-15,height:110,width:110},e.breakpoints.down("xs"),{position:"relative",top:0,width:65,height:65})}})),Nt=function(e){var n=e.userMenu,r=e.logout,a=Ot(),o=v().identity;return t.createElement(pe,{bgcolor:"primary.main"},t.createElement(de,{maxWidth:"lg",className:a.header},t.createElement(X,{container:!0},t.createElement(X,{item:!0,xs:12,sm:n?3:6},t.createElement(De,{to:"/"},t.createElement("img",{src:process.env.PUBLIC_URL+"/logo192.png",alt:"SemApps",className:a.logo}))),t.createElement(oe,{xsDown:!0},t.createElement(X,{item:!0,sm:6},t.createElement(pe,{pt:2},t.createElement(dt,null)))),n&&t.createElement(X,{item:!0,sm:3,align:"right"},t.createElement(pe,{pt:o&&""!==o.id?2:1},t.cloneElement(n,{logout:r}))))))},Lt=function(){var e=Me().pathname;return a((function(){window.scrollTo(0,0)}),[e]),null},St=function(e){var n=e.appBar,r=e.title,a=e.open,o=e.logout,i=e.theme,l=e.children,c=me(i.breakpoints.down("xs"));return t.createElement(fe,{theme:i},t.createElement(Lt,null),t.createElement(n,{title:r,open:a,logout:o}),t.createElement(de,{maxWidth:"lg",disableGutters:c},t.createElement(pe,{mb:{xs:0,sm:5}},l)),t.createElement(y,null))};St.defaultProps={appBar:Nt};var It=he(),Tt=he({palette:{primary:{main:"#28ccfb",contrastText:"#fff"},secondary:{main:"#bcef5b"},grey:{main:"#e0e0e0"}},typography:{details:{fontSize:8}},overrides:{RaChipField:{chip:{marginLeft:0,marginTop:0,marginRight:8,marginBottom:8}},RaShow:{card:nt({padding:25},It.breakpoints.down("xs"),{padding:15})},RaList:{content:nt({padding:25},It.breakpoints.down("xs"),{padding:15,paddingTop:0,marginTop:-8})},RaListToolbar:{toolbar:{paddingLeft:"0 !important"}},RaSingleFieldList:{root:{marginTop:0,marginBottom:0}},RaAutocompleteArrayInput:{chipContainerFilled:{"& .serverName":{display:"none"}}},MuiTab:{labelIcon:{paddingTop:0}},MuiCard:{root:{"@media print":{boxShadow:"none !important"}}}}}),Rt=["basePath","className","data","title"],jt=function(e){var n=e.basePath,r=e.className,a=e.data;e.title;var o=at(e,Rt),i=E({}).hasList;return t.createElement(kt,rt({className:r},o),i&&t.createElement(w,{basePath:n,record:a}))},Bt=["actions"],At=function(e){var r=e.actions,a=at(e,Bt),i=ot(n(!1),2);i[0];var l=i[1];return o((function(){l(!0)}),[l]),t.createElement(C,rt({actions:t.cloneElement(r,a),redirect:"show"},a))};At.defaultProps={actions:t.createElement(jt,null)};var Wt=["basePath","className","data","hasList","hasShow"],Ft=function(e){var n=e.basePath,r=e.className,a=e.data,o=e.hasList,i=e.hasShow,l=at(e,Wt);return t.createElement(kt,rt({className:r},l),o&&t.createElement(w,{basePath:n,record:a}),i&&t.createElement(P,{basePath:n,record:a}))},Mt=["actions"],Dt=function(e){var n=e.actions,r=at(e,Mt);return t.createElement(x,rt({actions:t.cloneElement(n,r)},r))};Dt.defaultProps={actions:t.createElement(Ft,null)};var Vt=re((function(e){return{root:{width:"100%"},accordion:{backgroundColor:e.palette.grey[200]},accordionSummary:{minHeight:"0 !important","& div":{margin:"0 !important"}},accordionDetails:{backgroundColor:e.palette.common.white,display:"block","& p":{margin:0}},date:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,flexBasis:"15%",flexShrink:0},title:{fontSize:e.typography.pxToRem(15)}}})),Ut=function(e){var n=e.date,r=e.title,a=e.content,o=Vt(),i=k(),l=i.ids,c=i.data,s=i.resource,u=i.basePath;return t.createElement("div",{className:o.root},l.map((function(e,i){if(!c[e])return null;var l=n&&new Date(n(c[e])),m=r&&r(c[e]);return t.createElement(be,{className:o.accordion,key:i},t.createElement(ge,{expandIcon:t.createElement(Ge,null),"aria-controls":"panel".concat(i,"-content"),id:"panel".concat(i,"-header"),className:o.accordionSummary},l&&t.createElement(le,{className:o.date},l.toLocaleDateString()),t.createElement(le,{className:o.title},m)),t.createElement(ve,{className:o.accordionDetails},t.createElement(a,{record:c[e],resource:s,basePath:u})))})))},_t=["bulkActions","basePath","currentSort","displayedFilters","exporter","filters","filterValues","onUnselectItems","resource","selectedIds","showFilter","total","views","currentView","setView"],zt=function(e){var n=e.bulkActions,r=e.basePath,a=e.currentSort,o=e.displayedFilters,i=e.exporter,l=e.filters,c=e.filterValues,s=e.onUnselectItems,m=e.resource,p=e.selectedIds,d=e.showFilter,h=e.total,b=e.views,g=e.currentView,v=e.setView,y=at(e,_t),w=me((function(e){return e.breakpoints.down("xs")})),C=E(y),P=new URLSearchParams(u().search);return t.createElement(kt,{currentView:g},b&&Object.entries(b).filter((function(e){return ot(e,1)[0]!==g})).map((function(e){var n=ot(e,2),r=n[0],a=n[1];return P.set("view",r),P.set("page",1),P.set("perPage",a.perPage),a.sort&&(P.set("sort",a.sort.field),P.set("order",a.sort.order)),t.createElement(f,{key:r,to:"?"+P.toString()},t.createElement(O,{onClick:function(){return v(r)},label:a.label},t.createElement(a.icon)))})),l&&t.cloneElement(l,{resource:m,showFilter:d,displayedFilters:o,filterValues:c,context:"button"}),C.hasCreate&&t.createElement(N,{basePath:r}),!w&&!1!==i&&t.createElement(L,{disabled:0===h,resource:m,sort:a,filter:c,exporter:i}),n&&t.cloneElement(n,{basePath:r,filterValues:c,resource:m,selectedIds:p,onUnselectItems:s}))},qt=["actions"],Ht=function(e){return t.createElement(I,rt({rowsPerPageOptions:[25,50,100]},e))},Gt=function(e){var n=e.actions,r=at(e,qt);return t.createElement(S,rt({actions:t.cloneElement(n,r),sort:{field:"pair:label",order:"ASC"},pagination:t.createElement(Ht,null),perPage:50},r))};Gt.defaultProps={actions:t.createElement(zt,null)};var Yt=["children","actions","views","ListComponent"],$t=function(e){e.children;var r=e.actions,a=e.views,o=e.ListComponent,i=at(e,Yt),l=new URLSearchParams(u().search),c=l.has("view")?l.get("view"):Object.keys(a)[0],s=ot(n(c),2),m=s[0],p=s[1];return t.createElement(o,rt({actions:t.cloneElement(r,et({views:a,currentView:m,setView:p},i)),pagination:a[m].pagination,perPage:a[c].perPage,sort:a[c].sort},i),a[m].list)};$t.defaultProps={actions:t.createElement(zt,null),ListComponent:S};var Jt=re((function(e){return{tab:{minWidth:55}}})),Kt=function(){var e=m(),n=Jt(),r=u().pathname.match(/^\/([^/]+)/),a=r?r[1]:null,o=_e(p,ze),i=me((function(e){return e.breakpoints.down("xs")}));return t.createElement(ye,{value:a,onChange:function(t,n){return e.push("/"+n)},indicatorColor:"primary",textColor:"primary",scrollButtons:"auto"},o.filter((function(e){return e.hasList})).map((function(e){return t.createElement(Ee,{key:e.name,icon:t.createElement(e.icon),label:i?void 0:e.options.label,value:e.name,className:n.tab})})))},Qt=function(e){return t.createElement(T,rt({},e,{rowStyle:function(){return{padding:15,paddingBottom:15,paddingTop:15,marginBottom:10,borderStyle:"solid",borderColor:"#e0e0e0",borderWidth:1}}}))};function Xt(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Zt(){return(Zt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function en(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function tn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?en(Object(n),!0).forEach((function(t){nn(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):en(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function nn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const rn={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0};class an extends t.Component{constructor(e){let t;super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),t=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount:t}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})):this.reCalculateColumnCount()}reCalculateColumnCount(){const e=window&&window.innerWidth||1/0;let t=this.props.breakpointCols;"object"!=typeof t&&(t={default:parseInt(t)||2});let n=1/0,r=t.default||2;for(let a in t){const o=parseInt(a);o>0&&e<=o&&o<n&&(n=o,r=t[a])}r=Math.max(1,parseInt(r)||1),this.state.columnCount!==r&&this.setState({columnCount:r})}itemsInColumns(){const e=this.state.columnCount,n=new Array(e),r=t.Children.toArray(this.props.children);for(let t=0;t<r.length;t++){const a=t%e;n[a]||(n[a]=[]),n[a].push(r[t])}return n}renderColumns(){const{column:e,columnAttrs:n={},columnClassName:r}=this.props,a=this.itemsInColumns(),o=100/a.length+"%";let i=r;i&&"string"!=typeof i&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===i&&(i="my-masonry-grid_column"));const l=tn(tn(tn({},e),n),{},{style:tn(tn({},n.style),{},{width:o}),className:i});return a.map((e,n)=>t.createElement("div",Zt({},l,{key:n}),e))}logDeprecated(e){console.error("[Masonry]",e)}render(){const e=this.props,{children:n,breakpointCols:r,columnClassName:a,columnAttrs:o,column:i,className:l}=e,c=Xt(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]);let s=l;return"string"!=typeof l&&(this.logDeprecated('The property "className" requires a string'),void 0===l&&(s="my-masonry-grid")),t.createElement("div",Zt({},c,{className:s}),this.renderColumns())}}an.defaultProps=rn;var on=re((function(){return{grid:{display:"flex",marginLeft:-20,marginBottom:-20,width:"auto"},column:{paddingLeft:20,backgroundClip:"padding-box"},card:{marginBottom:20},media:{height:0,paddingTop:"56.25%"}}})),ln=function(e){var n=e.image,r=e.content,a=e.actions,o=e.breakpointCols,i=e.linkType,l=on(),c=k(),s=c.ids,u=c.data,m=c.basePath;return t.createElement(an,{breakpointCols:o,className:l.grid,columnClassName:l.column},s.map((function(e){if(!u[e])return null;var o="function"==typeof n?n(u[e]):n;return t.createElement(we,{key:e,className:l.card},t.createElement(f,{to:R(m,e)+"/"+i},t.createElement(Ce,null,o&&t.createElement(Pe,{className:l.media,image:o}),r&&t.createElement(xe,null,r(u[e])))),a&&t.createElement(ke,null,a.map((function(n){return t.createElement(n,{record:u[e],basePath:m})}))))})))};ln.defaultProps={breakpointCols:{default:3,1050:2,700:1},linkType:"edit"};var cn=function(e){var n=e.reference,r=e.source,a=e.inverseSource,o=e.limit,i=e.sort,l=e.filter,c=e.label,s=e.icon,u=j(n,{page:1,perPage:o},i,l),m=u.data,d=u.ids,f=_e(p,ze).filter((function(e){return(null==e?void 0:e.name)===n}))[0];return t.createElement(B,{label:c||f.options.label,icon:s||t.createElement(f.icon)},d.filter((function(e){return!a||m[e][a]})).map((function(e){return t.createElement(A,{key:e,label:m[e]["pair:label"],value:nt({},r,e)})})))};cn.defaultProps={limit:25};var sn=re((function(){return{rightLabel:{color:"grey",textAlign:"right",borderBottom:"1px dashed #c0c0c0",paddingBottom:10,marginBottom:10}}})),un=function(e){var n=e.label,r=e.children,a=e.record,o=e.resource,i=e.source,l=e.basePath,c=e.mb,s=sn(),u=W();return null!=a&&a[i]?t.createElement(pe,{mb:c},t.createElement(pe,{className:s.rightLabel},u.apply(void 0,it(F({label:n,resource:o,source:i})))),r&&t.createElement(pe,{m:0},t.cloneElement(r,{record:a,resource:o,basePath:l}))):null};un.defaultProps={mb:4};var mn=["basePath","children","record","resource","showLabel"],pn=function(e){var n=e.basePath,r=e.children,a=e.record,o=e.resource,i=e.showLabel,l=at(e,mn);return t.createElement(X,rt({item:!0},l),t.Children.map(r,(function(e){return e&&t.isValidElement(e)?t.createElement("div",{key:e.props.source},e.props.addLabel&&i?t.createElement(un,{record:a,resource:o,basePath:n,label:e.props.label,source:e.props.source,disabled:!1},e):"string"==typeof e.type?e:t.cloneElement(e,{record:a,resource:o,basePath:n})):null})))},dn=re((function(){return{line:{borderBottom:"1px solid #e0e0e0",marginTop:-6,marginBottom:7}}})),fn=function(e){var n=e.basePath,r=e.children,a=e.record,o=e.resource,i=dn(),l=W();return t.createElement(pe,null,t.Children.map(r,(function(e){return e&&a[e.props.source]&&t.isValidElement(e)?t.createElement("div",{key:e.props.source},e.props.addLabel?t.createElement(X,{container:!0,spacing:3,className:i.line},t.createElement(X,{item:!0,xs:3},t.createElement(le,{color:"textSecondary",align:"right",variant:"body2"},l.apply(void 0,it(F({label:e.props.label,resource:o,source:e.props.source}))))),t.createElement(X,{item:!0,xs:9},t.createElement(le,{variant:"body2"},t.cloneElement(e,{record:a,resource:o,basePath:n})))):"string"==typeof e.type?e:t.cloneElement(e,{record:a,resource:o,basePath:n})):null})))};function hn(e,t){return e(t={exports:{}},t.exports),t.exports}function bn(){}function gn(){}gn.resetWarningCache=bn;var vn=function(){function e(e,t,n,r,a,o){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:gn,resetWarningCache:bn};return n.PropTypes=n,n},yn=hn((function(e){e.exports=vn()})),En=["children","syncWithLocation","value","record","showResourcesIcons"],wn=function(t){var n=t.children,r=t.syncWithLocation,a=t.value,o=t.record,s=t.showResourcesIcons,u=at(t,En),m=Me(),p=Ve(),d=m.pathname;return e.createElement(Ye,rt({indicatorColor:"primary",value:r?d:a},u),i.map(n,(function(e,t){if(!e||!l(e))return null;var n=M(e,t,p.url);return c(e,{context:"header",value:r?n:t,syncWithLocation:r,record:o,showResourcesIcons:s})})))};wn.propTypes={children:yn.node};var Cn=re((function(e){return{content:{padding:e.spacing(2)}}})),Pn=function(e){var r=e.children,a=e.syncWithLocation,o=void 0===a||a,s=e.tabs,u=e.record,m=e.showResourcesIcons,p=void 0!==m&&m,d=Ve(),f=Cn(),h=i.toArray(r).filter((function(e){return null!==e})),b=ot(n(0),2),g=b[0],v=b[1];return t.createElement("div",null,c(s,{syncWithLocation:o,onChange:function(e,t){o||v(t)},value:g,record:u,showResourcesIcons:p},h),t.createElement(Oe,null),t.createElement("div",{className:f.content},i.map(h,(function(e,n){return e&&l(e)?o?t.createElement(Ue,{exact:!0,path:D(M(e,n,d.url)),render:function(){return c(e,{context:"content",record:u})}}):g===n?c(e,{context:"content",record:u}):null:null}))))};Pn.defaultProps={tabs:t.createElement(wn,null)};var xn=["record","source","defaultImage"],kn=re((function(e){var t;return{loader:{width:"100%",backgroundColor:"#e0e0e0",paddingTop:100,paddingBottom:100},image:(t={width:"100%",maxHeight:"none",margin:"0.5rem"},nt(t,e.breakpoints.down("sm"),{margin:0}),nt(t,"@media print",{maxWidth:250,height:"auto"}),t)}})),On=function(e){var n=e.record,r=e.source,a=e.defaultImage,o=at(e,xn),i=kn();n[r]||(n[r]=a);var l=Array.isArray(n[r])?n[r][0]:n[r];return l.rawFile instanceof File?t.createElement(pe,{align:"center",className:i.loader},t.createElement(Ne,null)):t.createElement("img",rt({src:l,className:i.image,alt:n["pair:label"]},o))},Nn=re((function(){return{root:{flexGrow:1}}})),Ln=function(e){var n=e.basePath,r=e.children,a=e.record,o=e.resource,i=Nn();return t.createElement("div",{className:i.root},t.createElement(X,{container:!0,spacing:5},t.Children.map(r,(function(e){return e&&t.isValidElement(e)?t.cloneElement(e,{resource:o,record:a,basePath:n}):null}))))},Sn=function(e){return e.stopPropagation()},In=function(){},Tn=function(t){var n=t.children,r=t.linkType,a=t.spacing,o=t.xs,i=t.sm,l=t.md,c=t.lg,s=t.xl,u=k(),m=u.ids,p=u.data,d=u.basePath;return e.createElement(X,{container:!0,spacing:a},m.map((function(t){return p[t]?e.createElement(X,{item:!0,key:t,xs:o,sm:i,md:l,lg:c,xl:s},r?e.createElement(f,{to:R(d,t,r),onClick:Sn},e.cloneElement(e.Children.only(n),{record:p[t],basePath:d,onClick:In})):e.cloneElement(e.Children.only(n),{record:p[t],basePath:d})):null})))};Tn.defaultProps={xs:6,spacing:3,linkType:"edit"};var Rn=re((function(e){return{root:{flexGrow:1,margin:e.spacing(-1)}}})),jn=function(e){var n=e.children,r=e.image,a=e.defaultImage,o=Rn(),i=V(),l=i.basePath,c=i.loaded,s=i.record,u=i.resource;return c?t.createElement("div",{className:o.root},t.createElement(le,{variant:"h3",color:"primary",component:"h1",id:"react-admin-title"}),t.createElement(X,{container:!0,spacing:5},t.createElement(X,{item:!0,xs:12,sm:4},t.createElement(On,{record:s,source:r,defaultImage:a})),t.createElement(X,{item:!0,xs:12,sm:8},t.createElement(fn,{record:s,resource:u,basePath:l},n)))):null};jn.defaultProps={defaultImage:process.env.PUBLIC_URL+"/logo512.png"};var Bn=re((function(e){return{subTitle:{marginTop:e.spacing(5),marginBottom:e.spacing(2)},subTitleSpan:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,paddingTop:e.spacing(.75),paddingBottom:e.spacing(.75),paddingLeft:e.spacing(2),paddingRight:e.spacing(4)}}})),An=function(e){var n=e.children,r=Bn();return t.createElement(le,{variant:"h5",className:r.subTitle},t.createElement("span",{className:r.subTitleSpan},n))},Wn=hn((function(e){
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var i=n.apply(null,a);i&&e.push(i)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var l in a)t.call(a,l)&&a[l]&&e.push(l);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()})),Fn=["basePath","children","context","className","icon","label","record","resource","syncWithLocation","value","inversePredicate","filter","showResourcesIcons"],Mn=function(e){var n,a,o=e.basePath,i=e.children,l=e.context,c=e.className,s=e.icon,u=e.label,m=e.record,d=e.resource,f=e.syncWithLocation,h=void 0===f||f,b=e.value,g=e.inversePredicate,v=e.filter,y=void 0===v?{}:v,E=e.showResourcesIcons,w=void 0!==E&&E,C=at(e,Fn),P=Me(),x={component:De,to:et(et({},P),{},{pathname:b})},k=_e(p),O=r((function(){return k.find((function(e){return(null==e?void 0:e.name)===d}))}),[k,d]),N=U({resource:d,basePath:o,filter:et(nt({},g,null==m?void 0:m.id),y),perPage:500});return"header"===l?t.createElement($e,rt({key:u,label:N.ids?"".concat(u||(null===(n=O.options)||void 0===n?void 0:n.label)," (").concat(N.ids.length,")"):u||(null===(a=O.options)||void 0===a?void 0:a.label),value:b,icon:s||w&&t.createElement(O.icon),className:Wn("show-tab",c)},h?x:{},C)):t.createElement(_,{value:N},i)},Dn=re((function(e){return{divider:{paddingTop:5,paddingBottom:20,borderBottom:"1px lightgrey solid","&:last-child":{borderBottom:"none"}}}})),Vn=function(e){var n=e.children,r=e.divider,a=e.Label,o=W(),i=Dn(),l=V(),c=l.basePath,s=l.loaded,u=l.record,m=l.resource;return s?t.createElement(pe,null,t.Children.map(n,(function(e){return e&&u[e.props.source]&&t.isValidElement(e)?t.createElement("div",{key:e.props.source,className:r?i.divider:null},e.props.addLabel?t.createElement(t.Fragment,null,t.createElement(a,null,o.apply(void 0,it(F({label:e.props.label,resource:m,source:e.props.source})))),t.cloneElement(e,{record:u,resource:m,basePath:c})):"string"==typeof e.type?e:t.cloneElement(e,{record:u,resource:m,basePath:c})):null}))):null};Vn.defaultProps={Label:An};var Un=function(e){var n=e.children,r=V(),a=r.basePath,o=r.loaded,i=r.record,l=r.resource;return o?t.Children.map(n,(function(e){return e&&t.isValidElement(e)?t.createElement("div",{key:e.props.source},e.props.addLabel?t.createElement(un,{record:i,resource:l,basePath:a,label:e.props.label,source:e.props.source,disabled:!1},e):"string"==typeof e.type?e:t.cloneElement(e,{record:i,resource:l,basePath:a})):null})):null},_n=["basePath","className","data","hasList","hasEdit"],zn=function(e){var n=e.basePath,r=e.className,a=e.data,o=e.hasList,i=e.hasEdit,l=at(e,_n);return t.createElement(kt,rt({className:r},l),o&&t.createElement(w,{basePath:n,record:a}),i&&t.createElement(z,{basePath:n,record:a}))},qn=["actions"],Hn=function(e){var n=e.actions,r=at(e,qn);return t.createElement(q,rt({actions:t.cloneElement(n,r)},r))};Hn.defaultProps={actions:t.createElement(zn,null)};var Gn=["record","styles"],Yn=re((function(e){return{parent:function(e){return et({position:"relative"},e.parent)},image:function(e){return et({width:"100%",borderRadius:"50%"},e.image)},child:{position:"absolute",bottom:0,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6},caption:{color:"black",fontSize:13}}})),$n=function(e){var n=e.record,r=e.styles;at(e,Gn),console.log();var a=Yn(r),o=n?n["pair:firstName"]+" "+n["pair:lastName"]:"";return t.createElement(pe,{className:a.parent},t.createElement("img",{src:n&&n.image||process.env.PUBLIC_URL+"/unknown-user.png",className:a.image,alt:o}),t.createElement(pe,{bgcolor:"secondary.main",className:a.child,borderRadius:7},t.createElement(le,{align:"center",className:a.caption,noWrap:!0},o)))},Jn=function(e){var n=e.source,r=e.record;return r&&r[n]?t.createElement(Je,{source:r[n]}):null};Jn.defaultProps={addLabel:!0};var Kn=function(e){return e.stopPropagation()},Qn=function(){},Xn=function(t){t.classes,t.className;var n=t.children,r=t.link,a=void 0===r?"edit":r,o=t.linkType,l=t.separator,s=void 0===l?", ":l,u=k(t),m=u.ids,p=u.data,d=u.loaded,h=u.resource,b=u.basePath;return void 0!==o&&(console.warn("The 'linkType' prop is deprecated and should be named to 'link' in <SeparatedListField />"),a=o),!1===d?e.createElement(Le,null):e.createElement(e.Fragment,null,m.map((function(t,r){if(!p[t])return null;var o=!1!==a&&("function"==typeof a?a(p[t]):R(b,t,a));return o?e.createElement("span",{key:t},e.createElement(f,{to:o,onClick:Kn},c(i.only(n),{record:p[t],resource:h,basePath:b,onClick:Qn})),r<m.length-1&&s):e.createElement("span",{key:t},c(i.only(n),{record:p[t],resource:h,basePath:b}),r<m.length-1&&s)})))},Zn=re((function(e){return{parent:function(e){return et({position:"relative"},e.parent)},square:{width:"100%",paddingBottom:"100%",position:"relative"},avatar:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",borderRadius:"50%","& svg":{width:"55%",height:"55%"}},child:{position:"absolute",bottom:-10,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6,marginBottom:10},caption:{color:"black",fontSize:13}}})),er=function(e){var n=e.record,r=e.label,a=e.defaultLabel,o=e.image,i=e.fallback,l=e.variant,c=e.labelColor,s=e.classes,u=e.children;if(s=Zn(s),!n)return null;var m=("function"==typeof r?r(n):n[r])||a,p="function"==typeof o?o(n):n[o],d="function"==typeof i?i(n):i;return t.createElement(pe,{className:s.parent},t.createElement("div",{className:s.square},t.createElement(Se,{src:p||d,alt:m,fallback:d,className:s.avatar,variant:l},u)),t.createElement(pe,{bgcolor:c,className:s.child,borderRadius:5},t.createElement(le,{align:"center",className:s.caption,noWrap:!0},m)))};er.defaultProps={labelColor:"secondary.main"};var tr=re({root:{display:"flex",alignItems:"center"}}),nr=function(e){var r=e.label,a=e.reference,o=e.source,i=e.children,l=tr(),c=ot(n(!1),2),s=c[0],u=c[1],m=ot(H(a),2),p=m[0],d=m[1].loading,f=W(),h=G(),b=We(),g=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p({payload:{data:t}},{onSuccess:function(e){var t=e.data;u(!1),b.change(o,t["@id"])},onFailure:function(e){var t=e.error;h(t.message,"error")}});case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){tt(o,r,a,i,l,"next",e)}function l(e){tt(o,r,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return t.createElement("div",{className:l.root},t.createElement(Y,{label:r,reference:a,source:o},i),t.createElement(O,{onClick:function(){return u(!0)},label:"ra.action.create"},t.createElement(Ke,null)),t.createElement(Ie,{fullWidth:!0,open:s,onClose:function(){return u(!1)}},t.createElement(Te,null,f("ra.action.create")),t.createElement($,{resource:a,save:g,render:function(e){var n=e.handleSubmitWithRedirect,r=e.pristine,a=e.saving;return t.createElement(t.Fragment,null,t.createElement(Re,null,t.createElement(J,{label:"Titre",source:"pair:label",validate:K(),fullWidth:!0})),t.createElement(je,null,t.createElement(O,{label:"ra.action.cancel",onClick:function(){return u(!1)},disabled:d},t.createElement(Qe,null)),t.createElement(Q,{handleSubmitWithRedirect:n,pristine:r,saving:a,disabled:d})))}})))};export{Ut as AccordionList,ht as AppBar,er as AvatarField,pn as Column,Ln as ColumnShowLayout,At as Create,jt as CreateActions,fn as DetailsList,Dt as Edit,Ft as EditActions,Tn as GridList,jn as Hero,Pn as InverseReferenceShowLayout,An as LargeLabel,Pt as Layout,Gt as List,zt as ListActions,Mn as ListTab,On as MainImage,Vn as MainList,Jn as MarkdownField,ln as MasonryList,$t as MultiViewsList,Xe as RedirectByType,cn as ReferenceFilter,nr as ReferenceQuickCreateInput,un as RightLabel,Xn as SeparatedListField,Hn as Show,zn as ShowActions,Un as SideList,Nt as SimpleAppBar,St as SimpleLayout,Qt as SimpleList,Kt as TabsMenu,kt as TopToolbar,$n as UserIcon,Tt as theme};
//# sourceMappingURL=index.es.js.map
