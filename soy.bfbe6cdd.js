!function(e,t,n,a,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof i[a]&&i[a],l=o.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,n){if(!l[t]){if(!e[t]){var r="function"==typeof i[a]&&i[a];if(!n&&r)return r(t,!0);if(o)return o(t,!0);if(s&&"string"==typeof t)return s(t);var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}c.resolve=function(n){var a=e[t][1][n];return null!=a?a:n},c.cache={};var p=l[t]=new u.Module(t);e[t][0].call(p.exports,c,p,p.exports,this)}return l[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=l,u.parent=o,u.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return i[a]}}),i[a]=u;for(var d=0;d<t.length;d++)u(t[d])}({bli5Y:[function(e,t,n){"use strict";var a=e("./markup-templating.js");function r(e){var t,n,r;e.register(a),n=/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,r=/\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/,(t=e).languages.soy={comment:[/\/\*[\s\S]*?\*\//,{pattern:/(\s)\/\/.*/,lookbehind:!0,greedy:!0}],"command-arg":{pattern:/(\{+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,lookbehind:!0,alias:"string",inside:{punctuation:/\./}},parameter:{pattern:/(\{+\/?\s*@?param\??\s+)\.?[\w.]+/,lookbehind:!0,alias:"variable"},keyword:[{pattern:/(\{+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,lookbehind:!0},/\b(?:any|as|attributes|bool|css|float|html|in|int|js|list|map|null|number|string|uri)\b/],delimiter:{pattern:/^\{+\/?|\/?\}+$/,alias:"punctuation"},property:/\w+(?==)/,variable:{pattern:/\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+\]))*/,inside:{string:{pattern:n,greedy:!0},number:r,punctuation:/[\[\].?]/}},string:{pattern:n,greedy:!0},function:[/\w+(?=\()/,{pattern:/(\|[^\S\r\n]*)\w+/,lookbehind:!0}],boolean:/\b(?:false|true)\b/,number:r,operator:/\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,punctuation:/[{}()\[\]|.,:]/},t.hooks.add("before-tokenize",(function(e){var n=!1;t.languages["markup-templating"].buildPlaceholders(e,"soy",/\{\{.+?\}\}|\{.+?\}|\s\/\/.*|\/\*[\s\S]*?\*\//g,(function(e){return"{/literal}"===e&&(n=!1),!n&&("{literal}"===e&&(n=!0),!0)}))})),t.hooks.add("after-tokenize",(function(e){t.languages["markup-templating"].tokenizePlaceholders(e,"soy")}))}t.exports=r,r.displayName="soy",r.aliases=[]},{"./markup-templating.js":"1B9gV"}]},[],0,"parcelRequired94c");
//# sourceMappingURL=soy.bfbe6cdd.js.map