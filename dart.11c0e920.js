!function(e,n,t,r,i){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof a[r]&&a[r],o=s.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,t){if(!o[n]){if(!e[n]){var i="function"==typeof a[r]&&a[r];if(!t&&i)return i(n,!0);if(s)return s(n,!0);if(d&&"string"==typeof n)return d(n);var u=new Error("Cannot find module '"+n+"'");throw u.code="MODULE_NOT_FOUND",u}f.resolve=function(t){var r=e[n][1][t];return null!=r?r:t},f.cache={};var c=o[n]=new l.Module(n);e[n][0].call(c.exports,f,c,c.exports,this)}return o[n].exports;function f(e){var n=f.resolve(e);return!1===n?{}:l(n)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=o,l.parent=s,l.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(l,"root",{get:function(){return a[r]}}),a[r]=l;for(var u=0;u<n.length;u++)l(n[u])}({KU33j:[function(e,n,t){"use strict";function r(e){var n,t,r,i;n=e,t=[/\b(?:async|sync|yield)\*/,/\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],r=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,i={pattern:RegExp(r+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}}}},n.languages.dart=n.languages.extend("clike",{"class-name":[i,{pattern:RegExp(r+/[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),lookbehind:!0,inside:i.inside}],keyword:t,operator:/\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/}),n.languages.insertBefore("dart","string",{"string-literal":{pattern:/r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,lookbehind:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:n.languages.dart}}},string:/[\s\S]+/}},string:void 0}),n.languages.insertBefore("dart","class-name",{metadata:{pattern:/@\w+/,alias:"function"}}),n.languages.insertBefore("dart","class-name",{generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":i,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}}})}n.exports=r,r.displayName="dart",r.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=dart.11c0e920.js.map
