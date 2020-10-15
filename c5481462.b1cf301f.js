(window.webpackJsonp=window.webpackJsonp||[]).push([[1296],{1351:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),c=(a(0),a(1716)),b={title:"Taro.chooseLocation(param)",sidebar_label:"chooseLocation"},o={unversionedId:"apis/location/chooseLocation",id:"version-1.3.45/apis/location/chooseLocation",isDocsHomePage:!1,title:"Taro.chooseLocation(param)",description:"\u6253\u5f00\u5730\u56fe\u9009\u62e9\u4f4d\u7f6e\u3002",source:"@site/versioned_docs/version-1.3.45/apis/location/chooseLocation.md",slug:"/apis/location/chooseLocation",permalink:"/taro/docs/1.3.45/apis/location/chooseLocation",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.45/apis/location/chooseLocation.md",version:"1.3.45",sidebar_label:"chooseLocation",sidebar:"version-1.3.45/API",previous:{title:"Taro.openLocation(OBJECT)",permalink:"/taro/docs/1.3.45/apis/location/openLocation"},next:{title:"Taro.playVoice(OBJECT)",permalink:"/taro/docs/1.3.45/apis/multimedia/audio/playVoice"}},l=[{value:"\u4f7f\u7528\u524d\u6ce8\u610f",id:"\u4f7f\u7528\u524d\u6ce8\u610f",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"object param",id:"object-param",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u6253\u5f00\u5730\u56fe\u9009\u62e9\u4f4d\u7f6e\u3002"),Object(c.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseLocation.html"}),Object(c.b)("inlineCode",{parentName:"a"},"wx.chooseLocation")),"\uff0c\u652f\u6301 ",Object(c.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(c.b)("h2",{id:"\u4f7f\u7528\u524d\u6ce8\u610f"},"\u4f7f\u7528\u524d\u6ce8\u610f"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"chooseLocation")," api\u529f\u80fd\u662f\u4f9d\u8d56\u4e8e\u817e\u8baf\u4f4d\u7f6e\u670d\u52a1\uff0c\u6240\u4ee5\u9700\u8981\u4f7f\u7528 api \u5bc6\u94a5\u3002\u5982\u679c\u60a8\u6ca1\u6709\uff0c\u53ef\u4ee5\u524d\u5f80\u817e\u8baf\u4f4d\u7f6e\u670d\u52a1",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://lbs.qq.com/console/mykey.html?console=mykey"}),"\u5f00\u53d1\u8005\u63a7\u5236\u53f0"),"\u8fdb\u884c\u7533\u8bf7\u3002"),Object(c.b)("p",null,"\u83b7\u5f97 api \u5bc6\u94a5\u540e\uff0c\u60a8\u9700\u8981\u5c06\u5b83\u586b\u5165\u9879\u76ee\u7684\u5e38\u91cf\u914d\u7f6e",Object(c.b)("inlineCode",{parentName:"p"},"defineConstants.LOCATION_APIKEY"),"\u4e2d\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// config/index.js\n\nconst config = {\n  defineConstants: {\n    LOCATION_APIKEY: JSON.stringify('XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX')\n  },\n  // ...\n}\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"object-param"},"object param"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[success]"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#successobj"}),Object(c.b)("code",null,"function"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[fail]"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"function")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[complete]"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"function")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(c.b)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),Object(c.b)("h5",{id:"successobj"},"success(obj)"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u4f4d\u7f6e\u540d\u79f0")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"address"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8be6\u7ec6\u5730\u5740")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"latitude"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7eac\u5ea6\uff0c\u6d6e\u70b9\u6570\uff0c\u8303\u56f4\u4e3a-90~90\uff0c\u8d1f\u6570\u8868\u793a\u5357\u7eac\u3002\u4f7f\u7528 gcj02 \u56fd\u6d4b\u5c40\u5750\u6807\u7cfb")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"longitude"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7ecf\u5ea6\uff0c\u6d6e\u70b9\u6570\uff0c\u8303\u56f4\u4e3a-180~180\uff0c\u8d1f\u6570\u8868\u793a\u897f\u7ecf\u3002\u4f7f\u7528 gcj02 \u56fd\u6d4b\u5c40\u5750\u6807\u7cfb")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.chooseLocation(params).then(...)\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.chooseLocation"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0},1716:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},O=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),O=p(a),d=n,u=O["".concat(b,".").concat(d)]||O[d]||j[d]||c;return a?r.a.createElement(u,o(o({ref:t},i),{},{components:a})):r.a.createElement(u,o({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var i=2;i<c;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);