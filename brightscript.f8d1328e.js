!function(e,t,n,r,i){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof o[r]&&o[r],d=s.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,n){if(!d[t]){if(!e[t]){var i="function"==typeof o[r]&&o[r];if(!n&&i)return i(t,!0);if(s)return s(t,!0);if(a&&"string"==typeof t)return a(t);var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}c.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},c.cache={};var f=d[t]=new u.Module(t);e[t][0].call(f.exports,c,f,f.exports,this)}return d[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=d,u.parent=s,u.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return o[r]}}),o[r]=u;for(var l=0;l<t.length;l++)u(t[l])}({"1lS33":[function(e,t,n){"use strict";function r(e){e.languages.brightscript={comment:/(?:\brem|').*/i,"directive-statement":{pattern:/(^[\t ]*)#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if).*/im,lookbehind:!0,alias:"property",inside:{"error-message":{pattern:/(^#error).+/,lookbehind:!0},directive:{pattern:/^#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if)/,alias:"keyword"},expression:{pattern:/[\s\S]+/,inside:null}}},property:{pattern:/([\r\n{,][\t ]*)(?:(?!\d)\w+|"(?:[^"\r\n]|"")*"(?!"))(?=[ \t]*:)/,lookbehind:!0,greedy:!0},string:{pattern:/"(?:[^"\r\n]|"")*"(?!")/,greedy:!0},"class-name":{pattern:/(\bAs[\t ]+)\w+/i,lookbehind:!0},keyword:/\b(?:As|Dim|Each|Else|Elseif|End|Exit|For|Function|Goto|If|In|Print|Return|Step|Stop|Sub|Then|To|While)\b/i,boolean:/\b(?:false|true)\b/i,function:/\b(?!\d)\w+(?=[\t ]*\()/,number:/(?:\b\d+(?:\.\d+)?(?:[ed][+-]\d+)?|&h[a-f\d]+)\b[%&!#]?/i,operator:/--|\+\+|>>=?|<<=?|<>|[-+*/\\<>]=?|[:^=?]|\b(?:and|mod|not|or)\b/i,punctuation:/[.,;()[\]{}]/,constant:/\b(?:LINE_NUM)\b/i},e.languages.brightscript["directive-statement"].inside.expression.inside=e.languages.brightscript}t.exports=r,r.displayName="brightscript",r.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=brightscript.f8d1328e.js.map