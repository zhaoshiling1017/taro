(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1716:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return j}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),p=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,j=s["".concat(b,".").concat(d)]||s[d]||u[d]||o;return t?a.a.createElement(j,c(c({ref:n},i),{},{components:t})):a.a.createElement(j,c({ref:n},i))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,b=new Array(o);b[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var i=2;i<o;i++)b[i]=t[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},187:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),o=(t(0),t(1716)),b={title:"\u5355\u6b65\u8c03\u6d4b\u914d\u7f6e"},c={unversionedId:"debug-config",id:"version-3.0.14/debug-config",isDocsHomePage:!1,title:"\u5355\u6b65\u8c03\u6d4b\u914d\u7f6e",description:"\u901a\u8fc7\u672c\u8eab VSCode \u63d0\u4f9b\u7684\u8de8\u5e73\u53f0\u4ee3\u7801\u5355\u6b65\u8c03\u6d4b\u80fd\u529b\uff0c\u80fd\u591f\u6781\u5927\u63d0\u5347\u57fa\u4e8e Taro \u5f00\u53d1\u6846\u67b6\u7684\u5e94\u7528\u5f00\u53d1\u901f\u5ea6\uff0c\u56e0\u5176\u4ed6\u5e73\u53f0\u5df2\u6709\u6bd4\u8f83\u6210\u719f\u7684\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528\uff0c\u7740\u91cd\u964d\u4f4e Windows \u5e73\u53f0\u914d\u7f6e\u590d\u6742\u5ea6\u3002",source:"@site/versioned_docs/version-3.0.14/debug-config.md",slug:"/debug-config",permalink:"/taro/docs/debug-config",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.14/debug-config.md",version:"3.0.14",sidebar:"version-3.0.14/docs",previous:{title:"\u63d2\u4ef6\u529f\u80fd",permalink:"/taro/docs/plugin"},next:{title:"Hooks",permalink:"/taro/docs/hooks"}},l=[{value:"\u4e00\u3001\u5f00\u53d1\u73af\u5883\u642d\u5efa",id:"\u4e00\u3001\u5f00\u53d1\u73af\u5883\u642d\u5efa",children:[]},{value:"\u4e8c\u3001\u8c03\u8bd5 CLI",id:"\u4e8c\u3001\u8c03\u8bd5-cli",children:[]}],i={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u901a\u8fc7\u672c\u8eab ",Object(o.b)("inlineCode",{parentName:"p"},"VSCode")," \u63d0\u4f9b\u7684\u8de8\u5e73\u53f0\u4ee3\u7801\u5355\u6b65\u8c03\u6d4b\u80fd\u529b\uff0c\u80fd\u591f\u6781\u5927\u63d0\u5347\u57fa\u4e8e ",Object(o.b)("inlineCode",{parentName:"p"},"Taro")," \u5f00\u53d1\u6846\u67b6\u7684\u5e94\u7528\u5f00\u53d1\u901f\u5ea6\uff0c\u56e0\u5176\u4ed6\u5e73\u53f0\u5df2\u6709\u6bd4\u8f83\u6210\u719f\u7684\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528\uff0c\u7740\u91cd\u964d\u4f4e Windows \u5e73\u53f0\u914d\u7f6e\u590d\u6742\u5ea6\u3002")),Object(o.b)("h2",{id:"\u4e00\u3001\u5f00\u53d1\u73af\u5883\u642d\u5efa"},"\u4e00\u3001\u5f00\u53d1\u73af\u5883\u642d\u5efa"),Object(o.b)("p",null,"\u9996\u5148\u51c6\u5907 ",Object(o.b)("inlineCode",{parentName:"p"},"Taro")," \u5728 Windows \u4e0b\u7684\u57fa\u7840\u5f00\u53d1\u73af\u5883\uff0c\u8be6\u60c5\u5982\u4e0b(\u5df2\u6709\u5f00\u53d1\u73af\u5883\u53ef\u7565\u8fc7\uff09\uff1a"),Object(o.b)("h4",{id:"1-\u5b89\u88c5-nodejs"},"1. \u5b89\u88c5 Node.js"),Object(o.b)("p",null,"\u5efa\u8bae\u5b89\u88c5 ",Object(o.b)("inlineCode",{parentName:"p"},"10.15")," \u4ee5\u4e0a\u7248\u672c\uff0c\u5b98\u65b9\u4e0b\u8f7d\u5730\u5740\uff1a",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi",title:" node.js"}),"Node.js")),Object(o.b)("h4",{id:"2-\u5b89\u88c5-vscode"},"2. \u5b89\u88c5 VSCode"),Object(o.b)("p",null,"\u5b89\u88c5\u5b8c\u6700\u65b0 ",Object(o.b)("inlineCode",{parentName:"p"},"VSCode")," \u540e\uff0c\u5efa\u8bae\u5b89\u88c5\u5982\u4e0b\u63d2\u4ef6:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ESlint")," \u2014 \u4ee3\u7801\u89c4\u8303"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TSlint")," \u2014 \u8bed\u6cd5\u68c0\u67e5")),Object(o.b)("h4",{id:"3-taro-\u6e90\u7801\u4e0b\u8f7d"},"3. Taro \u6e90\u7801\u4e0b\u8f7d"),Object(o.b)("p",null,"\u4e0b\u8f7d\u5730\u5740\uff1a",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NervJS/taro.git",title:"Taro"}),"Taro"),"\uff0c\u9ed8\u8ba4\u4e3a 2.x \u5206\u652f\uff0c\u82e5\u8981\u8c03\u8bd5 Taro Next\uff0c\u8bf7\u5148\u64a4\u6362\u5230 ",Object(o.b)("strong",{parentName:"p"},"next")," \u5206\u652f\u3002"),Object(o.b)("h4",{id:"4-\u5168\u5c40\u5b89\u88c5-node-sass-\u3001lerna-\u548c-rollup"},"4. \u5168\u5c40\u5b89\u88c5 Node-sass \u3001Lerna \u548c Rollup"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm i -g node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node_sass/\nyarn global add lerna\nyarn global add rollup\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Node-sass \u6bd4\u8f83\u7279\u6b8a\uff0c\u5efa\u8bae\u63d0\u524d\u8fdb\u884c\u5b89\u88c5\uff0c\u89c4\u907f\u53ef\u80fd\u51fa\u73b0\u7684\u5404\u79cd\u5f02\u5e38\u9519\u8bef\u3002")),Object(o.b)("h4",{id:"5-\u6e90\u7801\u4f9d\u8d56\u5b89\u88c5"},"5. \u6e90\u7801\u4f9d\u8d56\u5b89\u88c5"),Object(o.b)("p",null,"1.\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"VSCode")," \u6253\u5f00 ",Object(o.b)("inlineCode",{parentName:"p"},"Taro")," \u6e90\u7801\u76ee\u5f55\uff0c\u5728\u6839\u76ee\u5f55\u4e0b\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," \uff0c\u5b89\u88c5\u9879\u76ee\u6240\u9700\u4f9d\u8d56\u5e93\uff08\u9996\u6b21\u5b89\u88c5\u6240\u82b1\u65f6\u95f4\u8f83\u957f\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\uff09"),Object(o.b)("p",null,"2.\u5f85 ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," \u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"yarn run bootstrap")," \u4e3a\u5b50\u5305\u5b89\u88c5\u4f9d\u8d56"),Object(o.b)("p",null,"3.\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"yarn build")," \u7f16\u8bd1\u6240\u6709\u6a21\u5757"),Object(o.b)("h2",{id:"\u4e8c\u3001\u8c03\u8bd5-cli"},"\u4e8c\u3001\u8c03\u8bd5 CLI"),Object(o.b)("h4",{id:"1-\u914d\u7f6e-vscode-\u8c03\u8bd5\u53c2\u6570"},"1. \u914d\u7f6e VSCode \u8c03\u8bd5\u53c2\u6570"),Object(o.b)("p",null,"\u5728 VSCode \u4e2d\u6253\u5f00 Taro \u6e90\u7801\u6839\u76ee\u5f55\u7684 ",Object(o.b)("strong",{parentName:"p"},".vscode")," \u6587\u4ef6\u5939\uff0c\u7f16\u8f91 ",Object(o.b)("strong",{parentName:"p"},"launch.json"),"\u3002"),Object(o.b)("p",null,"launch.json \u6709\u4ee5\u4e0b\u9884\u8bbe\u914d\u7f6e\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  // ...\n  "configurations": [\n    //...\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "CLI debug",\n      "program": "${workspaceFolder}/packages/taro-cli/bin/taro",\n      // "cwd": "${project absolute path}",\n      // "args": [\n      //   "build",\n      //   "--type",\n      //   "weapp",\n      //   "--watch"\n      // ],\n      "skipFiles": [\n        "<node_internals>/**"\n      ]\n    }\n  ]\n}\n')),Object(o.b)("p",null,"\u4fee\u6539\u6b65\u9aa4\uff1a"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u4fee\u6539 ",Object(o.b)("strong",{parentName:"li"},"cwd")," \u9009\u9879\u4e3a\u9700\u8981\u8c03\u8bd5\u7684\u76ee\u6807\u5de5\u4f5c\u76ee\u5f55"),Object(o.b)("li",{parentName:"ol"},"\u4fee\u6539 args \u4e3a\u9700\u8981\u8c03\u8bd5\u7684\u547d\u4ee4\u53c2\u6570")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"launch.json \u7684\u8be6\u7ec6\u914d\u7f6e\u8bf7\u89c1 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"}),"VSCode \u6587\u6863"))),Object(o.b)("p",null,"\u4f8b\u5b50\uff1a"),Object(o.b)("h5",{id:"\u8c03\u8bd5-taro-build"},"\u8c03\u8bd5 taro-build"),Object(o.b)("p",null,"\u5047\u8bbe\u9700\u8981\u8c03\u8bd5 test \u9879\u76ee\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"taro build --weapp --watch")," \u547d\u4ee4\u3002"),Object(o.b)("p",null,"\u53ef\u4ee5\u8fd9\u6837\u914d\u7f6e launch.json\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  // ...\n  "configurations": [\n    //...\n    {\n      // ...\n      "cwd": "/Users/User/Desktop/test",\n      "args": [\n        "build",\n        "--type",\n        "weapp",\n        "--watch"\n      ]\n    }\n  ]\n}\n')),Object(o.b)("h5",{id:"\u8c03\u8bd5-taro-init"},"\u8c03\u8bd5 taro-init"),Object(o.b)("p",null,"\u5047\u8bbe\u9700\u8981\u8c03\u8bd5 ",Object(o.b)("inlineCode",{parentName:"p"},"taro init projectName")," \u547d\u4ee4\u3002"),Object(o.b)("p",null,"\u53ef\u4ee5\u8fd9\u6837\u914d\u7f6e launch.json\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  // ...\n  "configurations": [\n    //...\n    {\n      // ...\n      "cwd": "/Users/User/Desktop",\n      "args": [\n        "init",\n        "projectName"\n      ]\n    }\n  ]\n}\n')),Object(o.b)("h4",{id:"2-\u7f16\u8bd1\u5b50\u5305"},"2. \u7f16\u8bd1\u5b50\u5305"),Object(o.b)("p",null,"\u8c03\u8bd5\u67d0\u4e00\u4e2a\u5b50\u5305\u65f6\uff0c\u5982\u679c\u5e0c\u671b\u80fd\u8c03\u8bd5\u4fee\u6539\u540e\u7684\u4ee3\u7801\uff0c\u8bf7\u5148\u8fdb\u5165\u5bf9\u5e94\u5b50\u5305\u7684\u6839\u76ee\u5f55\u5f00\u542f watch \u6a21\u5f0f\u7f16\u8bd1\u3002"),Object(o.b)("p",null,"\u4f8b\u5982\u8c03\u8bd5 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/mini-runner"),"\uff0c\u5148\u8fdb\u5165 ",Object(o.b)("inlineCode",{parentName:"p"},"packages/mini-runner/"),"\uff0c\u7136\u540e\u5728\u6b64\u76ee\u5f55\u4e0b\u5bf9\u8fd0\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"npm run dev"),"\uff08\u5404\u5b50\u5305\u7f16\u8bd1\u547d\u4ee4\u53ef\u80fd\u6709\u6240\u4e0d\u540c\uff0c\u8be6\u60c5\u8bf7\u89c1\u5404\u5b50\u5305\u7684 ",Object(o.b)("strong",{parentName:"p"},"package.json"),"\uff09\u3002\u8fd9\u6837\u6211\u4eec\u5c31\u80fd\u5bf9\u6bcf\u6b21\u4fee\u6539\u540e\u7684\u4ee3\u7801\u8fdb\u884c\u8c03\u8bd5\u3002"),Object(o.b)("h4",{id:"3\u94fe\u63a5\u672a\u53d1\u5e03\u7684\u5e93"},"3.\u94fe\u63a5\u672a\u53d1\u5e03\u7684\u5e93"),Object(o.b)("p",null,"\u5982\u679c\u5f53\u524d\u5f00\u53d1\u7684\u5b50\u5305\u4f9d\u8d56\u4e8e\u5176\u5b83\u5b50\u5305\uff0c\u53ef\u4ee5\u628a\u5176\u5b83\u5b50\u5305 link \u8fc7\u6765\u4f7f\u7528\u3002",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./debug-config#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA"}),"\u5f00\u53d1\u73af\u5883\u642d\u5efa")," \u91cc\u4ecb\u7ecd\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"yarn run bootstrap")," \u547d\u4ee4\u5df2\u7ecf\u4e3a\u6240\u6709\u5b50\u5305\u521b\u5efa\u597d\u8f6f\u8fde\u63a5\u3002"),Object(o.b)("p",null,"\u5982\u679c\u9700\u8981\u4e3a\u5f53\u524d\u5b50\u5305\u589e\u52a0\u5176\u5b83\u5b50\u5305\u4f5c\u4e3a\u4f9d\u8d56\uff0c\u53ef\u4ee5\u5728 Taro \u6e90\u7801\u6839\u76ee\u5f55\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"lerna add [package] --scope=[target] [--dev]"),"\uff0c\u4e4b\u540e lerna \u4f1a\u81ea\u52a8\u521b\u5efa\u597d\u8f6f\u94fe\u3002"),Object(o.b)("p",null,"\u4f8b\u5982\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/cli")," \u589e\u52a0 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/webpack-runner")," \u4f5c\u4e3a devdependencies\uff1a"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"lerna add @tarojs/webpack-runner --scope=@tarojs/cli --dev")),Object(o.b)("p",null,"\u53e6\u5916\u5982\u679c\u8f6f\u94fe\u5931\u6548\u4e86\uff08\u4f8b\u5982\u5728\u5b50\u5305\u91cc\u6267\u884c\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"yarn add"),"\uff09\uff0c\u53ef\u4ee5\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"lerna link")," \u547d\u4ee4\u91cd\u65b0\u8fdb\u884c\u8f6f\u94fe\u3002"),Object(o.b)("h4",{id:"4\u542f\u52a8\u8c03\u8bd5"},"4.\u542f\u52a8\u8c03\u8bd5"),Object(o.b)("p",null,"\u6309\u4e0b\u56fe\u64cd\u4f5c\u5373\u53ef\u5f00\u59cb\u5355\u6b65\u8c03\u8bd5\uff0c\u8be6\u7ec6\u8c03\u8bd5\u64cd\u4f5c\u53ef\u53c2\u8003 VSCode \u6587\u6863\u3002"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"http://storage.jd.com/cjj-pub-images/WX20200602-221337.png",alt:null}))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u76ee\u524d Taro \u9879\u76ee\u7684\u5b50\u5305\u4e00\u822c\u7f16\u8bd1\u90fd\u4f1a\u4ea7\u751f ",Object(o.b)("inlineCode",{parentName:"p"},"source-map"),"\uff0c\u6240\u4ee5\u4e00\u822c\u90fd\u80fd\u591f\u76f4\u63a5\u5728\u6e90\u7801\u4f4d\u7f6e\u4f7f\u7528\u65ad\u70b9\u3002\u5982\u679c\u67d0\u4e9b\u5305\u7f16\u8bd1\u65f6\u6ca1\u6709\u5f00\u542f ",Object(o.b)("inlineCode",{parentName:"p"},"source-map"),"\uff0c\u53ef\u624b\u52a8\u5f00\u542f\u7136\u540e\u63d0\u4ea4 ",Object(o.b)("inlineCode",{parentName:"p"},"Pull Requests"),"\u3002")))}p.isMDXComponent=!0}}]);