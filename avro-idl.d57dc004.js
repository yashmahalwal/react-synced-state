!function(e,n,r,t,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[t]&&i[t],d=a.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,r){if(!d[n]){if(!e[n]){var o="function"==typeof i[t]&&i[t];if(!r&&o)return o(n,!0);if(a)return a(n,!0);if(u&&"string"==typeof n)return u(n);var f=new Error("Cannot find module '"+n+"'");throw f.code="MODULE_NOT_FOUND",f}c.resolve=function(r){var t=e[n][1][r];return null!=t?t:r},c.cache={};var s=d[n]=new l.Module(n);e[n][0].call(s.exports,c,s,s.exports,this)}return d[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:l(n)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=d,l.parent=a,l.register=function(n,r){e[n]=[function(e,n){n.exports=r},{}]},Object.defineProperty(l,"root",{get:function(){return i[t]}}),i[t]=l;for(var f=0;f<n.length;f++)l(n[f])}({"8iQgI":[function(e,n,r){"use strict";function t(e){e.languages["avro-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/(^|[^\\])"(?:[^\r\n"\\]|\\.)*"/,lookbehind:!0,greedy:!0},annotation:{pattern:/@(?:[$\w.-]|`[^\r\n`]+`)+/,greedy:!0,alias:"function"},"function-identifier":{pattern:/`[^\r\n`]+`(?=\s*\()/,greedy:!0,alias:"function"},identifier:{pattern:/`[^\r\n`]+`/,greedy:!0},"class-name":{pattern:/(\b(?:enum|error|protocol|record|throws)\b\s+)[$\w]+/,lookbehind:!0,greedy:!0},keyword:/\b(?:array|boolean|bytes|date|decimal|double|enum|error|false|fixed|float|idl|import|int|local_timestamp_ms|long|map|null|oneway|protocol|record|schema|string|throws|time_ms|timestamp_ms|true|union|uuid|void)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:[{pattern:/(^|[^\w.])-?(?:(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|0x(?:[a-f0-9]+(?:\.[a-f0-9]*)?|\.[a-f0-9]+)(?:p[+-]?\d+)?)[dfl]?(?![\w.])/i,lookbehind:!0},/-?\b(?:Infinity|NaN)\b/],operator:/=/,punctuation:/[()\[\]{}<>.:,;-]/},e.languages.avdl=e.languages["avro-idl"]}n.exports=t,t.displayName="avroIdl",t.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=avro-idl.d57dc004.js.map
