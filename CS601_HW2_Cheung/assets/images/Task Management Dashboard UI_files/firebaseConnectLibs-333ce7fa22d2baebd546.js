!function(n){function t(t){for(var r,i,c=t[0],a=t[1],s=t[2],p=0,l=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);for(f&&f(t);l.length;)l.shift()();return u.push.apply(u,s||[]),e()}function e(){for(var n,t=0;t<u.length;t++){for(var e=u[t],r=!0,c=1;c<e.length;c++){var a=e[c];0!==o[a]&&(r=!1)}r&&(u.splice(t--,1),n=i(i.s=e[0]))}return n}var r={},o={29:0},u=[];function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(n){var t=[],e=o[n];if(0!==e)if(e)t.push(e[2]);else{var r=new Promise((function(t,r){e=o[n]=[t,r]}));t.push(e[2]=r);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(n){return i.p+"js/"+({28:"firebase"}[n]||n)+"-"+{28:"11b74cb009962e676723",33:"2f2e9a3e9808b8c162d8"}[n]+".chunk.js"}(n);var a=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(s);var e=o[n];if(0!==e){if(e){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;a.message="Loading chunk "+n+" failed.\n("+r+": "+u+")",a.name="ChunkLoadError",a.type=r,a.request=u,e[1](a)}o[n]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=n,i.c=r,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)i.d(e,r,function(t){return n[t]}.bind(null,r));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="https://cpwebassets.codepen.io/assets/packs/",i.oe=function(n){throw console.error(n),n};var c=(self||this).webpackJsonp=(self||this).webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=a;u.push([674,0]),e()}({13:function(n,t,e){"use strict";e.d(t,"c",(function(){return r.c})),e.d(t,"d",(function(){return r.d})),e.d(t,"b",(function(){return r.b})),e.d(t,"a",(function(){return r.a})),e.d(t,"e",(function(){return o})),e.d(t,"f",(function(){return u}));var r=e(58),o={TEAM:"TEAM",USER:"USER"},u=(e(80),{Collection:"Collection",Pen:"Pen",Project:"Project"})},473:function(n,t,e){"use strict";e.d(t,"b",(function(){return g})),e.d(t,"a",(function(){return m}));var r=e(6),o=e.n(r),u=e(25),i=e.n(u),c=e(21),a=e.n(c),s=e(7);function f(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function p(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?f(Object(e),!0).forEach((function(t){o()(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var l,d=null,v=function(){var n=i()(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.all([e.e(33),e.e(28)]).then(e.bind(null,650)).then((function(n){return n.default})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function h(){return b.apply(this,arguments)}function b(){return(b=i()(a.a.mark((function n(){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!l){n.next=2;break}return n.abrupt("return",l);case 2:return n.prev=2,n.next=5,v();case 5:return(t=n.sent).apps.length<1&&t.initializeApp(window.__firebase.config),window.firebase=t,n.next=10,t.auth().signInWithCustomToken(window.__firebase.token);case 10:return l=t.database(),d=l.ref(),n.abrupt("return",l);case 15:n.prev=15,n.t0=n.catch(2),console.error(n.t0);case 18:case"end":return n.stop()}}),n,null,[[2,15]])})))).apply(this,arguments)}var g=function(){var n=i()(a.a.mark((function n(t,e,r){var o,u,i,c,f;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,h();case 4:return o=n.sent,u=o.ref("items/".concat(t)),n.next=8,u.once("value");case 8:i=n.sent,c=i.val(),a=p(p(p({},c),r),{},{id:t,ownerId:e,updatedAt:Object(s.z)()}),f=JSON.parse(JSON.stringify(a)),u.update(f);case 12:case"end":return n.stop()}var a}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),y=function(){var n=i()(a.a.mark((function n(t,e){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:m("items/".concat(t),e);case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),m=function(){var n=i()(a.a.mark((function n(t,e){var r,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h();case 2:return r=n.sent,(o=r.ref(t)).on("value",(function(n){var t=n.val();e(t)})),n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}();window.CPFirebase={authFirebase:h,onChanges:m,getObjectReference:function(n){var t="".concat(window.__rtData.roomID,"/").concat(n);return d.child(t)},onItemChanges:y,setItemAttributes:g}},58:function(n,t,e){"use strict";e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return o})),e.d(t,"b",(function(){return u})),e.d(t,"a",(function(){return i}));var r={PEN:"PEN",PROJECT:"PROJECT",POST:"POST",COLLECTION:"COLLECTION"},o={PEN:"pen",EDITOR:"editor",FULL:"full",DETAILS:"details",DEBUG:"debug",LIVE:"live",COLLAB:"collab",PRESENTATION:"pres",PROFESSOR:"professor",POPUP:"popup"},u={LOVES:"LOVES",FORKS:"FORKS",COMMENTS:"COMMENTS"},i={GRID:6,GRID_LARGE:12,FANCY_GRID:4,LIST:20,COLLECTION_PREVIEW:4}},674:function(n,t,e){"use strict";e.r(t);e(473)},7:function(n,t,e){"use strict";e.d(t,"A",(function(){return r})),e.d(t,"f",(function(){return o})),e.d(t,"g",(function(){return u})),e.d(t,"h",(function(){return i.a})),e.d(t,"t",(function(){return c})),e.d(t,"I",(function(){return a})),e.d(t,"D",(function(){return s})),e.d(t,"p",(function(){return p})),e.d(t,"q",(function(){return b})),e.d(t,"l",(function(){return g})),e.d(t,"m",(function(){return y})),e.d(t,"n",(function(){return w})),e.d(t,"o",(function(){return x})),e.d(t,"r",(function(){return T})),e.d(t,"G",(function(){return k})),e.d(t,"s",(function(){return R})),e.d(t,"E",(function(){return L})),e.d(t,"v",(function(){return A})),e.d(t,"u",(function(){return z})),e.d(t,"w",(function(){return I})),e.d(t,"x",(function(){return N})),e.d(t,"y",(function(){return M})),e.d(t,"k",(function(){return q.a})),e.d(t,"B",(function(){return F})),e.d(t,"C",(function(){return B})),e.d(t,"d",(function(){return K})),e.d(t,"e",(function(){return Y})),e.d(t,"a",(function(){return V})),e.d(t,"b",(function(){return W})),e.d(t,"c",(function(){return H})),e.d(t,"F",(function(){return X})),e.d(t,"j",(function(){return Z})),e.d(t,"H",(function(){return nn})),e.d(t,"z",(function(){return en})),e.d(t,"i",(function(){return rn}));var r=function(n){var t,e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.page||0,u=r.pageLength||20,i=[];if(n&&n.length){var c=u*(o||0),a=c+u;i=n.slice(c,a),t=n.length>a,e=c>0}return[i,{hasNextPage:t,hasPreviousPage:e}]};function o(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];e.forEach((function(t){return n[t]=n[t].bind(n)}))}e(9);var u=function(n){return n.replace(/_\w/g,(function(n){return n[1].toUpperCase()}))},i=e(92);function c(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)||(n.which||void 0===n.button?2===n.which:1&!n.button&&2&!n.button&&4&n.button)}var a=function(n,t,e){if(void 0!==t){if(null===t&&(e.expires=-1),"number"==typeof e.expires){var r=e.expires,o=e.expires=new Date;o.setDate(o.getDate()+r)}var u=[n,"=",t,e.expires?"; expires="+e.expires.toUTCString():"",e.path?"; path="+e.path:"",e.domain?"; domain="+e.domain:"",e.secure?"; secure":"",e.samesite?"; SameSite="+e.samesite:""].join("");window.document.cookie=u}},s=function(n){for(var t=document.cookie.split("; "),e=0,r=t.length;e<r;e++){var o=t[e].split("=");if(o.shift()===n)return o.join("=")}return null},f=e(58),p=function(n){var t=n.title,e=n.description,r=n.url,o=n.itemType===f.c.PEN?"{% codepen ".concat(r," %}"):r,u="\n---\ntitle: ".concat(t,"\npublished: true\ntags: codepen\n---\n\n").concat(e,"\n\n").concat(o,"\n");return"https://dev.to/new?prefill=".concat(encodeURIComponent(u.trim()))},l=e(6),d=e.n(l);function v(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function h(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?v(Object(e),!0).forEach((function(t){d()(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var b=function(){return Math.floor(Date.now()/1e3)};function g(n,t){return m(n).toLocaleDateString("en-US",h({month:"long",day:"numeric",year:"numeric"},t))}function y(n,t,e){var r=m(n);return"".concat(function(n,t){return m(n).toLocaleDateString("en-US",h({month:"numeric",day:"numeric",year:"numeric"},t))}(n,t)," — ").concat(r.toLocaleTimeString("en-US",e))}function m(n){var t=new Date(n);return isNaN(t.getDate())?new Date(n.substr(0,4),n.substr(5,2)-1,n.substr(8,2)):t}function O(n){return Number.prototype.toLocaleString?Number(n).toLocaleString():n}var w=O,j=function(n){return n.replace(/([\/\\\*\?\+\.\(\)\[\]\{\}\$\!])/g,"\\$1")},P=function(n,t){for(var e=new RegExp(n,"g").exec(t),r=[],o=!1,u=0,i=0,c=1;c<e.length;c++)e[c]&&r.push({str:e[c],match:o}),e[c]||1===c||c===e.length-1||u++,e[c]||1!==c||i++,o=!o;return{substrings:r,score:u+i}},E=function(n,t){return n.score<t.score?1:n.score>t.score?-1:0},x=function(n,t){if(!n)return{error:"No term provided in fuzzySearch(term, lib)"};if(!t)return{error:"No lib provided in fuzzySearch(term, lib)"};var e,r,o={bullseye:null,exact:[],fuzzy:[]},u=null,i=[],c=[],a=new RegExp("^"+j(n)+"$","i");e="(.+)?(".concat(j(n),")(.+)?$");var s=new RegExp(e,"g"),f=n.split("").map((function(n){return"(".concat(j(n),")")}));r="(.+)?".concat(f.join("(.+)?"),"(.+)?$");var p=new RegExp(r,"g");return t.forEach((function(n){n.string.match(a)?u=n:n.string.match(s)?i.push(n):n.string.match(p)&&c.push(n)})),u&&(o.bullseye={key:u.key,string:u.string,matchType:"bullseye"}),i.forEach((function(n){var t=P(e,n.string);o.exact.push({key:n.key,string:n.string,matchType:"exact",substrings:t.substrings,score:t.score})})),c.forEach((function(n){var t=P(r,n.string);o.fuzzy.push({key:n.key,string:n.string,matchType:"fuzzy",substrings:t.substrings,score:t.score})})),{success:!0,count:o.exact.concat(o.fuzzy).length,term:n,bullseye:o.bullseye,exact:o.exact.sort(E),fuzzy:o.fuzzy.sort(E),_regex:{exact:e,fuzzy:r}}},S=function n(){var t=Date.now();return t<=n.previous?t=++n.previous:n.previous=t,t.toString()};S.previous=Date.now();var T=S;var k=function(n){var t=n.url,e=n.width,r=n.height,o=new URL(t);return o.searchParams.set("width",e),o.searchParams.set("height",r||e),o.href},C="https://cdn.skypack.dev/",D=/(import(\(\s*|\s+)|\sfrom\s*)["'`](?!http|\.|\/)([^"'`\n]+)["'`]/;function R(n){return"string"==typeof n&&-1!==n.indexOf("import")&&D.test(n)}function L(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C,e=new RegExp(D,"g");return n.replace(e,'$1"'.concat(t,'$3"'))}var A=function(n){var t=n&&n.toUpperCase().slice(0,-1);return Object.values(f.c).includes(t)||console.warn("Invalid url fragment supplied to itemUrlToEnum"),t},z=function(n){return Object.values(f.c).includes(n)||console.warn("Invalid item enum supplied to itemEnumToUrl"),n&&"".concat(n.toLowerCase(),"s")};function I(n,t){return new Promise((function(e,r){var o=document.createElement(n);for(var u in o.onload=function(){return e(o)},o.onerror=r,t)o.setAttribute(u,t[u]);document.body.appendChild(o)}))}var N={error:function(){},info:function(){},logDuration:function(n,t){}},_=e(50),U=e.n(_);var M=function(n,t){return function(n,t){if(Array.isArray(t))return Array.isArray(n);if(null==n)return!1;return U()(n)===U()(t)}(n,t)?n:t},q=e(74);function F(n,t,e){return 1===t?n:e||n+"s"}function B(n,t,e){return O(t)+" "+F(n,t,e)}var $=e(2),G=e.n($),J=e(13),K=G.a.oneOf(Object.values(J.c)),Y=G.a.oneOf(Object.values(J.e)),V=G.a.oneOfType([G.a.func,G.a.node,G.a.object]),W=G.a.oneOfType([G.a.elementType,G.a.string]),H=G.a.shape({id:G.a.string.isRequired,title:G.a.string.isRequired,updatedAt:G.a.string.isRequired,owner:G.a.shape({id:G.a.string.isRequired,username:G.a.string.isRequired}).isRequired});function Q(){return window.scrollY||window.pageYOffset?window:document.body}function X(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;if(n){var e=n.getBoundingClientRect(),r=e.y-t;if(r<0){var o=Q(),u=o.scrollY||o.pageYOffset||o.scrollTop;o.scrollTo({top:u+r,behavior:"smooth"})}}}e(93);function Z(n,t){var e;return function(){for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];var i=function(){return n.apply(void 0,o)};clearTimeout(e),e=setTimeout(i,t)}}function nn(n,t){var e;return function(){e||(n.apply(void 0,arguments),e=!0,setTimeout((function(){e=!1}),t))}}var tn=function(n){return Math.floor(n/1e3)},en=function(){return tn(Date.now())};function rn(n){return-1!==(n=(n=n.replace("https://","")).replace("http://","")).indexOf("/")&&(n=n.substring(0,n.indexOf("/"))),n}},74:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return o}));function r(n){return"[object Object]"===Object.prototype.toString.call(n)}function o(n){var t={};return function n(e,r){Object.keys(e).forEach((function(o){var u,i=e[o],c=Array.isArray(i),a=Object.prototype.toString.call(i),s=(u=i)&&u.constructor&&"function"==typeof u.constructor.isBuffer&&u.constructor.isBuffer(u),f=r?r+"."+o:o;if(!c&&!s&&("[object Object]"===a||"[object Array]"===a)&&Object.keys(i).length)return n(i,f);t[f]=i}))}(n),t}},80:function(n,t,e){"use strict";e.d(t,"c",(function(){return r})),e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return u}));var r=[1280,800,512,320],o=["webp","jpg"],u="jpg"},92:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("string"!=typeof n)return"";var e=n;return t&&(e=n.toLowerCase()),e.replace(/^[a-z]/,(function(n){return n.toUpperCase()}))}},93:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),o=!r}});