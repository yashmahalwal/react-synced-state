!function(e,n,t,r,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i[r]&&i[r],u=s.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,t){if(!u[n]){if(!e[n]){var o="function"==typeof i[r]&&i[r];if(!t&&o)return o(n,!0);if(s)return s(n,!0);if(a&&"string"==typeof n)return a(n);var f=new Error("Cannot find module '"+n+"'");throw f.code="MODULE_NOT_FOUND",f}c.resolve=function(t){var r=e[n][1][t];return null!=r?r:t},c.cache={};var d=u[n]=new l.Module(n);e[n][0].call(d.exports,c,d,d.exports,this)}return u[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:l(n)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=u,l.parent=s,l.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(l,"root",{get:function(){return i[r]}}),i[r]=l;for(var f=0;f<n.length;f++)l(n[f])}({jHgJe:[function(e,n,t){"use strict";function r(e){e.languages.less=e.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,operator:/[+\-*\/]/}),e.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}})}n.exports=r,r.displayName="less",r.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=less.53d4055c.js.map
