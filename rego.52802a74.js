!function(e,n,t,o,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[o]&&i[o],a=u.cache||{},f="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,t){if(!a[n]){if(!e[n]){var r="function"==typeof i[o]&&i[o];if(!t&&r)return r(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}c.resolve=function(t){var o=e[n][1][t];return null!=o?o:t},c.cache={};var d=a[n]=new l.Module(n);e[n][0].call(d.exports,c,d,d.exports,this)}return a[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:l(n)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=a,l.parent=u,l.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(l,"root",{get:function(){return i[o]}}),i[o]=l;for(var s=0;s<n.length;s++)l(n[s])}({lKjVk:[function(e,n,t){"use strict";function o(e){e.languages.rego={comment:/#.*/,property:{pattern:/(^|[^\\.])(?:"(?:\\.|[^\\"\r\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:as|default|else|import|not|null|package|set(?=\s*\()|some|with)\b/,boolean:/\b(?:false|true)\b/,function:{pattern:/\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i,inside:{namespace:/\b\w+\b(?=\s*\.)/,punctuation:/\./}},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,operator:/[-+*/%|&]|[<>:=]=?|!=|\b_\b/,punctuation:/[,;.\[\]{}()]/}}n.exports=o,o.displayName="rego",o.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=rego.52802a74.js.map
