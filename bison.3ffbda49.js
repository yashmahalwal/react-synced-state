!function(e,n,t,i,r){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof o[i]&&o[i],u=a.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,t){if(!u[n]){if(!e[n]){var r="function"==typeof o[i]&&o[i];if(!t&&r)return r(n,!0);if(a)return a(n,!0);if(s&&"string"==typeof n)return s(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}d.resolve=function(t){var i=e[n][1][t];return null!=i?i:t},d.cache={};var f=u[n]=new l.Module(n);e[n][0].call(f.exports,d,f,f.exports,this)}return u[n].exports;function d(e){var n=d.resolve(e);return!1===n?{}:l(n)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=u,l.parent=a,l.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(l,"root",{get:function(){return o[i]}}),o[i]=l;for(var c=0;c<n.length;c++)l(n[c])}({c1Gs4:[function(e,n,t){"use strict";var i=e("./c.js");function r(e){e.register(i),e.languages.bison=e.languages.extend("c",{}),e.languages.insertBefore("bison","comment",{bison:{pattern:/^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,inside:{c:{pattern:/%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,inside:{delimiter:{pattern:/^%?\{|%?\}$/,alias:"punctuation"},"bison-variable":{pattern:/[$@](?:<[^\s>]+>)?[\w$]+/,alias:"variable",inside:{punctuation:/<|>/}},rest:e.languages.c}},comment:e.languages.c.comment,string:e.languages.c.string,property:/\S+(?=:)/,keyword:/%\w+/,number:{pattern:/(^|[^@])\b(?:0x[\da-f]+|\d+)/i,lookbehind:!0},punctuation:/%[%?]|[|:;\[\]<>]/}}})}n.exports=r,r.displayName="bison",r.aliases=[]},{"./c.js":"O6OjP"}]},[],0,"parcelRequired94c");
//# sourceMappingURL=bison.3ffbda49.js.map