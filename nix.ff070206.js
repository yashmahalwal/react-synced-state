!function(e,t,n,r,i){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof o[r]&&o[r],s=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,n){if(!s[t]){if(!e[t]){var i="function"==typeof o[r]&&o[r];if(!n&&i)return i(t,!0);if(a)return a(t,!0);if(l&&"string"==typeof t)return l(t);var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}c.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},c.cache={};var f=s[t]=new u.Module(t);e[t][0].call(f.exports,c,f,f.exports,this)}return s[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=s,u.parent=a,u.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return o[r]}}),o[r]=u;for(var d=0;d<t.length;d++)u(t[d])}({"33zhz":[function(e,t,n){"use strict";function r(e){e.languages.nix={comment:{pattern:/\/\*[\s\S]*?\*\/|#.*/,greedy:!0},string:{pattern:/"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,greedy:!0,inside:{interpolation:{pattern:/(^|(?:^|(?!'').)[^\\])\$\{(?:[^{}]|\{[^}]*\})*\}/,lookbehind:!0,inside:null}}},url:[/\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,{pattern:/([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,lookbehind:!0}],antiquotation:{pattern:/\$(?=\{)/,alias:"important"},number:/\b\d+\b/,keyword:/\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,function:/\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:Tarball|url)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,boolean:/\b(?:false|true)\b/,operator:/[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,punctuation:/[{}()[\].,:;]/},e.languages.nix.string.inside.interpolation.inside=e.languages.nix}t.exports=r,r.displayName="nix",r.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=nix.ff070206.js.map
