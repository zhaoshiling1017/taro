(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{1716:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return d}));var b=a(0),r=a.n(b);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,b)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e){if(null==t)return{};var a,b,r=function(t,e){if(null==t)return{};var a,b,r={},n=Object.keys(t);for(b=0;b<n.length;b++)a=n[b],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(b=0;b<n.length;b++)a=n[b],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var j=r.a.createContext({}),o=function(t){var e=r.a.useContext(j),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=o(t.components);return r.a.createElement(j.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var a=t.components,b=t.mdxType,n=t.originalType,c=t.parentName,j=O(t,["components","mdxType","originalType","parentName"]),p=o(a),m=b,d=p["".concat(c,".").concat(m)]||p[m]||i[m]||n;return a?r.a.createElement(d,l(l({ref:e},j),{},{components:a})):r.a.createElement(d,l({ref:e},j))}));function d(t,e){var a=arguments,b=e&&e.mdxType;if("string"==typeof t||b){var n=a.length,c=new Array(n);c[0]=m;var l={};for(var O in e)hasOwnProperty.call(e,O)&&(l[O]=e[O]);l.originalType=t,l.mdxType="string"==typeof t?t:b,c[1]=l;for(var j=2;j<n;j++)c[j]=a[j];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},693:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return l})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return o}));var b=a(2),r=a(6),n=(a(0),a(1716)),c={title:"SocketTask",sidebar_label:"SocketTask"},l={unversionedId:"apis/network/socket/SocketTask",id:"version-1.3.45/apis/network/socket/SocketTask",isDocsHomePage:!1,title:"SocketTask",description:"WebSocket \u4efb\u52a1\uff0c\u53ef\u901a\u8fc7 wx.connectSocket() \u63a5\u53e3\u521b\u5efa\u8fd4\u56de\u3002",source:"@site/versioned_docs/version-1.3.45/apis/network/socket/SocketTask.md",slug:"/apis/network/socket/SocketTask",permalink:"/taro/docs/1.3.45/apis/network/socket/SocketTask",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.45/apis/network/socket/SocketTask.md",version:"1.3.45",sidebar_label:"SocketTask",sidebar:"version-1.3.45/API",previous:{title:"Taro.onSocketError",permalink:"/taro/docs/1.3.45/apis/network/socket/onSocketError"},next:{title:"Taro.chooseAddress(OBJECT)",permalink:"/taro/docs/1.3.45/apis/open-api/address/chooseAddress"}},O=[{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],j={rightToc:O};function o(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(n.b)("wrapper",Object(b.a)({},j,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"WebSocket \u4efb\u52a1\uff0c\u53ef\u901a\u8fc7 ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/taro/docs/1.3.45/apis/network/socket/connectSocket"}),"wx.connectSocket()")," \u63a5\u53e3\u521b\u5efa\u8fd4\u56de\u3002"),Object(n.b)("p",null,"\u5c5e\u6027"),Object(n.b)("p",null,"socketTask.readyState: WebSocket \u5f53\u524d\u7684\u8fde\u63a5\u72b6\u6001\u3002"),Object(n.b)("p",null,"socketTask.CONNECTING: WebSocket \u72b6\u6001\u503c\uff1a\u8fde\u63a5\u4e2d\u3002"),Object(n.b)("p",null,"socketTask.OPEN: WebSocket \u72b6\u6001\u503c\uff1a\u5df2\u8fde\u63a5\u3002"),Object(n.b)("p",null,"socketTask.CLOSING: WebSocket \u72b6\u6001\u503c\uff1a\u5173\u95ed\u4e2d\u3002"),Object(n.b)("p",null,"socketTask.CLOSED: WebSocket \u72b6\u6001\u503c\uff1a\u5df2\u5173\u95ed\u3002"),Object(n.b)("p",null,"socketTask.ws: \u6d4f\u89c8\u5668 WebSocket \u5b9e\u4f8b\u3002\uff08",Object(n.b)("strong",{parentName:"p"},"H5 \u7aef\u72ec\u6709"),"\uff09"),Object(n.b)("p",null,"\u65b9\u6cd5"),Object(n.b)("p",null,"SocketTask.send(OBJECT)"),Object(n.b)("p",null,"\u901a\u8fc7 WebSocket \u8fde\u63a5\u53d1\u9001\u6570\u636e\u3002"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"data"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"String/ArrayBuffer"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u662f"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u9700\u8981\u53d1\u9001\u7684\u5185\u5bb9")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"success"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Function"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"fail"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Function"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"complete"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Function"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(n.b)("p",null,"SocketTask.close(OBJECT)"),Object(n.b)("p",null,"\u5173\u95ed WebSocket \u8fde\u63a5\u3002"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"code"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4e00\u4e2a\u6570\u5b57\u503c\u8868\u793a\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002\u5982\u679c\u8fd9\u4e2a\u53c2\u6570\u6ca1\u6709\u88ab\u6307\u5b9a\uff0c\u9ed8\u8ba4\u7684\u53d6\u503c\u662f 1000 \uff08\u8868\u793a\u6b63\u5e38\u8fde\u63a5\u5173\u95ed\uff09")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"reason"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4e00\u4e2a\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"success"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Function"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"fail"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Function"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"complete"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Function"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(n.b)("p",null,"SocketTask.onOpen(CALLBACK)"),Object(n.b)("p",null,"\u76d1\u542c WebSocket \u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6\u3002"),Object(n.b)("p",null,"SocketTask.onClose(CALLBACK)"),Object(n.b)("p",null,"\u76d1\u542c WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6\u3002"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"CALLBACK \u8fd4\u56de\u53c2\u6570")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"code"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"reason"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0")))),Object(n.b)("p",null,"SocketTask.onError(CALLBACK)"),Object(n.b)("p",null,"\u76d1\u542c WebSocket \u9519\u8bef\u3002"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"CALLBACK \u8fd4\u56de\u53c2\u6570")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"errMsg"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u9519\u8bef\u4fe1\u606f")))),Object(n.b)("p",null,"SocketTask.onMessage(CALLBACK)"),Object(n.b)("p",null,"\u76d1\u542c WebSocket \u63a5\u53d7\u5230\u670d\u52a1\u5668\u7684\u6d88\u606f\u4e8b\u4ef6\u3002"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"CALLBACK \u8fd4\u56de\u53c2\u6570")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"data"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"String/ArrayBuffer"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6d88\u606f")))),Object(n.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"SocketTask"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}o.isMDXComponent=!0}}]);