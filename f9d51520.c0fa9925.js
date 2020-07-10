(window.webpackJsonp=window.webpackJsonp||[]).push([[1605],{1741:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return d}));var r=n(1),c=n(9),i=(n(0),n(1783)),b={title:"Taro.connectWifi(option)",sidebar_label:"connectWifi"},l={id:"version-3.0.0/apis/device/wifi/connectWifi",title:"Taro.connectWifi(option)",description:"\u8fde\u63a5 Wi-Fi\u3002\u82e5\u5df2\u77e5 Wi-Fi \u4fe1\u606f\uff0c\u53ef\u4ee5\u76f4\u63a5\u5229\u7528\u8be5\u63a5\u53e3\u8fde\u63a5\u3002\u4ec5 Android \u4e0e iOS 11 \u4ee5\u4e0a\u7248\u672c\u652f\u6301\u3002",source:"@site/versioned_docs/version-3.0.0/apis/device/wifi/connectWifi.md",permalink:"/taro/docs/apis/device/wifi/connectWifi",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0/apis/device/wifi/connectWifi.md",version:"3.0.0",sidebar_label:"connectWifi",sidebar:"version-3.0.0/API",previous:{title:"Taro.getConnectedWifi(option)",permalink:"/taro/docs/apis/device/wifi/getConnectedWifi"},next:{title:"WifiInfo",permalink:"/taro/docs/apis/device/wifi/WifiInfo"}},a=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:a};function d(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u8fde\u63a5 Wi-Fi\u3002\u82e5\u5df2\u77e5 Wi-Fi \u4fe1\u606f\uff0c\u53ef\u4ee5\u76f4\u63a5\u5229\u7528\u8be5\u63a5\u53e3\u8fde\u63a5\u3002\u4ec5 Android \u4e0e iOS 11 \u4ee5\u4e0a\u7248\u672c\u652f\u6301\u3002"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.connectWifi.html"}),"\u53c2\u8003\u6587\u6863"))),Object(i.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<WifiError>\n")),Object(i.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(i.b)("h3",{id:"option"},"Option"),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"\u53c2\u6570"),Object(i.b)("th",null,"\u7c7b\u578b"),Object(i.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(i.b)("th",null,"\u8bf4\u660e"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,"SSID"),Object(i.b)("td",null,Object(i.b)("code",null,"string")),Object(i.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(i.b)("td",null,"Wi-Fi \u8bbe\u5907 SSID")),Object(i.b)("tr",null,Object(i.b)("td",null,"password"),Object(i.b)("td",null,Object(i.b)("code",null,"string")),Object(i.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(i.b)("td",null,"Wi-Fi \u8bbe\u5907\u5bc6\u7801")),Object(i.b)("tr",null,Object(i.b)("td",null,"BSSID"),Object(i.b)("td",null,Object(i.b)("code",null,"string")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"Wi-Fi \u8bbe\u5907 BSSID")),Object(i.b)("tr",null,Object(i.b)("td",null,"complete"),Object(i.b)("td",null,Object(i.b)("code",null,"(res: WifiError) => void")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(i.b)("tr",null,Object(i.b)("td",null,"fail"),Object(i.b)("td",null,Object(i.b)("code",null,"(res: WifiError) => void")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(i.b)("tr",null,Object(i.b)("td",null,"success"),Object(i.b)("td",null,Object(i.b)("code",null,"(res: WifiError) => void")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(i.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.connectWifi({\n  SSID: '',\n  BSSID: '',\n  success: function (res) {\n    console.log(res.errMsg)\n  }\n})\n")),Object(i.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.connectWifi"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0},1783:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),c=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),d=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=d(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,j=u["".concat(b,".").concat(p)]||u[p]||O[p]||i;return n?c.a.createElement(j,l({ref:t},o,{components:n})):c.a.createElement(j,l({ref:t},o))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,b=new Array(i);b[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var o=2;o<i;o++)b[o]=n[o];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);