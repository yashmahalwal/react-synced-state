!function(e,n,o,t,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[t]&&i[t],s=u.cache||{},f="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function a(n,o){if(!s[n]){if(!e[n]){var r="function"==typeof i[t]&&i[t];if(!o&&r)return r(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}d.resolve=function(o){var t=e[n][1][o];return null!=t?t:o},d.cache={};var c=s[n]=new a.Module(n);e[n][0].call(c.exports,d,c,c.exports,this)}return s[n].exports;function d(e){var n=d.resolve(e);return!1===n?{}:a(n)}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=s,a.parent=u,a.register=function(n,o){e[n]=[function(e,n){n.exports=o},{}]},Object.defineProperty(a,"root",{get:function(){return i[t]}}),i[t]=a;for(var l=0;l<n.length;l++)a(n[l])}({kqxUC:[function(e,n,o){"use strict";var t=e("./json.js");function r(e){e.register(t),e.languages.jsonp=e.languages.extend("json",{punctuation:/[{}[\]();,.]/}),e.languages.insertBefore("jsonp","punctuation",{function:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/})}n.exports=r,r.displayName="jsonp",r.aliases=[]},{"./json.js":"iaqkr"}]},[],0,"parcelRequired94c");
//# sourceMappingURL=jsonp.c3eeee5c.js.map