!function(e,n,r,t,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[t]&&i[t],s=u.cache||{},f="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function a(n,r){if(!s[n]){if(!e[n]){var o="function"==typeof i[t]&&i[t];if(!r&&o)return o(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}c.resolve=function(r){var t=e[n][1][r];return null!=t?t:r},c.cache={};var l=s[n]=new a.Module(n);e[n][0].call(l.exports,c,l,l.exports,this)}return s[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:a(n)}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=s,a.parent=u,a.register=function(n,r){e[n]=[function(e,n){n.exports=r},{}]},Object.defineProperty(a,"root",{get:function(){return i[t]}}),i[t]=a;for(var d=0;d<n.length;d++)a(n[d])}({"1yTk5":[function(e,n,r){"use strict";var t=e("./json.js");function o(e){var n,r;e.register(t),r=/("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/,(n=e).languages.json5=n.languages.extend("json",{property:[{pattern:RegExp(r.source+"(?=\\s*:)"),greedy:!0},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,alias:"unquoted"}],string:{pattern:r,greedy:!0},number:/[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/})}n.exports=o,o.displayName="json5",o.aliases=[]},{"./json.js":"iaqkr"}]},[],0,"parcelRequired94c");
//# sourceMappingURL=json5.d4ef9867.js.map