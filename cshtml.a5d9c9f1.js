!function(e,r,s,o,n){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},c="function"==typeof t[o]&&t[o],u=c.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function i(r,s){if(!u[r]){if(!e[r]){var n="function"==typeof t[o]&&t[o];if(!s&&n)return n(r,!0);if(c)return c(r,!0);if(a&&"string"==typeof r)return a(r);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}d.resolve=function(s){var o=e[r][1][s];return null!=o?o:s},d.cache={};var f=u[r]=new i.Module(r);e[r][0].call(f.exports,d,f,f.exports,this)}return u[r].exports;function d(e){var r=d.resolve(e);return!1===r?{}:i(r)}}i.isParcelRequire=!0,i.Module=function(e){this.id=e,this.bundle=i,this.exports={}},i.modules=e,i.cache=u,i.parent=c,i.register=function(r,s){e[r]=[function(e,r){r.exports=s},{}]},Object.defineProperty(i,"root",{get:function(){return t[o]}}),t[o]=i;for(var l=0;l<r.length;l++)i(r[l])}({gKrvu:[function(e,r,s){"use strict";var o=e("./csharp.js");function n(e){e.register(o),function(e){var r=/\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//.source,s=/@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source+"|"+/'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source;function o(e,o){for(var n=0;n<o;n++)e=e.replace(/<self>/g,(function(){return"(?:"+e+")"}));return e.replace(/<self>/g,"[^\\s\\S]").replace(/<str>/g,"(?:"+s+")").replace(/<comment>/g,"(?:"+r+")")}var n=o(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source,2),t=o(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source,2),c=o(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source,2),u=o(/<(?:[^<>'"@/]|<str>|<comment>|<self>)*>/.source,2),a=/(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?/.source,i=/(?!\d)[^\s>\/=$<%]+/.source+a+/\s*\/?>/.source,l=/\B@?/.source+"(?:"+/<([a-zA-Z][\w:]*)/.source+a+/\s*>/.source+"(?:"+/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+i+"|"+o(/<\1/.source+a+/\s*>/.source+"(?:"+/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+i+"|<self>)*"+/<\/\1\s*>/.source,2)+")*"+/<\/\1\s*>/.source+"|"+/</.source+i+")";e.languages.cshtml=e.languages.extend("markup",{});var f={pattern:/\S[\s\S]*/,alias:"language-csharp",inside:e.languages.insertBefore("csharp","string",{html:{pattern:RegExp(l),greedy:!0,inside:e.languages.cshtml}},{csharp:e.languages.extend("csharp",{})})};e.languages.insertBefore("cshtml","prolog",{"razor-comment":{pattern:/@\*[\s\S]*?\*@/,greedy:!0,alias:"comment"},block:{pattern:RegExp(/(^|[^@])@/.source+"(?:"+[c,/(?:code|functions)\s*/.source+c,/(?:for|foreach|lock|switch|using|while)\s*/.source+n+/\s*/.source+c,/do\s*/.source+c+/\s*while\s*/.source+n+/(?:\s*;)?/.source,/try\s*/.source+c+/\s*catch\s*/.source+n+/\s*/.source+c+/\s*finally\s*/.source+c,/if\s*/.source+n+/\s*/.source+c+"(?:"+/\s*else/.source+"(?:"+/\s+if\s*/.source+n+")?"+/\s*/.source+c+")*"].join("|")+")"),lookbehind:!0,greedy:!0,inside:{keyword:/^@\w*/,csharp:f}},directive:{pattern:/^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,lookbehind:!0,greedy:!0,inside:{keyword:/^@\w+/,csharp:f}},value:{pattern:RegExp(/(^|[^@])@/.source+/(?:await\b\s*)?/.source+"(?:"+/\w+\b/.source+"|"+n+")(?:"+/[?!]?\.\w+\b/.source+"|"+n+"|"+t+"|"+u+n+")*"),lookbehind:!0,greedy:!0,alias:"variable",inside:{keyword:/^@/,csharp:f}},"delegate-operator":{pattern:/(^|[^@])@(?=<)/,lookbehind:!0,alias:"operator"}}),e.languages.razor=e.languages.cshtml}(e)}r.exports=n,n.displayName="cshtml",n.aliases=["razor"]},{"./csharp.js":"bbCFR"}]},[],0,"parcelRequired94c");
//# sourceMappingURL=cshtml.a5d9c9f1.js.map