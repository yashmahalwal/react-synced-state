!function(e,r,t,n,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[n]&&i[n],a=u.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(r,t){if(!a[r]){if(!e[r]){var o="function"==typeof i[n]&&i[n];if(!t&&o)return o(r,!0);if(u)return u(r,!0);if(s&&"string"==typeof r)return s(r);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}d.resolve=function(t){var n=e[r][1][t];return null!=n?n:t},d.cache={};var p=a[r]=new f.Module(r);e[r][0].call(p.exports,d,p,p.exports,this)}return a[r].exports;function d(e){var r=d.resolve(e);return!1===r?{}:f(r)}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=a,f.parent=u,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]},Object.defineProperty(f,"root",{get:function(){return i[n]}}),i[n]=f;for(var l=0;l<r.length;l++)f(r[l])}({"38QL7":[function(e,r,t){"use strict";var n=e("./php.js");function o(e){e.register(n),e.languages.insertBefore("php","variable",{this:{pattern:/\$this\b/,alias:"keyword"},global:/\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/\b(?:parent|self|static)\b/,punctuation:/::|\\/}}})}r.exports=o,o.displayName="phpExtras",o.aliases=[]},{"./php.js":"16aCL"}]},[],0,"parcelRequired94c");
//# sourceMappingURL=php-extras.6efe5415.js.map
