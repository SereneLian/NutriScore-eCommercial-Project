!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}({18:function(e,t,n){"use strict";n.r(t);n(19);!function(){const e={get:e=>{chrome.storage.sync.get(["count"],t=>{e(t.count)})},set:(e,t)=>{chrome.storage.sync.set({count:e},()=>{t()})}};function t(e=0){document.getElementById("counter").innerHTML=e,document.getElementById("incrementBtn").addEventListener("click",()=>{n({type:"INCREMENT"})}),document.getElementById("decrementBtn").addEventListener("click",()=>{n({type:"DECREMENT"})})}function n({type:t}){e.get(n=>{let o;o="INCREMENT"===t?n+1:"DECREMENT"===t?n-1:n,e.set(o,()=>{document.getElementById("counter").innerHTML=o,chrome.tabs.query({active:!0,currentWindow:!0},e=>{const t=e[0];chrome.tabs.sendMessage(t.id,{type:"COUNT",payload:{count:o}},e=>{console.log("Current count value passed to contentScript file")})})})})}document.addEventListener("DOMContentLoaded",(function(){e.get(n=>{void 0===n?e.set(0,()=>{t(0)}):t(n)})})),chrome.runtime.sendMessage({type:"GREETINGS",payload:{message:"Hello, my name is Pop. I am from Popup."}},e=>{console.log(e.message)})}()},19:function(e,t,n){}});
//# sourceMappingURL=popup.js.map