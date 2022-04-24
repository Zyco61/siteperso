(self["webpackChunklastvoxes"]=self["webpackChunklastvoxes"]||[]).push([[347],{9669:(e,t,r)=>{e.exports=r(1609)},5448:(e,t,r)=>{"use strict";var n=r(4867),o=r(6026),i=r(4372),s=r(5327),a=r(4097),u=r(4109),l=r(7985),c=r(5061),d=r(5655),f=r(5263);e.exports=function(e){return new Promise((function(t,r){var p,h=e.data,m=e.headers,v=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}n.isFormData(h)&&delete m["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var w=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(w+":"+y)}var _=a(e.baseURL,e.url);function x(){if(b){var n="getAllResponseHeaders"in b?u(b.getAllResponseHeaders()):null,i=v&&"text"!==v&&"json"!==v?b.response:b.responseText,s={data:i,status:b.status,statusText:b.statusText,headers:n,config:e,request:b};o((function(e){t(e),g()}),(function(e){r(e),g()}),s),b=null}}if(b.open(e.method.toUpperCase(),s(_,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=x:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(x)},b.onabort=function(){b&&(r(c("Request aborted",e,"ECONNABORTED",b)),b=null)},b.onerror=function(){r(c("Network Error",e,null,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||d.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(c(t,e,n.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",b)),b=null},n.isStandardBrowserEnv()){var E=(e.withCredentials||l(_))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;E&&(m[e.xsrfHeaderName]=E)}"setRequestHeader"in b&&n.forEach(m,(function(e,t){"undefined"===typeof h&&"content-type"===t.toLowerCase()?delete m[t]:b.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),v&&"json"!==v&&(b.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){b&&(r(!e||e&&e.type?new f("canceled"):e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),h||(h=null),b.send(h)}))}},1609:(e,t,r)=>{"use strict";var n=r(4867),o=r(1849),i=r(321),s=r(7185),a=r(5655);function u(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r.create=function(t){return u(s(e,t))},r}var l=u(a);l.Axios=i,l.Cancel=r(5263),l.CancelToken=r(4972),l.isCancel=r(6502),l.VERSION=r(7288).version,l.all=function(e){return Promise.all(e)},l.spread=r(8713),l.isAxiosError=r(6268),e.exports=l,e.exports["default"]=l},5263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},4972:(e,t,r)=>{"use strict";var n=r(5263);function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},6502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,r)=>{"use strict";var n=r(4867),o=r(5327),i=r(782),s=r(3572),a=r(7185),u=r(4875),l=u.validators;function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e,t){if("string"===typeof e?(t=t||{},t.url=e):t=e||{},!t.url)throw new Error("Provided config url is not valid");t=a(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&u.assertOptions(r,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var i,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!o){var d=[s,void 0];Array.prototype.unshift.apply(d,n),d=d.concat(c),i=Promise.resolve(t);while(d.length)i=i.then(d.shift(),d.shift());return i}var f=t;while(n.length){var p=n.shift(),h=n.shift();try{f=p(f)}catch(m){h(m);break}}try{i=s(f)}catch(m){return Promise.reject(m)}while(c.length)i=i.then(c.shift(),c.shift());return i},c.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=c},782:(e,t,r)=>{"use strict";var n=r(4867);function o(){this.handlers=[]}o.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},4097:(e,t,r)=>{"use strict";var n=r(1793),o=r(7303);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},5061:(e,t,r)=>{"use strict";var n=r(481);e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},3572:(e,t,r)=>{"use strict";var n=r(4867),o=r(8527),i=r(6502),s=r(5655),a=r(5263);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){u(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||s.adapter;return t(e).then((function(t){return u(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},7185:(e,t,r)=>{"use strict";var n=r(4867);e.exports=function(e,t){t=t||{};var r={};function o(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function i(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(e[r],t[r])}function s(e){if(!n.isUndefined(t[e]))return o(void 0,t[e])}function a(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(void 0,t[r])}function u(r){return r in t?o(e[r],t[r]):r in e?o(void 0,e[r]):void 0}var l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=l[e]||i,o=t(e);n.isUndefined(o)&&t!==u||(r[e]=o)})),r}},6026:(e,t,r)=>{"use strict";var n=r(5061);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},8527:(e,t,r)=>{"use strict";var n=r(4867),o=r(5655);e.exports=function(e,t,r){var i=this||o;return n.forEach(r,(function(r){e=r.call(i,e,t)})),e}},5655:(e,t,r)=>{"use strict";var n=r(4867),o=r(6016),i=r(481),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function u(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(e=r(5448)),e}function l(e,t,r){if(n.isString(e))try{return(t||JSON.parse)(e),n.trim(e)}catch(o){if("SyntaxError"!==o.name)throw o}return(r||JSON.stringify)(e)}var c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:u(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),l(e)):e}],transformResponse:[function(e){var t=this.transitional||c.transitional,r=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!r&&"json"===this.responseType;if(s||o&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s){if("SyntaxError"===a.name)throw i(a,this,"E_JSON_PARSE");throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(s)})),e.exports=c},7288:e=>{e.exports={version:"0.25.0"}},1849:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},5327:(e,t,r)=>{"use strict";var n=r(4867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},7303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},4372:(e,t,r)=>{"use strict";var n=r(4867);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},1793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},6268:(e,t,r)=>{"use strict";var n=r(4867);e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}},7985:(e,t,r)=>{"use strict";var n=r(4867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return function(){return!0}}()},6016:(e,t,r)=>{"use strict";var n=r(4867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},4109:(e,t,r)=>{"use strict";var n=r(4867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}})),s):s}},8713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},4875:(e,t,r)=>{"use strict";var n=r(7288).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var i={};function s(e,t,r){if("object"!==typeof e)throw new TypeError("options must be an object");var n=Object.keys(e),o=n.length;while(o-- >0){var i=n[o],s=t[i];if(s){var a=e[i],u=void 0===a||s(a,i,e);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+i)}}o.transitional=function(e,t,r){function o(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,s){if(!1===e)throw new Error(o(n," has been removed"+(t?" in "+t:"")));return t&&!i[n]&&(i[n]=!0,console.warn(o(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,s)}},e.exports={assertOptions:s,validators:o}},4867:(e,t,r)=>{"use strict";var n=r(1849),o=Object.prototype.toString;function i(e){return Array.isArray(e)}function s(e){return"undefined"===typeof e}function a(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function u(e){return"[object ArrayBuffer]"===o.call(e)}function l(e){return"[object FormData]"===o.call(e)}function c(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&u(e.buffer),t}function d(e){return"string"===typeof e}function f(e){return"number"===typeof e}function p(e){return null!==e&&"object"===typeof e}function h(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Date]"===o.call(e)}function v(e){return"[object File]"===o.call(e)}function g(e){return"[object Blob]"===o.call(e)}function b(e){return"[object Function]"===o.call(e)}function w(e){return p(e)&&b(e.pipe)}function y(e){return"[object URLSearchParams]"===o.call(e)}function _(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function x(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function E(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function S(){var e={};function t(t,r){h(e[r])&&h(t)?e[r]=S(e[r],t):h(t)?e[r]=S({},t):i(t)?e[r]=t.slice():e[r]=t}for(var r=0,n=arguments.length;r<n;r++)E(arguments[r],t);return e}function j(e,t,r){return E(t,(function(t,o){e[o]=r&&"function"===typeof t?n(t,r):t})),e}function O(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:i,isArrayBuffer:u,isBuffer:a,isFormData:l,isArrayBufferView:c,isString:d,isNumber:f,isObject:p,isPlainObject:h,isUndefined:s,isDate:m,isFile:v,isBlob:g,isFunction:b,isStream:w,isURLSearchParams:y,isStandardBrowserEnv:x,forEach:E,merge:S,extend:j,trim:_,stripBOM:O}},6347:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>se});var n=r(6252),o=r(3577),i=r(4778),s=r(4520),a=r(1811),u=r(4371),l=r(7695),c=r(5911),d=r(3436),f=r(8035),p=r(8376),h=r(7536),m=r(6269);const v=(0,n._)("a",null,"Mes réalisations",-1),g={id:"main"},b={style:{width:"90vw"}},w=(0,n._)("a",null,"Mes Réalisations",-1),y=(0,n._)("a",null,"Last Voxes",-1),_=(0,n._)("p",null,"Last Voxes est un bot discord permettant l'automatisation et la simplification de nombreuses taches administratives sur un serveur discord.",-1),x=(0,n._)("p",null,"Sa structure est simple:",-1),E=(0,n._)("li",null,"Un robot discord, développé avec la librairie discord.py, permettant l'utilisation simplifiée de l'API Discord, lié à une base SQLite.",-1),S=(0,n._)("li",null,"Utilisation de Github pour gérer les versions.",-1),j=(0,n._)("br",null,null,-1),O=(0,n._)("p",null,"En cours de finalisation :",-1),C=(0,n._)("li",null,"Une API Python Flask (temporaire) permettant de communiquer avec une base de données PostgreSQL.",-1),A=(0,n._)("li",null,"Une base de données PostgreSQL permettant de stocker les informations.",-1),N=(0,n._)("li",null,"Une interface web, faite avec Vue.JS (framework HTML/ CSS / JS)",-1),k=(0,n._)("li",null,"Docker pour créer des images, Kubernetes et Prometheus pour rendre l'API scallable en attendant de changer le langage.",-1),P=(0,n._)("br",null,null,-1),T=(0,n._)("p",null,"Le code sur github est en repository privé, pour des raisons de sécurité.",-1),R=(0,n._)("br",null,null,-1),U=(0,n._)("p",null,"Pour en savoir plus à propos du bot:",-1),L=(0,n._)("li",null,[(0,n._)("a",{href:"https://discord.gg/bbqyjUu8dB",target:"_blank"},"Lien vers le serveur discord (création de compte requis)")],-1),q=(0,n._)("li",null,[(0,n._)("a",{href:"https://discord.com/api/oauth2/authorize?client_id=864281572399251488&permissions=1480152508918&scope=bot%20applications.commands",target:"_blank"},"Lien pour inviter le robot (création de compte + serveur discord requis)")],-1),W=(0,n._)("li",null,[(0,n._)("a",{href:"https://top.gg/bot/864281572399251488",target:"_blank"},"Lien vers top.gg, site de recensement de robots discord")],-1),B=(0,n._)("br",null,null,-1),D=(0,n._)("a",null,"Mes contributions",-1),M=(0,n._)("a",null,"Helper Python et Base de données",-1),J=(0,n._)("p",null,"Je suis helper Python et base de données sur un serveur discord d'environ 600 membres.",-1),F=(0,n._)("br",null,null,-1),I=(0,n._)("p",null,[(0,n.Uk)("Ce genre d'expérience m'a permis de rencontrer des développeurs en devenir, de discuter de différents projets avec eux, ce qui m'a permis"),(0,n._)("a",null," de rencontrer des personnes ayant de meilleures compétences que moi, qui se sont interéssées à mes projets, et m'ont énormément aidé.")],-1),z=(0,n._)("p",null,"Être helper me permet de rendre la pareille à d'autres futurs développeurs, à m'interesser à leurs projets, mais surtout, c'est pouvoir discuter autour d'un même et unique domaine.",-1),H=(0,n._)("a",null,"Conférence",-1),V=(0,n._)("p",null,"Animation d'une conférence basée sur le Python, en particulier sur la librairie discord.py, permettant de créer des robots discord.",-1),Z=(0,n._)("br",null,null,-1),K=(0,n._)("p",null,"J'y ai expliqué, avec un autre développeur, comment créer et coder un bot discord, librairie asynchrone, définir une instance, différentes commandes, évenements, mais surtout, comment lire et comprendre une documentation, ce qui n'est pas toujours facile !",-1),X=(0,n._)("a",null,"Missions de prestations",-1),$=(0,n._)("p",null,"Différentes missions liées au développement, par exemple:",-1),G=(0,n._)("li",null,"Création d'un script permettant de modifier facilement des milliers de fichiers (JSON).",-1),Q=(0,n._)("li",null,"Explication de cours et d'exercices à différents étudiants.",-1),Y=(0,n._)("li",null,"Réalisation d'un bot python permettant de poster chaque nouvelle annonce postée sur dealabs.",-1),ee=(0,n._)("li",null,"etc.",-1);function te(e,t,r,te,re,ne){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(d.s,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i.L,{id:"color",absolute:"",style:{overflow:"visible"}},{default:(0,n.w5)((()=>[(0,n.Wm)(s.g,{class:"navbarcolor",onClick:t[0]||(t[0]=e=>ne.clickdrawer())}),(0,n.Wm)(a.o,null,{default:(0,n.w5)((()=>[v])),_:1})])),_:1}),(0,n.Wm)(m.V,{class:"overflow-",id:"color",modelValue:e.drawer,"onUpdate:modelValue":t[1]||(t[1]=t=>e.drawer=t),absolute:"",temporary:""},{default:(0,n.w5)((()=>[(0,n.Wm)(f.iE,{nav:"",dense:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.redirectitems,(e=>((0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(p.l,{"prepend-icon":e.icon,title:e.title,onClick:t=>ne.redirectnavbar(e.path)},null,8,["prepend-icon","title","onClick"])])))),256))])),_:1})])),_:1},8,["modelValue"]),(0,n.Wm)(h.O,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u._,{class:"mx-auto overflow-hidden",height:"100vh",width:"0vw"})])),_:1}),(0,n._)("div",g,[(0,n.Wm)(u._,{id:"ecartcategorie",elevation:"0"}),(0,n.Wm)(u._,{id:"ecartcategorie",elevation:"0"}),(0,n._)("div",b,[(0,n.Wm)(u._,{width:"80%"},{default:(0,n.w5)((()=>[(0,n.Wm)(l.E,null,{default:(0,n.w5)((()=>[w])),_:1}),(0,n.Wm)(u._,{elevation:"0\t"},{default:(0,n.w5)((()=>[(0,n.Wm)(l.E,null,{default:(0,n.w5)((()=>[y])),_:1}),(0,n.Wm)(c.Z,null,{default:(0,n.w5)((()=>[_,x,E,S,j,O,C,A,N,k,P,T,R,U,L,q,W,B,(0,n._)("p",null,"Nombre de serveurs qui l'utilisent: "+(0,o.zw)(e.lastvoxesnumguilds)+".",1)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(u._,{id:"ecartcategorie",elevation:"0"}),(0,n.Wm)(u._,{width:"80%"},{default:(0,n.w5)((()=>[(0,n.Wm)(l.E,null,{default:(0,n.w5)((()=>[D])),_:1}),(0,n.Wm)(u._,{elevation:"0"},{default:(0,n.w5)((()=>[(0,n.Wm)(l.E,null,{default:(0,n.w5)((()=>[M])),_:1}),(0,n.Wm)(c.Z,null,{default:(0,n.w5)((()=>[J,F,I,z])),_:1})])),_:1}),(0,n.Wm)(u._,{elevation:"0"},{default:(0,n.w5)((()=>[(0,n.Wm)(l.E,null,{default:(0,n.w5)((()=>[H])),_:1}),(0,n.Wm)(c.Z,null,{default:(0,n.w5)((()=>[V,Z,K])),_:1})])),_:1}),(0,n.Wm)(u._,{elevation:"0"},{default:(0,n.w5)((()=>[(0,n.Wm)(l.E,null,{default:(0,n.w5)((()=>[X])),_:1}),(0,n.Wm)(c.Z,null,{default:(0,n.w5)((()=>[$,G,Q,Y,ee])),_:1})])),_:1})])),_:1})])])])),_:1})])}const re=r(9669)["default"],ne={name:"Realisations",data:()=>({lastvoxesnumguilds:0,drawer:!0,redirectitems:[{title:"Accueil",icon:"mdi-home",path:"/"},{title:"Mes compétences",icon:"mdi-information",path:"/competences"},{title:"Mes réalisations",icon:"mdi-projector-screen",path:"/realisations"},{title:"Mon parcours",icon:"mdi-certificate",path:"/cursus"},{title:"F.A.Q Alternance",icon:"mdi-help",path:"/faq"},{title:"Contact",icon:"mdi-forum",path:"/contact"}]}),created(){re({method:"GET",url:"https://discordapp.com/api/v9/users/@me/guilds",headers:{Authorization:"Bot ODY0MjgxNTcyMzk5MjUxNDg4.YOzK8A.8ZfW_D_affo1tHGtNj7baeF9N9Y"}}).then((({data:e})=>{this.lastvoxesnumguilds=Object.keys(e).length}))},mounted(){document.getElementById("main").style.marginLeft="20vw"},methods:{redirectnavbar:function(e){this.$router.push(e)},clickdrawer(){this.drawer=!this.drawer,document.getElementById("main").style.marginLeft=this.drawer?"20vw":"10vw"}}};var oe=r(3744);const ie=(0,oe.Z)(ne,[["render",te]]),se=ie}}]);
//# sourceMappingURL=347.d18b8698.js.map