!function(e,a,n,t,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof i[t]&&i[t],s=o.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(a,n){if(!s[a]){if(!e[a]){var r="function"==typeof i[t]&&i[t];if(!n&&r)return r(a,!0);if(o)return o(a,!0);if(u&&"string"==typeof a)return u(a);var p=new Error("Cannot find module '"+a+"'");throw p.code="MODULE_NOT_FOUND",p}d.resolve=function(n){var t=e[a][1][n];return null!=t?t:n},d.cache={};var c=s[a]=new l.Module(a);e[a][0].call(c.exports,d,c,c.exports,this)}return s[a].exports;function d(e){var a=d.resolve(e);return!1===a?{}:l(a)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=s,l.parent=o,l.register=function(a,n){e[a]=[function(e,a){a.exports=n},{}]},Object.defineProperty(l,"root",{get:function(){return i[t]}}),i[t]=l;for(var p=0;p<a.length;p++)l(a[p])}({"4xvZJ":[function(e,a,n){"use strict";function t(e){var a,n,t,r,i,o;a=e,n={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},r="(?:[^\\\\-]|"+(t=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/).source+")",i=RegExp(r+"-"+r),o={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"},a.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:i,inside:{escape:t,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":n,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:t}},"special-escape":n,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":o}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:t,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":o}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}a.exports=t,t.displayName="regex",t.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=regex.23458c5d.js.map
