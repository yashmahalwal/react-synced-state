!function(e,t,n,r,s){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof o[r]&&o[r],a=i.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,n){if(!a[t]){if(!e[t]){var s="function"==typeof o[r]&&o[r];if(!n&&s)return s(t,!0);if(i)return i(t,!0);if(l&&"string"==typeof t)return l(t);var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}p.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},p.cache={};var c=a[t]=new u.Module(t);e[t][0].call(c.exports,p,c,c.exports,this)}return a[t].exports;function p(e){var t=p.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=a,u.parent=i,u.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return o[r]}}),o[r]=u;for(var d=0;d<t.length;d++)u(t[d])}({clvYv:[function(e,t,n){"use strict";function r(e){!function(e){function t(e,n){return n<=0?/[]/.source:e.replace(/<SELF>/g,(function(){return t(e,n-1)}))}var n=/'[{}:=,](?:[^']|'')*'(?!')/,r={pattern:/''/,greedy:!0,alias:"operator"},s={pattern:n,greedy:!0,inside:{escape:r}},o=t(/\{(?:[^{}']|'(?![{},'])|''|<STR>|<SELF>)*\}/.source.replace(/<STR>/g,(function(){return n.source})),8),i={pattern:RegExp(o),inside:{message:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:null},"message-delimiter":{pattern:/./,alias:"punctuation"}}};e.languages["icu-message-format"]={argument:{pattern:RegExp(o),greedy:!0,inside:{content:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:{"argument-name":{pattern:/^(\s*)[^{}:=,\s]+/,lookbehind:!0},"choice-style":{pattern:/^(\s*,\s*choice\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{punctuation:/\|/,range:{pattern:/^(\s*)[+-]?(?:\d+(?:\.\d*)?|\u221e)\s*[<#\u2264]/,lookbehind:!0,inside:{operator:/[<#\u2264]/,number:/\S+/}},rest:null}},"plural-style":{pattern:/^(\s*,\s*(?:plural|selectordinal)\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{offset:/^offset:\s*\d+/,"nested-message":i,selector:{pattern:/=\d+|[^{}:=,\s]+/,inside:{keyword:/^(?:few|many|one|other|two|zero)$/}}}},"select-style":{pattern:/^(\s*,\s*select\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{"nested-message":i,selector:{pattern:/[^{}:=,\s]+/,inside:{keyword:/^other$/}}}},keyword:/\b(?:choice|plural|select|selectordinal)\b/,"arg-type":{pattern:/\b(?:date|duration|number|ordinal|spellout|time)\b/,alias:"keyword"},"arg-skeleton":{pattern:/(,\s*)::[^{}:=,\s]+/,lookbehind:!0},"arg-style":{pattern:/(,\s*)(?:currency|full|integer|long|medium|percent|short)(?=\s*$)/,lookbehind:!0},"arg-style-text":{pattern:RegExp(/(^\s*,\s*(?=\S))/.source+t(/(?:[^{}']|'[^']*'|\{(?:<SELF>)?\})+/.source,8)+"$"),lookbehind:!0,alias:"string"},punctuation:/,/}},"argument-delimiter":{pattern:/./,alias:"operator"}}},escape:r,string:s},i.inside.message.inside=e.languages["icu-message-format"],e.languages["icu-message-format"].argument.inside.content.inside["choice-style"].inside.rest=e.languages["icu-message-format"]}(e)}t.exports=r,r.displayName="icuMessageFormat",r.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=icu-message-format.9d8be508.js.map
