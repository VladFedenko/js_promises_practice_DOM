parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=document.querySelector("body"),e=document.createElement("div");function t(){return new Promise(function(e,t){n.addEventListener("click",function(){e("First promise was resolved")}),setTimeout(function(){t("First promise was rejected")},3e3)})}function i(){return new Promise(function(e){n.addEventListener("click",function(){e("Second promise was resolved")}),n.addEventListener("contextmenu",function(n){n.preventDefault(),e("Second promise was resolved")})})}function c(){return new Promise(function(e){n.addEventListener("click",function(){n.addEventListener("contextmenu",function(n){n.preventDefault(),e()})})})}e.classList="warning",n.append(e);var r=t(),o=i(),s=c();r.then(function(n){e.innerHTML+=n}).catch(function(n){e.innerHTML+=n}),o.then(function(n){e.innerHTML+=n}).catch(function(){}),s.then(function(){e.innerHTML+="Third promise was resolved"}).catch(function(){});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.563e38dc.js.map