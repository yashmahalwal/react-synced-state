!function(e,n,t,o,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[o]&&i[o],a=u.cache||{},f="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,t){if(!a[n]){if(!e[n]){var r="function"==typeof i[o]&&i[o];if(!t&&r)return r(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(t){var o=e[n][1][t];return null!=o?o:t},p.cache={};var s=a[n]=new l.Module(n);e[n][0].call(s.exports,p,s,s.exports,this)}return a[n].exports;function p(e){var n=p.resolve(e);return!1===n?{}:l(n)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=a,l.parent=u,l.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(l,"root",{get:function(){return i[o]}}),i[o]=l;for(var c=0;c<n.length;c++)l(n[c])}({"1B9gV":[function(e,n,t){"use strict";function o(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,o,r,i){if(t.language===o){var u=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"==typeof i&&!i(e))return e;for(var r,a=u.length;-1!==t.code.indexOf(r=n(o,a));)++a;return u[a]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,o){if(t.language===o&&t.tokenStack){t.grammar=e.languages[o];var r=0,i=Object.keys(t.tokenStack);!function u(a){for(var f=0;f<a.length&&!(r>=i.length);f++){var l=a[f];if("string"==typeof l||l.content&&"string"==typeof l.content){var c=i[r],s=t.tokenStack[c],p="string"==typeof l?l:l.content,d=n(o,c),g=p.indexOf(d);if(g>-1){++r;var h=p.substring(0,g),y=new e.Token(o,e.tokenize(s,t.grammar),"language-"+o,s),m=p.substring(g+d.length),v=[];h&&v.push.apply(v,u([h])),v.push(y),m&&v.push.apply(v,u([m])),"string"==typeof l?a.splice.apply(a,[f,1].concat(v)):l.content=v}}else l.content&&u(l.content)}return a}(t.tokens)}}}})}(e)}n.exports=o,o.displayName="markupTemplating",o.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=markup-templating.404784f3.js.map
