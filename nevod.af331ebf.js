!function(e,a,n,t,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i[t]&&i[t],o=s.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function p(a,n){if(!o[a]){if(!e[a]){var r="function"==typeof i[t]&&i[t];if(!n&&r)return r(a,!0);if(s)return s(a,!0);if(l&&"string"==typeof a)return l(a);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}c.resolve=function(n){var t=e[a][1][n];return null!=t?t:n},c.cache={};var u=o[a]=new p.Module(a);e[a][0].call(u.exports,c,u,u.exports,this)}return o[a].exports;function c(e){var a=c.resolve(e);return!1===a?{}:p(a)}}p.isParcelRequire=!0,p.Module=function(e){this.id=e,this.bundle=p,this.exports={}},p.modules=e,p.cache=o,p.parent=s,p.register=function(a,n){e[a]=[function(e,a){a.exports=n},{}]},Object.defineProperty(p,"root",{get:function(){return i[t]}}),i[t]=p;for(var d=0;d<a.length;d++)p(a[d])}({h8uj0:[function(e,a,n){"use strict";function t(e){e.languages.nevod={comment:/\/\/.*|(?:\/\*[\s\S]*?(?:\*\/|$))/,string:{pattern:/(?:"(?:""|[^"])*"(?!")|'(?:''|[^'])*'(?!'))!?\*?/,greedy:!0,inside:{"string-attrs":/!$|!\*$|\*$/}},namespace:{pattern:/(@namespace\s+)[a-zA-Z0-9\-.]+(?=\s*\{)/,lookbehind:!0},pattern:{pattern:/(@pattern\s+)?#?[a-zA-Z0-9\-.]+(?:\s*\(\s*(?:~\s*)?[a-zA-Z0-9\-.]+\s*(?:,\s*(?:~\s*)?[a-zA-Z0-9\-.]*)*\))?(?=\s*=)/,lookbehind:!0,inside:{"pattern-name":{pattern:/^#?[a-zA-Z0-9\-.]+/,alias:"class-name"},fields:{pattern:/\(.*\)/,inside:{"field-name":{pattern:/[a-zA-Z0-9\-.]+/,alias:"variable"},punctuation:/[,()]/,operator:{pattern:/~/,alias:"field-hidden-mark"}}}}},search:{pattern:/(@search\s+|#)[a-zA-Z0-9\-.]+(?:\.\*)?(?=\s*;)/,alias:"function",lookbehind:!0},keyword:/@(?:having|inside|namespace|outside|pattern|require|search|where)\b/,"standard-pattern":{pattern:/\b(?:Alpha|AlphaNum|Any|Blank|End|LineBreak|Num|NumAlpha|Punct|Space|Start|Symbol|Word|WordBreak)\b(?:\([a-zA-Z0-9\-.,\s+]*\))?/,inside:{"standard-pattern-name":{pattern:/^[a-zA-Z0-9\-.]+/,alias:"builtin"},quantifier:{pattern:/\b\d+(?:\s*\+|\s*-\s*\d+)?(?!\w)/,alias:"number"},"standard-pattern-attr":{pattern:/[a-zA-Z0-9\-.]+/,alias:"builtin"},punctuation:/[,()]/}},quantifier:{pattern:/\b\d+(?:\s*\+|\s*-\s*\d+)?(?!\w)/,alias:"number"},operator:[{pattern:/=/,alias:"pattern-def"},{pattern:/&/,alias:"conjunction"},{pattern:/~/,alias:"exception"},{pattern:/\?/,alias:"optionality"},{pattern:/[[\]]/,alias:"repetition"},{pattern:/[{}]/,alias:"variation"},{pattern:/[+_]/,alias:"sequence"},{pattern:/\.{2,3}/,alias:"span"}],"field-capture":[{pattern:/([a-zA-Z0-9\-.]+\s*\()\s*[a-zA-Z0-9\-.]+\s*:\s*[a-zA-Z0-9\-.]+(?:\s*,\s*[a-zA-Z0-9\-.]+\s*:\s*[a-zA-Z0-9\-.]+)*(?=\s*\))/,lookbehind:!0,inside:{"field-name":{pattern:/[a-zA-Z0-9\-.]+/,alias:"variable"},colon:/:/}},{pattern:/[a-zA-Z0-9\-.]+\s*:/,inside:{"field-name":{pattern:/[a-zA-Z0-9\-.]+/,alias:"variable"},colon:/:/}}],punctuation:/[:;,()]/,name:/[a-zA-Z0-9\-.]+/}}a.exports=t,t.displayName="nevod",t.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=nevod.af331ebf.js.map
