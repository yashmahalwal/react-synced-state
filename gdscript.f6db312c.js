!function(e,t,n,r,o){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof s[r]&&s[r],a=i.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(t,n){if(!a[t]){if(!e[t]){var o="function"==typeof s[r]&&s[r];if(!n&&o)return o(t,!0);if(i)return i(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}f.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},f.cache={};var d=a[t]=new l.Module(t);e[t][0].call(d.exports,f,d,d.exports,this)}return a[t].exports;function f(e){var t=f.resolve(e);return!1===t?{}:l(t)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=a,l.parent=i,l.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(l,"root",{get:function(){return s[r]}}),s[r]=l;for(var c=0;c<t.length;c++)l(t[c])}({"70CaY":[function(e,t,n){"use strict";function r(e){e.languages.gdscript={comment:/#.*/,string:{pattern:/@?(?:("|')(?:(?!\1)[^\n\\]|\\[\s\S])*\1(?!"|')|"""(?:[^\\]|\\[\s\S])*?""")/,greedy:!0},"class-name":{pattern:/(^(?:class|class_name|extends)[ \t]+|^export\([ \t]*|\bas[ \t]+|(?:\b(?:const|var)[ \t]|[,(])[ \t]*\w+[ \t]*:[ \t]*|->[ \t]*)[a-zA-Z_]\w*/m,lookbehind:!0},keyword:/\b(?:and|as|assert|break|breakpoint|class|class_name|const|continue|elif|else|enum|export|extends|for|func|if|in|is|master|mastersync|match|not|null|onready|or|pass|preload|puppet|puppetsync|remote|remotesync|return|self|setget|signal|static|tool|var|while|yield)\b/,function:/\b[a-z_]\w*(?=[ \t]*\()/i,variable:/\$\w+/,number:[/\b0b[01_]+\b|\b0x[\da-fA-F_]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.[\d_]+)(?:e[+-]?[\d_]+)?\b/,/\b(?:INF|NAN|PI|TAU)\b/],constant:/\b[A-Z][A-Z_\d]*\b/,boolean:/\b(?:false|true)\b/,operator:/->|:=|&&|\|\||<<|>>|[-+*/%&|!<>=]=?|[~^]/,punctuation:/[.:,;()[\]{}]/}}t.exports=r,r.displayName="gdscript",r.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=gdscript.f6db312c.js.map
