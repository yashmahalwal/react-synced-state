!function(e,t,n,r,i){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof a[r]&&a[r],s=o.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(t,n){if(!s[t]){if(!e[t]){var i="function"==typeof a[r]&&a[r];if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}c.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},c.cache={};var f=s[t]=new l.Module(t);e[t][0].call(f.exports,c,f,f.exports,this)}return s[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:l(t)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=s,l.parent=o,l.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(l,"root",{get:function(){return a[r]}}),a[r]=l;for(var d=0;d<t.length;d++)l(t[d])}({"5Em4X":[function(e,t,n){"use strict";var r=e("./ruby.js");function i(e){var t;e.register(r),(t=e).languages.crystal=t.languages.extend("ruby",{keyword:[/\b(?:__DIR__|__END_LINE__|__FILE__|__LINE__|abstract|alias|annotation|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|ifdef|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|ptr|require|rescue|return|select|self|sizeof|struct|super|then|type|typeof|undef|uninitialized|union|unless|until|when|while|with|yield)\b/,{pattern:/(\.\s*)(?:is_a|responds_to)\?/,lookbehind:!0}],number:/\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/,operator:[/->/,t.languages.ruby.operator],punctuation:/[(){}[\].,;\\]/}),t.languages.insertBefore("crystal","string-literal",{attribute:{pattern:/@\[.*?\]/,inside:{delimiter:{pattern:/^@\[|\]$/,alias:"punctuation"},attribute:{pattern:/^(\s*)\w+/,lookbehind:!0,alias:"class-name"},args:{pattern:/\S(?:[\s\S]*\S)?/,inside:t.languages.crystal}}},expansion:{pattern:/\{(?:\{.*?\}|%.*?%)\}/,inside:{content:{pattern:/^(\{.)[\s\S]+(?=.\}$)/,lookbehind:!0,inside:t.languages.crystal},delimiter:{pattern:/^\{[\{%]|[\}%]\}$/,alias:"operator"}}},char:{pattern:/'(?:[^\\\r\n]{1,2}|\\(?:.|u(?:[A-Fa-f0-9]{1,4}|\{[A-Fa-f0-9]{1,6}\})))'/,greedy:!0}})}t.exports=i,i.displayName="crystal",i.aliases=[]},{"./ruby.js":"9kSVl"}]},[],0,"parcelRequired94c");
//# sourceMappingURL=crystal.abcb1b92.js.map