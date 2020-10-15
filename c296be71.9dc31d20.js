(window.webpackJsonp=window.webpackJsonp||[]).push([[1274],{1328:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return u}));var c=n(2),r=n(6),b=(n(0),n(1716)),l={title:"Taro.createBLEConnection(option)",sidebar_label:"createBLEConnection"},o={unversionedId:"apis/device/ble/createBLEConnection",id:"apis/device/ble/createBLEConnection",isDocsHomePage:!1,title:"Taro.createBLEConnection(option)",description:"\u8fde\u63a5\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u3002",source:"@site/docs/apis/device/ble/createBLEConnection.md",slug:"/apis/device/ble/createBLEConnection",permalink:"/taro/docs/next/apis/device/ble/createBLEConnection",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/ble/createBLEConnection.md",version:"current",sidebar_label:"createBLEConnection",sidebar:"API",previous:{title:"Taro.getBLEDeviceCharacteristics(option)",permalink:"/taro/docs/next/apis/device/ble/getBLEDeviceCharacteristics"},next:{title:"Taro.closeBLEConnection(option)",permalink:"/taro/docs/next/apis/device/ble/closeBLEConnection"}},a=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Promised",id:"promised",children:[]},{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:a};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(c.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u8fde\u63a5\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u3002"),Object(b.b)("p",null,"\u82e5\u5c0f\u7a0b\u5e8f\u5728\u4e4b\u524d\u5df2\u6709\u641c\u7d22\u8fc7\u67d0\u4e2a\u84dd\u7259\u8bbe\u5907\uff0c\u5e76\u6210\u529f\u5efa\u7acb\u8fde\u63a5\uff0c\u53ef\u76f4\u63a5\u4f20\u5165\u4e4b\u524d\u641c\u7d22\u83b7\u53d6\u7684 deviceId \u76f4\u63a5\u5c1d\u8bd5\u8fde\u63a5\u8be5\u8bbe\u5907\uff0c\u65e0\u9700\u8fdb\u884c\u641c\u7d22\u64cd\u4f5c\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u8bf7\u4fdd\u8bc1\u5c3d\u91cf\u6210\u5bf9\u7684\u8c03\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"createBLEConnection")," \u548c ",Object(b.b)("inlineCode",{parentName:"li"},"closeBLEConnection")," \u63a5\u53e3\u3002\u5b89\u5353\u5982\u679c\u591a\u6b21\u8c03\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"createBLEConnection")," \u521b\u5efa\u8fde\u63a5\uff0c\u6709\u53ef\u80fd\u5bfc\u81f4\u7cfb\u7edf\u6301\u6709\u540c\u4e00\u8bbe\u5907\u591a\u4e2a\u8fde\u63a5\u7684\u5b9e\u4f8b\uff0c\u5bfc\u81f4\u8c03\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"closeBLEConnection")," \u7684\u65f6\u5019\u5e76\u4e0d\u80fd\u771f\u6b63\u7684\u65ad\u5f00\u4e0e\u8bbe\u5907\u7684\u8fde\u63a5\u3002"),Object(b.b)("li",{parentName:"ul"},"\u84dd\u7259\u8fde\u63a5\u968f\u65f6\u53ef\u80fd\u65ad\u5f00\uff0c\u5efa\u8bae\u76d1\u542c Taro.onBLEConnectionStateChange \u56de\u8c03\u4e8b\u4ef6\uff0c\u5f53\u84dd\u7259\u8bbe\u5907\u65ad\u5f00\u65f6\u6309\u9700\u6267\u884c\u91cd\u8fde\u64cd\u4f5c"),Object(b.b)("li",{parentName:"ul"},"\u82e5\u5bf9\u672a\u8fde\u63a5\u7684\u8bbe\u5907\u6216\u5df2\u65ad\u5f00\u8fde\u63a5\u7684\u8bbe\u5907\u8c03\u7528\u6570\u636e\u8bfb\u5199\u64cd\u4f5c\u7684\u63a5\u53e3\uff0c\u4f1a\u8fd4\u56de 10006 \u9519\u8bef\uff0c\u5efa\u8bae\u8fdb\u884c\u91cd\u8fde\u64cd\u4f5c\u3002")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.createBLEConnection.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<Promised>\n")),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"promised"},"Promised"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"errMsg"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),Object(b.b)("h3",{id:"option"},"Option"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"deviceId"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(b.b)("td",null,"\u7528\u4e8e\u533a\u5206\u8bbe\u5907\u7684 id")),Object(b.b)("tr",null,Object(b.b)("td",null,"complete"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: BluetoothError) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(b.b)("tr",null,Object(b.b)("td",null,"fail"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: BluetoothError) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"success"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: BluetoothError) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"timeout"),Object(b.b)("td",null,Object(b.b)("code",null,"number")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\uff0c\u4e0d\u586b\u8868\u793a\u4e0d\u4f1a\u8d85\u65f6")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.createBLEConnection({\n  // \u8fd9\u91cc\u7684 deviceId \u9700\u8981\u5df2\u7ecf\u901a\u8fc7 createBLEConnection \u4e0e\u5bf9\u5e94\u8bbe\u5907\u5efa\u7acb\u94fe\u63a5\n  deviceId,\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"Taro.createBLEConnection"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},1716:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var c=n(0),r=n.n(c);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},b=Object.keys(e);for(c=0;c<b.length;c++)n=b[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(c=0;c<b.length;c++)n=b[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,b=e.originalType,l=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),d=u(n),p=c,j=d["".concat(l,".").concat(p)]||d[p]||O[p]||b;return n?r.a.createElement(j,o(o({ref:t},i),{},{components:n})):r.a.createElement(j,o({ref:t},i))}));function j(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var b=n.length,l=new Array(b);l[0]=p;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:c,l[1]=o;for(var i=2;i<b;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);