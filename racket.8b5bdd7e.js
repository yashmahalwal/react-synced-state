!function(e,n,r,t,o){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof a[t]&&a[t],u=i.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(n,r){if(!u[n]){if(!e[n]){var o="function"==typeof a[t]&&a[t];if(!r&&o)return o(n,!0);if(i)return i(n,!0);if(l&&"string"==typeof n)return l(n);var f=new Error("Cannot find module '"+n+"'");throw f.code="MODULE_NOT_FOUND",f}c.resolve=function(r){var t=e[n][1][r];return null!=t?t:r},c.cache={};var d=u[n]=new s.Module(n);e[n][0].call(d.exports,c,d,d.exports,this)}return u[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:s(n)}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=e,s.cache=u,s.parent=i,s.register=function(n,r){e[n]=[function(e,n){n.exports=r},{}]},Object.defineProperty(s,"root",{get:function(){return a[t]}}),a[t]=s;for(var f=0;f<n.length;f++)s(n[f])}({lurBf:[function(e,n,r){"use strict";var t=e("./scheme.js");function o(e){e.register(t),e.languages.racket=e.languages.extend("scheme",{"lambda-parameter":{pattern:/([(\[]lambda\s+[(\[])[^()\[\]'\s]+/,lookbehind:!0}}),e.languages.insertBefore("racket","string",{lang:{pattern:/^#lang.+/m,greedy:!0,alias:"keyword"}}),e.languages.rkt=e.languages.racket}n.exports=o,o.displayName="racket",o.aliases=["rkt"]},{"./scheme.js":"12bpX"}]},[],0,"parcelRequired94c");
//# sourceMappingURL=racket.8b5bdd7e.js.map