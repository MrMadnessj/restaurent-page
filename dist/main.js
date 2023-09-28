(()=>{"use strict";var n={214:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Mooli&family=Pacifico&display=swap);"]),i.push([n.id,":root{\n    --logopurple: #1F0F53;\n    --logocream : #FFDB99;\n    --headerorange: #d16500;\n}\n\n*{\n    box-sizing: border-box;\n    margin: 0;\n}\n\n.nav-bar-div{\n    z-index: 1;\n    width: 100%;\n    position: absolute;\n    background-color: transparent;\n    background-color: var(--logocream);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    border: 2px solid green;\n    padding: 1rem 0 0 0;\n}\n\n.nav-item-div{\n\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 100px 100px 100px;\n    gap: 1rem;\n}\n\n.logo{\n    width: auto;\n    max-height: 7rem;\n}\n\n.about-btn,\n.menu-btn,\n.contact-btn{\n    background-color: transparent;\n    margin: 0;\n    border: 0;\n    height: 3rem;\n    width: 6rem;\n    font-size: 1.5rem;\n    color: #5f3900;\n    font-family: Pacifico;\n    font-family: 'DM Serif Text';\n\n    transition: 0.2s ease-in;\n}\n\n.contact-btn{\n    width: 7rem;\n}\n\n.about-btn:hover,\n.menu-btn:hover,\n.contact-btn:hover{\n    transform: scale(1.05);\n}\n\n.btn-ul{\n    display: inline-block;\n    position: relative;\n}\n\n.btn-ul::after{\n    content: '';\n    position: absolute;\n    width: 100%;\n    transform: scaleX(0);\n    height: 2px;\n    bottom: 0;\n    left: 0;\n    background-color: #c704bd;\n    background-color: #5f3900;\n    transform-origin: center;\n    transition: transform 0.25s ease-out;\n}\n\n.btn-ul:hover:after{\n    transform: scaleX(1);\n    transform-origin: center;\n}\n\n",""]);const c=i},960:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"\n.home-div{\n    position: sticky;\n    min-height: 100vh;\n    background-color: rgb(234, 0, 255);\n    background-image: linear-gradient(to bottom right, #5f3900, #d37f02);\n    background-color: #5f3900;\n}\n\n.hero-pic{\n\n}\n\n.hero-pic-div{\n\n}\n\n.home-con-div{\n    border: 1px solid blue;\n    position: relative;\n}\n\n.home-content{\n    font-size: 3rem;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=t.p+"d8773515c11a101ebf2e.png",e=t.p+"9d5e2592224268176fb4.png";var r=t(379),o=t.n(r),a=t(795),i=t.n(a),c=t(569),s=t.n(c),l=t(565),d=t.n(l),u=t(216),p=t.n(u),f=t(589),m=t.n(f),v=t(960),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;var b=t(214),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),o()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals,console.log("yo buffy");const y=document.querySelector("#h-container");console.log("yo buffy");const x=function(){const e=document.createElement("div"),t=document.createElement("button"),r=document.createElement("button"),o=document.createElement("button"),a=document.createElement("div"),i=new Image;return i.src=n,i.classList.add("logo"),e.classList.add("nav-bar-div"),a.classList.add("nav-item-div"),i.classList.add("logo"),t.classList.add("about-btn"),r.classList.add("menu-btn"),o.classList.add("contact-btn"),t.classList.add("btn-ul"),r.classList.add("btn-ul"),o.classList.add("btn-ul"),t.innerHTML="About",r.innerHTML="Menu",o.innerHTML="Contact",a.append(t,r,o),e.append(i,a),e}(),w=function(){const n=document.createElement("div"),t=document.createElement("div"),r=new Image;t.classList.add("hero-pic-div");const o=document.createElement("div"),a=document.createElement("h1");return a.innerHTML="Life's a journey Coffee's the Fuel Keep Brewing!",o.classList.add("home-con-div"),a.classList.add("home-content"),o.append(a),r.src=e,r.classList.add("hero-pic"),n.classList.add("home-div"),n.append(r,o),n}();console.log("yo buffy"),y.append(x,w),console.log("yo buffy")})()})();