!function(e,n,r,t,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},d="function"==typeof i[t]&&i[t],a=d.cache||{},f="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(n,r){if(!a[n]){if(!e[n]){var o="function"==typeof i[t]&&i[t];if(!r&&o)return o(n,!0);if(d)return d(n,!0);if(f&&"string"==typeof n)return f(n);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}c.resolve=function(r){var t=e[n][1][r];return null!=t?t:r},c.cache={};var s=a[n]=new u.Module(n);e[n][0].call(s.exports,c,s,s.exports,this)}return a[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:u(n)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=a,u.parent=d,u.register=function(n,r){e[n]=[function(e,n){n.exports=r},{}]},Object.defineProperty(u,"root",{get:function(){return i[t]}}),i[t]=u;for(var l=0;l<n.length;l++)u(n[l])}({lbXGw:[function(e,n,r){"use strict";function t(e){e.languages.nasm={comment:/;.*$/m,string:/(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,label:{pattern:/(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,lookbehind:!0,alias:"function"},keyword:[/\[?BITS (?:16|32|64)\]?/,{pattern:/(^\s*)section\s*[a-z.]+:?/im,lookbehind:!0},/(?:extern|global)[^;\r\n]*/i,/(?:CPU|DEFAULT|FLOAT).*$/m],register:{pattern:/\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|di|si|sp)|[cdefgs]s)\b/i,alias:"variable"},number:/(?:\b|(?=\$))(?:0[hx](?:\.[\da-f]+|[\da-f]+(?:\.[\da-f]+)?)(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,operator:/[\[\]*+\-\/%<>=&|$!]/}}n.exports=t,t.displayName="nasm",t.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=nasm.96657277.js.map