!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){var o=n(1);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(3)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"#yukon-popup{display:none;font-family:-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);justify-content:center;align-items:center}#yukon-popup .yukon-main{background-color:transparent;max-width:500px;max-height:100vh;border-radius:4px;overflow-y:auto;box-sizing:border-box}#yukon-popup .yukon-main .yukon-header{display:flex;justify-content:flex-end}#yukon-popup .yukon-main .yukon-header button[yukon-reject]{background-color:#e6e6e6;color:black}#yukon-popup .yukon-main .yukon-footer{display:flex;justify-content:center}#yukon-popup .yukon-main .yukon-footer button[yukon-confirm]{background-color:darkorange;color:white;width:100%}#yukon-popup .yukon-main button{font-size:.875rem;padding-left:1rem;padding-right:1rem;padding-top:.5rem;padding-bottom:.5rem;border-radius:.25rem;border-style:none;border-width:0;cursor:pointer;-webkit-appearance:button;text-transform:none;overflow:visible;line-height:1.15;margin:0;will-change:transform;-moz-osx-font-smoothing:grayscale;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);transition:transform .25s ease-out,-webkit-transform .25s ease-out}@keyframes mmfadeIn{from{opacity:0}to{opacity:1}}@keyframes mmfadeOut{from{opacity:1}to{opacity:0}}@keyframes mmslideIn{from{transform:translateY(15%)}to{transform:translateY(0)}}@keyframes mmslideOut{from{transform:translateY(0)}to{transform:translateY(-10%)}}#yukon-popup[is-open='false']{display:none;will-change:transform;animation:mmfadeOut 0.3s cubic-bezier(0, 0, 0.2, 1)}#yukon-popup[is-open='false'] .yukon-main{will-change:transform;animation:mmslideOut 0.3s cubic-bezier(0, 0, 0.2, 1)}#yukon-popup[is-open='true']{display:flex;animation:mmfadeIn 0.3s cubic-bezier(0, 0, 0.2, 1)}#yukon-popup[is-open='true'] .yukon-main{animation:mmslideIn 0.3s cubic-bezier(0, 0, 0.2, 1)}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];null!=s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var o,r,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),c=null,u=0,l=[],f=n(4);function p(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(v(o.parts[s],t))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(v(o.parts[s],t));i[o.id]={id:o.id,refs:1,parts:a}}}}function d(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}function m(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertAt.before,n);n.insertBefore(t,r)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function y(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return n.nc}();o&&(e.attrs.nonce=o)}return b(t,e.attrs),m(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var s=u++;n=c||(c=y(t)),o=w.bind(null,n,s,!1),r=w.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),m(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),r=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){h(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var s=n[r];(a=i[s.id]).refs--,o.push(a)}e&&p(d(e,t),t);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var g,k=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function w(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=k(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t){e.exports="<div id=yukon-popup> <div class=yukon-main> <div class=yukon-header> <button yukon-reject>X</button> </div> <img class=yukon-img> <div class=yukon-footer> <button yukon-confirm>Confirm</button> </div> </div> </div> "},function(e,t,n){"use strict";n.r(t);class o{constructor(e){if(e instanceof TouchEvent){const n=e;this.path=n.view.location.pathname,this.type=n.type,this.timeStamp=Date.now();for(var t=0;t<n.touches.length;t++){const e=n.touches.item(t);if(!e)return;this.tracks||(this.tracks=[]),this.tracks.push({identifier:e.identifier,clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY,pageX:e.pageX,pageY:e.pageY})}}"string"==typeof e&&(this.type=e,this.path=location.pathname,this.timeStamp=Date.now())}static listen(e){document.ontouchstart=o.listener,document.ontouchmove=o.listener,document.ontouchend=o.listener,o.intervalNumber=setInterval(()=>{o.actions.length<=0||(e(o.actions),o.actions=[])},o.timeout)}static stop(){clearInterval(o.intervalNumber),document.ontouchstart=null,document.ontouchmove=null,document.ontouchend=null}}o.timeout=1e3,o.actions=[],o.listener=(e=>{e.isTrusted&&o.actions.push(new o(e))});var r=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}c((o=o.apply(e,t||[])).next())})};n(0);const i=n(5);class s{constructor(e,t,n){this.confirmAttribute="yukon-confirm",this.rejectAttribute="yukon-reject",this.openAttribute="is-open",this.element=e,this.confirm=t.bind(this),this.reject=n.bind(this),this.onClick=this.onClick.bind(this),this.element.addEventListener("click",this.onClick)}static show(e,t,n){let o=document.getElementById(s.elementId);if(!o){const e=document.createElement("div");e.innerHTML=i.trim(),document.body.appendChild(e.firstChild),o=document.getElementById(s.elementId)}const r=o.getElementsByTagName("img");r.length>0&&(r[0].src=e),new s(o,t,n).open()}onClick(e){return r(this,void 0,void 0,function*(){this.isOpen()&&e.target instanceof HTMLElement&&(e.preventDefault(),e.target.hasAttribute(this.rejectAttribute)?(this.reject(),this.close()):e.target.hasAttribute(this.confirmAttribute)&&(yield this.confirm(),this.close()))})}open(){this.activeElement=document.activeElement instanceof HTMLElement?document.activeElement:null,this.element.setAttribute(this.openAttribute,"true")}close(){this.element.setAttribute(this.openAttribute,"false"),this.activeElement&&this.activeElement.focus()}isOpen(){return"true"===this.element.getAttribute(this.openAttribute)}}s.elementId="yukon-popup";class a{static send(e){a.ws&&a.ws.send(e)}static connect(e,t,n){"function"==typeof WebSocket?(a.ws=new WebSocket(`${e}?uuid=${t.uuid}&key=${t.key}`),a.ws.onopen=(e=>{console.log("ws_onopen")}),a.ws.onmessage=(e=>{console.log(`ws_onmessage: data=${e.data}`),n(e.data)}),a.ws.onclose=(o=>{console.log(`ws_onclose: reason=${o.reason} code=${o.code} wasClean=${o.wasClean}`),a.timeOutNumber=setTimeout(()=>a.connect(e,t,n),a.reConnectTimeOut)}),a.ws.onerror=(e=>{console.log(`ws_onerror: event=${JSON.stringify(e)}`)})):console.error("WebSocket NOT Supported By Your Browser!")}static close(){a.ws&&a.ws.close(),a.timeOutNumber&&clearTimeout(a.timeOutNumber)}}a.reConnectTimeOut=1e3;class c{static set(e,t){var n=new Date(Date.now()+31536e6).toUTCString();document.cookie=`${e}=${t};expires=${n};path=/`}static get(e){const t=e+"=",n=decodeURIComponent(document.cookie).split(";");for(var o=0;o<n.length;o++){for(var r=n[o];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}}}class u{static get(){const e="YUKON_UUID",t=c.get(e);return t||(c.set(e,u.generate()),c.get(e))}static generate(){let e="";for(let t=0;t<32;t++)e+=Math.floor(36*Math.random()).toString(36).toUpperCase();return e}}class l{}l.isPrd=(()=>!0),l.url=(()=>l.isPrd()?"wss://yukonws.herokuapp.com":"ws://localhost:3000"),l.key=(()=>"string"==typeof yukonAuthKey?yukonAuthKey:void 0),l.headers=(()=>"object"==typeof yukonHeaders?yukonHeaders:void 0);class f{}f.get=((e,t)=>new Promise((n,o)=>{var r=new XMLHttpRequest;r.open("GET",e,!0),r.timeout=1e4,Object.keys(t).forEach(e=>r.setRequestHeader(e,t[e])),r.onreadystatechange=(()=>{if(4===r.readyState){if(200===r.status)return n(r.responseText);o(r.responseText)}}),r.send()})),f.post=((e,t,n)=>new Promise((o,r)=>{var i=new XMLHttpRequest;i.open("POST",e,!0),i.timeout=1e4,Object.keys(t).forEach(e=>i.setRequestHeader(e,t[e])),i.onreadystatechange=(()=>{if(4===i.readyState){if(200===i.status)return o(i.responseText);r(i.responseText)}}),i.send(n)}));var p=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}c((o=o.apply(e,t||[])).next())})};onload=(()=>{const e=u.get(),t=l.url(),n=l.key();console.log(`onload: url=${t} key=${n} uuid=${e}`),e&&n&&t&&(a.connect(t,{uuid:e,key:n},e=>{const t=JSON.parse(e).coupon;t&&s.show(t.image,()=>p(void 0,void 0,void 0,function*(){const e=l.headers(),n=yield f.get(t.confirm,e);console.log(`coupon get response: ${n}`),a.send(JSON.stringify({coupon:new o("confirmed")}))}),()=>{a.send(JSON.stringify({coupon:new o("rejected")}))})}),o.listen(e=>a.send(JSON.stringify({actions:e}))))}),onbeforeunload=(()=>{console.log("onbeforeunload"),o.stop(),a.close()})}]);