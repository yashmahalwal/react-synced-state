!function(e,n,t,o,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[o]&&i[o],a=u.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,t){if(!a[n]){if(!e[n]){var r="function"==typeof i[o]&&i[o];if(!t&&r)return r(n,!0);if(u)return u(n,!0);if(d&&"string"==typeof n)return d(n);var f=new Error("Cannot find module '"+n+"'");throw f.code="MODULE_NOT_FOUND",f}c.resolve=function(t){var o=e[n][1][t];return null!=o?o:t},c.cache={};var s=a[n]=new l.Module(n);e[n][0].call(s.exports,c,s,s.exports,this)}return a[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:l(n)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=a,l.parent=u,l.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(l,"root",{get:function(){return i[o]}}),i[o]=l;for(var f=0;f<n.length;f++)l(n[f])}({hpBBD:[function(e,n,t){"use strict";function o(e){var n,t;t={pattern:/\{[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}\}/i,alias:"constant",inside:{punctuation:/[{}]/}},(n=e).languages["solution-file"]={comment:{pattern:/#.*/,greedy:!0},string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,greedy:!0,inside:{guid:t}},object:{pattern:/^([ \t]*)(?:([A-Z]\w*)\b(?=.*(?:\r\n?|\n)(?:\1[ \t].*(?:\r\n?|\n))*\1End\2(?=[ \t]*$))|End[A-Z]\w*(?=[ \t]*$))/m,lookbehind:!0,greedy:!0,alias:"keyword"},property:{pattern:/^([ \t]*)(?!\s)[^\r\n"#=()]*[^\s"#=()](?=\s*=)/m,lookbehind:!0,inside:{guid:t}},guid:t,number:/\b\d+(?:\.\d+)*\b/,boolean:/\b(?:FALSE|TRUE)\b/,operator:/=/,punctuation:/[(),]/},n.languages.sln=n.languages["solution-file"]}n.exports=o,o.displayName="solutionFile",o.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=solution-file.bc6569ec.js.map