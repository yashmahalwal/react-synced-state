!function(e,n,t,i,a){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof r[i]&&r[i],u=o.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function p(n,t){if(!u[n]){if(!e[n]){var a="function"==typeof r[i]&&r[i];if(!t&&a)return a(n,!0);if(o)return o(n,!0);if(c&&"string"==typeof n)return c(n);var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}d.resolve=function(t){var i=e[n][1][t];return null!=i?i:t},d.cache={};var l=u[n]=new p.Module(n);e[n][0].call(l.exports,d,l,l.exports,this)}return u[n].exports;function d(e){var n=d.resolve(e);return!1===n?{}:p(n)}}p.isParcelRequire=!0,p.Module=function(e){this.id=e,this.bundle=p,this.exports={}},p.modules=e,p.cache=u,p.parent=o,p.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(p,"root",{get:function(){return r[i]}}),r[i]=p;for(var s=0;s<n.length;s++)p(n[s])}({"9bLie":[function(e,n,t){"use strict";function i(e){var n;(n=e).languages.xeora=n.languages.extend("markup",{constant:{pattern:/\$(?:DomainContents|PageRenderDuration)\$/,inside:{punctuation:{pattern:/\$/}}},variable:{pattern:/\$@?(?:#+|[-+*~=^])?[\w.]+\$/,inside:{punctuation:{pattern:/[$.]/},operator:{pattern:/#+|[-+*~=^@]/}}},"function-inline":{pattern:/\$F:[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\$/,inside:{variable:{pattern:/(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,inside:{punctuation:{pattern:/[,.|]/},operator:{pattern:/#+|[-+*~=^@]/}}},punctuation:{pattern:/\$\w:|[$:?.,|]/}},alias:"function"},"function-block":{pattern:/\$XF:\{[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\}:XF\$/,inside:{punctuation:{pattern:/[$:{}?.,|]/}},alias:"function"},"directive-inline":{pattern:/\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\/\w.]+\$/,inside:{punctuation:{pattern:/\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,inside:{tag:{pattern:/#\d/}}}},alias:"function"},"directive-block-open":{pattern:/\$\w+:\{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\w.]+:\{(?:![A-Z]+)?/,inside:{punctuation:{pattern:/\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,inside:{tag:{pattern:/#\d/}}},attribute:{pattern:/![A-Z]+$/,inside:{punctuation:{pattern:/!/}},alias:"keyword"}},alias:"function"},"directive-block-separator":{pattern:/\}:[-\w.]+:\{/,inside:{punctuation:{pattern:/[:{}]/}},alias:"function"},"directive-block-close":{pattern:/\}:[-\w.]+\$/,inside:{punctuation:{pattern:/[:{}$]/}},alias:"function"}}),n.languages.insertBefore("inside","punctuation",{variable:n.languages.xeora["function-inline"].inside.variable},n.languages.xeora["function-block"]),n.languages.xeoracube=n.languages.xeora}n.exports=i,i.displayName="xeora",i.aliases=["xeoracube"]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=xeora.19c96bc3.js.map
