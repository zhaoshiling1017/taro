(window.webpackJsonp=window.webpackJsonp||[]).push([[905],{1716:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,O=u["".concat(o,".").concat(s)]||u[s]||d[s]||c;return n?r.a.createElement(O,i(i({ref:t},b),{},{components:n})):r.a.createElement(O,i({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},961:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),c=(n(0),n(1716)),o={title:"Taro.pauseVoice(option)",sidebar_label:"pauseVoice"},i={unversionedId:"apis/media/audio/pauseVoice",id:"apis/media/audio/pauseVoice",isDocsHomePage:!1,title:"Taro.pauseVoice(option)",description:"\u6682\u505c\u6b63\u5728\u64ad\u653e\u7684\u8bed\u97f3\u3002\u518d\u6b21\u8c03\u7528 Taro.playVoice \u64ad\u653e\u540c\u4e00\u4e2a\u6587\u4ef6\u65f6\uff0c\u4f1a\u4ece\u6682\u505c\u5904\u5f00\u59cb\u64ad\u653e\u3002\u5982\u679c\u60f3\u4ece\u5934\u5f00\u59cb\u64ad\u653e\uff0c\u9700\u8981\u5148\u8c03\u7528 Taro.stopVoice\u3002",source:"@site/docs/apis/media/audio/pauseVoice.md",slug:"/apis/media/audio/pauseVoice",permalink:"/taro/docs/next/apis/media/audio/pauseVoice",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/media/audio/pauseVoice.md",version:"current",sidebar_label:"pauseVoice",sidebar:"API",previous:{title:"Taro.playVoice(option)",permalink:"/taro/docs/next/apis/media/audio/playVoice"},next:{title:"Taro.getAvailableAudioSources(option)",permalink:"/taro/docs/next/apis/media/audio/getAvailableAudioSources"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u6682\u505c\u6b63\u5728\u64ad\u653e\u7684\u8bed\u97f3\u3002\u518d\u6b21\u8c03\u7528 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.playVoice.html"}),"Taro.playVoice")," \u64ad\u653e\u540c\u4e00\u4e2a\u6587\u4ef6\u65f6\uff0c\u4f1a\u4ece\u6682\u505c\u5904\u5f00\u59cb\u64ad\u653e\u3002\u5982\u679c\u60f3\u4ece\u5934\u5f00\u59cb\u64ad\u653e\uff0c\u9700\u8981\u5148\u8c03\u7528 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.stopVoice.html"}),"Taro.stopVoice"),"\u3002\n",Object(c.b)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a1.6.0 \u7248\u672c\u5f00\u59cb\uff0c\u672c\u63a5\u53e3\u4e0d\u518d\u7ef4\u62a4\u3002\u5efa\u8bae\u4f7f\u7528\u80fd\u529b\u66f4\u5f3a\u7684 ",Object(c.b)("a",Object(a.a)({parentName:"strong"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html"}),"Taro.createInnerAudioContext")," \u63a5\u53e3")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.pauseVoice.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => void\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.startRecord({\n  success: function (res) {\n    var tempFilePath = res.tempFilePath\n      Taro.playVoice({\n      filePath: tempFilePath\n    })\n    setTimeout(function() {\n        //\u6682\u505c\u64ad\u653e\n      Taro.pauseVoice()\n    }, 5000)\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.pauseVoice"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);