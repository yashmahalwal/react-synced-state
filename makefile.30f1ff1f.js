!function(e,n,r,t,i){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof o[t]&&o[t],l=a.cache||{},f="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(n,r){if(!l[n]){if(!e[n]){var i="function"==typeof o[t]&&o[t];if(!r&&i)return i(n,!0);if(a)return a(n,!0);if(f&&"string"==typeof n)return f(n);var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}c.resolve=function(r){var t=e[n][1][r];return null!=t?t:r},c.cache={};var d=l[n]=new u.Module(n);e[n][0].call(d.exports,c,d,d.exports,this)}return l[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:u(n)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=l,u.parent=a,u.register=function(n,r){e[n]=[function(e,n){n.exports=r},{}]},Object.defineProperty(u,"root",{get:function(){return o[t]}}),o[t]=u;for(var s=0;s<n.length;s++)u(n[s])}({"3uQKp":[function(e,n,r){"use strict";function t(e){e.languages.makefile={comment:{pattern:/(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,lookbehind:!0},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"builtin-target":{pattern:/\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,alias:"builtin"},target:{pattern:/^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,alias:"symbol",inside:{variable:/\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/}},variable:/\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,keyword:/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,function:{pattern:/(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,lookbehind:!0},operator:/(?:::|[?:+!])?=|[|@]/,punctuation:/[:;(){}]/}}n.exports=t,t.displayName="makefile",t.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=makefile.30f1ff1f.js.map
