!function(e,n,t,i,r){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof a[i]&&a[i],s=o.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(n,t){if(!s[n]){if(!e[n]){var r="function"==typeof a[i]&&a[i];if(!t&&r)return r(n,!0);if(o)return o(n,!0);if(l&&"string"==typeof n)return l(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}d.resolve=function(t){var i=e[n][1][t];return null!=i?i:t},d.cache={};var u=s[n]=new f.Module(n);e[n][0].call(u.exports,d,u,u.exports,this)}return s[n].exports;function d(e){var n=d.resolve(e);return!1===n?{}:f(n)}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=s,f.parent=o,f.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(f,"root",{get:function(){return a[i]}}),a[i]=f;for(var c=0;c<n.length;c++)f(n[c])}({"635Z3":[function(e,n,t){"use strict";function i(e){var n,t,i;t=/#(?!\{).+/,i={pattern:/#\{[^}]+\}/,alias:"variable"},(n=e).languages.coffeescript=n.languages.extend("javascript",{comment:t,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:i}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),n.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:t,interpolation:i}}}),n.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:n.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:i}}]}),n.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete n.languages.coffeescript["template-string"],n.languages.coffee=n.languages.coffeescript}n.exports=i,i.displayName="coffeescript",i.aliases=["coffee"]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=coffeescript.c9e247d7.js.map