(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{211:function(t,e,n){"use strict";var strong=n(223),r=n(212);t.exports=n(224)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},212:function(t,e,n){var r=n(14);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},223:function(t,e,n){"use strict";var r=n(15).f,o=n(72),c=n(130),l=n(31),f=n(128),v=n(129),d=n(88),h=n(132),m=n(89),_=n(10),y=n(87).fastKey,w=n(212),O=_?"_s":"size",j=function(t,e){var n,r=y(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,d){var h=t((function(t,r){f(t,h,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[O]=0,null!=r&&v(r,n,t[d],t)}));return c(h.prototype,{clear:function(){for(var t=w(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[O]=0},delete:function(t){var n=w(this,e),r=j(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[O]--}return!!r},forEach:function(t){w(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!j(w(this,e),t)}}),_&&r(h.prototype,"size",{get:function(){return w(this,e)[O]}}),h},def:function(t,e,n){var r,o,c=j(t,e);return c?c.v=n:(t._l=c={i:o=y(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[O]++,"F"!==o&&(t._i[o]=c)),t},getEntry:j,setStrong:function(t,e,n){d(t,e,(function(t,n){this._t=w(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?h(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,h(1))}),n?"entries":"values",!n,!0),m(e)}}},224:function(t,e,n){"use strict";var r=n(4),o=n(3),c=n(20),l=n(130),meta=n(87),f=n(129),v=n(128),d=n(14),h=n(12),m=n(90),_=n(55),y=n(91);t.exports=function(t,e,n,w,O,j){var C=r[t],S=C,M=O?"set":"add",E=S&&S.prototype,k={},x=function(t){var e=E[t];c(E,t,"delete"==t||"has"==t?function(a){return!(j&&!d(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return j&&!d(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof S&&(j||E.forEach&&!h((function(){(new S).entries().next()})))){var V=new S,A=V[M](j?{}:-0,1)!=V,P=h((function(){V.has(1)})),T=m((function(t){new S(t)})),D=!j&&h((function(){for(var t=new S,e=5;e--;)t[M](e,e);return!t.has(-0)}));T||((S=e((function(e,n){v(e,S,t);var r=y(new C,e,S);return null!=n&&f(n,O,r[M],r),r}))).prototype=E,E.constructor=S),(P||D)&&(x("delete"),x("has"),O&&x("get")),(D||A)&&x(M),j&&E.clear&&delete E.clear}else S=w.getConstructor(e,t,O,M),l(S.prototype,n),meta.NEED=!0;return _(S,t),k[t]=S,o(o.G+o.W+o.F*(S!=C),k),j||w.setStrong(S,t,O),S}},254:function(t,e,n){"use strict";n(30),n(18),n(38),n(52),n(53);var r=n(6),o=(n(54),n(211),n(35),n(9),n(5),n(21),n(127),n(215),n(0)),c=n(209),l=n(8);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v=["sm","md","lg","xl"],d=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(l.s)(e)]={type:[String,Number],default:null},t}),{}),m=v.reduce((function(t,e){return t["order"+Object(l.s)(e)]={type:[String,Number],default:null},t}),{}),_={col:Object.keys(d),offset:Object.keys(h),order:Object.keys(m)};function y(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({cols:{type:[Boolean,String,Number],default:!1}},d,{offset:{type:[String,Number],default:null}},h,{order:{type:[String,Number],default:null}},m,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var v=w.get(l);return v||function(){var t,e;for(e in v=[],_)_[e].forEach((function(t){var r=n[t],o=y(e,t,r);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,v)}(),t(n.tag,Object(c.a)(data,{class:v}),o)}})},255:function(t,e,n){"use strict";n(30),n(18);var r=n(6),o=(n(54),n(211),n(35),n(9),n(5),n(21),n(52),n(53),n(215),n(0)),c=n(209),l=n(8);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v=["sm","md","lg","xl"],d=["start","end","center"];function h(t,e){return v.reduce((function(n,r){return n[t+Object(l.s)(r)]=e(),n}),{})}var m=function(t){return[].concat(d,["baseline","stretch"]).includes(t)},_=h("align",(function(){return{type:String,default:null,validator:m}})),y=function(t){return[].concat(d,["space-between","space-around"]).includes(t)},w=h("justify",(function(){return{type:String,default:null,validator:y}})),O=function(t){return[].concat(d,["space-between","space-around","stretch"]).includes(t)},j=h("alignContent",(function(){return{type:String,default:null,validator:O}})),C={align:Object.keys(_),justify:Object.keys(w),alignContent:Object.keys(j)},S={align:"align",justify:"justify",alignContent:"align-content"};function M(t,e,n){var r=S[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var E=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},_,{justify:{type:String,default:null,validator:y}},w,{alignContent:{type:String,default:null,validator:O}},j),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var v=E.get(l);return v||function(){var t,e;for(e in v=[],C)C[e].forEach((function(t){var r=n[t],o=M(e,t,r);o&&v.push(o)}));v.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),E.set(l,v)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},341:function(t,e,n){"use strict";n.r(e);n(48);var r={props:{source:String},data:function(){return{drawer:null,contact:{},icons:[{icon:"mdi mdi-youtube",address:"https://www.youtube.com/channel/UCIna75uBxequZKtbvGj9bug/featured"},{icon:"mdi mdi-facebook",address:"https://www.facebook.com/frimpmaths"},{icon:"mdi mdi-twitter",address:"https://twitter.com/frimpmaths"}]}},head:function(){return{title:"frimpmaths Home | Mathematics",meta:[{hid:"Core Mathematics, Elective Mathematics, Mathematics, WAEC Core Mathematics, Core Mathematics Sylabus, Elective Mathematics Syllabus",name:"Core Mathematics, Elective Mathematics, Mathematics, WAEC Core Mathematics, Core Mathematics Sylabus, Elective Mathematics Syllabus",content:"Core Mathematics, Elective Mathematics, Mathematics, WAEC Core Mathematics, Core Mathematics Sylabus, Elective Mathematics Syllabus"}]}}},o=n(36),c=n(92),l=n.n(c),f=n(204),v=n(343),d=n(330),h=n(246),m=n(251),_=n(210),y=n(254),w=n(344),O=n(331),j=n(332),C=n(333),S=n(250),M=n(252),E=n(241),k=n(253),x=n(205),V=n(337),A=n(255),P=n(225),T=n(335),D=n(338),G=n(216),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:"",to:"/"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-home")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Home")])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",to:"/Core_Maths"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-book-open")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("General Mathematics")])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",to:"/E_MAths"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-book")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Elective Mathematics")])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",to:"/contact"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-contacts")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Contact")])],1)],1)],1)],1),t._v(" "),n("v-app-bar",{attrs:{app:"",color:"#01a3a4",dark:""},scopedSlots:t._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":"",grow:""}},[n("v-tab",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("v-tab",{attrs:{to:"/Core_Maths"}},[t._v("Gen. Mathematics")]),t._v(" "),n("v-tab",{attrs:{to:"/E_Maths"}},[t._v("Elec. Mathematics")]),t._v(" "),n("v-tab",{attrs:{to:"/contact"}},[t._v("Contact")])],1)]},proxy:!0}])},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{staticClass:"headline"},[t._v(" \n      frimpMaths\n    ")])],1),t._v(" "),n("v-content",[n("v-container",[n("v-row",{attrs:{justify:"space-around"}},[n("v-col",[n("v-sheet",{staticClass:"mx-auto px-5",attrs:{width:"80%",color:"#fafafa",height:"100%",elevation:"3"}},[n("h2",[t._v("About")]),t._v(" "),n("p",[t._v("\n          frimpMaths is a non profit educational platform that seeks to \n          provide online education for students around the globe in the area \n          of Mathematics. This website is specifically for Mathematics education. \n          The content provided are base on\n          the West Africa Senior Secondary Certificate Examination(WASSCE) \n           and The General Certificate of Secondary Education (GCSE) Mathematics syllabus. All other students around  \n          other part of the world will also find this educational resource useful \n          in their studies and examination preprations. The contents are presented under two streams, that is\n          "),n("a",{attrs:{href:"Core_Maths"}},[t._v("General(Core) Mathematics")]),t._v("  and "),n("a",{attrs:{href:"E_Maths"}},[t._v("Elective(Further) Mathematics")]),t._v(". \n        ")]),t._v(" "),n("p",[t._v("\n          All the lessons are presented in videos and this makes it more \n          interactive for students to understand the concepts better. These \n          lessons are taught by an experience mathematics tutor with several\n          years of teaching experience. The videos are uploaded on our YouTube\n          channel, "),n("a",{attrs:{href:"https://www.youtube.com/channel/UCIna75uBxequZKtbvGj9bug/featured"}},[t._v("frimpMaths")]),t._v(", and can be watched on all computers and mobile \n          devices any where. Each topic begins with an introduction where the \n          instructor outlines all the topics that will be discussed. The topics \n          ends with solutions to further examples relating to the concepts taught.\n          These examples are carefully selected from previous WASSCE and GCSE pass \n          examination questions. \n        ")])])],1)],1)],1)],1),t._v(" "),n("v-footer",{attrs:{dark:"",padless:""}},[n("v-card",{staticClass:"white--text text-center",attrs:{flat:"",tile:"",color:"#01a3a4",width:"100%"}},[n("v-card-text",[n("em",[n("p",[t._v("Let get Social, follow Us on youtube, facebook and twitter")])]),t._v(" "),t._l(t.icons,(function(e){return n("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[n("a",{staticClass:"white--text",attrs:{href:e.address}},[n("v-icon",{attrs:{size:"26px"}},[t._v(t._s(e.icon))])],1)])}))],2),t._v(" "),n("v-card-text",{staticClass:"white--text pt-0"},[t._v("\n      Author: Albert A. Frimpong (Web/Software Developer and Educationist)\n    ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"white--text"},[t._v("\n      "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("frimpTek Media")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VApp:f.a,VAppBar:v.a,VAppBarNavIcon:d.a,VBtn:h.a,VCard:m.a,VCardText:_.a,VCol:y.a,VContainer:w.a,VContent:O.a,VDivider:j.a,VFooter:C.a,VIcon:S.a,VList:M.a,VListItem:E.a,VListItemAction:k.a,VListItemContent:x.a,VListItemTitle:x.b,VNavigationDrawer:V.a,VRow:A.a,VSheet:P.a,VTab:T.a,VTabs:D.a,VToolbarTitle:G.a})}}]);