!function(e,t,n,i,r){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof a[i]&&a[i],s=o.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,n){if(!s[t]){if(!e[t]){var r="function"==typeof a[i]&&a[i];if(!n&&r)return r(t,!0);if(o)return o(t,!0);if(l&&"string"==typeof t)return l(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}d.resolve=function(n){var i=e[t][1][n];return null!=i?i:n},d.cache={};var f=s[t]=new u.Module(t);e[t][0].call(f.exports,d,f,f.exports,this)}return s[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=s,u.parent=o,u.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return a[i]}}),a[i]=u;for(var c=0;c<t.length;c++)u(t[c])}({"7q4sw":[function(e,t,n){"use strict";function i(e){e.languages.actionscript=e.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),e.languages.actionscript["class-name"].alias="function",delete e.languages.actionscript.parameter,delete e.languages.actionscript["literal-property"],e.languages.markup&&e.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:e.languages.markup}})}t.exports=i,i.displayName="actionscript",i.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=actionscript.76462461.js.map
