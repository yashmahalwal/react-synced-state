!function(e,n,r,t,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[t]&&i[t],s=a.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,r){if(!s[n]){if(!e[n]){var o="function"==typeof i[t]&&i[t];if(!r&&o)return o(n,!0);if(a)return a(n,!0);if(u&&"string"==typeof n)return u(n);var f=new Error("Cannot find module '"+n+"'");throw f.code="MODULE_NOT_FOUND",f}c.resolve=function(r){var t=e[n][1][r];return null!=t?t:r},c.cache={};var d=s[n]=new l.Module(n);e[n][0].call(d.exports,c,d,d.exports,this)}return s[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:l(n)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=s,l.parent=a,l.register=function(n,r){e[n]=[function(e,n){n.exports=r},{}]},Object.defineProperty(l,"root",{get:function(){return i[t]}}),i[t]=l;for(var f=0;f<n.length;f++)l(n[f])}({hz0VI:[function(e,n,r){"use strict";function t(e){e.languages.birb=e.languages.extend("clike",{string:{pattern:/r?("|')(?:\\.|(?!\1)[^\\])*\1/,greedy:!0},"class-name":[/\b[A-Z](?:[\d_]*[a-zA-Z]\w*)?\b/,/\b(?:[A-Z]\w*|(?!(?:var|void)\b)[a-z]\w*)(?=\s+\w+\s*[;,=()])/],keyword:/\b(?:assert|break|case|class|const|default|else|enum|final|follows|for|grab|if|nest|new|next|noSeeb|return|static|switch|throw|var|void|while)\b/,operator:/\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?|:/,variable:/\b[a-z_]\w*\b/}),e.languages.insertBefore("birb","function",{metadata:{pattern:/<\w+>/,greedy:!0,alias:"symbol"}})}n.exports=t,t.displayName="birb",t.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=birb.4de4e305.js.map
