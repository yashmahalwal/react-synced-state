!function(e,n,t,r,i){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof o[r]&&o[r],d=a.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,t){if(!d[n]){if(!e[n]){var i="function"==typeof o[r]&&o[r];if(!t&&i)return i(n,!0);if(a)return a(n,!0);if(u&&"string"==typeof n)return u(n);var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}c.resolve=function(t){var r=e[n][1][t];return null!=r?r:t},c.cache={};var b=d[n]=new l.Module(n);e[n][0].call(b.exports,c,b,b.exports,this)}return d[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:l(n)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=d,l.parent=a,l.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(l,"root",{get:function(){return o[r]}}),o[r]=l;for(var s=0;s<n.length;s++)l(n[s])}({"6QB6V":[function(e,n,t){"use strict";function r(e){e.languages.powerquery={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0,greedy:!0},"quoted-identifier":{pattern:/#"(?:[^"\r\n]|"")*"(?!")/,greedy:!0},string:{pattern:/(?:#!)?"(?:[^"\r\n]|"")*"(?!")/,greedy:!0},constant:[/\bDay\.(?:Friday|Monday|Saturday|Sunday|Thursday|Tuesday|Wednesday)\b/,/\bTraceLevel\.(?:Critical|Error|Information|Verbose|Warning)\b/,/\bOccurrence\.(?:All|First|Last)\b/,/\bOrder\.(?:Ascending|Descending)\b/,/\bRoundingMode\.(?:AwayFromZero|Down|ToEven|TowardZero|Up)\b/,/\bMissingField\.(?:Error|Ignore|UseNull)\b/,/\bQuoteStyle\.(?:Csv|None)\b/,/\bJoinKind\.(?:FullOuter|Inner|LeftAnti|LeftOuter|RightAnti|RightOuter)\b/,/\bGroupKind\.(?:Global|Local)\b/,/\bExtraValues\.(?:Error|Ignore|List)\b/,/\bJoinAlgorithm\.(?:Dynamic|LeftHash|LeftIndex|PairwiseHash|RightHash|RightIndex|SortMerge)\b/,/\bJoinSide\.(?:Left|Right)\b/,/\bPrecision\.(?:Decimal|Double)\b/,/\bRelativePosition\.From(?:End|Start)\b/,/\bTextEncoding\.(?:Ascii|BigEndianUnicode|Unicode|Utf16|Utf8|Windows)\b/,/\b(?:Any|Binary|Date|DateTime|DateTimeZone|Duration|Function|Int16|Int32|Int64|Int8|List|Logical|None|Number|Record|Table|Text|Time)\.Type\b/,/\bnull\b/],boolean:/\b(?:false|true)\b/,keyword:/\b(?:and|as|each|else|error|if|in|is|let|meta|not|nullable|optional|or|otherwise|section|shared|then|try|type)\b|#(?:binary|date|datetime|datetimezone|duration|infinity|nan|sections|shared|table|time)\b/,function:{pattern:/(^|[^#\w.])[a-z_][\w.]*(?=\s*\()/i,lookbehind:!0},"data-type":{pattern:/\b(?:any|anynonnull|binary|date|datetime|datetimezone|duration|function|list|logical|none|number|record|table|text|time)\b/,alias:"class-name"},number:{pattern:/\b0x[\da-f]+\b|(?:[+-]?(?:\b\d+\.)?\b\d+|[+-]\.\d+|(^|[^.])\B\.\d+)(?:e[+-]?\d+)?\b/i,lookbehind:!0},operator:/[-+*\/&?@^]|<(?:=>?|>)?|>=?|=>?|\.\.\.?/,punctuation:/[,;\[\](){}]/},e.languages.pq=e.languages.powerquery,e.languages.mscript=e.languages.powerquery}n.exports=r,r.displayName="powerquery",r.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=powerquery.1ba029c9.js.map
