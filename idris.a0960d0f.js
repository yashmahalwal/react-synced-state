!function(e,t,i,n,r){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof o[n]&&o[n],s=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,i){if(!s[t]){if(!e[t]){var r="function"==typeof o[n]&&o[n];if(!i&&r)return r(t,!0);if(a)return a(t,!0);if(l&&"string"==typeof t)return l(t);var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}c.resolve=function(i){var n=e[t][1][i];return null!=n?n:i},c.cache={};var f=s[t]=new u.Module(t);e[t][0].call(f.exports,c,f,f.exports,this)}return s[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=s,u.parent=a,u.register=function(t,i){e[t]=[function(e,t){t.exports=i},{}]},Object.defineProperty(u,"root",{get:function(){return o[n]}}),o[n]=u;for(var d=0;d<t.length;d++)u(t[d])}({kul31:[function(e,t,i){"use strict";var n=e("./haskell.js");function r(e){e.register(n),e.languages.idris=e.languages.extend("haskell",{comment:{pattern:/(?:(?:--|\|\|\|).*$|\{-[\s\S]*?-\})/m},keyword:/\b(?:Type|case|class|codata|constructor|corecord|data|do|dsl|else|export|if|implementation|implicit|import|impossible|in|infix|infixl|infixr|instance|interface|let|module|mutual|namespace|of|parameters|partial|postulate|private|proof|public|quoteGoal|record|rewrite|syntax|then|total|using|where|with)\b/,builtin:void 0}),e.languages.insertBefore("idris","keyword",{"import-statement":{pattern:/(^\s*import\s+)(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*/m,lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.idr=e.languages.idris}t.exports=r,r.displayName="idris",r.aliases=["idr"]},{"./haskell.js":"i5JEV"}]},[],0,"parcelRequired94c");
//# sourceMappingURL=idris.a0960d0f.js.map
