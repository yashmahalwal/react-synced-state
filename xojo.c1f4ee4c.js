!function(e,t,n,r,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[r]&&i[r],l=a.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,n){if(!l[t]){if(!e[t]){var o="function"==typeof i[r]&&i[r];if(!n&&o)return o(t,!0);if(a)return a(t,!0);if(d&&"string"==typeof t)return d(t);var f=new Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}c.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},c.cache={};var s=l[t]=new u.Module(t);e[t][0].call(s.exports,c,s,s.exports,this)}return l[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=l,u.parent=a,u.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return i[r]}}),i[r]=u;for(var f=0;f<t.length;f++)u(t[f])}({jGdS9:[function(e,t,n){"use strict";function r(e){e.languages.xojo={comment:{pattern:/(?:'|\/\/|Rem\b).+/i,greedy:!0},string:{pattern:/"(?:""|[^"])*"/,greedy:!0},number:[/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,/&[bchou][a-z\d]+/i],directive:{pattern:/#(?:Else|ElseIf|Endif|If|Pragma)\b/i,alias:"property"},keyword:/\b(?:AddHandler|App|Array|As(?:signs)?|Auto|Boolean|Break|By(?:Ref|Val)|Byte|Call|Case|Catch|CFStringRef|CGFloat|Class|Color|Const|Continue|CString|Currency|CurrentMethodName|Declare|Delegate|Dim|Do(?:uble|wnTo)?|Each|Else(?:If)?|End|Enumeration|Event|Exception|Exit|Extends|False|Finally|For|Function|Get|GetTypeInfo|Global|GOTO|If|Implements|In|Inherits|Int(?:8|16|32|64|eger|erface)?|Lib|Loop|Me|Module|Next|Nil|Object|Optional|OSType|ParamArray|Private|Property|Protected|PString|Ptr|Raise(?:Event)?|ReDim|RemoveHandler|Return|Select(?:or)?|Self|Set|Shared|Short|Single|Soft|Static|Step|String|Sub|Super|Text|Then|To|True|Try|Ubound|UInt(?:8|16|32|64|eger)?|Until|Using|Var(?:iant)?|Wend|While|WindowPtr|WString)\b/i,operator:/<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|WeakAddressOf|Xor)\b/i,punctuation:/[.,;:()]/}}t.exports=r,r.displayName="xojo",r.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=xojo.c1f4ee4c.js.map
