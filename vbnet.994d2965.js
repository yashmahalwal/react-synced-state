!function(E,T,e,R,O){var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},S="function"==typeof N[R]&&N[R],L=S.cache||{},I="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function n(T,e){if(!L[T]){if(!E[T]){var O="function"==typeof N[R]&&N[R];if(!e&&O)return O(T,!0);if(S)return S(T,!0);if(I&&"string"==typeof T)return I(T);var A=new Error("Cannot find module '"+T+"'");throw A.code="MODULE_NOT_FOUND",A}C.resolve=function(e){var R=E[T][1][e];return null!=R?R:e},C.cache={};var t=L[T]=new n.Module(T);E[T][0].call(t.exports,C,t,t.exports,this)}return L[T].exports;function C(E){var T=C.resolve(E);return!1===T?{}:n(T)}}n.isParcelRequire=!0,n.Module=function(E){this.id=E,this.bundle=n,this.exports={}},n.modules=E,n.cache=L,n.parent=S,n.register=function(T,e){E[T]=[function(E,T){T.exports=e},{}]},Object.defineProperty(n,"root",{get:function(){return N[R]}}),N[R]=n;for(var A=0;A<T.length;A++)n(T[A])}({jbNLk:[function(E,T,e){"use strict";var R=E("./basic.js");function O(E){E.register(R),E.languages.vbnet=E.languages.extend("basic",{comment:[{pattern:/(?:!|REM\b).+/i,inside:{keyword:/^REM/i}},{pattern:/(^|[^\\:])'.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(^|[^"])"(?:""|[^"])*"(?!")/,lookbehind:!0,greedy:!0},keyword:/(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDBL|CDEC|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DEFAULT|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LET|LIB|LIKE|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPERATOR|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHELL|SHORT|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SWAP|SYNCLOCK|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,punctuation:/[,;:(){}]/})}T.exports=O,O.displayName="vbnet",O.aliases=[]},{"./basic.js":"fC47O"}]},[],0,"parcelRequired94c");
//# sourceMappingURL=vbnet.994d2965.js.map
