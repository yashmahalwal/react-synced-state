!function(e,n,t,a,r){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof o[a]&&o[a],l=i.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(n,t){if(!l[n]){if(!e[n]){var r="function"==typeof o[a]&&o[a];if(!t&&r)return r(n,!0);if(i)return i(n,!0);if(u&&"string"==typeof n)return u(n);var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}d.resolve=function(t){var a=e[n][1][t];return null!=a?a:t},d.cache={};var c=l[n]=new f.Module(n);e[n][0].call(c.exports,d,c,c.exports,this)}return l[n].exports;function d(e){var n=d.resolve(e);return!1===n?{}:f(n)}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=l,f.parent=i,f.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(f,"root",{get:function(){return o[a]}}),o[a]=f;for(var s=0;s<n.length;s++)f(n[s])}({cfRlG:[function(e,n,t){"use strict";function a(e){e.languages.wolfram={comment:/\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,string:{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:Abs|AbsArg|Accuracy|Block|Do|For|Function|If|Manipulate|Module|Nest|NestList|None|Return|Switch|Table|Which|While)\b/,context:{pattern:/\b\w+`+\w*/,alias:"class-name"},blank:{pattern:/\b\w+_\b/,alias:"regex"},"global-variable":{pattern:/\$\w+/,alias:"variable"},boolean:/\b(?:False|True)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/\/\.|;|=\.|\^=|\^:=|:=|<<|>>|<\||\|>|:>|\|->|->|<-|@@@|@@|@|\/@|=!=|===|==|=|\+|-|\^|\[\/-+%=\]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},e.languages.mathematica=e.languages.wolfram,e.languages.wl=e.languages.wolfram,e.languages.nb=e.languages.wolfram}n.exports=a,a.displayName="wolfram",a.aliases=["mathematica","wl","nb"]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=wolfram.0cc487df.js.map