!function(e,a,t,n,r){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof o[n]&&o[n],i=s.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(a,t){if(!i[a]){if(!e[a]){var r="function"==typeof o[n]&&o[n];if(!t&&r)return r(a,!0);if(s)return s(a,!0);if(l&&"string"==typeof a)return l(a);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}f.resolve=function(t){var n=e[a][1][t];return null!=n?n:t},f.cache={};var p=i[a]=new u.Module(a);e[a][0].call(p.exports,f,p,p.exports,this)}return i[a].exports;function f(e){var a=f.resolve(e);return!1===a?{}:u(a)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=i,u.parent=s,u.register=function(a,t){e[a]=[function(e,a){a.exports=t},{}]},Object.defineProperty(u,"root",{get:function(){return o[n]}}),o[n]=u;for(var c=0;c<a.length;c++)u(a[c])}({kfP3Y:[function(e,a,t){"use strict";function n(e){!function(e){function a(e,a){return RegExp(e.replace(/<ID>/g,(function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source})),a)}e.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+e.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),e.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+e.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),e.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),e.languages.insertBefore("javascript","keyword",{imports:{pattern:a(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:e.languages.javascript},exports:{pattern:a(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:e.languages.javascript}}),e.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),e.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),e.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:a(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var t=["function","function-variable","method","method-variable","property-access"],n=0;n<t.length;n++){var r=t[n],o=e.languages.javascript[r];"RegExp"===e.util.type(o)&&(o=e.languages.javascript[r]={pattern:o});var s=o.inside||{};o.inside=s,s["maybe-class-name"]=/^[A-Z][\s\S]*/}}(e)}a.exports=n,n.displayName="jsExtras",n.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=js-extras.b5416ef9.js.map
