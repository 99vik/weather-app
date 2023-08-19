(()=>{"use strict";var n={35:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,":root {\n    --theme-color: blue;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nmain {\n    min-height: 89vh;\n    background-color: whitesmoke;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nmain .current-weather {\n    width: clamp(340px, 60vw, 460px);\n    padding: 0.6rem;\n    background-color: white;\n    border-radius: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: gray;\n}\n\nmain .current-weather p:nth-child(1) {\n    margin-bottom: 1rem;\n}\n\nmain .current-weather p:nth-child(3) {\n    margin-top: -0.4rem;\n    margin-bottom: 0.8rem;\n    font-weight: 500;\n    color: black;\n}\n\nmain .current-weather div {\n    color: black;\n    display: flex;\n    gap: 0.8rem;\n    align-items: center;\n    font-size: 2.5rem;\n}\n\nnav {\n    box-shadow: 0px 0px 10px 0px rgba(128, 128, 128, 0.3);\n    border-bottom: 1px solid rgba(128, 128, 128, 0.3);\n    padding: 0 clamp(8px, 2vw, 40px);\n    max-width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 11vh;\n}\n\nnav h1 {\n    color: var(--theme-color);\n}\n\nnav input {\n    width: clamp(180px, 30vw, 320px);\n    padding: 0.6rem 0.4rem;\n    padding-left: 36px;\n    font: 1rem;\n    outline: none;\n    border: none;\n    background-color: rgba(187, 187, 187, 0.2);\n    border-radius: 0.7rem;\n    color: #808080;\n}\n\nnav div {\n    position: relative;\n}\n\nnav div button {\n    height: 24px;\n    width: fit-content;\n    background: none;\n    border: none;\n    position: absolute;\n    left: 6px;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\nnav > div:last-of-type {\n    font-weight: bold;\n    font-size: 1.2rem;\n    gap: 0.6rem;\n    display: flex;\n    align-items: center;\n}\n\nnav div img {\n    width: 24px;\n}\n\nnav div img:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\nmain .forecast {\n    width: 70vw;\n    margin-top: 4rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\nmain .forecast > div {\n    font-size: 1rem;\n    padding: clamp(0.6rem, 2vw, 2rem);\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n    align-items: center;\n    background-color: white;\n    border-radius: 1rem;\n}\n\nmain .forecast > div div{\n    font-weight: 500;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1.2rem;\n}\n\n.forecast p {\n    white-space: nowrap;\n}\n\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 24px;\n}\n\n.switch input { \n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgb(216, 216, 216);\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  background-color: blue;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: rgb(216, 216, 216);\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px rgb(216, 216, 216);\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(16px);\n  -ms-transform: translateX(16px);\n  transform: translateX(16px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.lds-ring {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-ring div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border: 8px solid blue;\n    border-radius: 50%;\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: blue transparent transparent transparent;\n  }\n  .lds-ring div:nth-child(1) {\n    animation-delay: -0.45s;\n  }\n  .lds-ring div:nth-child(2) {\n    animation-delay: -0.3s;\n  }\n  .lds-ring div:nth-child(3) {\n    animation-delay: -0.15s;\n  }\n  @keyframes lds-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @media (max-width: 800px) {\n    main .current-weather {\n        width: 90vw;\n        padding: 0.6rem;\n        background-color: white;\n        border-radius: 1rem;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        color: gray;\n    }\n\n    nav input {\n        width: 80vw;\n        padding: 0.6rem 0.4rem;\n        padding-left: 36px;\n        font: 1rem;\n        outline: none;\n        border: none;\n        background-color: rgba(187, 187, 187, 0.2);\n        border-radius: 0.7rem;\n        color: #808080;\n    }\n\n    main .forecast {\n        width: 90vw;\n        margin-top: 4rem;\n    }\n    \n    nav {\n        height: fit-content;\n        flex-direction: column;\n        gap: 1rem;\n        padding: 1rem;\n    }\n\n    main .forecast > div {\n        font-size: 1rem;\n        padding: clamp(0.6rem, 2vw, 2rem);\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        background-color: white;\n        border-radius: 1rem;\n    }\n  }",""]);const d=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],d=0;d<n.length;d++){var c=n[d],s=r.base?c[0]+r.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=d,e.splice(d,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var c=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),d=t(565),c=t.n(d),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(35),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.querySelector(".switch input");function v(n){const e=document.querySelector("main");e.innerHTML="",h.addEventListener("click",(()=>{v(n)})),e.appendChild(function(n){const e=document.createElement("div");e.classList.add("current-weather");const t=document.createElement("p");t.textContent=`Weather in ${n.location.name}, ${n.location.country}`,e.appendChild(t);const r=document.createElement("div"),o=document.createElement("img");o.src=n.current.condition.icon;const a=document.createElement("p");h.checked?a.textContent=`${Math.round(n.current.temp_f)}°F`:a.textContent=`${Math.round(n.current.temp_c)}°C`,r.appendChild(o),r.appendChild(a),e.appendChild(r);const i=document.createElement("p");i.textContent=n.current.condition.text,e.appendChild(i);const d=document.createElement("p");return h.checked?d.textContent=`Feels like ${Math.round(n.current.feelslike_f)}°.  Min: ${Math.round(n.forecast.forecastday[0].day.mintemp_f)}°, Max: ${Math.round(n.forecast.forecastday[0].day.maxtemp_f)}°`:d.textContent=`Feels like ${Math.round(n.current.feelslike_c)}°.  Min: ${Math.round(n.forecast.forecastday[0].day.mintemp_c)}°, Max: ${Math.round(n.forecast.forecastday[0].day.maxtemp_c)}°`,e.appendChild(d),e}(n)),e.appendChild(function(n){const e=document.createElement("div");return e.classList.add("forecast"),n.forecast.forecastday.forEach((n=>{e.appendChild(function(n){const e=document.createElement("div"),t=document.createElement("p");t.textContent=`${["Sunday","Monday","Thuesday","wednesday","Thursday","Friday","Saturday"][new Date(n.date).getDay()]}, ${new Date(n.date).getDate()}.     ${["January","February","March","April","May","June","July","August","September","October","November","December"][new Date(n.date).getMonth()]} `;const r=document.createElement("div"),o=document.createElement("img"),a=document.createElement("p");o.src=n.day.condition.icon,h.checked?a.textContent=`${Math.round(n.day.maxtemp_f)}° / ${Math.round(n.day.mintemp_f)}°`:a.textContent=`${Math.round(n.day.maxtemp_c)}° / ${Math.round(n.day.mintemp_c)}°`,r.appendChild(a),r.appendChild(o);const i=document.createElement("p");return i.textContent=n.day.condition.text,e.appendChild(t),e.appendChild(r),e.appendChild(i),e}(n))})),e}(n))}async function g(n){document.querySelector("main").innerHTML='<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';const e=n.toLowerCase(),t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=63b8bf7c3cd84359870151427230808&q=${e}&days=3&aqi=no&alerts=no`,{mode:"cors"}),r=await t.json();r.error?alert(r.error.message):(cityInput.value="",v(r))}const y=document.querySelector("#cityInputBtn"),b=document.querySelector("#cityInput");y.addEventListener("click",(()=>{g(b.value)})),b.addEventListener("keypress",(n=>{"Enter"===n.key&&g(b.value)})),g("london")})()})();