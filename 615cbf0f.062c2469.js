(window.webpackJsonp=window.webpackJsonp||[]).push([[665],{1783:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),u=l(r),O=n,m=u["".concat(o,".").concat(O)]||u[O]||s[O]||c;return r?a.a.createElement(m,i({ref:t},p,{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=O;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},805:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(9),c=(r(0),r(1783)),o={title:"Taro.getCurrentPages()",sidebar_label:"getCurrentPages"},i={id:"apis/framework/getCurrentPages",title:"Taro.getCurrentPages()",description:"\u83b7\u53d6\u5f53\u524d\u9875\u9762\u6808\u3002\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u9996\u9875\uff0c\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e3a\u5f53\u524d\u9875\u9762\u3002",source:"@site/docs/apis/framework/getCurrentPages.md",permalink:"/taro/docs/next/apis/framework/getCurrentPages",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/framework/getCurrentPages.md",version:"next",sidebar_label:"getCurrentPages",sidebar:"API",previous:{title:"Taro.getApp(opts)",permalink:"/taro/docs/next/apis/framework/getApp"},next:{title:"Page",permalink:"/taro/docs/next/apis/framework/Page"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={rightToc:b};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u83b7\u53d6\u5f53\u524d\u9875\u9762\u6808\u3002\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u9996\u9875\uff0c\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e3a\u5f53\u524d\u9875\u9762\u3002\n",Object(c.b)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u4e0d\u8981\u5c1d\u8bd5\u4fee\u6539\u9875\u9762\u6808\uff0c\u4f1a\u5bfc\u81f4\u8def\u7531\u4ee5\u53ca\u9875\u9762\u72b6\u6001\u9519\u8bef\u3002")),Object(c.b)("li",{parentName:"ul"},"\u4e0d\u8981\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"App.onLaunch")," \u7684\u65f6\u5019\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"getCurrentPages()"),"\uff0c\u6b64\u65f6 ",Object(c.b)("inlineCode",{parentName:"li"},"page")," \u8fd8\u6ca1\u6709\u751f\u6210\u3002")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/getCurrentPages.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"() => Page[]\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.getCurrentPages().length\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.getCurrentPages"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}l.isMDXComponent=!0}}]);