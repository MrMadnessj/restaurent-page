(()=>{"use strict";var e={395:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Crimson+Text:ital@1&family=Lobster+Two:ital@1&display=swap);"]),i.push([e.id,".main-menu{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #442900;\n}\n\n.menu-div{\n    flex: 30;\n    background-color: #442900;\n    min-height: 76.5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.menu{\n    /* border: 1px solid rgb(255, 255, 255); */\n    min-height: 70vh;\n    min-width: 70%;\n    max-width: 70%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n\n    grid-template-rows: repeat(auto-fit, minmax(150px,150px));\n    row-gap: 1rem;\n    background-color: beige;\n}\n\n.menu-heading-div{\n    border: 1px solid black;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    /* grid-column: 1/4; */\n}\n\n.heading-super{\n    font-family: 'Lobster Two';\n    font-size: 3rem;\n}\n\n.heading-sub{\n    font-size: 1.2rem;\n    font-family: 'Crimson Text', serif;\n    font-style: italic;\n}\n\n.card{\n    border: 1px solid rgb(58, 38, 0);\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: 1.5fr 1fr;\n}\n\n.item-name{\n\n}\n\n.item-price{\n\n}\n\n.item-ingredients{\n    padding: 1rem;\n}\n\n.image-holder{\n    /* border: 1px solid lightslategray; */\n    grid-column: 2/3;\n    grid-row: 1/3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.name-price{\n    /* border: 1px solid purple; */\n    display: flex;\n    justify-content: space-between;\n    padding: clamp(0.5rem,1rem,1rem);\n    font-size: 1.4rem;\n\n}\n\n.left-btn,\n.right-btn{\n    padding: 1rem;\n    height: 72vh;\n    background-color: rgba(80, 65, 1, 0.534);\n    font-size: 3rem;\n    color: rgb(243, 225, 165);\n    border: none;\n    transition: 0.2s ease-in-out;\n    border-radius: 5px;\n}\n\n.left-btn:hover,\n.right-btn:hover{\n    background-color: #442900;\n}\n\n",""]);const s=i},214:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Mooli&family=Pacifico&display=swap);"]),i.push([e.id,":root{\n    --logopurple: #1F0F53;\n    --logocream : #FFDB99;\n    --headerorange: #d16500;\n}\n\n*{\n    box-sizing: border-box;\n    margin: 0;\n}\n\n#container{\n    padding: 1rem solid green;\n}\n\n.nav-bar-div{\n    z-index: 1;\n    width: 100%;\n    /* position: absolute; */\n    background-color: transparent;\n    background-color: var(--logocream);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    border: 2px solid green;\n    padding: 1rem 0 0 0;\n}\n\n.nav-item-div{\n\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 100px 100px 100px;\n    gap: 1rem;\n}\n\n.logo{\n    width: auto;\n    max-height: 7rem;\n}\n\n.about-btn,\n.menu-btn,\n.contact-btn{\n    background-color: transparent;\n    margin: 0;\n    border: 0;\n    height: 3rem;\n    width: 6rem;\n    font-size: 1.5rem;\n    color: #5f3900;\n    font-family: Pacifico;\n    font-family: 'DM Serif Text';\n\n    transition: 0.2s ease-in;\n}\n\n.contact-btn{\n    width: 7rem;\n}\n\n.about-btn:hover,\n.menu-btn:hover,\n.contact-btn:hover{\n    transform: scale(1.05);\n    cursor: pointer;\n}\n\n\n\n.btn-ul{\n    display: inline-block;\n    position: relative;\n}\n\n\n.btn-ul::after{\n    content: '';\n    position: absolute;\n    width: 100%;\n    transform: scaleX(0);\n    height: 2px;\n    bottom: 0;\n    left: 0;\n    background-color: #c704bd;\n    background-color: #5f3900;\n    transform-origin: center;\n    transition: transform 0.25s ease-out;\n}\n\n.btn-ul:hover:after{\n    transform: scaleX(1);\n    transform-origin: center;\n}\n\n.menu-image{\n    max-height: 6rem;\n}\n\n\n\n\n",""]);const s=i},960:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Pacifico&family=Ubuntu:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap);"]),i.push([e.id,"*{\n    user-select: none;\n}\n\n.home-div{\n\n    background-color: rgb(234, 0, 255);\n    background-image: linear-gradient(to bottom right, #5f3900, #d37f02);\n    background-color: #5f3900;\n    min-height: 76.5vh;\n}\n\n.home-elements{\n    min-height: 76.5vh;\n    display: flex;\n\n    flex-wrap: wrap;\n    flex-direction: row-reverse;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.hero-pic{\n    height: 35rem;\n    /* border: 1px solid green; */\n    margin: 0 0 0 0;\n}\n\n.hero-pic-div{\n    /* border: 1px solid rgb(0, 0, 0); */\n    flex: 1;\n    flex-shrink: 1;\n    padding: 0 0 2rem 0;\n}\n\n.home-con-div{\n    border: 1px solid blue;\n\n    max-width: 30rem;\n    flex: 1;\n    padding: 1rem;\n    flex-shrink: 1;\n    width: 40rem;\n    padding: 7rem 0 0 0;\n}\n\n.home-content{\n    font-size: clamp(3.5rem, 6rem, 8rem);\n    border: 3px solid blanchedalmond;\n    word-break: break-all;\n    width: clamp(15rem, 45rem, 100rem);\n\n    font-family: 'DM Serif Text';\n    color: rgb(78, 51, 0);\n    -webkit-text-stroke-width: 2px;\n    -webkit-text-stroke-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hero-pic:hover + .home-content{\n    color: white;\n}\n\n.hero-pic::after + .home-content{\n    color: white;\n}\n\n.about-div{\n    /* border: 1px solid yellow; */\n    max-width: 60%;\n\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: bisque;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.about-content{\n    font-size: 1.4rem;\n}\n\n\n.contact-main-div{\n    display: flex;\n    justify-content: center;\n    /* border: 1px solid blue; */\n    padding: 1rem;\n\n}\n\n.contact-div{\n    /* position: relative; */\n    /* border: 1px solid red; */\n    min-width: 40%;\n    padding-top: 2rem;\n}\n\n.cform{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    border: 5px solid blanchedalmond;\n    gap: 1rem;\n    border-radius: 1rem;\n    padding: 1rem 1rem 1rem 1rem;\n}\n\n.flabel{\n    font-size: 1.7rem;\n    font-family: 'Ubuntu', sans-serif;\n    color: blanchedalmond;\n}\n\n.finput{\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    box-sizing: border-box;\n    border: 3px solid #ccc;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    outline: none;\n    border: none;\n}\n\n.finput:focus{\n    border: 3px solid rgb(59, 36, 0);\n}\n\n.hero-pic-div2{\n    /* border: 1px solid rgb(0, 0, 0); */\n    /* flex: 1; */\n    flex-shrink: 1;\n    padding: 2rem 0 2rem 0;\n}\n\n.above-form-content{\n    /* border: 1px solid white; */\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    color: blanchedalmond;\n    font-size: 1.3rem;\n    font-family: ubuntu;\n}\n\n.contact-heading{\n}\n\n.timing-holder{\n\n}\n\n.timings{\n\n}\n\n.times{\n    padding: 0.2rem 1rem 0.5rem 1rem;\n}\n\n.submit-btn{\n    height: 2rem;\n    font-size: 1.5rem;\n    background-color: transparent;\n    color: blanchedalmond;\n    border: 3px solid blanchedalmond;\n\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    text-align: center;\n}   ",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],l=o[d]||0,m="".concat(d," ").concat(l);o[d]=l+1;var u=t(m),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var f=r(p,a);a.byIndex=s,n.splice(s,0,{identifier:m,updater:f,references:1})}i.push(m)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var c=a(e,r),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"d8773515c11a101ebf2e.png",n=t.p+"9d5e2592224268176fb4.png";function a(e,n){const t=document.createElement("div"),a=document.createElement("p"),r=document.createElement("p");return t.classList.add("menu-heading-div"),a.classList.add("heading-super"),r.classList.add("heading-sub"),a.textContent=e,r.textContent=n,t.append(a,r),t}function r(e,t,a){const r=document.createElement("div");r.classList.add("card");const o=document.createElement("p");o.textContent=e,o.classList.add("item-name");const i=document.createElement("div");i.classList.add("image-holder");const s=new Image;s.classList.add("menu-image"),s.src=n,i.append(s);const c=document.createElement("p");c.textContent=`$${a}`,c.classList.add("item-price");const d=document.createElement("p");d.textContent=t,d.classList.add("item-ingredients");const l=document.createElement("div");return l.classList.add("name-price"),l.append(o,c),r.append(l,i,d),r}var o=t(379),i=t.n(o),s=t(795),c=t.n(s),d=t(569),l=t.n(d),m=t(565),u=t.n(m),p=t(216),f=t.n(p),h=t(589),b=t.n(h),g=t(960),v={};v.styleTagTransform=b(),v.setAttributes=u(),v.insert=l().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=f(),i()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;var y=t(214),w={};w.styleTagTransform=b(),w.setAttributes=u(),w.insert=l().bind(null,"head"),w.domAPI=c(),w.insertStyleElement=f(),i()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;var x=t(395),L={};L.styleTagTransform=b(),L.setAttributes=u(),L.insert=l().bind(null,"head"),L.domAPI=c(),L.insertStyleElement=f(),i()(x.Z,L),x.Z&&x.Z.locals&&x.Z.locals;let E=0;const k=document.querySelector("#h-container"),C=function(){const n=document.createElement("div"),t=document.createElement("button"),a=document.createElement("button"),r=document.createElement("button"),o=document.createElement("div"),i=new Image;return i.src=e,i.classList.add("logo"),n.classList.add("nav-bar-div"),o.classList.add("nav-item-div"),i.classList.add("logo"),t.classList.add("about-btn"),a.classList.add("menu-btn"),r.classList.add("contact-btn"),t.classList.add("btn-ul"),a.classList.add("btn-ul"),r.classList.add("btn-ul"),t.innerHTML="About",a.innerHTML="Menu",r.innerHTML="Contact",o.append(t,a,r),n.append(i,o),t.addEventListener("click",(()=>{E=1,console.log(E),A()})),a.addEventListener("click",(()=>{E=2,console.log(E),A()})),r.addEventListener("click",(()=>{E=3,console.log(E),A()})),i.addEventListener("click",(()=>{E=0,A(),console.log(E)})),n}(),T=function(){const e=document.createElement("div"),t=document.createElement("div");t.classList.add("home-elements");const a=document.createElement("div"),r=new Image;a.classList.add("hero-pic-div"),document.createElement("div");const o=document.createElement("h1");return o.innerHTML="Life's a journey<br>Coffee's the fuel<br>Keep brewing!",o.classList.add("home-content"),r.src=n,r.classList.add("hero-pic"),e.classList.add("home-div"),document.createElement("div"),t.append(r,o),e.append(t),e}(),M=function(){const e=document.createElement("div");e.classList.add("main-menu");const n=document.createElement("button"),t=document.createElement("button");n.classList.add("left-btn"),t.classList.add("right-btn"),n.textContent="<",t.textContent=">";let o=0;function i(){let i;return 0==o?i=function(){const e=[r("Espresso","A shot of concentrated coffee made by forcing hot water through finely-ground coffee beans.","2.50"),r("Cappuccino","A classic Italian coffee with equal parts espresso, steamed milk, and milk foam.","3.50"),r("Latte","A smooth and creamy coffee made with espresso and steamed milk.","4.00"),r("Americano","A diluted espresso with hot water, delivering a bold coffee flavor.","3.00"),r("Mocha","A rich coffee blend with espresso, chocolate, steamed milk, and whipped cream.","4.50"),r("Caramel Macchiato","A sweet and creamy coffee with espresso, caramel syrup, and milk.","4.25"),r("Iced Coffee","Chilled coffee served over ice with your choice of milk and sweetener.","3.50"),r("Macchiato",'Espresso "stained" with a dollop of frothy milk for a bold flavor.',"3.25"),r("Chai Latte","A spiced tea blend with steamed milk, perfect for a comforting drink.","4.25"),r("Cortado","Equal parts espresso and steamed milk, creating a balanced coffee experience.","3.75")],n=a("Breakfast","just eat bruh"),t=document.createElement("div");t.classList.add("menu-div");const o=document.createElement("div");return o.classList.add("menu"),o.append(n),e.forEach((e=>{o.appendChild(e)})),t.append(o),t}():1==o?i=function(){const e=[r("Grilled Chicken Sandwich","Juicy grilled chicken with lettuce and mayo toasted bun.","8.95"),r("Caesar Salad","Crisp romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.","7.50"),r("Margherita Pizza","Classic pizza with tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.","10.00"),r("Club Sandwich","Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo.","9.75"),r("Pasta Primavera","Pasta with seasonal vegetables and a creamy Alfredo sauce.","11.25"),r("Fish Tacos","Two soft tortillas filled with crispy fish, coleslaw, and chipotle mayo.","12.50"),r("Caprese Panini","Panini with fresh mozzarella, tomato, basil, and balsamic glaze.","8.50"),r("Mushroom Risotto","Creamy risotto with wild mushrooms and Parmesan cheese.","10.75"),r("Greek Salad","Fresh Greek salad with cucumbers, tomatoes, olives, feta cheese, and Greek dressing.","9.25"),r("Chicken Caesar Wrap","Grilled chicken, lettuce, Parmesan cheese, dressing in a wrap.","8.95")],n=a("Lunch","just eat lunch"),t=document.createElement("div");t.classList.add("menu-div");const o=document.createElement("div");return o.classList.add("menu"),o.append(n),e.forEach((e=>{o.appendChild(e)})),t.append(o),t}():2==o&&(i=function(){const e=[r("Chocolate Cake","Rich and moist chocolate cake with a velvety chocolate frosting.","5.50"),r("Tiramisu","A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.","6.00"),r("Cheesecake","Creamy and smooth cheesecake with your choice of fruit topping.","4.75"),r("Molten Lava Cake","Warm chocolate cake with a gooey, molten chocolate center, served with vanilla ice cream.","7.25"),r("Fruit Tart","A buttery tart crust filled with pastry cream and topped with fresh fruits.","5.25"),r("Panna Cotta","A silky Italian dessert made with sweetened cream and topped with a berry compote.","4.95"),r("Creme Brulee","A creamy custard dessert with a caramelized sugar crust.","6.50"),r("Lemon Sorbet","Refreshing lemon sorbet served in a citrus cup.","3.75"),r("Mousse au Chocolat","Light and airy chocolate mousse with a hint of espresso.","5.75"),r("Fudge Brownie","Warm brownie topped with vanilla cream, hot fudge, and whipped cream.","7.50")],n=a("dessert","sugar & chill"),t=document.createElement("div");t.classList.add("menu-div");const o=document.createElement("div");return o.classList.add("menu"),o.append(n),e.forEach((e=>{o.appendChild(e)})),t.append(o),t}()),e.innerHTML="",e.append(n,i,t),e}return n.addEventListener("click",(()=>{o<3&&o>=0&&(console.log("neow"),0==o?o=0:o--,i())})),t.addEventListener("click",(()=>{o<3&&o>=0&&(console.log("nopoeow"),2==o?o=2:o++,i())})),i()}(),S=function(){const e=document.createElement("div");e.classList.add("home-div","home-elements");const t=document.createElement("div");t.classList.add("about-div");const a=document.createElement("p");a.classList.add("about-content");const r=document.createElement("div"),o=new Image;return o.src=n,o.classList.add("hero-pic"),r.classList.add("hero-pic-div"),r.append(o),a.innerHTML="At Comfy Cafe, we believe that coffee is more than just a beverage; it's a shared experience that brings people together. Our journey began with a simple love for the aroma of freshly brewed coffee and the joy it brings to our customers.<br><br>We're not just a coffee shop; we're a place where friendships are forged, ideas are born, and stories are shared. Our cozy ambiance and carefully crafted brews create a haven where you can escape the daily grind and connect with friends, old and new. We take pride in sourcing the finest coffee beans and serving you that perfect cup of comfort.<br><br>Whether you're seeking a quiet moment of solitude or vibrant conversations, Comfy Cafe is here to be your second home. Come join us, and let's create wonderful memories over a cup of exceptional coffee. Welcome to our coffee-loving family!",t.append(r,a),e.append(t),e}(),z=function(){const e=document.createElement("div");e.classList.add("home-div","contact-main-div");const t=function(){const e=document.createElement("div");e.classList.add("above-form-content");const n=document.createElement("h1");n.classList.add("contact-heading"),n.innerHTML="Vist us or Call us Today!";const t=document.createElement("div"),a=document.createElement("h2");t.classList.add("timing-holder"),a.classList.add("timings");const r=document.createElement("p");return r.classList.add("times"),r.innerHTML="Tue-Thur: 11am-8pm<br>Fri-Sat: 11am-10pm<br>Sun-Mon: closed<br><br>+55 343-433-23",t.append(a,r),e.append(n,t),e}(),a=function(){const e=document.createElement("form");e.classList.add("cform");const n=document.createElement("label"),t=document.createElement("input");n.innerHTML="Name",t.type="name",n.classList.add("flabel"),t.classList.add("finput");const a=document.createElement("div");a.append(n,t);const r=document.createElement("label"),o=document.createElement("input");r.innerHTML="Email",o.type="email",r.classList.add("flabel"),o.classList.add("finput");const i=document.createElement("div");i.append(r,o);const s=document.createElement("label"),c=document.createElement("input");s.innerHTML="Label",c.type="text",s.classList.add("flabel"),c.classList.add("finput");const d=document.createElement("div");d.append(s,c);const l=document.createElement("button");return l.classList.add("submit-btn"),l.innerHTML="Submit",e.append(a,i,d,l),e}(),r=document.createElement("div");r.classList.add("contact-div");const o=document.createElement("div"),i=new Image;return i.src=n,i.classList.add("hero-pic"),o.classList.add("hero-pic-div2"),o.append(i),r.append(t,a),e.append(r,o),e}();function A(){switch(k.innerHTML="",E){case 0:k.innerHTML="",console.log("home 0"),k.append(C,T);break;case 1:k.innerHTML="",console.log("about 1"),k.append(C,S);break;case 2:k.innerHTML="",console.log("menu 2"),k.append(C,M);break;case 3:k.innerHTML="",console.log("contact 3"),k.append(C,z);break;default:k.innerHTML="",console.log("this default bruh"),k.append(C,T)}}A()})()})();