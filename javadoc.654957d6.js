!function(e,a,n,t,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i[t]&&i[t],r=s.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(a,n){if(!r[a]){if(!e[a]){var o="function"==typeof i[t]&&i[t];if(!n&&o)return o(a,!0);if(s)return s(a,!0);if(u&&"string"==typeof a)return u(a);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}p.resolve=function(n){var t=e[a][1][n];return null!=t?t:n},p.cache={};var c=r[a]=new l.Module(a);e[a][0].call(c.exports,p,c,c.exports,this)}return r[a].exports;function p(e){var a=p.resolve(e);return!1===a?{}:l(a)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=r,l.parent=s,l.register=function(a,n){e[a]=[function(e,a){a.exports=n},{}]},Object.defineProperty(l,"root",{get:function(){return i[t]}}),i[t]=l;for(var d=0;d<a.length;d++)l(a[d])}({bCoJI:[function(e,a,n){"use strict";var t=e("./java.js"),o=e("./javadoclike.js");function i(e){var a,n,i,s;e.register(t),e.register(o),a=e,n=/(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,i=/#\s*\w+(?:\s*\([^()]*\))?/.source,s=/(?:\b[a-zA-Z]\w+\s*\.\s*)*\b[A-Z]\w*(?:\s*<mem>)?|<mem>/.source.replace(/<mem>/g,(function(){return i})),a.languages.javadoc=a.languages.extend("javadoclike",{}),a.languages.insertBefore("javadoc","keyword",{reference:{pattern:RegExp(/(@(?:exception|link|linkplain|see|throws|value)\s+(?:\*\s*)?)/.source+"(?:"+s+")"),lookbehind:!0,inside:{function:{pattern:/(#\s*)\w+(?=\s*\()/,lookbehind:!0},field:{pattern:/(#\s*)\w+/,lookbehind:!0},namespace:{pattern:/\b(?:[a-z]\w*\s*\.\s*)+/,inside:{punctuation:/\./}},"class-name":/\b[A-Z]\w*/,keyword:a.languages.java.keyword,punctuation:/[#()[\],.]/}},"class-name":{pattern:/(@param\s+)<[A-Z]\w*>/,lookbehind:!0,inside:{punctuation:/[.<>]/}},"code-section":[{pattern:/(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,lookbehind:!0,inside:{code:{pattern:n,lookbehind:!0,inside:a.languages.java,alias:"language-java"}}},{pattern:/(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,lookbehind:!0,inside:{line:{pattern:n,lookbehind:!0,inside:{tag:a.languages.markup.tag,entity:a.languages.markup.entity,code:{pattern:/.+/,inside:a.languages.java,alias:"language-java"}}}}}],tag:a.languages.markup.tag,entity:a.languages.markup.entity}),a.languages.javadoclike.addSupport("java",a.languages.javadoc)}a.exports=i,i.displayName="javadoc",i.aliases=[]},{"./java.js":"3dS8a","./javadoclike.js":"896O2"}]},[],0,"parcelRequired94c");
//# sourceMappingURL=javadoc.654957d6.js.map
