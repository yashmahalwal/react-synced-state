!function(e,n,t,T,o){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof r[T]&&r[T],E=i.cache||{},N="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(n,t){if(!E[n]){if(!e[n]){var o="function"==typeof r[T]&&r[T];if(!t&&o)return o(n,!0);if(i)return i(n,!0);if(N&&"string"==typeof n)return N(n);var u=new Error("Cannot find module '"+n+"'");throw u.code="MODULE_NOT_FOUND",u}s.resolve=function(t){var T=e[n][1][t];return null!=T?T:t},s.cache={};var O=E[n]=new d.Module(n);e[n][0].call(O.exports,s,O,O.exports,this)}return E[n].exports;function s(e){var n=s.resolve(e);return!1===n?{}:d(n)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=E,d.parent=i,d.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(d,"root",{get:function(){return r[T]}}),r[T]=d;for(var u=0;u<n.length;u++)d(n[u])}({"1TzgQ":[function(e,n,t){"use strict";function T(e){e.languages.iecst={comment:[{pattern:/(^|[^\\])(?:\/\*[\s\S]*?(?:\*\/|$)|\(\*[\s\S]*?(?:\*\)|$)|\{[\s\S]*?(?:\}|$))/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:[/\b(?:END_)?(?:PROGRAM|CONFIGURATION|INTERFACE|FUNCTION_BLOCK|FUNCTION|ACTION|TRANSITION|TYPE|STRUCT|(?:INITIAL_)?STEP|NAMESPACE|LIBRARY|CHANNEL|FOLDER|RESOURCE|VAR_(?:ACCESS|CONFIG|EXTERNAL|GLOBAL|INPUT|IN_OUT|OUTPUT|TEMP)|VAR|METHOD|PROPERTY)\b/i,/\b(?:AT|BY|(?:END_)?(?:CASE|FOR|IF|REPEAT|WHILE)|CONSTANT|CONTINUE|DO|ELSE|ELSIF|EXIT|EXTENDS|FROM|GET|GOTO|IMPLEMENTS|JMP|NON_RETAIN|OF|PRIVATE|PROTECTED|PUBLIC|RETAIN|RETURN|SET|TASK|THEN|TO|UNTIL|USING|WITH|__CATCH|__ENDTRY|__FINALLY|__TRY)\b/],"class-name":/\b(?:ANY|ARRAY|BOOL|BYTE|U?(?:D|L|S)?INT|(?:D|L)?WORD|DATE(?:_AND_TIME)?|DT|L?REAL|POINTER|STRING|TIME(?:_OF_DAY)?|TOD)\b/,address:{pattern:/%[IQM][XBWDL][\d.]*|%[IQ][\d.]*/,alias:"symbol"},number:/\b(?:16#[\da-f]+|2#[01_]+|0x[\da-f]+)\b|\b(?:D|DT|T|TOD)#[\d_shmd:]*|\b[A-Z]*#[\d.,_]*|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/,operator:/S?R?:?=>?|&&?|\*\*?|<[=>]?|>=?|[-:^/+#]|\b(?:AND|EQ|EXPT|GE|GT|LE|LT|MOD|NE|NOT|OR|XOR)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,punctuation:/[()[\].,;]/}}n.exports=T,T.displayName="iecst",T.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=iecst.577d953c.js.map
