(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d2136da":"567d0375","chunk-2d22996d":"2662d136","chunk-4f4046cb":"ecf73199"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-4f4046cb":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d2136da":"31d6cfe0","chunk-2d22996d":"31d6cfe0","chunk-4f4046cb":"53c17115"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"365c":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("bc3a"),o=n.n(r),a=o.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL,headers:{"content-type":"application/json"}});function i(e){return a.post("/api/login",e)}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto overflow-hidden",attrs:{height:"600"}},[n("v-app-bar",{attrs:{color:"deep-purple",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}}),n("v-toolbar-title",[e._v("롤링페이퍼")])],1),n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",[e._v("mdi-home")])],1),n("v-list-item-title",[n("router-link",{attrs:{to:"/"}},[n("span",[e._v("메인")]),n("span",[e._v(e._s(e.$store.state.isLogin))])])],1)],1),e.isLogin?[n("v-list-item",[n("v-list-item-icon",[n("v-icon",[e._v("mdi-account")])],1),n("v-list-item-title",[n("router-link",{attrs:{to:"/loginForm"}},[e._v("로그인")])],1)],1)]:e._e(),e.isLogin?e._e():[n("v-list-item",[n("v-list-item-icon",[n("v-icon",[e._v("mdi-account")])],1),n("v-list-item-title",[n("router-link",{attrs:{to:"/"}},[e._v("로그아웃")])],1)],1)]],2)],1)],1),n("router-view")],1)},a=[],i={name:"App",data:function(){return{drawer:!1,group:null}},computed:{isLogin:function(){return this.$store.getters.isLogin}}},c=i,u=(n("034f"),n("2877")),s=n("6544"),l=n.n(s),d=n("40dc"),f=n("5bc1"),p=n("b0af"),m=n("132d"),v=n("8860"),h=n("da13"),g=n("1baa"),b=n("34c3"),_=n("5d23"),k=n("f774"),y=n("2a7f"),w=Object(u["a"])(c,o,a,!1,null,null,null),L=w.exports;l()(w,{VAppBar:d["a"],VAppBarNavIcon:f["a"],VCard:p["a"],VIcon:m["a"],VList:v["a"],VListItem:h["a"],VListItemGroup:g["a"],VListItemIcon:b["a"],VListItemTitle:_["a"],VNavigationDrawer:k["a"],VToolbarTitle:y["a"]});n("d3b7"),n("3ca3"),n("ddb0");var S=n("8c4f"),O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._v("Main")])])}],E={name:"mainHome",data:function(){return{}},mounted:function(){}},x=E,P=Object(u["a"])(x,O,j,!1,null,null,null),V=P.exports;r["a"].use(S["a"]);var A=[{path:"/",name:"Home",component:V},{path:"/loginForm",name:"LoginForm",component:function(){return n.e("chunk-4f4046cb").then(n.bind(null,"5987"))}},{path:"/mainHome",name:"MainHome",component:function(){return n.e("chunk-2d2136da").then(n.bind(null,"ad45"))}},{path:"/*",name:"Error",component:function(){return n.e("chunk-2d22996d").then(n.bind(null,"dda8"))}}],T=new S["a"]({mode:"history",base:"/",routes:A}),$=T,I=n("1da1"),N=(n("96cf"),n("2f62"));n("ac1f"),n("5319");function C(e){document.cookie="loginState=".concat(e)}function U(e){document.cookie="username=".concat(e)}function B(){return document.cookie.replace(/(?:(?:^|.*;\s*)loginState\s*=\s*([^;]*).*$)|^.*$/,"$1")}function M(){return document.cookie.replace(/(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/,"$1")}var H=n("365c");r["a"].use(N["a"]);var R=new N["a"].Store({state:{username:M()||"",loginState:B()||""},getters:{isLogin:function(e){return""===e.loginState}},mutations:{setLoginState:function(e,t){e.loginState=t},setUsername:function(e,t){e.username=t}},actions:{LOGIN:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,Object(H["signin"])(t);case 3:return o=n.sent,a=o.data,console.log(a),r("setToken",a.token),r("setLoginState",a.loginState),r("setUsername",a.username),C(a.loginState),U(a.username),n.abrupt("return",a);case 12:case"end":return n.stop()}}),n)})))()}},modules:{}}),D=n("f309");r["a"].use(D["a"]);var F=new D["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:$,store:R,vuetify:F,render:function(e){return e(L)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.a92eb734.js.map