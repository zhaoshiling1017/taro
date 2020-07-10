(window.webpackJsonp=window.webpackJsonp||[]).push([[575],{1783:function(e,t,b){"use strict";b.d(t,"a",(function(){return i})),b.d(t,"b",(function(){return p}));var n=b(0),c=b.n(n);function l(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function a(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,n)}return b}function r(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?a(Object(b),!0).forEach((function(t){l(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):a(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function O(e,t){if(null==e)return{};var b,n,c=function(e,t){if(null==e)return{};var b,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)b=l[n],t.indexOf(b)>=0||(c[b]=e[b]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)b=l[n],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(c[b]=e[b])}return c}var j=c.a.createContext({}),d=function(e){var t=c.a.useContext(j),b=t;return e&&(b="function"==typeof e?e(t):r({},t,{},e)),b},i=function(e){var t=d(e.components);return c.a.createElement(j.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},o=Object(n.forwardRef)((function(e,t){var b=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),i=d(b),o=n,p=i["".concat(a,".").concat(o)]||i[o]||u[o]||l;return b?c.a.createElement(p,r({ref:t},j,{components:b})):c.a.createElement(p,r({ref:t},j))}));function p(e,t){var b=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=b.length,a=new Array(l);a[0]=o;var r={};for(var O in t)hasOwnProperty.call(t,O)&&(r[O]=t[O]);r.originalType=e,r.mdxType="string"==typeof e?e:n,a[1]=r;for(var j=2;j<l;j++)a[j]=b[j];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,b)}o.displayName="MDXCreateElement"},715:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return a})),b.d(t,"metadata",(function(){return r})),b.d(t,"rightToc",(function(){return O})),b.d(t,"default",(function(){return d}));var n=b(1),c=b(9),l=(b(0),b(1783)),a={title:"Picker",sidebar_label:"Picker"},r={id:"components/forms/picker",title:"Picker",description:"\u4ece\u5e95\u90e8\u5f39\u8d77\u7684\u6eda\u52a8\u9009\u62e9\u5668",source:"@site/docs/components/forms/picker.md",permalink:"/taro/docs/next/components/forms/picker",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/forms/picker.md",version:"next",sidebar_label:"Picker",sidebar:"components",previous:{title:"Label",permalink:"/taro/docs/next/components/forms/label"},next:{title:"PickerView",permalink:"/taro/docs/next/components/forms/picker-view"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"PickerStandardProps",id:"pickerstandardprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"mode",id:"mode",children:[]}]},{value:"PickerSelectorProps",id:"pickerselectorprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]},{value:"onChangeEventDetail",id:"onchangeeventdetail",children:[]}]},{value:"PickerMultiSelectorProps",id:"pickermultiselectorprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-2",children:[]},{value:"onChangeEventDetail",id:"onchangeeventdetail-1",children:[]},{value:"onColumnChangeEvnetDetail",id:"oncolumnchangeevnetdetail",children:[]}]},{value:"PickerTimeProps",id:"pickertimeprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-3",children:[]},{value:"onChangeEventDetail",id:"onchangeeventdetail-2",children:[]}]},{value:"PickerDateProps",id:"pickerdateprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-4",children:[]},{value:"fields",id:"fields",children:[]},{value:"onChangeEventDetail",id:"onchangeeventdetail-3",children:[]}]},{value:"PickerRegionProps",id:"pickerregionprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-5",children:[]},{value:"onChangeEventDetail",id:"onchangeeventdetail-4",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-6",children:[]}],j={rightToc:O};function d(e){var t=e.components,b=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},j,b,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u4ece\u5e95\u90e8\u5f39\u8d77\u7684\u6eda\u52a8\u9009\u62e9\u5668"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/picker.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<PickerSelectorProps | PickerMultiSelectorProps | PickerTimeProps | PickerDateProps | PickerRegionProps>\n")),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"export default class PagePicker extends Component {\n  state = {\n    selector: ['\u7f8e\u56fd', '\u4e2d\u56fd', '\u5df4\u897f', '\u65e5\u672c'],\n    selectorChecked: '\u7f8e\u56fd',\n    timeSel: '12:01',\n    dateSel: '2018-04-22'\n  }\n\n  onChange = e => {\n    this.setState({\n      selectorChecked: this.state.selector[e.detail.value]\n    })\n  }\n\n  onTimeChange = e => {\n    this.setState({\n      timeSel: e.detail.value\n    })\n  }\n  onDateChange = e => {\n    this.setState({\n      dateSel: e.detail.value\n    })\n  }\n\n  render () {\n    return (\n      <View className='container'>\n        <View className='page-body'>\n          <View className='page-section'>\n            <Text>\u5730\u533a\u9009\u62e9\u5668</Text>\n            <View>\n              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>\n                <View className='picker'>\n                  \u5f53\u524d\u9009\u62e9\uff1a{this.state.selectorChecked}\n                </View>\n              </Picker>\n            </View>\n          </View>\n          <View className='page-section'>\n            <Text>\u65f6\u95f4\u9009\u62e9\u5668</Text>\n            <View>\n              <Picker mode='time' onChange={this.onTimeChange}>\n                <View className='picker'>\n                  \u5f53\u524d\u9009\u62e9\uff1a{this.state.timeSel}\n                </View>\n              </Picker>\n            </View>\n          </View>\n          <View className='page-section'>\n            <Text>\u65e5\u671f\u9009\u62e9\u5668</Text>\n            <View>\n              <Picker mode='date' onChange={this.onDateChange}>\n                <View className='picker'>\n                  \u5f53\u524d\u9009\u62e9\uff1a{this.state.dateSel}\n                </View>\n              </Picker>\n            </View>\n          </View>\n        </View>\n      </View>\n    )\n  }\n}\n")),Object(l.b)("h2",{id:"pickerstandardprops"},"PickerStandardProps"),Object(l.b)("p",null,"\u9009\u62e9\u5668\u901a\u7528\u53c2\u6570"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"mode"),Object(l.b)("td",null,Object(l.b)("code",null,'"selector" | "multiSelector" | "time" | "date" | "region"')),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"selector"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u9009\u62e9\u5668\u7c7b\u578b\uff0c\u9ed8\u8ba4\u662f\u666e\u901a\u9009\u62e9\u5668")),Object(l.b)("tr",null,Object(l.b)("td",null,"disabled"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u662f\u5426\u7981\u7528")),Object(l.b)("tr",null,Object(l.b)("td",null,"onCancel"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<any>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u53d6\u6d88\u9009\u62e9\u6216\u70b9\u906e\u7f69\u5c42\u6536\u8d77 picker \u65f6\u89e6\u53d1")))),Object(l.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerStandardProps.mode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerStandardProps.disabled"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerStandardProps.onCancel"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(l.b)("h3",{id:"mode"},"mode"),Object(l.b)("p",null,"\u9009\u62e9\u5668\u7c7b\u578b"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"selector"),Object(l.b)("td",null,"\u666e\u901a\u9009\u62e9\u5668")),Object(l.b)("tr",null,Object(l.b)("td",null,"multiSelector"),Object(l.b)("td",null,"\u591a\u5217\u9009\u62e9\u5668")),Object(l.b)("tr",null,Object(l.b)("td",null,"time"),Object(l.b)("td",null,"\u65f6\u95f4\u9009\u62e9\u5668")),Object(l.b)("tr",null,Object(l.b)("td",null,"date"),Object(l.b)("td",null,"\u65e5\u671f\u9009\u62e9\u5668")),Object(l.b)("tr",null,Object(l.b)("td",null,"region"),Object(l.b)("td",null,"\u7701\u5e02\u533a\u9009\u62e9\u5668")))),Object(l.b)("h2",{id:"pickerselectorprops"},"PickerSelectorProps"),Object(l.b)("p",null,"\u666e\u901a\u9009\u62e9\u5668\uff1amode = selector"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"mode"),Object(l.b)("td",null,Object(l.b)("code",null,'"selector"')),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u9009\u62e9\u5668\u7c7b\u578b")),Object(l.b)("tr",null,Object(l.b)("td",null,"range"),Object(l.b)("td",null,Object(l.b)("code",null,"string[] | number[] | Object[]")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"[]")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"mode\u4e3a selector \u6216 multiSelector \u65f6\uff0crange \u6709\u6548")),Object(l.b)("tr",null,Object(l.b)("td",null,"rangeKey"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5f53 range \u662f\u4e00\u4e2a Object Array \u65f6\uff0c\u901a\u8fc7 rangeKey \u6765\u6307\u5b9a Object \u4e2d key \u7684\u503c\u4f5c\u4e3a\u9009\u62e9\u5668\u663e\u793a\u5185\u5bb9")),Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"0")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u8868\u793a\u9009\u62e9\u4e86 range \u4e2d\u7684\u7b2c\u51e0\u4e2a\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"onChange"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"value \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0cevent.detail = ","{value}")))),Object(l.b)("h3",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerSelectorProps.range"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerSelectorProps.rangeKey"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerSelectorProps.value"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerSelectorProps.onChange"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(l.b)("h3",{id:"onchangeeventdetail"},"onChangeEventDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"string | number")),Object(l.b)("td",null,"\u8868\u793a\u53d8\u66f4\u503c\u7684\u4e0b\u6807")))),Object(l.b)("h2",{id:"pickermultiselectorprops"},"PickerMultiSelectorProps"),Object(l.b)("p",null,"\u591a\u5217\u9009\u62e9\u5668\uff1amode = multiSelector"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"mode"),Object(l.b)("td",null,Object(l.b)("code",null,'"multiSelector"')),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u9009\u62e9\u5668\u7c7b\u578b")),Object(l.b)("tr",null,Object(l.b)("td",null,"range"),Object(l.b)("td",null,Object(l.b)("code",null,"string[][] | number[][] | Object[][]")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"[]")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"mode\u4e3a selector \u6216 multiSelector \u65f6\uff0crange \u6709\u6548")),Object(l.b)("tr",null,Object(l.b)("td",null,"rangeKey"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5f53 range \u662f\u4e00\u4e2a Object Array \u65f6\uff0c\u901a\u8fc7 rangeKey \u6765\u6307\u5b9a Object \u4e2d key \u7684\u503c\u4f5c\u4e3a\u9009\u62e9\u5668\u663e\u793a\u5185\u5bb9")),Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"string[] | number[] | Object[]")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"[]")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u8868\u793a\u9009\u62e9\u4e86 range \u4e2d\u7684\u7b2c\u51e0\u4e2a\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"onChange"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u5f53 value \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0cevent.detail = ","{value}")),Object(l.b)("tr",null,Object(l.b)("td",null,"onColumnChange"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<onColumnChangeEvnetDetail>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5217\u6539\u53d8\u65f6\u89e6\u53d1")))),Object(l.b)("h3",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerMultiSelectorProps.range"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerMultiSelectorProps.rangeKey"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerMultiSelectorProps.value"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerMultiSelectorProps.onChange"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerMultiSelectorProps.onColumnChange"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(l.b)("h3",{id:"onchangeeventdetail-1"},"onChangeEventDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"number[]")),Object(l.b)("td",null,"\u8868\u793a\u53d8\u66f4\u503c\u7684\u4e0b\u6807")))),Object(l.b)("h3",{id:"oncolumnchangeevnetdetail"},"onColumnChangeEvnetDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"column"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u8868\u793a\u6539\u53d8\u4e86\u7b2c\u51e0\u5217\uff08\u4e0b\u6807\u4ece0\u5f00\u59cb\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u8868\u793a\u53d8\u66f4\u503c\u7684\u4e0b\u6807")))),Object(l.b)("h2",{id:"pickertimeprops"},"PickerTimeProps"),Object(l.b)("p",null,"\u65f6\u95f4\u9009\u62e9\u5668\uff1amode = time"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"mode"),Object(l.b)("td",null,Object(l.b)("code",null,'"time"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u9009\u62e9\u5668\u7c7b\u578b")),Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"value \u7684\u503c\u8868\u793a\u9009\u62e9\u4e86 range \u4e2d\u7684\u7b2c\u51e0\u4e2a\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"start"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u4ec5\u5f53 mode = time")),Object(l.b)("tr",null,Object(l.b)("td",null,"end"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u4ec5\u5f53 mode = time")),Object(l.b)("tr",null,Object(l.b)("td",null,"onChange"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"value \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0cevent.detail = ","{value}")))),Object(l.b)("h3",{id:"api-\u652f\u6301\u5ea6-3"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerTimeProps.value"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerTimeProps.start"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerTimeProps.end"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerTimeProps.onChange"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(l.b)("h3",{id:"onchangeeventdetail-2"},"onChangeEventDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u8868\u793a\u9009\u4e2d\u7684\u65f6\u95f4")))),Object(l.b)("h2",{id:"pickerdateprops"},"PickerDateProps"),Object(l.b)("p",null,"\u65e5\u671f\u9009\u62e9\u5668\uff1amode = date"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"mode"),Object(l.b)("td",null,Object(l.b)("code",null,'"date"')),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u9009\u62e9\u5668\u7c7b\u578b")),Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"0")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,'\u8868\u793a\u9009\u4e2d\u7684\u65e5\u671f\uff0c\u683c\u5f0f\u4e3a"YYYY-MM-DD"')),Object(l.b)("tr",null,Object(l.b)("td",null,"start"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u4ec5\u5f53 mode = time")),Object(l.b)("tr",null,Object(l.b)("td",null,"end"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u4ec5\u5f53 mode = time")),Object(l.b)("tr",null,Object(l.b)("td",null,"fields"),Object(l.b)("td",null,Object(l.b)("code",null,'"year" | "month" | "day"')),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"day"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u6709\u6548\u503c year, month, day\uff0c\u8868\u793a\u9009\u62e9\u5668\u7684\u7c92\u5ea6")),Object(l.b)("tr",null,Object(l.b)("td",null,"onChange"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"value \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0cevent.detail = ","{value}")))),Object(l.b)("h3",{id:"api-\u652f\u6301\u5ea6-4"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerDateProps.value"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerDateProps.start"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerDateProps.end"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerDateProps.fields"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerDateProps.onChange"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(l.b)("h3",{id:"fields"},"fields"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"year"),Object(l.b)("td",null,"\u9009\u62e9\u5668\u7c92\u5ea6\u4e3a\u5e74")),Object(l.b)("tr",null,Object(l.b)("td",null,"month"),Object(l.b)("td",null,"\u9009\u62e9\u5668\u7c92\u5ea6\u4e3a\u6708\u4efd")),Object(l.b)("tr",null,Object(l.b)("td",null,"day"),Object(l.b)("td",null,"\u9009\u62e9\u5668\u7c92\u5ea6\u4e3a\u5929")))),Object(l.b)("h3",{id:"onchangeeventdetail-3"},"onChangeEventDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u8868\u793a\u9009\u4e2d\u7684\u65e5\u671f")))),Object(l.b)("h2",{id:"pickerregionprops"},"PickerRegionProps"),Object(l.b)("p",null,"\u7701\u5e02\u533a\u9009\u62e9\u5668\uff1amode = region"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"mode"),Object(l.b)("td",null,Object(l.b)("code",null,'"region"')),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u9009\u62e9\u5668\u7c7b\u578b")),Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"string[]")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"[]")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u8868\u793a\u9009\u4e2d\u7684\u7701\u5e02\u533a\uff0c\u9ed8\u8ba4\u9009\u4e2d\u6bcf\u4e00\u5217\u7684\u7b2c\u4e00\u4e2a\u503c")),Object(l.b)("tr",null,Object(l.b)("td",null,"customItem"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u53ef\u4e3a\u6bcf\u4e00\u5217\u7684\u9876\u90e8\u6dfb\u52a0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u9879")),Object(l.b)("tr",null,Object(l.b)("td",null,"onChange"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"value \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0cevent.detail = ","{value, code, postcode}","\uff0c\u5176\u4e2d\u5b57\u6bb5 code \u662f\u7edf\u8ba1\u7528\u533a\u5212\u4ee3\u7801\uff0cpostcode \u662f\u90ae\u653f\u7f16\u7801")))),Object(l.b)("h3",{id:"api-\u652f\u6301\u5ea6-5"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerRegionProps.value"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerRegionProps.customItem"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PickerRegionProps.onChange"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(l.b)("h3",{id:"onchangeeventdetail-4"},"onChangeEventDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"string[]")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u8868\u793a\u9009\u4e2d\u7684\u7701\u5e02\u533a")),Object(l.b)("tr",null,Object(l.b)("td",null,"code"),Object(l.b)("td",null,Object(l.b)("code",null,"string[]")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u7edf\u8ba1\u7528\u533a\u5212\u4ee3\u7801")),Object(l.b)("tr",null,Object(l.b)("td",null,"postcode"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u90ae\u653f\u7f16\u7801")))),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6-6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Picker"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);