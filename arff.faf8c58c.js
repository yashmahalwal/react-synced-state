!function(e,n,t,r,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[r]&&i[r],f=u.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function a(n,t){if(!f[n]){if(!e[n]){var o="function"==typeof i[r]&&i[r];if(!t&&o)return o(n,!0);if(u)return u(n,!0);if(d&&"string"==typeof n)return d(n);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}s.resolve=function(t){var r=e[n][1][t];return null!=r?r:t},s.cache={};var c=f[n]=new a.Module(n);e[n][0].call(c.exports,s,c,c.exports,this)}return f[n].exports;function s(e){var n=s.resolve(e);return!1===n?{}:a(n)}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=f,a.parent=u,a.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(a,"root",{get:function(){return i[r]}}),i[r]=a;for(var l=0;l<n.length;l++)a(n[l])}({dEu7f:[function(e,n,t){"use strict";function r(e){e.languages.arff={comment:/%.*/,string:{pattern:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/@(?:attribute|data|end|relation)\b/i,number:/\b\d+(?:\.\d+)?\b/,punctuation:/[{},]/}}n.exports=r,r.displayName="arff",r.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=arff.faf8c58c.js.map