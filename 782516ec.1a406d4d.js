(window.webpackJsonp=window.webpackJsonp||[]).push([[818],{1783:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var r=n(0),c=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},s=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,p=s["".concat(b,".").concat(d)]||s[d]||O[d]||l;return n?c.a.createElement(p,a({ref:t},i,{components:n})):c.a.createElement(p,a({ref:t},i))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,b=new Array(l);b[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,b[1]=a;for(var i=2;i<l;i++)b[i]=n[i];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},958:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(1),c=n(9),l=(n(0),n(1783)),b={title:"Taro.getUserInfo(option)",sidebar_label:"getUserInfo"},a={id:"apis/open-api/user-info/getUserInfo",title:"Taro.getUserInfo(option)",description:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002",source:"@site/docs/apis/open-api/user-info/getUserInfo.md",permalink:"/taro/docs/next/apis/open-api/user-info/getUserInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/open-api/user-info/getUserInfo.md",version:"next",sidebar_label:"getUserInfo",sidebar:"API",previous:{title:"Taro.getAccountInfoSync()",permalink:"/taro/docs/next/apis/open-api/account/getAccountInfoSync"},next:{title:"UserInfo",permalink:"/taro/docs/next/apis/open-api/user-info/UserInfo"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u63a5\u53e3\u8c03\u6574\u8bf4\u660e"),"\n\u5728\u7528\u6237\u672a\u6388\u6743\u8fc7\u7684\u60c5\u51b5\u4e0b\u8c03\u7528\u6b64\u63a5\u53e3\uff0c\u5c06\u4e0d\u518d\u51fa\u73b0\u6388\u6743\u5f39\u7a97\uff0c\u4f1a\u76f4\u63a5\u8fdb\u5165 fail \u56de\u8c03\uff08\u8be6\u89c1",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/community/develop/doc/0000a26e1aca6012e896a517556c01"}),"\u300a\u516c\u544a\u300b"),")\u3002\u5728\u7528\u6237\u5df2\u6388\u6743\u7684\u60c5\u51b5\u4e0b\u8c03\u7528\u6b64\u63a5\u53e3\uff0c\u53ef\u6210\u529f\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"lang"),Object(l.b)("td",null,Object(l.b)("code",null,'"en" | "zh_CN" | "zh_TW"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u663e\u793a\u7528\u6237\u4fe1\u606f\u7684\u8bed\u8a00")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"withCredentials"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u662f\u5426\u5e26\u4e0a\u767b\u5f55\u6001\u4fe1\u606f\u3002\u5f53 withCredentials \u4e3a true \u65f6\uff0c\u8981\u6c42\u6b64\u524d\u6709\u8c03\u7528\u8fc7 Taro.login \u4e14\u767b\u5f55\u6001\u5c1a\u672a\u8fc7\u671f\uff0c\u6b64\u65f6\u8fd4\u56de\u7684\u6570\u636e\u4f1a\u5305\u542b encryptedData, iv \u7b49\u654f\u611f\u4fe1\u606f\uff1b\u5f53 withCredentials \u4e3a false \u65f6\uff0c\u4e0d\u8981\u6c42\u6709\u767b\u5f55\u6001\uff0c\u8fd4\u56de\u7684\u6570\u636e\u4e0d\u5305\u542b encryptedData, iv \u7b49\u654f\u611f\u4fe1\u606f\u3002")))),Object(l.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"cloudID"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u654f\u611f\u6570\u636e\u5bf9\u5e94\u7684\u4e91 ID\uff0c\u5f00\u901a",Object(l.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html"},"\u4e91\u5f00\u53d1"),"\u7684\u5c0f\u7a0b\u5e8f\u624d\u4f1a\u8fd4\u56de\uff0c\u53ef\u901a\u8fc7\u4e91\u8c03\u7528\u76f4\u63a5\u83b7\u53d6\u5f00\u653e\u6570\u636e\uff0c\u8be6\u7ec6\u89c1",Object(l.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud"},"\u4e91\u8c03\u7528\u76f4\u63a5\u83b7\u53d6\u5f00\u653e\u6570\u636e"))),Object(l.b)("tr",null,Object(l.b)("td",null,"encryptedData"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u5305\u62ec\u654f\u611f\u6570\u636e\u5728\u5185\u7684\u5b8c\u6574\u7528\u6237\u4fe1\u606f\u7684\u52a0\u5bc6\u6570\u636e\uff0c\u8be6\u89c1 ",Object(l.b)("a",{href:"(signature#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95)"},"\u7528\u6237\u6570\u636e\u7684\u7b7e\u540d\u9a8c\u8bc1\u548c\u52a0\u89e3\u5bc6"))),Object(l.b)("tr",null,Object(l.b)("td",null,"iv"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u52a0\u5bc6\u7b97\u6cd5\u7684\u521d\u59cb\u5411\u91cf\uff0c\u8be6\u89c1 ",Object(l.b)("a",{href:"(signature#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95)"},"\u7528\u6237\u6570\u636e\u7684\u7b7e\u540d\u9a8c\u8bc1\u548c\u52a0\u89e3\u5bc6"))),Object(l.b)("tr",null,Object(l.b)("td",null,"rawData"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u4e0d\u5305\u62ec\u654f\u611f\u4fe1\u606f\u7684\u539f\u59cb\u6570\u636e\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u8ba1\u7b97\u7b7e\u540d")),Object(l.b)("tr",null,Object(l.b)("td",null,"signature"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u4f7f\u7528 sha1( rawData + sessionkey ) \u5f97\u5230\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u6821\u9a8c\u7528\u6237\u4fe1\u606f\uff0c\u8be6\u89c1 ",Object(l.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html"},"\u7528\u6237\u6570\u636e\u7684\u7b7e\u540d\u9a8c\u8bc1\u548c\u52a0\u89e3\u5bc6"))),Object(l.b)("tr",null,Object(l.b)("td",null,"userInfo"),Object(l.b)("td",null,Object(l.b)("code",null,"UserInfo")),Object(l.b)("td",null,"\u7528\u6237\u4fe1\u606f\u5bf9\u8c61\uff0c\u4e0d\u5305\u542b openid \u7b49\u654f\u611f\u4fe1\u606f")),Object(l.b)("tr",null,Object(l.b)("td",null,"errMsg"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"// \u5fc5\u987b\u662f\u5728\u7528\u6237\u5df2\u7ecf\u6388\u6743\u7684\u60c5\u51b5\u4e0b\u8c03\u7528\nTaro.getUserInfo({\n  success: function(res) {\n    var userInfo = res.userInfo\n    var nickName = userInfo.nickName\n    var avatarUrl = userInfo.avatarUrl\n    var gender = userInfo.gender //\u6027\u522b 0\uff1a\u672a\u77e5\u30011\uff1a\u7537\u30012\uff1a\u5973\n    var province = userInfo.province\n    var city = userInfo.city\n    var country = userInfo.country\n  }\n})\n")),Object(l.b)("p",null,"\u654f\u611f\u6570\u636e\u6709\u4e24\u79cd\u83b7\u53d6\u65b9\u5f0f\uff0c\u4e00\u662f\u4f7f\u7528 ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"(open-ability/signature#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95)"}),"\u52a0\u5bc6\u6570\u636e\u89e3\u5bc6\u7b97\u6cd5")," \u3002\n\u83b7\u53d6\u5f97\u5230\u7684\u5f00\u653e\u6570\u636e\u4e3a\u4ee5\u4e0b json \u7ed3\u6784\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "openId": "OPENID",\n  "nickName": "NICKNAME",\n  "gender": GENDER,\n  "city": "CITY",\n  "province": "PROVINCE",\n  "country": "COUNTRY",\n  "avatarUrl": "AVATARURL",\n  "unionId": "UNIONID",\n  "watermark": {\n    "appid":"APPID",\n    "timestamp": TIMESTAMP\n  }\n}\n')),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.getUserInfo"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);