!function(e,n,t,a,r){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof o[a]&&o[a],s=i.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(n,t){if(!s[n]){if(!e[n]){var r="function"==typeof o[a]&&o[a];if(!t&&r)return r(n,!0);if(i)return i(n,!0);if(l&&"string"==typeof n)return l(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}c.resolve=function(t){var a=e[n][1][t];return null!=a?a:t},c.cache={};var u=s[n]=new d.Module(n);e[n][0].call(u.exports,c,u,u.exports,this)}return s[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:d(n)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=s,d.parent=i,d.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(d,"root",{get:function(){return o[a]}}),o[a]=d;for(var p=0;p<n.length;p++)d(n[p])}({"62Zn0":[function(e,n,t){"use strict";function a(e){!function(e){var n=/\{[^\r\n\[\]{}]*\}/,t={"quoted-string":{pattern:/"(?:[^"\\]|\\.)*"/,alias:"operator"},"command-param-id":{pattern:/(\s)\w+:/,lookbehind:!0,alias:"property"},"command-param-value":[{pattern:n,alias:"selector"},{pattern:/([\t ])\S+/,lookbehind:!0,greedy:!0,alias:"operator"},{pattern:/\S(?:.*\S)?/,alias:"operator"}]};function a(e){return"string"==typeof e?e:Array.isArray(e)?e.map(a).join(""):a(e.content)}e.languages.naniscript={comment:{pattern:/^([\t ]*);.*/m,lookbehind:!0},define:{pattern:/^>.+/m,alias:"tag",inside:{value:{pattern:/(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,lookbehind:!0,alias:"operator"},key:{pattern:/(^>)\w+/,lookbehind:!0}}},label:{pattern:/^([\t ]*)#[\t ]*\w+[\t ]*$/m,lookbehind:!0,alias:"regex"},command:{pattern:/^([\t ]*)@\w+(?=[\t ]|$).*/m,lookbehind:!0,alias:"function",inside:{"command-name":/^@\w+/,expression:{pattern:n,greedy:!0,alias:"selector"},"command-params":{pattern:/\s*\S[\s\S]*/,inside:t}}},"generic-text":{pattern:/(^[ \t]*)[^#@>;\s].*/m,lookbehind:!0,alias:"punctuation",inside:{"escaped-char":/\\[{}\[\]"]/,expression:{pattern:n,greedy:!0,alias:"selector"},"inline-command":{pattern:/\[[\t ]*\w[^\r\n\[\]]*\]/,greedy:!0,alias:"function",inside:{"command-params":{pattern:/(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,lookbehind:!0,inside:t},"command-param-name":{pattern:/^(\[[\t ]*)\w+/,lookbehind:!0,alias:"name"},"start-stop-char":/[\[\]]/}}}}},e.languages.nani=e.languages.naniscript,e.hooks.add("after-tokenize",(function(e){e.tokens.forEach((function(e){if("string"!=typeof e&&"generic-text"===e.type){var n=a(e);(function(e){for(var n="[]{}",t=[],a=0;a<e.length;a++){var r=e[a],o=n.indexOf(r);if(-1!==o)if(o%2==0)t.push(o+1);else if(t.pop()!==o)return!1}return 0===t.length})(n)||(e.type="bad-line",e.content=n)}}))}))}(e)}n.exports=a,a.displayName="naniscript",a.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=naniscript.27bccc60.js.map
