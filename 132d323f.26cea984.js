(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1783:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return j}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},d=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=u(r),O=n,j=d["".concat(b,".").concat(O)]||d[O]||p[O]||a;return r?c.a.createElement(j,l({ref:t},i,{components:r})):c.a.createElement(j,l({ref:t},i))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,b=new Array(a);b[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var i=2;i<a;i++)b[i]=r[i];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},273:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return u}));var n=r(1),c=r(9),a=(r(0),r(1783)),b={title:"Taro.redirectTo(option)",sidebar_label:"redirectTo"},l={id:"version-3.0.0/apis/route/redirectTo",title:"Taro.redirectTo(option)",description:"\u5173\u95ed\u5f53\u524d\u9875\u9762\uff0c\u8df3\u8f6c\u5230\u5e94\u7528\u5185\u7684\u67d0\u4e2a\u9875\u9762\u3002\u4f46\u662f\u4e0d\u5141\u8bb8\u8df3\u8f6c\u5230 tabbar \u9875\u9762\u3002",source:"@site/versioned_docs/version-3.0.0/apis/route/redirectTo.md",permalink:"/taro/docs/apis/route/redirectTo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0/apis/route/redirectTo.md",version:"3.0.0",sidebar_label:"redirectTo",sidebar:"version-3.0.0/API",previous:{title:"Taro.reLaunch(option)",permalink:"/taro/docs/apis/route/reLaunch"},next:{title:"Taro.navigateTo(option)",permalink:"/taro/docs/apis/route/navigateTo"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5173\u95ed\u5f53\u524d\u9875\u9762\uff0c\u8df3\u8f6c\u5230\u5e94\u7528\u5185\u7684\u67d0\u4e2a\u9875\u9762\u3002\u4f46\u662f\u4e0d\u5141\u8bb8\u8df3\u8f6c\u5230 tabbar \u9875\u9762\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.redirectTo.html"}),"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("h3",{id:"option"},"Option"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"url"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u9700\u8981\u8df3\u8f6c\u7684\u5e94\u7528\u5185\u975e tabBar \u7684\u9875\u9762\u7684\u8def\u5f84, \u8def\u5f84\u540e\u53ef\u4ee5\u5e26\u53c2\u6570\u3002\u53c2\u6570\u4e0e\u8def\u5f84\u4e4b\u95f4\u4f7f\u7528 ",Object(a.b)("code",null,"?")," \u5206\u9694\uff0c\u53c2\u6570\u952e\u4e0e\u53c2\u6570\u503c\u7528 ",Object(a.b)("code",null,"=")," \u76f8\u8fde\uff0c\u4e0d\u540c\u53c2\u6570\u7528 ",Object(a.b)("code",null,"&")," \u5206\u9694\uff1b\u5982 'path?key=value&key2=value2'")),Object(a.b)("tr",null,Object(a.b)("td",null,"complete"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: CallbackResult) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(a.b)("tr",null,Object(a.b)("td",null,"fail"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: CallbackResult) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(a.b)("tr",null,Object(a.b)("td",null,"success"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: CallbackResult) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.redirectTo({\n  url: 'test?id=1'\n})\n")),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.redirectTo"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}u.isMDXComponent=!0}}]);