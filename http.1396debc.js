!function(e,t,n,r,a){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i[r]&&i[r],o=s.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function p(t,n){if(!o[t]){if(!e[t]){var a="function"==typeof i[r]&&i[r];if(!n&&a)return a(t,!0);if(s)return s(t,!0);if(l&&"string"==typeof t)return l(t);var u=new Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}c.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},c.cache={};var d=o[t]=new p.Module(t);e[t][0].call(d.exports,c,d,d.exports,this)}return o[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:p(t)}}p.isParcelRequire=!0,p.Module=function(e){this.id=e,this.bundle=p,this.exports={}},p.modules=e,p.cache=o,p.parent=s,p.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(p,"root",{get:function(){return i[r]}}),i[r]=p;for(var u=0;u<t.length;u++)p(t[u])}({ful63:[function(e,t,n){"use strict";function r(e){!function(e){function t(e){return RegExp("(^(?:"+e+"):[ \t]*(?![ \t]))[^]+","i")}e.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:e.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:t(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:e.languages.csp},{pattern:t(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:e.languages.hpkp},{pattern:t(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:e.languages.hsts},{pattern:t(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var n,r,a,i=e.languages,s={"application/javascript":i.javascript,"application/json":i.json||i.javascript,"application/xml":i.xml,"text/xml":i.xml,"text/html":i.html,"text/css":i.css,"text/plain":i.plain},o={"application/json":!0,"application/xml":!0};for(var l in s)if(s[l]){n=n||{};var p=o[l]?(a=void 0,a=(r=l).replace(/^[a-z]+\//,""),"(?:"+r+"|\\w+/(?:[\\w.-]+\\+)+"+a+"(?![+\\w.-]))"):l;n[l.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+p+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:s[l]}}n&&e.languages.insertBefore("http","header",n)}(e)}t.exports=r,r.displayName="http",r.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=http.1396debc.js.map