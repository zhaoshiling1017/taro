(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1783:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),i=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},s=function(e){var n=i(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=i(t),d=r,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return t?a.a.createElement(m,l({ref:n},b,{components:t})):a.a.createElement(m,l({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<o;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},335:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return i}));var r=t(1),a=t(9),o=(t(0),t(1783)),c={title:"JSX \u7b80\u4ecb"},l={id:"version-2.2.8/jsx",title:"JSX \u7b80\u4ecb",description:"\u5728 Taro \u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 JSX \u4f5c\u4e3a\u4e00\u79cd DSL \u8fdb\u800c\u7f16\u8bd1\u6210\u5404\u7aef\u901a\u7528\u7684\u8bed\u6cd5\u3002 JSX \u662f\u4e00\u79cd\u770b\u8d77\u6765\u5f88\u50cf XML \u7684 JavaScript \u8bed\u6cd5\u6269\u5c55\uff0c\u6bd4\u8d77\u6a21\u677f\u8bed\u8a00\uff0c\u5b83\u5177\u6709\u4ee5\u4e0b\u4f18\u70b9\uff1a",source:"@site/versioned_docs/version-2.2.8/jsx.md",permalink:"/taro/docs/2.2.8/jsx",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.8/jsx.md",version:"2.2.8",sidebar:"version-2.2.8/docs",previous:{title:"\u7ec4\u4ef6\u7684\u5916\u90e8\u6837\u5f0f\u548c\u5168\u5c40\u6837\u5f0f",permalink:"/taro/docs/2.2.8/component-style"},next:{title:"\u7ec4\u4ef6\u5316 & Props",permalink:"/taro/docs/2.2.8/props"}},p=[{value:"\u4f7f\u7528 JSX",id:"\u4f7f\u7528-jsx",children:[{value:"\u5fc5\u987b\u58f0\u660e <code>Taro</code> \u548c\u7ec4\u4ef6",id:"\u5fc5\u987b\u58f0\u660e-taro-\u548c\u7ec4\u4ef6",children:[]},{value:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d",id:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d",children:[]}]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"\u4f7f\u7528 JavaScript \u8868\u8fbe\u5f0f",id:"\u4f7f\u7528-javascript-\u8868\u8fbe\u5f0f",children:[]},{value:"\u5b57\u7b26\u4e32\u5e38\u91cf",id:"\u5b57\u7b26\u4e32\u5e38\u91cf",children:[]},{value:"\u9ed8\u8ba4\u4e3a True",id:"\u9ed8\u8ba4\u4e3a-true",children:[]},{value:"\u5d4c\u5957",id:"\u5d4c\u5957",children:[]},{value:"\u5e03\u5c14\u503c\u3001Null \u548c Undefined \u88ab\u5ffd\u7565",id:"\u5e03\u5c14\u503c\u3001null-\u548c-undefined-\u88ab\u5ffd\u7565",children:[]}]}],b={rightToc:p};function i(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5728 Taro \u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 JSX \u4f5c\u4e3a\u4e00\u79cd DSL \u8fdb\u800c\u7f16\u8bd1\u6210\u5404\u7aef\u901a\u7528\u7684\u8bed\u6cd5\u3002 JSX \u662f\u4e00\u79cd\u770b\u8d77\u6765\u5f88\u50cf XML \u7684 JavaScript \u8bed\u6cd5\u6269\u5c55\uff0c\u6bd4\u8d77\u6a21\u677f\u8bed\u8a00\uff0c\u5b83\u5177\u6709\u4ee5\u4e0b\u4f18\u70b9\uff1a"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u5404\u5927\u7f16\u8f91\u5668\u548c IDE \u90fd\u80fd\u63d0\u4f9b\u975e\u5e38\u826f\u597d\u7684\u652f\u6301\uff1b"),Object(o.b)("li",{parentName:"ol"},"\u53ef\u4ee5\u505a\u5230\u7c7b\u578b\u5b89\u5168\uff0c\u5728\u7f16\u8bd1\u671f\u5c31\u80fd\u53d1\u73b0\u9519\u8bef\uff1b"),Object(o.b)("li",{parentName:"ol"},"\u63d0\u4f9b\u8bed\u4e49\u5316\u5e76\u4e14\u53ef\u4ee5\u79fb\u52a8\u7684\u6807\u7b7e\uff1b"),Object(o.b)("li",{parentName:"ol"},"\u80cc\u540e\u7684\u793e\u533a\u652f\u6301\u975e\u5e38\u5f3a\u529b\uff1b")),Object(o.b)("p",null,"\u5982\u679c\u4f60\u662f\u4e00\u540d\u65b0\u624b\u7684\u8bdd\uff0c\u53ef\u80fd\u4e00\u5f00\u59cb\u5b66\u4e60\u4e00\u79cd\u65b0\u8bed\u6cd5\u4f1a\u4ea7\u751f\u4e00\u4e9b\u62b5\u89e6\u3002\u4f46\u5f53\u4f60\u719f\u6089\u4e86\u4e4b\u540e\uff0c\u5c31\u80fd\u53d1\u73b0 JSX \u66f4\u7b26\u5408\u7a0b\u5e8f\u8bed\u8a00\u7684\u4e66\u5199\u903b\u8f91\uff0c\u5728\u5904\u7406\u4e00\u4e9b\u7cbe\u7ec6\u590d\u6742\u9700\u6c42\u7684\u65f6\u5019\u4e5f\u4f1a\u6bd4\u6a21\u677f\u8bed\u8a00\u66f4\u4e3a\u5f97\u5fc3\u5e94\u624b\u3002"),Object(o.b)("h2",{id:"\u4f7f\u7528-jsx"},"\u4f7f\u7528 JSX"),Object(o.b)("p",null,"\u8bf7\u89c2\u5bdf\u4ee5\u4e0b\u4ee3\u7801\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\nimport { View } from '@tarojs/components'\n\nclass Home extends Component {\n  render () {\n    return (\n      <View>Hello World!</View>\n    )\n  }\n}\n")),Object(o.b)("h3",{id:"\u5fc5\u987b\u58f0\u660e-taro-\u548c\u7ec4\u4ef6"},"\u5fc5\u987b\u58f0\u660e ",Object(o.b)("inlineCode",{parentName:"h3"},"Taro")," \u548c\u7ec4\u4ef6"),Object(o.b)("p",null,"\u5728\u8fd9\u6bb5\u4ee3\u7801\u4e2d\uff0c\u5927\u5199\u5f00\u5934\u7684 JSX \u6807\u7b7e ",Object(o.b)("inlineCode",{parentName:"p"},"View")," \u8868\u793a\u5b83\u662f\u4e00\u4e2a Taro \u7ec4\u4ef6\uff0c\u5c3d\u7ba1\u5728\u6574\u6bb5\u4ee3\u7801\u4e2d\uff0c\u53d8\u91cf ",Object(o.b)("inlineCode",{parentName:"p"},"View")," \u770b\u8d77\u6765\u5e76\u6ca1\u6709\u88ab\u8c03\u7528\uff0c\u4f46\u4e5f\u5fc5\u987b\u4ece ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/components")," \u4e2d\u5f15\u5165\u58f0\u660e\u3002\u53d8\u91cf ",Object(o.b)("inlineCode",{parentName:"p"},"Taro")," \u4e5f\u662f\u4e00\u4e2a\u5fc5\u987b\u5f15\u5165\u58f0\u660e\u7684\u53d8\u91cf\uff0c\u56e0\u4e3a\u6211\u4eec\u5728\u7f16\u8bd1\u671f\u548c\u8fd0\u884c\u65f6\u4f1a\u4f9d\u8d56\u8fd9\u4e2a\u53d8\u91cf\u505a\u4e00\u4e9b\u7279\u6b8a\u5904\u7406\u3002",Object(o.b)("strong",{parentName:"p"},"\u5f53\u4f60\u5f15\u5165\u4e86\u7ec4\u4ef6\u65f6\uff0c\u4e00\u5b9a\u8981\u4f7f\u7528\uff0c\u4e0d\u8981\u51fa\u73b0\u6ca1\u6709\u4f7f\u7528\u7684\u53d8\u91cf\u3002")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5f53\u4f60\u53ea\u7528\u652f\u6301\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u65f6\uff0c\u53ef\u4ee5\u4e0d\u7528\u5f15\u5165\u7ec4\u4ef6\u4f8b\u5982 ",Object(o.b)("inlineCode",{parentName:"p"},"View")," \u8fd9\u6837\u7684\u58f0\u660e\u3002\u4f46\u6211\u4eec\u4ecd\u7136\u5f3a\u70c8\u63a8\u8350\u4f60\u5728\u9876\u90e8\u5f15\u5165\u4f60\u5c06\u8981\u4f7f\u7528\u7684\u7ec4\u4ef6\uff0c\u8fd9\u6837\u7f16\u8f91\u5668/IDE \u80fd\u66f4\u597d\u5730\u63d0\u524d\u53d1\u73b0\u53ef\u80fd\u51fa\u73b0\u7684\u95ee\u9898\uff0c\u4e5f\u4e3a\u5c06\u6765\u53ef\u80fd\u9700\u8981\u7684\u591a\u7aef\u8f6c\u6362\u7559\u6709\u4f59\u5730\u3002")),Object(o.b)("h3",{id:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d"},"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d"),Object(o.b)("p",null,"\u5728 Taro \u4e2d\uff0c\u6240\u6709\u7ec4\u4ef6\u90fd\u5e94\u5f53\u9996\u5b57\u6bcd\u5927\u5199\u5e76\u4e14\u4f7f\u7528\u5927\u9a7c\u5cf0\u5f0f\u547d\u540d\u6cd5\uff08Camel-Case\uff09\u3002"),Object(o.b)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u5c06\u65e0\u6cd5\u6309\u9884\u671f\u8fd0\u884c\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7ec4\u4ef6\nimport home_page from './page'\n\n// \u9519\u8bef\uff01\u7ec4\u4ef6\u540d\u5e94\u8be5\u9996\u5b57\u6bcd\u5927\u5199:\nclass App extends Component {\n  render () {\n    return (\n      <home_page message=\"Hello World!\" />\n    )\n  }\n}\n")),Object(o.b)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u5c06 ",Object(o.b)("inlineCode",{parentName:"p"},"home_page")," \u91cd\u547d\u540d\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"HomePage"),"\uff0c\u7136\u540e\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"<HomePage />")," \u5f15\u7528\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7ec4\u4ef6\nimport HomePage from './page'\n\nclass App extends Component {\n  render () {\n    return (\n      <HomePage message=\"Hello World!\" />\n    )\n  }\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u548c React/Nerv \u4e0d\u4e00\u6837\u7684\u5730\u65b9\u5728\u4e8e\uff0cTaro \u4e0d\u652f\u6301\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"\u70b9\u8868\u793a\u6cd5")," \u548c",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime"}),"\u8fd0\u884c\u65f6\u6307\u5b9a\u7c7b\u578b"),"\u6765\u5f15\u7528\u7ec4\u4ef6\uff0c\u4f8b\u5982 ",Object(o.b)("inlineCode",{parentName:"p"},"<MyComponents.DatePicker />")," \u8fd9\u6837\u7684\u5199\u6cd5\u5728 Taro \u4e2d\u662f\u65e0\u6cd5\u6b63\u786e\u7f16\u8bd1\u7684\u3002")),Object(o.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(o.b)("p",null,"\u5728 JSX \u4e2d\u6709\u51e0\u79cd\u4e0d\u540c\u7684\u65b9\u5f0f\u6765\u6307\u5b9a\u5c5e\u6027\u3002"),Object(o.b)("h3",{id:"\u4f7f\u7528-javascript-\u8868\u8fbe\u5f0f"},"\u4f7f\u7528 JavaScript \u8868\u8fbe\u5f0f"),Object(o.b)("p",null,"\u4f60\u53ef\u4ee5\u4efb\u610f\u5730\u5728 JSX \u5f53\u4e2d\u4f7f\u7528 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E8%A1%A8%E8%BE%BE%E5%BC%8F"}),"JavaScript \u8868\u8fbe\u5f0f"),"\uff0c\u5728 JSX \u5f53\u4e2d\u7684\u8868\u8fbe\u5f0f\u8981\u5305\u542b\u5728\u5927\u62ec\u53f7\u91cc\u3002\u4f8b\u5982\uff0c\u5728\u8fd9\u4e2a JSX \u4e2d\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"<MyComponent foo={1 + 2 + 3 + 4} />\n")),Object(o.b)("p",null,"\u5bf9\u4e8e MyComponent \u6765\u8bf4\uff0c props.foo \u7684\u503c\u4e3a 10\uff0c\u8fd9\u662f 1 + 2 + 3 + 4 \u8868\u8fbe\u5f0f\u8ba1\u7b97\u5f97\u51fa\u7684\u3002"),Object(o.b)("p",null,"if \u8bed\u53e5\u548c for \u5faa\u73af\u5728 JavaScript \u4e2d\u4e0d\u662f\u8868\u8fbe\u5f0f\uff0c\u56e0\u6b64\u5b83\u4eec\u4e0d\u80fd\u76f4\u63a5\u5728 JSX \u4e2d\u4f7f\u7528\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u5c06\u5b83\u4eec\u653e\u5728\u5468\u56f4\u7684\u4ee3\u7801\u4e2d\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n\nclass App extends Components {\n  render () {\n    let description\n\n    if (this.props.number % 2 == 0) {\n      description = <Text>even</Text>\n    } else {\n      description = <Text>odd</Text>\n    }\n\n    return <View>{this.props.number} is an {description} number</View>\n  }\n}\n")),Object(o.b)("h3",{id:"\u5b57\u7b26\u4e32\u5e38\u91cf"},"\u5b57\u7b26\u4e32\u5e38\u91cf"),Object(o.b)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u5b57\u7b26\u4e32\u5e38\u91cf\u4f5c\u4e3a\u5c5e\u6027\u503c\u4f20\u9012\u3002\u4e0b\u9762\u8fd9\u4e24\u4e2a JSX \u8868\u8fbe\u5f0f\u662f\u7b49\u4ef7\u7684\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"<MyComponent message=\"hello world\" />\n\n<MyComponent message={'hello world'} />\n")),Object(o.b)("h3",{id:"\u9ed8\u8ba4\u4e3a-true"},"\u9ed8\u8ba4\u4e3a True"),Object(o.b)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709\u7ed9\u5c5e\u6027\u4f20\u503c\uff0c\u5b83\u9ed8\u8ba4\u4e3a true\u3002\u56e0\u6b64\u4e0b\u9762\u4e24\u4e2a JSX \u662f\u7b49\u4ef7\u7684\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"<MyTextBox autocomplete />\n\n<MyTextBox autocomplete={true} />\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u548c React/Nerv \u7684\u4e0d\u540c\uff1a\nReact \u53ef\u4ee5\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"...")," \u62d3\u5c55\u64cd\u4f5c\u7b26\u6765\u4f20\u9012\u5c5e\u6027\uff0c\u4f46\u5728 Taro \u4e2d\u4f60\u4e0d\u80fd\u8fd9\u4e48\u505a\u3002\u4f8b\u5982\uff1a"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const props = {firstName: 'Plus', lastName: 'Second'}\nreturn <Greeting {...props} />\n")),Object(o.b)("p",{parentName:"blockquote"},"\u8fd9\u6837\u7684\u64cd\u4f5c\u4f1a\u62a5\u9519\u3002\u4f60\u53ea\u80fd\u624b\u52a8\u5730\u628a\u6240\u6709\u9700\u8981\u5f15\u7528\u7684 props \u5199\u4e0a\u53bb\uff1a\n",Object(o.b)("inlineCode",{parentName:"p"},'<Greeting firstName="Plus" lastName="Second" />'))),Object(o.b)("h3",{id:"\u5d4c\u5957"},"\u5d4c\u5957"),Object(o.b)("p",null,"\u5982\u679c JSX \u6807\u7b7e\u662f\u95ed\u5408\u5f0f\u7684\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u5728\u7ed3\u5c3e\u5904\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"/>"),", \u5c31\u597d\u50cf XML/HTML \u4e00\u6837\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const element = <Image src={user.avatarUrl} />;\n")),Object(o.b)("p",null,"JSX \u6807\u7b7e\u540c\u6837\u53ef\u4ee5\u76f8\u4e92\u5d4c\u5957\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const element = (\n  <View>\n    <Text>Hello!</Text>\n    <Text>Good to see you here.</Text>\n  </View>\n)\n")),Object(o.b)("p",null,"JavaScript \u8868\u8fbe\u5f0f\u4e5f\u53ef\u4ee5\u5d4c\u5957\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"render () {\n  const todos = ['finish doc', 'submit pr', 'nag dan to review'];\n  return (\n    <ul>\n      {todos.map((todo) => <Text>{todo}</Text>)}\n    </ul>\n  )\n}\n")),Object(o.b)("h3",{id:"\u5e03\u5c14\u503c\u3001null-\u548c-undefined-\u88ab\u5ffd\u7565"},"\u5e03\u5c14\u503c\u3001Null \u548c Undefined \u88ab\u5ffd\u7565"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"false"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"null"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"true")," \u90fd\u662f\u6709\u6548\u7684 children\uff0c\u4f46\u5b83\u4eec\u4e0d\u4f1a\u76f4\u63a5\u88ab\u6e32\u67d3\u3002\u4e0b\u9762\u7684\u8868\u8fbe\u5f0f\u662f\u7b49\u4ef7\u7684\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"<View />\n\n<View></View>\n\n<View>{false}</View>\n\n<View>{null}</View>\n\n<View>{undefined}</View>\n\n<View>{true}</View>\n")),Object(o.b)("p",null,"\u8fd9\u5728\u6839\u636e\u6761\u4ef6\u6765\u786e\u5b9a\u662f\u5426\u6e32\u67d3 \u5143\u7d20\u65f6\u975e\u5e38\u6709\u7528\u3002\u4ee5\u4e0b\u7684 JSX \u53ea\u4f1a\u5728 showHeader \u4e3a true \u65f6\u6e32\u67d3 ",Object(o.b)("inlineCode",{parentName:"p"},"<Header />")," \u7ec4\u4ef6\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"<View>\n  {showHeader && <Header />}\n  <Content />\n</View>\n")))}i.isMDXComponent=!0}}]);