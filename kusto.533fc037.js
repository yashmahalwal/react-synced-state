!function(e,n,t,r,a){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof i[r]&&i[r],s=o.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(n,t){if(!s[n]){if(!e[n]){var a="function"==typeof i[r]&&i[r];if(!t&&a)return a(n,!0);if(o)return o(n,!0);if(d&&"string"==typeof n)return d(n);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}f.resolve=function(t){var r=e[n][1][t];return null!=r?r:t},f.cache={};var c=s[n]=new u.Module(n);e[n][0].call(c.exports,f,c,c.exports,this)}return s[n].exports;function f(e){var n=f.resolve(e);return!1===n?{}:u(n)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=s,u.parent=o,u.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(u,"root",{get:function(){return i[r]}}),i[r]=u;for(var l=0;l<n.length;l++)u(n[l])}({"2H6hP":[function(e,n,t){"use strict";function r(e){e.languages.kusto={comment:{pattern:/\/\/.*/,greedy:!0},string:{pattern:/```[\s\S]*?```|[hH]?(?:"(?:[^\r\n\\"]|\\.)*"|'(?:[^\r\n\\']|\\.)*'|@(?:"[^\r\n"]*"|'[^\r\n']*'))/,greedy:!0},verb:{pattern:/(\|\s*)[a-z][\w-]*/i,lookbehind:!0,alias:"keyword"},command:{pattern:/\.[a-z][a-z\d-]*\b/,alias:"keyword"},"class-name":/\b(?:bool|datetime|decimal|dynamic|guid|int|long|real|string|timespan)\b/,keyword:/\b(?:access|alias|and|anti|as|asc|auto|between|by|(?:contains|(?:ends|starts)with|has(?:perfix|suffix)?)(?:_cs)?|database|declare|desc|external|from|fullouter|has_all|in|ingestion|inline|inner|innerunique|into|(?:left|right)(?:anti(?:semi)?|inner|outer|semi)?|let|like|local|not|of|on|or|pattern|print|query_parameters|range|restrict|schema|set|step|table|tables|to|view|where|with|matches\s+regex|nulls\s+(?:first|last))(?![\w-])/,boolean:/\b(?:false|null|true)\b/,function:/\b[a-z_]\w*(?=\s*\()/,datetime:[{pattern:/\b(?:(?:Fri|Friday|Mon|Monday|Sat|Saturday|Sun|Sunday|Thu|Thursday|Tue|Tuesday|Wed|Wednesday)\s*,\s*)?\d{1,2}(?:\s+|-)(?:Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)(?:\s+|-)\d{2}\s+\d{2}:\d{2}(?::\d{2})?(?:\s*(?:\b(?:[A-Z]|(?:[ECMT][DS]|GM|U)T)|[+-]\d{4}))?\b/,alias:"number"},{pattern:/[+-]?\b(?:\d{4}-\d{2}-\d{2}(?:[ T]\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)?|\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)Z?/,alias:"number"}],number:/\b(?:0x[0-9A-Fa-f]+|\d+(?:\.\d+)?(?:[Ee][+-]?\d+)?)(?:(?:min|sec|[mnµ]s|[dhms]|microsecond|tick)\b)?|[+-]?\binf\b/,operator:/=>|[!=]~|[!=<>]=?|[-+*/%|]|\.\./,punctuation:/[()\[\]{},;.:]/}}n.exports=r,r.displayName="kusto",r.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=kusto.533fc037.js.map
