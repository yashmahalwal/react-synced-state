!function(e,n,t,r,o){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof s[r]&&s[r],a=i.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(n,t){if(!a[n]){if(!e[n]){var o="function"==typeof s[r]&&s[r];if(!t&&o)return o(n,!0);if(i)return i(n,!0);if(l&&"string"==typeof n)return l(n);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}c.resolve=function(t){var r=e[n][1][t];return null!=r?r:t},c.cache={};var f=a[n]=new u.Module(n);e[n][0].call(f.exports,c,f,f.exports,this)}return a[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:u(n)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=a,u.parent=i,u.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(u,"root",{get:function(){return s[r]}}),s[r]=u;for(var d=0;d<n.length;d++)u(n[d])}({hDCQN:[function(e,n,t){"use strict";function r(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}n.exports=r,r.displayName="scss",r.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=scss.9fc1bb8a.js.map