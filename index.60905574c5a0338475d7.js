!function(e){function t(t){for(var n,l,c=t[0],o=t[1],i=t[2],d=0,u=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&u.push(s[l][0]),s[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(m&&m(t);u.length;)u.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,c=1;c<a.length;c++){var o=a[c];0!==s[o]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},s={0:0},r=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=function(e){return l.p+""+({}[e]||e)+".60905574c5a0338475d7.js"}(e);var o=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(i);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",o.name="ChunkLoadError",o.type=n,o.request=r,a[1](o)}s[e]=void 0}};var i=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var m=o;r.push([92,1]),a()}({86:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),l=a.n(r),c=a(5),o=(a(86),a(25)),i=a(52),m=a(53);const d="ADD_NOTE",u="NOTE_DELETE",p="NOTE_CONFIRM_DELETE",E="ACTIVE_NOTE",g="NOTE_COMPLATED",v="NOTE_MENU",h="NOTE_VALIDATION",b="NOTE_SUCCESS",f="NOTE_CURRENT",N="NOTE_CUSTOM_FILTER",y="SETTINGS_HOME_NEXT_SLIDE",O="SETTINGS_HOME_PREV_SLIDE",S="SETTINGS_HOME_NOTES_IN_SLIDE",j="SETTINGS_HOME_SHOW_TIME",w="SETTINGS_HOME_SHOW_DATE",T="SETTINGS_HOME_THEME_WIDGET",C="SETTINGS_HOME_THEME_CURRENT",k="SETTINGS_HOME_THEME_TIME_DATE",D=JSON.parse(localStorage.getItem("notes")||"[]"),I={noteConfirmDelete:0,noteMenu:0,noteValidation:"",noteSuccess:0,notesCustomFilter:"All"},_=JSON.parse(localStorage.getItem("settings")||'{"startSlide": 0, "endSlide": 4, "notesInSlide": 4, "showDate": true, "showTime": true, "homeThemeWidget": "dark", "homeThemeCurrent": "dark", "homeThemeTimeDate": "dark"}');var M=Object(o.combineReducers)({notes:(e=D,t)=>{switch(t.type){case d:{const a=e.concat(t.note);return localStorage.setItem("notes",JSON.stringify(a)),a}case u:{const a=e.filter((e=>e.id!==t.id));return localStorage.setItem("notes",JSON.stringify(a)),a}case E:{const a=e.map((e=>e.id===t.id?Object.assign(Object.assign({},e),{active:!e.active,complated:!1,current:!1}):e));return localStorage.setItem("notes",JSON.stringify(a)),a}case g:{const a=e.map((e=>e.id===t.id?Object.assign(Object.assign({},e),{complated:!e.complated}):e));return localStorage.setItem("notes",JSON.stringify(a)),a}case f:{const a=e.map((e=>e.id===t.id?Object.assign(Object.assign({},e),{current:!e.current}):Object.assign(Object.assign({},e),{current:!1})));return localStorage.setItem("notes",JSON.stringify(a)),a}default:return e}},actions:(e=I,t)=>{switch(t.type){case p:return Object.assign(Object.assign({},e),{noteConfirmDelete:t.action});case v:return Object.assign(Object.assign({},e),{noteMenu:t.id});case h:return"remove"===t.action&&t.message===e.noteValidation?Object.assign(Object.assign({},e),{noteValidation:""}):"create"===t.action?Object.assign(Object.assign({},e),{noteValidation:t.message,noteSuccess:0}):e;case b:return"remove"===t.action&&t.success===e.noteSuccess?Object.assign(Object.assign({},e),{noteSuccess:0}):"create"===t.action?Object.assign(Object.assign({},e),{noteSuccess:t.success,noteValidation:""}):e;case N:return Object.assign(Object.assign({},e),{notesCustomFilter:t.filter});default:return e}},settings:(e=_,t)=>{switch(t.type){case y:{const t=Object.assign(Object.assign({},e),{startSlide:e.endSlide,endSlide:e.endSlide+e.notesInSlide});return localStorage.setItem("settings",JSON.stringify(t)),t}case O:{const t=Object.assign(Object.assign({},e),{startSlide:e.startSlide-e.notesInSlide,endSlide:e.endSlide-e.notesInSlide});return localStorage.setItem("settings",JSON.stringify(t)),t}case S:{const a=Object.assign(Object.assign({},e),{notesInSlide:t.quantity,startSlide:0,endSlide:t.quantity});return localStorage.setItem("settings",JSON.stringify(a)),a}case w:{const a=Object.assign(Object.assign({},e),{showDate:t.action});return localStorage.setItem("settings",JSON.stringify(a)),a}case j:{const a=Object.assign(Object.assign({},e),{showTime:t.action});return localStorage.setItem("settings",JSON.stringify(a)),a}case T:{const a=Object.assign(Object.assign({},e),{homeThemeWidget:t.theme});return localStorage.setItem("settings",JSON.stringify(a)),a}case C:{const a=Object.assign(Object.assign({},e),{homeThemeCurrent:t.theme});return localStorage.setItem("settings",JSON.stringify(a)),a}case k:{const a=Object.assign(Object.assign({},e),{homeThemeTimeDate:t.theme});return localStorage.setItem("settings",JSON.stringify(a)),a}default:return e}}});const A=[i.a];var x=Object(o.createStore)(M,{},Object(m.composeWithDevTools)(Object(o.applyMiddleware)(...A))),L=a(11),H=a(7),J=a(109),z=a(58),W=a.n(z),P=a(57),V=a.n(P);const R=e=>({type:u,id:e}),G=e=>({type:p,action:e}),F=e=>({type:g,id:e}),q=e=>({type:f,id:e}),U=e=>({type:v,id:e}),$=(e,t)=>({type:h,message:t,action:e}),B=(e,t)=>({type:b,action:e,success:t}),Y=e=>({type:N,filter:e}),X=e=>({type:S,quantity:e}),K=e=>({type:w,action:e}),Q=e=>({type:j,action:e}),Z=e=>({type:T,theme:e}),ee=e=>({type:C,theme:e}),te=e=>({type:k,theme:e}),ae=e=>t=>{t($("create",e)),setTimeout((()=>{t($("remove",e))}),5e3)};var ne=a(55),se=a.n(ne),re=a(56),le=a.n(re),ce=a(54);var oe=({onClick:e})=>{const t=Object(c.b)(),a=Object(c.c)((e=>e.settings.homeThemeWidget));return s.a.createElement("div",{className:["home-confirm","light"===a?"dark":"light"].join(" ")},s.a.createElement("div",{className:"home-confirm-info"},s.a.createElement("div",{className:"home-confirm-title"},"Deleting a note"),s.a.createElement("div",null,"Are you sure you want to delete this note?")),s.a.createElement("div",{className:"home-confirm-controls"},s.a.createElement(ce.a,{className:"home-confirm-controls-button",onClick:e,style:{marginRight:"20px"},variant:"success"},"accept"),s.a.createElement(ce.a,{className:"home-confirm-controls-button",onClick:()=>{t(G(0))},variant:"danger"},"deny")))};var ie=({params:e})=>{const t=Object(c.b)(),a=Object(c.c)((e=>e.actions.noteConfirmDelete));return s.a.createElement("div",{className:"home-widget-note"},a===e.id&&s.a.createElement(oe,{onClick:()=>{t(G(0)),t(R(e.id))}}),s.a.createElement("div",{className:"home-widget-note-info"},s.a.createElement("div",{className:"home-widget-note-title"},e.title),s.a.createElement("div",{className:"home-widget-note-text"},e.body)),s.a.createElement("div",null,s.a.createElement(se.a,{onClick:()=>{t(G(e.id))},style:{color:le.a[500],cursor:"pointer"},fontSize:"default"})))};var me=()=>{const e=Object(c.b)(),t=Object(c.c)((e=>e.notes)),a=Object(c.c)((e=>e.settings.startSlide)),n=Object(c.c)((e=>e.settings.endSlide)),r=Object(c.c)((e=>e.settings.homeThemeWidget)),l=t.filter((e=>e.active)),o=l.slice(a,n);return s.a.createElement("div",{className:"home-widget-wrapper"},s.a.createElement("div",{className:["home-widget",r].join(" ")},s.a.createElement("div",{className:"home-widget-body"},l.length?o.map((e=>s.a.createElement(ie,{key:e.id,params:e}))):s.a.createElement("div",{style:{textAlign:"center"}},"No saved notes"))),s.a.createElement("div",{className:"home-widget-controls"},s.a.createElement("div",{className:"home-widget-controls-prev",onClick:()=>{a>0&&e({type:O})}},s.a.createElement(V.a,{fontSize:"large"})),s.a.createElement("div",{className:"home-widget-controls-next",onClick:()=>{l.length>n&&e({type:y})}},s.a.createElement(W.a,{fontSize:"large"}))))};var de=()=>{const e=Object(c.c)((e=>e.settings.homeThemeTimeDate)),[t,a]=Object(n.useState)((new Date).getHours()),[r,l]=Object(n.useState)((new Date).getMinutes()),[o,i]=Object(n.useState)((new Date).getSeconds());return Object(n.useEffect)((()=>{const e=setInterval((()=>{const e=new Date;a(e.getHours()),l(e.getMinutes()),i(e.getSeconds())}),1e3);return()=>clearInterval(e)}),[]),s.a.createElement("div",{className:"home-time"},s.a.createElement("div",{className:["home-time-body",e].join(" ")},s.a.createElement("span",null,t<10?`0${t} : `:t+" : "),s.a.createElement("span",null,r<10?`0${r} : `:r+" : "),s.a.createElement("span",null,o<10?"0"+o:o)))};var ue=()=>{const e=Object(c.c)((e=>e.settings.homeThemeTimeDate)),[t,a]=Object(n.useState)((new Date).getFullYear()),[r,l]=Object(n.useState)((new Date).getMonth()),[o,i]=Object(n.useState)((new Date).getDate());return Object(n.useEffect)((()=>{const e=setInterval((()=>{const e=new Date;a(e.getFullYear()),l(e.getMonth()),i(e.getDate())}),1e3);return()=>clearInterval(e)}),[]),s.a.createElement("div",{className:"home-date"},s.a.createElement("div",{className:["home-date-body",e].join(" ")},s.a.createElement("span",null,o<10?`0${o} . `:o+" . "),s.a.createElement("span",null,r+1<10?`0${r+1} . `:r+1+" . "),s.a.createElement("span",null,t)))},pe=a(59),Ee=a.n(pe),ge=a(60),ve=a.n(ge);var he=({params:e})=>{const t=Object(c.b)(),a=Object(c.c)((e=>e.settings.homeThemeCurrent));return s.a.createElement("div",{className:"home-current-note"},s.a.createElement("div",{className:"home-current-info"},s.a.createElement("div",{className:"home-current-title"},e.title),s.a.createElement("div",{className:"home-current-text"},e.body)),s.a.createElement("div",null,s.a.createElement(Ee.a,{onClick:()=>{t(q(e.id)),t(F(e.id))},className:["home-current-control","light"===a?"home-current-control-light":"home-current-control-dark"].join(" "),fontSize:"default",style:{color:ve.a[500]}})))};var be=()=>{const e=Object(c.c)((e=>e.notes)).filter((e=>e.current)),t=Object(c.c)((e=>e.settings.homeThemeCurrent));return s.a.createElement("div",{className:["home-current",t].join(" ")},s.a.createElement("div",{className:"home-current-main"},e.length?e.map((e=>s.a.createElement(he,{key:e.id,params:e}))):s.a.createElement("div",{style:{textAlign:"center",width:"100%"}},"No current note")))};var fe=()=>{const e=Object(c.c)((e=>e.settings.showDate)),t=Object(c.c)((e=>e.settings.showTime));return s.a.createElement("main",{className:"padding-for-page"},s.a.createElement("div",{className:"home-widget-time-date"},s.a.createElement(me,null),s.a.createElement("div",{className:"home-time-date"},t&&s.a.createElement(de,null),e&&s.a.createElement(ue,null))),s.a.createElement(be,null))};var Ne=()=>{const[e,t]=Object(n.useState)(!1);return s.a.createElement("div",{className:"notes-help"},s.a.createElement(ce.a,{className:"notes-help-button",onClick:()=>t(!e),variant:"primary"},"Help"),e&&s.a.createElement("div",{className:"notes-help-drop"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore modi quam provident reprehenderit voluptatem, aut vero magni voluptatum? Impedit, quibusdam dolorem. Velit voluptas culpa atque eos tempora laudantium aut porro, reiciendis omnis fuga? Vel, enim dicta mollitia veritatis corporis nostrum expedita itaque unde error quidem beatae, repellat fuga ipsam."))},ye=a(61),Oe=a.n(ye);var Se=()=>{const[e,t]=Object(n.useState)(!1),[a,r]=Object(n.useState)("My notes");return s.a.createElement("div",{className:"notes-switch"},s.a.createElement("div",{onClick:()=>t(!e),className:"notes-switch-main"},s.a.createElement("div",null,a),s.a.createElement("div",null,s.a.createElement(Oe.a,{fontSize:"default"}))),e&&s.a.createElement("div",{onClick:e=>{"My notes"===e.target.getAttribute("datatype")&&r("My notes"),"Add notes"===e.target.getAttribute("datatype")&&r("Add notes"),t(!1)},className:"notes-switch-drop"},s.a.createElement(L.b,{datatype:"My notes",className:"notes-switch-link",activeClassName:"notes-switch-active",to:"/notes",exact:!0},"My notes"),s.a.createElement(L.b,{datatype:"Add notes",className:"notes-switch-link",activeClassName:"notes-switch-active",to:"/notes/add"},"Add notes")))},je=a(110),we=a(63),Te=a.n(we),Ce=a(64),ke=a.n(Ce),De=a(48),Ie=a.n(De),_e=a(113);var Me=({onClick:e})=>{const t=Object(c.c)((e=>e.actions.noteValidation)),a=Object(c.c)((e=>e.actions.noteSuccess));return s.a.createElement("div",{className:"notes-save"},s.a.createElement("div",null,t&&s.a.createElement(_e.a,{variant:"danger",className:"notes-save-alert"},t),!!a&&s.a.createElement(_e.a,{variant:"success",className:"notes-save-alert"},"Very good. Note created!")),s.a.createElement("div",null,s.a.createElement(ce.a,{className:"notes-save-buuton",onClick:e,variant:"info"},"Save note")))};var Ae=()=>{const e=Object(c.b)(),[t,a]=Object(n.useState)(""),[r,l]=Object(n.useState)("");return s.a.createElement("div",null,s.a.createElement(je.a,{onSubmit:e=>e.preventDefault()},s.a.createElement(je.a.Group,{controlId:"noteTitle"},s.a.createElement(je.a.Label,{className:"notes-add-label"},s.a.createElement(Te.a,{fontSize:"small",style:{color:Ie.a[500]}}),s.a.createElement("span",{style:{paddingLeft:"10px",verticalAlign:"middle"}},"Note title")),s.a.createElement(je.a.Control,{className:"notes-add-input",onChange:e=>a(e.target.value),value:t,size:"lg",type:"text",placeholder:"products"})),s.a.createElement(je.a.Group,{controlId:"noteText"},s.a.createElement(je.a.Label,{className:"notes-add-label"},s.a.createElement(ke.a,{fontSize:"small",style:{color:Ie.a[500]}}),s.a.createElement("span",{style:{paddingLeft:"10px",verticalAlign:"middle"}},"Write your note")),s.a.createElement(je.a.Control,{onChange:e=>l(e.target.value),value:r,className:"notes-add-textarea",as:"textarea",type:"text",placeholder:"Any note"})),s.a.createElement(Me,{onClick:()=>{if(""===t.trim()||t.trim().length<=2)return a(""),void e(ae("Header field must be at least two characters"));if(""===r.trim()||r.trim().length<=6)return l(""),void e(ae("Note field must have at least six characters"));const n={title:t,body:r,id:Date.now(),complated:!1,active:!1,current:!1};e((e=>({type:d,note:e}))(n)),e((e=>{const t=Date.now();e(B("create",t)),setTimeout((()=>{e(B("remove",t))}),5e3)})),l(""),a("")}})))},xe=a(65),Le=a.n(xe);var He=({title:e,body:t,theme:a,type:n,onClick:r})=>{const l=Object(c.b)();return s.a.createElement("div",{className:["note-confirm-main",a].join(" ")},s.a.createElement("div",null,s.a.createElement("div",{className:"note-confirm-title"},e),s.a.createElement("div",{className:"note-confirm-body"},t)),"confirm"===n&&s.a.createElement("div",{className:"note-confirm-control"},s.a.createElement(ce.a,{className:"note-confirm-control-button",variant:"success",onClick:r},"accept"),s.a.createElement(ce.a,{className:"note-confirm-control-button",variant:"danger",onClick:()=>l(G(0))},"deny")))};var Je=({onClick:e,completed:t,active:a,current:n})=>s.a.createElement("div",{onClick:e,className:"note-menu"},s.a.createElement("a",{"data-action":"delete",className:"note-menu-item"},"Delete note"),s.a.createElement("a",{"data-action":"active",className:"note-menu-item"},a?"Remove from widget on homepage":"Add to widget on home page"),!n&&s.a.createElement("a",{"data-action":"completed",className:"note-menu-item"},t?"Remove as completed":"Mark as complated"),!t&&s.a.createElement("a",{"data-action":"current",className:"note-menu-item"},n?"Remove as current":"Set as current"));var ze=({params:e})=>{const t=Object(c.c)((e=>e.actions.noteConfirmDelete)),a=Object(c.c)((e=>e.actions.noteMenu)),n=Object(c.b)(),r=["note",e.complated&&"note-complated",e.current&&"note-current"];return s.a.createElement("div",{className:r.join(" ")},t===e.id&&s.a.createElement(He,{onClick:()=>{n(G(0)),n(R(e.id))},title:"Confirm Action",body:"Are you sure you want to delete this note",theme:"confirm-theme",type:"confirm"}),s.a.createElement("div",{className:"note-info"},s.a.createElement("div",{className:"note-title"},e.title),s.a.createElement("div",{className:"note-text"},e.body)),s.a.createElement("div",{className:"note-control"},s.a.createElement(Le.a,{onClick:()=>{a!==e.id?n(U(e.id)):n(U(0))},fontSize:"default",style:{cursor:"pointer"}}),a===e.id&&s.a.createElement(Je,{completed:e.complated,active:e.active,current:e.current,onClick:t=>{switch(t.target.dataset.action){case"delete":return n(G(e.id)),void n(U(0));case"active":return n((a=e.id,{type:E,id:a})),void n(U(0));case"completed":return n(F(e.id)),void n(U(0));case"current":return n(q(e.id)),void n(U(0));default:return}var a}})))},We=a(107);var Pe=({onClick:e})=>s.a.createElement("div",null,s.a.createElement(We.a,{onClick:e,"aria-label":"Filter notes"},s.a.createElement(ce.a,{className:"notes-all-filter-button",datatype:"All",variant:"secondary"},"All"),s.a.createElement(ce.a,{className:"notes-all-filter-button",datatype:"Complated",variant:"secondary"},"Complated"),s.a.createElement(ce.a,{className:"notes-all-filter-button",datatype:"Current",variant:"secondary"},"Current")));var Ve=()=>{const e=Object(c.b)(),t=Object(c.c)((e=>e.notes)),a=Object(c.c)((e=>e.actions.notesCustomFilter)),n=t.filter((e=>!e.active)),r="All"===a?n:n.filter((e=>e[a.toLowerCase()]));return s.a.createElement("div",{className:"notes-all"},s.a.createElement("div",{className:"notes-all-title"},s.a.createElement("div",null,a),s.a.createElement(Pe,{onClick:t=>{const a=t.target.getAttribute("datatype");switch(a){case"All":e(Y(a));case"Complated":e(Y(a));case"Current":e(Y(a));default:return}}})),s.a.createElement("div",{className:"notes-all-line"}),s.a.createElement("div",{className:"notes-all-body"},r.length?r.map((e=>s.a.createElement(ze,{key:e.id,params:e}))):s.a.createElement("div",{className:"notes-all-nothing"},"Nothing yet")))};var Re=()=>s.a.createElement("main",{className:"padding-for-page"},s.a.createElement("div",{style:{display:"flex",paddingBottom:"30px"}},s.a.createElement(Ne,null),s.a.createElement(Se,null)),s.a.createElement(H.c,null,s.a.createElement(H.a,{component:Ve,path:"/notes",exact:!0}),s.a.createElement(H.a,{component:Ae,path:"/notes/add"})));var Ge=({title:e,applied:t,onClick:a})=>s.a.createElement("div",{className:"themes-home-universal"},s.a.createElement("div",{className:"themes-home-title-universal"},s.a.createElement("span",null,e),s.a.createElement("span",{className:"themes-home-current-universal"},"Applied theme: ",s.a.createElement("span",{style:{fontWeight:"bold",textDecoration:"underline"}},t))),s.a.createElement("div",{className:"themes-home-main-universal",onClick:a},s.a.createElement("div",{"data-type":"dark",className:"themes-home-main-item-universal themes-home-main-item-dark-universal"},"Dark theme"),s.a.createElement("div",{"data-type":"light",className:"themes-home-main-item-universal themes-home-main-item-light-universal"},"Light theme"),s.a.createElement("div",{"data-type":"purple",className:"themes-home-main-item-universal themes-home-main-item-purple-universal"},"Purple theme")));var Fe=()=>{const e=Object(c.b)(),t=Object(c.c)((e=>e.settings.homeThemeWidget)),a=Object(c.c)((e=>e.settings.homeThemeCurrent)),n=Object(c.c)((e=>e.settings.homeThemeTimeDate));return s.a.createElement("main",{className:"padding-for-page"},s.a.createElement("div",{className:"themes-home"},s.a.createElement("div",{className:"themes-home-title"},"Home page"),s.a.createElement(Ge,{onClick:t=>{const a=t.target.dataset.type;switch(a){case"dark":case"light":case"purple":return void e(Z(a));default:return}},title:"Widget theme",applied:t}),s.a.createElement(Ge,{onClick:t=>{const a=t.target.dataset.type;switch(a){case"dark":case"light":case"purple":return void e(ee(a));default:return}},title:"Current theme",applied:a}),s.a.createElement(Ge,{onClick:t=>{const a=t.target.dataset.type;switch(a){case"dark":case"light":case"purple":return void e(te(a));default:return}},title:"Time and date theme",applied:n})))};var qe=()=>{const e=Object(c.b)(),t=Object(c.c)((e=>e.settings.notesInSlide));return s.a.createElement("div",{className:"settings-home-notes-in-slide"},s.a.createElement("div",{className:"settings-home-notes-in-slide-title"},s.a.createElement("span",null,"Number of notes per slide in widget on homepage"),s.a.createElement("span",{className:"settings-home-notes-in-slide-current"},"Current: ",s.a.createElement("span",{style:{fontWeight:"bold",textDecoration:"underline"}},t)," ")),s.a.createElement("div",{className:"settings-home-notes-in-slide-main"},s.a.createElement(We.a,{onClick:t=>{const a=t.target.getAttribute("datatype");switch(a){case"1":case"2":case"4":case"8":case"16":return void e(X(Number(a)));default:return}},vertical:!0},s.a.createElement(ce.a,{className:"settings-home-notes-in-slide-button",datatype:"1",variant:"primary"},"1 note per slide"),s.a.createElement(ce.a,{className:"settings-home-notes-in-slide-button",datatype:"2",variant:"primary"},"2 note per slide"),s.a.createElement(ce.a,{className:"settings-home-notes-in-slide-button",datatype:"4",variant:"primary"},"4 note per slide"),s.a.createElement(ce.a,{className:"settings-home-notes-in-slide-button",datatype:"8",variant:"primary"},"8 note per slide"),s.a.createElement(ce.a,{className:"settings-home-notes-in-slide-button",datatype:"16",variant:"primary"},"16 note per slide"))))};var Ue=()=>{const e=Object(c.b)(),t=Object(c.c)((e=>e.settings.showDate));return s.a.createElement("div",{className:"settings-home-show-date"},s.a.createElement("div",{className:"settings-home-show-date-title"},s.a.createElement("span",null,"Display date on home page"),s.a.createElement("span",{className:"settings-home-show-date-current"},"Current: ",s.a.createElement("span",{style:{fontWeight:"bold",textDecoration:"underline"}},t?"displayed":"not displayed")," ")),s.a.createElement("div",{className:"settings-home-show-date-main",onClick:t=>{switch(t.target.getAttribute("datatype")){case"true":return void e(K(!0));case"false":return void e(K(!1));default:return}}},s.a.createElement(ce.a,{className:"settings-home-show-date-button",datatype:"true",variant:"success"},"Display"),s.a.createElement(ce.a,{className:"settings-home-show-date-button",datatype:"false",variant:"danger"},"Do not display")))};var $e=()=>{const e=Object(c.b)(),t=Object(c.c)((e=>e.settings.showTime));return s.a.createElement("div",{className:"settings-home-show-time"},s.a.createElement("div",{className:"settings-home-show-time-title"},s.a.createElement("span",null,"Display time on home page"),s.a.createElement("span",{className:"settings-home-show-time-current"},"Current: ",s.a.createElement("span",{style:{fontWeight:"bold",textDecoration:"underline"}},t?"displayed":"not displayed")," ")),s.a.createElement("div",{className:"settings-home-show-time-main",onClick:t=>{switch(t.target.getAttribute("datatype")){case"true":return void e(Q(!0));case"false":return void e(Q(!1));default:return}}},s.a.createElement(ce.a,{className:"settings-home-show-time-button",datatype:"true",variant:"success"},"Display"),s.a.createElement(ce.a,{className:"settings-home-show-time-button",datatype:"false",variant:"danger"},"Do not display")))};var Be=()=>s.a.createElement("main",{className:"padding-for-page"},s.a.createElement(qe,null),s.a.createElement(Ue,null),s.a.createElement($e,null)),Ye=a(112),Xe=a(114),Ke=a(111),Qe=a.p+"logo.0af715b94500c12537236ed6a4ee0ae3.png";var Ze=()=>s.a.createElement(Ye.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0},s.a.createElement("div",{className:"navbar-title"},s.a.createElement("img",{className:"navbar-image",src:Qe,alt:"Logo"}),s.a.createElement("span",{className:"navbar-logo"},"Super Notes")),s.a.createElement(Ye.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),s.a.createElement(Ye.a.Collapse,{id:"responsive-navbar-nav"},s.a.createElement(Xe.a,null,s.a.createElement(Xe.a.Link,{as:L.b,to:"/",href:"/",exact:!0},"Home"),s.a.createElement(Xe.a.Link,{as:L.b,to:"/notes",href:"/notes"},"Notes"),s.a.createElement(Xe.a.Link,{as:L.b,to:"/themes",href:"/themes"},"Themes"),s.a.createElement(Xe.a.Link,{as:L.b,to:"/settings",href:"/settings"},"Settings"),s.a.createElement(Ke.a,{title:"About us",id:"collasible-nav-dropdown"},s.a.createElement(Ke.a.Item,{as:L.b,to:"/about/projects",href:"/about/projects"},"Projects"),s.a.createElement(Ke.a.Item,{as:L.b,to:"/about/motivations",href:"/about/motivations"},"Motivations"),s.a.createElement(Ke.a.Item,{as:L.b,to:"/about/feedback",href:"/about/feedback"},"Feedback"))))),et=a.p+"footerlogo.9c3c1e8ee0d3f650cf74f9e9bc5a03d4.png",tt=a(70),at=a.n(tt),nt=a(71),st=a.n(nt),rt=a(72),lt=a.n(rt),ct=a(73),ot=a.n(ct);var it=()=>s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"footer-title"},s.a.createElement("div",{className:"footer-title-logo"},s.a.createElement("img",{className:"footer-title-image",src:et,alt:"Footer logo"}),s.a.createElement("div",{className:"footer-title-text"},"Super Notes")),s.a.createElement("div",{className:"footer-title-network"},s.a.createElement(at.a,{fontSize:"large"}),s.a.createElement(st.a,{fontSize:"large"}),s.a.createElement(lt.a,{fontSize:"large"}),s.a.createElement(ot.a,{fontSize:"large"}))),s.a.createElement("div",{className:"footer-subtitle"},"Add a note, and surprise everyone with your punctuality"),s.a.createElement("div",{className:"footer-line"}),s.a.createElement("div",{className:"footer-about"},s.a.createElement("div",{className:"footer-about-author"},s.a.createElement("div",null,"Author: Viktor Nyshpal"),s.a.createElement("div",null,"Email: viktor.nyshpal@gmail.com"),s.a.createElement("div",null,"Telegram: @viko_o"),s.a.createElement("div",null,"Copyright © 2020 Super Notes")))),mt=a(108);var dt=()=>s.a.createElement("div",{className:"suspense-wrapper"},s.a.createElement(mt.a,{className:"suspense-spinner",animation:"border",variant:"primary"}));const ut=Object(n.lazy)((()=>a.e(3).then(a.bind(null,115)))),pt=Object(n.lazy)((()=>a.e(2).then(a.bind(null,116)))),Et=Object(n.lazy)((()=>a.e(4).then(a.bind(null,117))));var gt=()=>s.a.createElement(L.a,null,s.a.createElement(J.a,{fluid:!0,className:"p-0 position-fixed index-100"},s.a.createElement(Ze,null)),s.a.createElement(J.a,{fluid:!0,className:"p-0"},s.a.createElement(H.c,null,s.a.createElement(H.a,{component:fe,path:"/",exact:!0}),s.a.createElement(H.a,{component:Re,path:"/notes"}),s.a.createElement(H.a,{component:Fe,path:"/themes"}),s.a.createElement(H.a,{component:Be,path:"/settings"}),s.a.createElement(H.a,{render:()=>s.a.createElement(n.Suspense,{fallback:s.a.createElement(dt,null)},s.a.createElement(pt,null)),path:"/about/feedback"}),s.a.createElement(H.a,{render:()=>s.a.createElement(n.Suspense,{fallback:s.a.createElement(dt,null)},s.a.createElement(ut,null)),path:"/about/motivations"}),s.a.createElement(H.a,{render:()=>s.a.createElement(n.Suspense,{fallback:s.a.createElement(dt,null)},s.a.createElement(Et,null)),path:"/about/projects"}))),s.a.createElement(J.a,{fluid:!0,className:"p-0"},s.a.createElement(it,null)));const vt=s.a.createElement(c.a,{store:x},s.a.createElement(gt,null));l.a.render(vt,document.getElementById("super-notes"))}});