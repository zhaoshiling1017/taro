(window.webpackJsonp=window.webpackJsonp||[]).push([[1630],{1766:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return O}));var c=n(1),r=n(9),b=(n(0),n(1783)),a={title:"Checkbox",sidebar_label:"Checkbox"},l={id:"version-2.2.8/components/forms/checkbox",title:"Checkbox",description:"\u591a\u9009\u9879\u76ee",source:"@site/versioned_docs/version-2.2.8/components/forms/checkbox.md",permalink:"/taro/docs/2.2.8/components/forms/checkbox",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.8/components/forms/checkbox.md",version:"2.2.8",sidebar_label:"Checkbox",sidebar:"version-2.2.8/components",previous:{title:"Button",permalink:"/taro/docs/2.2.8/components/forms/button"},next:{title:"Form",permalink:"/taro/docs/2.2.8/components/forms/form"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"CheckboxProps",id:"checkboxprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],i={rightToc:o};function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(c.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u591a\u9009\u9879\u76ee"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<CheckboxProps>\n")),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"export default class PageCheckbox extends Component {\n  state = {\n    list: [\n      {\n        value: '\u7f8e\u56fd',\n        text: '\u7f8e\u56fd',\n        checked: false\n      },\n      {\n        value: '\u4e2d\u56fd',\n        text: '\u4e2d\u56fd',\n        checked: true\n      },\n      {\n        value: '\u5df4\u897f',\n        text: '\u5df4\u897f',\n        checked: false\n      },\n      {\n        value: '\u65e5\u672c',\n        text: '\u65e5\u672c',\n        checked: false\n      },\n      {\n        value: '\u82f1\u56fd',\n        text: '\u82f1\u56fd',\n        checked: false\n      },\n      {\n        value: '\u6cd5\u56fd',\n        text: '\u6cd5\u56fd',\n        checked: false\n      }\n    ]\n  }\n  render () {\n    return (\n      <View className='page-body'>\n        <View className='page-section'>\n          <Text>\u9ed8\u8ba4\u6837\u5f0f</Text>\n          <Checkbox value='\u9009\u4e2d' checked>\u9009\u4e2d</Checkbox>\n          <Checkbox style='margin-left: 20rpx' value='\u672a\u9009\u4e2d'>\u672a\u9009\u4e2d</Checkbox>\n        </View>\n        <View className='page-section'>\n          <Text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f</Text>\n          {this.state.list.map((item, i) => {\n            return (\n              <Label className='checkbox-list__label' for={i} key={i}>\n                <Checkbox className='checkbox-list__checkbox' value={item.value} checked={item.checked}>{item.text}</Checkbox>\n              </Label>\n            )\n          })}\n        </View>\n      </View>\n    )\n  }\n}\n")),Object(b.b)("h2",{id:"checkboxprops"},"CheckboxProps"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"value"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(b.b)("td",null,Object(b.b)("code",null,"<Checkbox/>"),"\u6807\u8bc6\uff0c\u9009\u4e2d\u65f6\u89e6\u53d1",Object(b.b)("code",null,"<CheckboxGroup/>"),"\u7684 change \u4e8b\u4ef6\uff0c\u5e76\u643a\u5e26 ",Object(b.b)("code",null,"<Checkbox/>")," \u7684 value")),Object(b.b)("tr",null,Object(b.b)("td",null,"disabled"),Object(b.b)("td",null,Object(b.b)("code",null,"boolean")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"false")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u662f\u5426\u7981\u7528")),Object(b.b)("tr",null,Object(b.b)("td",null,"checked"),Object(b.b)("td",null,Object(b.b)("code",null,"boolean")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"false")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u5f53\u524d\u662f\u5426\u9009\u4e2d\uff0c\u53ef\u7528\u6765\u8bbe\u7f6e\u9ed8\u8ba4\u9009\u4e2d")),Object(b.b)("tr",null,Object(b.b)("td",null,"color"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"checkbox\u7684\u989c\u8272\uff0c\u540c css \u7684 color")),Object(b.b)("tr",null,Object(b.b)("td",null,"onChange"),Object(b.b)("td",null,"`BaseEventOrigFunction<","{ value: string[]; }",">"),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u9009\u4e2d\u9879\u53d1\u751f\u53d8\u5316\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0c\u5c0f\u7a0b\u5e8f\u65e0\u6b64 API")))),Object(b.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"CheckboxProps.value"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"CheckboxProps.disabled"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"CheckboxProps.checked"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"CheckboxProps.color"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"CheckboxProps.onChange"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"Checkbox"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}O.isMDXComponent=!0},1783:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return s}));var c=n(0),r=n.n(c);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},b=Object.keys(e);for(c=0;c<b.length;c++)n=b[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(c=0;c<b.length;c++)n=b[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),O=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},j=function(e){var t=O(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(c.forwardRef)((function(e,t){var n=e.components,c=e.mdxType,b=e.originalType,a=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),j=O(n),d=c,s=j["".concat(a,".").concat(d)]||j[d]||p[d]||b;return n?r.a.createElement(s,l({ref:t},i,{components:n})):r.a.createElement(s,l({ref:t},i))}));function s(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var b=n.length,a=new Array(b);a[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:c,a[1]=l;for(var i=2;i<b;i++)a[i]=n[i];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);