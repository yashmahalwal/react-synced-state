!function(e,o,n,r,t){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[r]&&i[r],d=u.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function a(o,n){if(!d[o]){if(!e[o]){var t="function"==typeof i[r]&&i[r];if(!n&&t)return t(o,!0);if(u)return u(o,!0);if(l&&"string"==typeof o)return l(o);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}c.resolve=function(n){var r=e[o][1][n];return null!=r?r:n},c.cache={};var s=d[o]=new a.Module(o);e[o][0].call(s.exports,c,s,s.exports,this)}return d[o].exports;function c(e){var o=c.resolve(e);return!1===o?{}:a(o)}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=d,a.parent=u,a.register=function(o,n){e[o]=[function(e,o){o.exports=n},{}]},Object.defineProperty(a,"root",{get:function(){return i[r]}}),i[r]=a;for(var f=0;f<o.length;f++)a(o[f])}({fXqiA:[function(e,o,n){"use strict";function r(e){e.languages["go-mod"]=e.languages["go-module"]={comment:{pattern:/\/\/.*/,greedy:!0},version:{pattern:/(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,lookbehind:!0,alias:"number"},"go-version":{pattern:/((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,lookbehind:!0,alias:"number"},keyword:{pattern:/^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,lookbehind:!0},operator:/=>/,punctuation:/[()[\],]/}}o.exports=r,r.displayName="goModule",r.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=go-module.caacd258.js.map