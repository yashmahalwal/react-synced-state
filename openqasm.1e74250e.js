!function(e,n,t,r,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[r]&&i[r],u=a.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,t){if(!u[n]){if(!e[n]){var o="function"==typeof i[r]&&i[r];if(!t&&o)return o(n,!0);if(a)return a(n,!0);if(s&&"string"==typeof n)return s(n);var f=new Error("Cannot find module '"+n+"'");throw f.code="MODULE_NOT_FOUND",f}c.resolve=function(t){var r=e[n][1][t];return null!=r?r:t},c.cache={};var d=u[n]=new l.Module(n);e[n][0].call(d.exports,c,d,d.exports,this)}return u[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:l(n)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=u,l.parent=a,l.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(l,"root",{get:function(){return i[r]}}),i[r]=l;for(var f=0;f<n.length;f++)l(n[f])}({d5Aq3:[function(e,n,t){"use strict";function r(e){e.languages.openqasm={comment:/\/\*[\s\S]*?\*\/|\/\/.*/,string:{pattern:/"[^"\r\n\t]*"|'[^'\r\n\t]*'/,greedy:!0},keyword:/\b(?:CX|OPENQASM|U|barrier|boxas|boxto|break|const|continue|ctrl|def|defcal|defcalgrammar|delay|else|end|for|gate|gphase|if|in|include|inv|kernel|lengthof|let|measure|pow|reset|return|rotary|stretchinf|while)\b|#pragma\b/,"class-name":/\b(?:angle|bit|bool|creg|fixed|float|int|length|qreg|qubit|stretch|uint)\b/,function:/\b(?:cos|exp|ln|popcount|rotl|rotr|sin|sqrt|tan)\b(?=\s*\()/,constant:/\b(?:euler|pi|tau)\b|π|𝜏|ℇ/,number:{pattern:/(^|[^.\w$])(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?(?:dt|ns|us|µs|ms|s)?/i,lookbehind:!0},operator:/->|>>=?|<<=?|&&|\|\||\+\+|--|[!=<>&|~^+\-*/%]=?|@/,punctuation:/[(){}\[\];,:.]/},e.languages.qasm=e.languages.openqasm}n.exports=r,r.displayName="openqasm",r.aliases=["qasm"]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=openqasm.1e74250e.js.map