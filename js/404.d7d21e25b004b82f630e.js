(()=>{"use strict";var e,r,t,n,o,i,a={6717:(e,r,t)=>{var n=t(4122),o=t(8490),i=t(200),a=t(3323);if(Object.values(o.Routing).includes(i.default.route.resource)){localStorage.setItem("restore.route",i.default.route.href),window.location=i.default.route.origin+a.state.basePath}else{document.body.setAttribute("style","width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden;");var c=document.createElement("img");c.setAttribute("style","max-width: 90vw; max-height: 90vh;"),c.src=n,document.body.append(c)}},200:function(e,r,t){var n,o=this&&this.__extends||(n=function(e,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},n(e,r)},function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}n(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)});Object.defineProperty(r,"__esModule",{value:!0});var i=t(3323),a=function(e){function r(){var r=e.call(this)||this;return i.state.basePath=-1===r.route.host.indexOf("github.io")?"/":"/RS-clone/",r}return o(r,e),Object.defineProperty(r.prototype,"route",{get:function(){var e=new URL(window.location.href),r=e.pathname.replace(i.state.basePath,""),t=r.split("/"),n=t[0],o=t[1],a=t[2];return{protocol:e.protocol+"//",host:e.host,path:r,resource:n,category:a,parameter:o,href:e.href,origin:e.origin}},enumerable:!1,configurable:!0}),r.prototype.createRoute=function(e){return this.route.protocol+this.route.host+i.state.basePath+(e||"")},r}(t(5811).default);r.default=new a},3323:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.state=r.initialUser=void 0,r.initialUser={authorized:!1,id:"",email:"",name:"",surname:"",phone:"",avatar:0,goals:{steps:2e3,water:2},progress:{id:"",watched:0,calories:0,finished:[]},profile:{id:"",height:0,weight:0,gender:"",birthday:""},meditations:[],achievements:{fire:!1,salad:!1,dumbbells:!1,water:!1,calendar:!1}},r.state={basePath:"",user:r.initialUser,programs:[],meals:{breakfast:[],lunch:[],dinner:[]},tracks:[],loaded:!1}},8490:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.Routing=void 0,function(e){e.MAIN="",e.PROGRAMS="programs",e.ABOUT="about",e.REGISTRATION="registration",e.AUTHORIZATION="authorization",e.COMPLETE="complete",e.WORKOUT="workout",e.MEALS="meals",e.MEDITATIONS="meditations",e.PROFILE="profile",e.EDIT_PROFILE="edit",e.EDIT_DETAILS="details"}(r.Routing||(r.Routing={}))},5811:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(){this.events={}}return e.prototype.on=function(e,r){var t,n;null!==(t=(n=this.events)[e])&&void 0!==t||(n[e]=[]),this.events[e].push(r)},e.prototype.emit=function(e){if(this.events[e])for(var r=0,t=this.events[e];r<t.length;r++){(0,t[r])()}},e}();r.default=t},4122:(e,r,t)=>{e.exports=t.p+"assets/img/404.jpg"}},c={};function d(e){var r=c[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var t=c[e]={exports:{}};try{var n={id:e,module:t,factory:a[e],require:d};d.i.forEach((function(e){e(n)})),t=n.module,n.factory.call(t.exports,t,t.exports,n.require)}catch(e){throw t.error=e,e}return t.exports}d.m=a,d.c=c,d.i=[],d.hu=e=>e+"."+d.h()+".hot-update.js",d.miniCssF=e=>{},d.hmrF=()=>"404."+d.h()+".hot-update.json",d.h=()=>"6bec5efddcd51861805c",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},d.l=(r,t,n,o)=>{if(e[r])e[r].push(t);else{var i,a;if(void 0!==n)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var u=c[s];if(u.getAttribute("src")==r){i=u;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=r),e[r]=[t];var l=(t,n)=>{i.onerror=i.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),a&&document.head.appendChild(i)}},(()=>{var e,r,t,n={},o=d.c,i=[],a=[],c="idle",s=0,u=[];function l(e){c=e;for(var r=[],t=0;t<a.length;t++)r[t]=a[t].call(null,e);return Promise.all(r)}function f(){0==--s&&l("ready").then((function(){if(0===s){var e=u;u=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return l("check").then(d.hmrM).then((function(t){return t?l("prepare").then((function(){var n=[];return r=[],Promise.all(Object.keys(d.hmrC).reduce((function(e,o){return d.hmrC[o](t.c,t.r,t.m,e,r,n),e}),[])).then((function(){return r=function(){return e?v(e):l("ready").then((function(){return n}))},0===s?r():new Promise((function(e){u.push((function(){e(r())}))}));var r}))})):l(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+c+")")})):v(e)}function v(e){e=e||{},m();var n=r.map((function(r){return r(e)}));r=void 0;var o=n.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort").then((function(){throw o[0]}));var i=l("dispose");n.forEach((function(e){e.dispose&&e.dispose()}));var a,c=l("apply"),d=function(e){a||(a=e)},s=[];return n.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var t=0;t<r.length;t++)s.push(r[t])}})),Promise.all([i,c]).then((function(){return a?l("fail").then((function(){throw a})):t?v(e).then((function(e){return s.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):l("idle").then((function(){return s}))}))}function m(){if(t)return r||(r=[]),Object.keys(d.hmrI).forEach((function(e){t.forEach((function(t){d.hmrI[e](t,r)}))})),t=void 0,!0}d.hmrD=n,d.i.push((function(u){var v,m,y,g,b=u.module,_=function(r,t){var n=o[t];if(!n)return r;var a=function(a){if(n.hot.active){if(o[a]){var c=o[a].parents;-1===c.indexOf(t)&&c.push(t)}else i=[t],e=a;-1===n.children.indexOf(a)&&n.children.push(a)}else console.warn("[HMR] unexpected require("+a+") from disposed module "+t),i=[];return r(a)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&"e"!==u&&Object.defineProperty(a,u,d(u));return a.e=function(e){return function(e){switch(c){case"ready":l("prepare");case"prepare":return s++,e.then(f,f),e;default:return e}}(r.e(e))},a}(u.require,u.id);b.hot=(v=u.id,m=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){i=m.parents.slice(),e=y?void 0:v,d(v)},active:!0,accept:function(e,r,t){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)g._acceptedDependencies[e[n]]=r||function(){},g._acceptedErrorHandlers[e[n]]=t;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=t},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":r=[],Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](v,r)})),l("ready");break;case"ready":Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](v,r)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(v)}},check:p,apply:h,status:function(e){if(!e)return c;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:n[v]},e=void 0,g),b.parents=i,b.children=[],i=[],u.require=_})),d.hmrC={},d.hmrI={}})(),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var r=d.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e+"../"})(),r=(e,r,t,n)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=c,o.parentNode.removeChild(o),n(d)}},o.href=r,document.head.appendChild(o),o},t=(e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(a=t[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===r))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===e||o===r)return a}},n=[],o=[],i=e=>({dispose:()=>{for(var e=0;e<n.length;e++){var r=n[e];r.parentNode&&r.parentNode.removeChild(r)}n.length=0},apply:()=>{for(var e=0;e<o.length;e++)o[e].rel="stylesheet";o.length=0}}),d.hmrC.miniCss=(e,a,c,s,u,l)=>{u.push(i),e.forEach((e=>{var i=d.miniCssF(e),a=d.p+i,c=t(i,a);c&&s.push(new Promise(((t,i)=>{var d=r(e,a,(()=>{d.as="style",d.rel="preload",t()}),i);n.push(c),o.push(d)})))}))},(()=>{var e,r,t,n,o,i=d.hmrS_jsonp=d.hmrS_jsonp||{596:0},a={};function c(r,t){return e=t,new Promise(((e,t)=>{a[r]=e;var n=d.p+d.hu(r),o=new Error;d.l(n,(e=>{if(a[r]){a[r]=void 0;var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+r+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,t(o)}}))}))}function s(e){function a(e){for(var r=[e],t={},n=r.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),i=o.id,a=o.chain,s=d.c[i];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var u=0;u<s.parents.length;u++){var l=s.parents[u],f=d.c[l];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([l]),moduleId:i,parentId:l};-1===r.indexOf(l)&&(f.hot._acceptedDependencies[i]?(t[l]||(t[l]=[]),c(t[l],[i])):(delete t[l],r.push(l),n.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}d.f&&delete d.f.jsonpHmr,r=void 0;var s={},u=[],l={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in t)if(d.o(t,p)){var h,v=t[p],m=!1,y=!1,g=!1,b="";switch((h=v?a(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in l[p]=v,c(u,h.outdatedModules),h.outdatedDependencies)d.o(h.outdatedDependencies,p)&&(s[p]||(s[p]=[]),c(s[p],h.outdatedDependencies[p]));g&&(c(u,[h.moduleId]),l[p]=f)}t=void 0;for(var _,w=[],E=0;E<u.length;E++){var I=u[E],O=d.c[I];O&&(O.hot._selfAccepted||O.hot._main)&&l[I]!==f&&!O.hot._selfInvalidated&&w.push({module:I,require:O.hot._requireSelf,errorHandler:O.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete i[e]})),n=void 0;for(var r,t=u.slice();t.length>0;){var o=t.pop(),a=d.c[o];if(a){var c={},l=a.hot._disposeHandlers;for(E=0;E<l.length;E++)l[E].call(null,c);for(d.hmrD[o]=c,a.hot.active=!1,delete d.c[o],delete s[o],E=0;E<a.children.length;E++){var f=d.c[a.children[E]];f&&((e=f.parents.indexOf(o))>=0&&f.parents.splice(e,1))}}}for(var p in s)if(d.o(s,p)&&(a=d.c[p]))for(_=s[p],E=0;E<_.length;E++)r=_[E],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(r){for(var t in l)d.o(l,t)&&(d.m[t]=l[t]);for(var n=0;n<o.length;n++)o[n](d);for(var i in s)if(d.o(s,i)){var a=d.c[i];if(a){_=s[i];for(var c=[],f=[],p=[],h=0;h<_.length;h++){var v=_[h],m=a.hot._acceptedDependencies[v],y=a.hot._acceptedErrorHandlers[v];if(m){if(-1!==c.indexOf(m))continue;c.push(m),f.push(y),p.push(v)}}for(var g=0;g<c.length;g++)try{c[g].call(null,_)}catch(t){if("function"==typeof f[g])try{f[g](t,{moduleId:i,dependencyId:p[g]})}catch(n){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:p[g],error:n,originalError:t}),e.ignoreErrored||(r(n),r(t))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[g],error:t}),e.ignoreErrored||r(t)}}}for(var b=0;b<w.length;b++){var E=w[b],I=E.module;try{E.require(I)}catch(t){if("function"==typeof E.errorHandler)try{E.errorHandler(t,{moduleId:I,module:d.c[I]})}catch(n){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:n,originalError:t}),e.ignoreErrored||(r(n),r(t))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:I,error:t}),e.ignoreErrored||r(t)}}return u}}}self.webpackHotUpdate=(r,n,i)=>{for(var c in n)d.o(n,c)&&(t[c]=n[c],e&&e.push(c));i&&o.push(i),a[r]&&(a[r](),a[r]=void 0)},d.hmrI.jsonp=function(e,r){t||(t={},o=[],n=[],r.push(s)),d.o(t,e)||(t[e]=d.m[e])},d.hmrC.jsonp=function(e,a,u,l,f,p){f.push(s),r={},n=a,t=u.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],e.forEach((function(e){d.o(i,e)&&void 0!==i[e]?(l.push(c(e,p)),r[e]=!0):r[e]=!1})),d.f&&(d.f.jsonpHmr=function(e,t){r&&d.o(r,e)&&!r[e]&&(t.push(c(e)),r[e]=!0)})},d.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(d.p+d.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})();d(6717)})();