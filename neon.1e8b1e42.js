!function(e,n,t,o,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},d="function"==typeof i[o]&&i[o],s=d.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(n,t){if(!s[n]){if(!e[n]){var r="function"==typeof i[o]&&i[o];if(!t&&r)return r(n,!0);if(d)return d(n,!0);if(l&&"string"==typeof n)return l(n);var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}c.resolve=function(t){var o=e[n][1][t];return null!=o?o:t},c.cache={};var f=s[n]=new u.Module(n);e[n][0].call(f.exports,c,f,f.exports,this)}return s[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:u(n)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=s,u.parent=d,u.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(u,"root",{get:function(){return i[o]}}),i[o]=u;for(var a=0;a<n.length;a++)u(n[a])}({ftiyB:[function(e,n,t){"use strict";function o(e){e.languages.neon={comment:{pattern:/#.*/,greedy:!0},datetime:{pattern:/(^|[[{(=:,\s])\d\d\d\d-\d\d?-\d\d?(?:(?:[Tt]| +)\d\d?:\d\d:\d\d(?:\.\d*)? *(?:Z|[-+]\d\d?(?::?\d\d)?)?)?(?=$|[\]}),\s])/,lookbehind:!0,alias:"number"},key:{pattern:/(^|[[{(,\s])[^,:=[\]{}()'"\s]+(?=\s*:(?:$|[\]}),\s])|\s*=)/,lookbehind:!0,alias:"atrule"},number:{pattern:/(^|[[{(=:,\s])[+-]?(?:0x[\da-fA-F]+|0o[0-7]+|0b[01]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:[eE][+-]?\d+)?)(?=$|[\]}),:=\s])/,lookbehind:!0},boolean:{pattern:/(^|[[{(=:,\s])(?:false|no|true|yes)(?=$|[\]}),:=\s])/i,lookbehind:!0},null:{pattern:/(^|[[{(=:,\s])(?:null)(?=$|[\]}),:=\s])/i,lookbehind:!0,alias:"keyword"},string:{pattern:/(^|[[{(=:,\s])(?:('''|""")\r?\n(?:(?:[^\r\n]|\r?\n(?![\t ]*\2))*\r?\n)?[\t ]*\2|'[^'\r\n]*'|"(?:\\.|[^\\"\r\n])*")/,lookbehind:!0,greedy:!0},literal:{pattern:/(^|[[{(=:,\s])(?:[^#"',:=[\]{}()\s`-]|[:-][^"',=[\]{}()\s])(?:[^,:=\]})(\s]|:(?![\s,\]})]|$)|[ \t]+[^#,:=\]})(\s])*/,lookbehind:!0,alias:"string"},punctuation:/[,:=[\]{}()-]/}}n.exports=o,o.displayName="neon",o.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=neon.1e8b1e42.js.map