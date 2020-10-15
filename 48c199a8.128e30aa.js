(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{1716:function(t,e,b){"use strict";b.d(e,"a",(function(){return u})),b.d(e,"b",(function(){return m}));var l=b(0),a=b.n(l);function c(t,e,b){return e in t?Object.defineProperty(t,e,{value:b,enumerable:!0,configurable:!0,writable:!0}):t[e]=b,t}function n(t,e){var b=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),b.push.apply(b,l)}return b}function r(t){for(var e=1;e<arguments.length;e++){var b=null!=arguments[e]?arguments[e]:{};e%2?n(Object(b),!0).forEach((function(e){c(t,e,b[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(b)):n(Object(b)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(b,e))}))}return t}function O(t,e){if(null==t)return{};var b,l,a=function(t,e){if(null==t)return{};var b,l,a={},c=Object.keys(t);for(l=0;l<c.length;l++)b=c[l],e.indexOf(b)>=0||(a[b]=t[b]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(l=0;l<c.length;l++)b=c[l],e.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(t,b)&&(a[b]=t[b])}return a}var j=a.a.createContext({}),o=function(t){var e=a.a.useContext(j),b=e;return t&&(b="function"==typeof t?t(e):r(r({},e),t)),b},u=function(t){var e=o(t.components);return a.a.createElement(j.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},i=a.a.forwardRef((function(t,e){var b=t.components,l=t.mdxType,c=t.originalType,n=t.parentName,j=O(t,["components","mdxType","originalType","parentName"]),u=o(b),i=l,m=u["".concat(n,".").concat(i)]||u[i]||d[i]||c;return b?a.a.createElement(m,r(r({ref:e},j),{},{components:b})):a.a.createElement(m,r({ref:e},j))}));function m(t,e){var b=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var c=b.length,n=new Array(c);n[0]=i;var r={};for(var O in e)hasOwnProperty.call(e,O)&&(r[O]=e[O]);r.originalType=t,r.mdxType="string"==typeof t?t:l,n[1]=r;for(var j=2;j<c;j++)n[j]=b[j];return a.a.createElement.apply(null,n)}return a.a.createElement.apply(null,b)}i.displayName="MDXCreateElement"},510:function(t,e,b){"use strict";b.r(e),b.d(e,"frontMatter",(function(){return n})),b.d(e,"metadata",(function(){return r})),b.d(e,"rightToc",(function(){return O})),b.d(e,"default",(function(){return o}));var l=b(2),a=b(6),c=(b(0),b(1716)),n={title:"CameraContext",sidebar_label:"CameraContext"},r={unversionedId:"apis/media/camera/CameraContext",id:"version-3.0.14/apis/media/camera/CameraContext",isDocsHomePage:!1,title:"CameraContext",description:"\u53c2\u8003\u6587\u6863",source:"@site/versioned_docs/version-3.0.14/apis/media/camera/CameraContext.md",slug:"/apis/media/camera/CameraContext",permalink:"/taro/docs/apis/media/camera/CameraContext",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.14/apis/media/camera/CameraContext.md",version:"3.0.14",sidebar_label:"CameraContext",sidebar:"version-3.0.14/API",previous:{title:"Taro.createCameraContext()",permalink:"/taro/docs/apis/media/camera/createCameraContext"},next:{title:"EditorContext",permalink:"/taro/docs/apis/media/editor/EditorContext"}},O=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"startRecord",id:"startrecord",children:[]},{value:"stopRecord",id:"stoprecord",children:[]},{value:"takePhoto",id:"takephoto",children:[]},{value:"onCameraFrame",id:"oncameraframe",children:[]}]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"StartRecordOption",id:"startrecordoption",children:[]},{value:"StartRecordTimeoutCallback",id:"startrecordtimeoutcallback",children:[]},{value:"StartRecordTimeoutCallbackResult",id:"startrecordtimeoutcallbackresult",children:[]},{value:"StopRecordOption",id:"stoprecordoption",children:[]},{value:"StopRecordSuccessCallbackResult",id:"stoprecordsuccesscallbackresult",children:[]},{value:"TakePhotoOption",id:"takephotooption",children:[]},{value:"TakePhotoSuccessCallbackResult",id:"takephotosuccesscallbackresult",children:[]},{value:"OnCameraFrameCallback",id:"oncameraframecallback",children:[]},{value:"OnCameraFrameCallbackResult",id:"oncameraframecallbackresult",children:[]},{value:"quality",id:"quality",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-4",children:[]}],j={rightToc:O};function o(t){var e=t.components,b=Object(a.a)(t,["components"]);return Object(c.b)("wrapper",Object(l.a)({},j,b,{components:e,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.b)("h3",{id:"startrecord"},"startRecord"),Object(c.b)("p",null,"\u5f00\u59cb\u5f55\u50cf"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.startRecord.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option: StartRecordOption) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"option"),Object(c.b)("td",null,Object(c.b)("code",null,"StartRecordOption"))))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"CameraContext.startRecord"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"stoprecord"},"stopRecord"),Object(c.b)("p",null,"\u7ed3\u675f\u5f55\u50cf"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.stopRecord.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: StopRecordOption) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"option"),Object(c.b)("td",null,Object(c.b)("code",null,"StopRecordOption"))))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"CameraContext.stopRecord"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"takephoto"},"takePhoto"),Object(c.b)("p",null,"\u62cd\u6444\u7167\u7247"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.takePhoto.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option: TakePhotoOption) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"option"),Object(c.b)("td",null,Object(c.b)("code",null,"TakePhotoOption"))))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"CameraContext.takePhoto"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"oncameraframe"},"onCameraFrame"),Object(c.b)("p",null,"\u83b7\u53d6 Camera \u5b9e\u65f6\u5e27\u6570\u636e"),Object(c.b)("hr",null),Object(c.b)("p",null,"\u6ce8\uff1a \u4f7f\u7528\u8be5\u63a5\u53e3\u9700\u540c\u65f6\u5728 ",Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"}),"camera")," \u7ec4\u4ef6\u5c5e\u6027\u4e2d\u6307\u5b9a frame-size\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.onCameraFrame.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OnCameraFrameCallback) => CameraFrameListener\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"OnCameraFrameCallback")),Object(c.b)("td",null,"\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"const context = wx.createCameraContext()\nconst listener = context.onCameraFrame((frame) => {\n  console.log(frame.data instanceof ArrayBuffer, frame.width, frame.height)\n})\nlistener.start()\n")),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-3"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"CameraContext.onCameraFrame"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"startrecordoption"},"StartRecordOption"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"timeoutCallback"),Object(c.b)("td",null,Object(c.b)("code",null,"StartRecordTimeoutCallback")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8d85\u8fc730s\u6216\u9875\u9762 ",Object(c.b)("code",null,"onHide")," \u65f6\u4f1a\u7ed3\u675f\u5f55\u50cf")))),Object(c.b)("h3",{id:"startrecordtimeoutcallback"},"StartRecordTimeoutCallback"),Object(c.b)("p",null,"\u8d85\u8fc730s\u6216\u9875\u9762 ",Object(c.b)("inlineCode",{parentName:"p"},"onHide")," \u65f6\u4f1a\u7ed3\u675f\u5f55\u50cf"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(result: StartRecordTimeoutCallbackResult) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"result"),Object(c.b)("td",null,Object(c.b)("code",null,"StartRecordTimeoutCallbackResult"))))),Object(c.b)("h3",{id:"startrecordtimeoutcallbackresult"},"StartRecordTimeoutCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"tempThumbPath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u5c01\u9762\u56fe\u7247\u6587\u4ef6\u7684\u4e34\u65f6\u8def\u5f84")),Object(c.b)("tr",null,Object(c.b)("td",null,"tempVideoPath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u89c6\u9891\u7684\u6587\u4ef6\u7684\u4e34\u65f6\u8def\u5f84")))),Object(c.b)("h3",{id:"stoprecordoption"},"StopRecordOption"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: StopRecordSuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"stoprecordsuccesscallbackresult"},"StopRecordSuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"tempThumbPath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u5c01\u9762\u56fe\u7247\u6587\u4ef6\u7684\u4e34\u65f6\u8def\u5f84")),Object(c.b)("tr",null,Object(c.b)("td",null,"tempVideoPath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u89c6\u9891\u7684\u6587\u4ef6\u7684\u4e34\u65f6\u8def\u5f84")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.b)("h3",{id:"takephotooption"},"TakePhotoOption"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"quality"),Object(c.b)("td",null,Object(c.b)("code",null,'"high" | "normal" | "low"')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6210\u50cf\u8d28\u91cf")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: TakePhotoSuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"takephotosuccesscallbackresult"},"TakePhotoSuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"tempImagePath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u7167\u7247\u6587\u4ef6\u7684\u4e34\u65f6\u8def\u5f84\uff0c\u5b89\u5353\u662fjpg\u56fe\u7247\u683c\u5f0f\uff0cios\u662fpng")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.b)("h3",{id:"oncameraframecallback"},"OnCameraFrameCallback"),Object(c.b)("p",null,"\u56de\u8c03\u51fd\u6570"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(result: OnCameraFrameCallbackResult) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"result"),Object(c.b)("td",null,Object(c.b)("code",null,"OnCameraFrameCallbackResult"))))),Object(c.b)("h3",{id:"oncameraframecallbackresult"},"OnCameraFrameCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"data"),Object(c.b)("td",null,Object(c.b)("code",null,"ArrayBuffer")),Object(c.b)("td",null,"\u56fe\u50cf\u50cf\u7d20\u70b9\u6570\u636e\uff0c\u4e00\u7ef4\u6570\u7ec4\uff0c\u6bcf\u56db\u9879\u8868\u793a\u4e00\u4e2a\u50cf\u7d20\u70b9\u7684 rgba")),Object(c.b)("tr",null,Object(c.b)("td",null,"height"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u56fe\u50cf\u6570\u636e\u77e9\u5f62\u7684\u9ad8\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"width"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u56fe\u50cf\u6570\u636e\u77e9\u5f62\u7684\u5bbd\u5ea6")))),Object(c.b)("h3",{id:"quality"},"quality"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"high"),Object(c.b)("td",null,"\u9ad8\u8d28\u91cf")),Object(c.b)("tr",null,Object(c.b)("td",null,"normal"),Object(c.b)("td",null,"\u666e\u901a\u8d28\u91cf")),Object(c.b)("tr",null,Object(c.b)("td",null,"low"),Object(c.b)("td",null,"\u4f4e\u8d28\u91cf")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-4"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"CameraContext.startRecord"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"CameraContext.stopRecord"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"CameraContext.takePhoto"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"CameraContext.onCameraFrame"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}))))))}o.isMDXComponent=!0}}]);