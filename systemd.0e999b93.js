!function(e,n,t,r,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[r]&&i[r],a=u.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,t){if(!a[n]){if(!e[n]){var o="function"==typeof i[r]&&i[r];if(!t&&o)return o(n,!0);if(u)return u(n,!0);if(s&&"string"==typeof n)return s(n);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}c.resolve=function(t){var r=e[n][1][t];return null!=r?r:t},c.cache={};var f=a[n]=new l.Module(n);e[n][0].call(f.exports,c,f,f.exports,this)}return a[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:l(n)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=a,l.parent=u,l.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(l,"root",{get:function(){return i[r]}}),i[r]=l;for(var d=0;d<n.length;d++)l(n[d])}({lMJkE:[function(e,n,t){"use strict";function r(e){var n,t;n={pattern:/^[;#].*/m,greedy:!0},t=/"(?:[^\r\n"\\]|\\(?:[^\r]|\r\n?))*"(?!\S)/.source,e.languages.systemd={comment:n,section:{pattern:/^\[[^\n\r\[\]]*\](?=[ \t]*$)/m,greedy:!0,inside:{punctuation:/^\[|\]$/,"section-name":{pattern:/[\s\S]+/,alias:"selector"}}},key:{pattern:/^[^\s=]+(?=[ \t]*=)/m,greedy:!0,alias:"attr-name"},value:{pattern:RegExp(/(=[ \t]*(?!\s))/.source+"(?:"+t+'|(?=[^"\r\n]))(?:'+/[^\s\\]/.source+'|[ \t]+(?:(?![ \t"])|'+t+")|"+/\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source+")*"),lookbehind:!0,greedy:!0,alias:"attr-value",inside:{comment:n,quoted:{pattern:RegExp(/(^|\s)/.source+t),lookbehind:!0,greedy:!0},punctuation:/\\$/m,boolean:{pattern:/^(?:false|no|off|on|true|yes)$/,greedy:!0}}},punctuation:/=/}}n.exports=r,r.displayName="systemd",r.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=systemd.0e999b93.js.map