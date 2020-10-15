/*! For license information please see 2.68432556.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1718:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},1719:function(e,t,n){"use strict";var a=n(0),r=n(1718);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1726:function(e,t,n){"use strict";var a=n(0),r=n(1753);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},1727:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},1728:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},1729:function(e,t,n){"use strict";var a=n(1722),r=n(1726),o=n(1724),c=n(1737);t.a=function(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).navbar,i=(n=void 0===n?{}:n).logo,l=void 0===i?{}:i,u=Object(r.a)().isDarkTheme,s=Object(o.a)(l.href||"/"),f={};l.target?f={target:l.target}:Object(c.a)(s)||(f={rel:"noopener noreferrer",target:"_blank"});var d=l.srcDark&&u?l.srcDark:l.src;return{logoLink:s,logoLinkProps:f,logoImageUrl:Object(o.a)(d),logoAlt:l.alt}}},1730:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),c=n(1717),i=n(1731),l=n(1722),u=n(1724),s=n(10),f="light",d="dark",h=function(e){return e===d?d:f},m=function(){return s.a.canUseDOM?h(document.documentElement.getAttribute("data-theme")):f},v=function(e){try{localStorage.setItem("theme",h(e))}catch(t){console.error(t)}},b=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).colorMode,a=(n=void 0===n?{}:n).disableSwitch,o=void 0!==a&&a,c=Object(r.useState)(m),i=c[0],u=c[1],s=Object(r.useCallback)((function(){u(f),v(f)}),[]),b=Object(r.useCallback)((function(){u(d),v(d)}),[]);return Object(r.useEffect)((function(){document.documentElement.setAttribute("data-theme",h(i))}),[i]),Object(r.useEffect)((function(){if(!o)try{var e=localStorage.getItem("theme");null!==e&&u(h(e))}catch(t){console.error(t)}}),[u]),Object(r.useEffect)((function(){o||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;u(t?d:f)}))}),[]),{isDarkTheme:i===d,setLightTheme:s,setDarkTheme:b}},p=n(1753);var g=function(e){var t=b(),n=t.isDarkTheme,a=t.setLightTheme,r=t.setDarkTheme;return o.a.createElement(p.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:r}},e.children)},y="docusaurus.tab.",k=function(){var e=Object(r.useState)({}),t=e[0],n=e[1],a=Object(r.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(r.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith(y))e[a.substring(y.length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),a(e,t)}}},O="docusaurus.announcement.dismiss",E="docusaurus.announcement.id",C=function(){var e=Object(l.a)().siteConfig.themeConfig.announcementBar,t=Object(r.useState)(!0),n=t[0],a=t[1],o=Object(r.useCallback)((function(){localStorage.setItem(O,"true"),a(!0)}),[]);return Object(r.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem(E);"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;localStorage.setItem(E,t),r&&localStorage.setItem(O,"false"),(r||"false"===localStorage.getItem(O))&&a(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:o}},j=n(1718);var w=function(e){var t=k(),n=t.tabGroupChoices,a=t.setTabGroupChoices,r=C(),c=r.isAnnouncementBarClosed,i=r.closeAnnouncementBar;return o.a.createElement(j.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:c,closeAnnouncementBar:i}},e.children)},S=n(1719),T=n(52),M=n.n(T);var P=function(){var e,t=Object(l.a)().siteConfig,n=(t=void 0===t?{}:t).themeConfig,a=(n=void 0===n?{}:n).announcementBar,r=void 0===a?{}:a,i=r.content,u=r.backgroundColor,s=r.textColor,f=r.isCloseable,d=Object(S.a)(),h=d.isAnnouncementBarClosed,m=d.closeAnnouncementBar;return!i||f&&h?null:o.a.createElement("div",{className:M.a.announcementBar,style:{backgroundColor:u,color:s},role:"banner"},o.a.createElement("div",{className:Object(c.a)(M.a.announcementBarContent,(e={},e[M.a.announcementBarCloseable]=f,e)),dangerouslySetInnerHTML:{__html:i}}),f?o.a.createElement("button",{type:"button",className:M.a.announcementBarClose,onClick:m,"aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},B=n(1732),L=n(1734);n(54);function I(e){var t=e.children;return o.a.createElement(g,null,o.a.createElement(w,null,t))}t.a=function(e){var t=Object(l.a)().siteConfig,n=t.favicon,r=t.title,s=t.themeConfig,f=s.image,d=s.metadatas,h=t.url,m=t.titleDelimiter,v=e.children,b=e.title,p=e.noFooter,g=e.description,y=e.image,k=e.keywords,O=e.permalink,E=e.wrapperClassName,C=b?b+" "+m+" "+r:r,j=y||f,w=Object(u.a)(j,{absolute:!0}),S=Object(u.a)(n);return o.a.createElement(I,null,o.a.createElement(i.a,null,o.a.createElement("html",{lang:"en"}),C&&o.a.createElement("title",null,C),C&&o.a.createElement("meta",{property:"og:title",content:C}),n&&o.a.createElement("link",{rel:"shortcut icon",href:S}),g&&o.a.createElement("meta",{name:"description",content:g}),g&&o.a.createElement("meta",{property:"og:description",content:g}),k&&k.length&&o.a.createElement("meta",{name:"keywords",content:k.join(",")}),j&&o.a.createElement("meta",{property:"og:image",content:w}),j&&o.a.createElement("meta",{property:"twitter:image",content:w}),j&&o.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+C}),O&&o.a.createElement("meta",{property:"og:url",content:h+O}),O&&o.a.createElement("link",{rel:"canonical",href:h+O}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o.a.createElement(i.a,null,d.map((function(e,t){return o.a.createElement("meta",Object(a.a)({key:"metadata_"+t},e))}))),o.a.createElement(P,null),o.a.createElement(B.a,null),o.a.createElement("div",{className:Object(c.a)("main-wrapper",E)},v),!p&&o.a.createElement(L.a,null))}},1733:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),c=n(1777),i=n.n(c),l=n(1722),u=n(1717),s=n(53),f=n.n(s),d=function(e){var t=e.icon,n=e.style;return o.a.createElement("span",{className:Object(u.a)(f.a.toggle,f.a.dark),style:n},t)},h=function(e){var t=e.icon,n=e.style;return o.a.createElement("span",{className:Object(u.a)(f.a.toggle,f.a.light),style:n},t)};t.a=function(e){var t=Object(l.a)(),n=t.siteConfig.themeConfig.colorMode.switchConfig,r=n.darkIcon,c=n.darkIconStyle,u=n.lightIcon,s=n.lightIconStyle,f=t.isClient;return o.a.createElement(i.a,Object(a.a)({disabled:!f,icons:{checked:o.a.createElement(d,{icon:r,style:c}),unchecked:o.a.createElement(h,{icon:u,style:s})}},e))}},1735:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),c=n(23),i=n(1722),l=n(1725),u=n(1724),s=n(1723),f=n(1731),d=n(1754);function h(){return o.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},o.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var m=n(1755);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(l){r=!0,o=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var g="Ctrl";function y(){return"undefined"==typeof navigator?g:/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var k=o.a.forwardRef((function(e,t){var n=b(Object(r.useState)((function(){return y()?"\u2318":g})),2),a=n[0],c=n[1];return Object(r.useEffect)((function(){y()&&c("\u2318")}),[]),o.a.createElement("button",v({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),o.a.createElement(m.a,null),o.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search"),o.a.createElement("span",{className:"DocSearch-Button-Key"},a===g?o.a.createElement(h,null):a),o.a.createElement("span",{className:"DocSearch-Button-Key"},"K"))})),O=null;function E(e){var t=e.hit,n=e.children;return o.a.createElement(s.a,{to:t.url},n)}function C(e){var t=e.state,n=e.onClose,a=Object(d.a)().generateSearchPageLink;return o.a.createElement(s.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function j(e){var t=Object(i.a)().siteMetadata,s=Object(u.b)().withBaseUrl,d=Object(l.useHistory)(),h=Object(r.useRef)(null),m=Object(r.useState)(!1),v=m[0],b=m[1],p=Object(r.useState)(null),g=p[0],y=p[1],j=Object(r.useCallback)((function(){return O?Promise.resolve():Promise.all([n.e(1659).then(n.bind(null,1840)),Promise.all([n.e(0),n.e(1660)]).then(n.bind(null,1839)),n.e(0).then(n.t.bind(null,1715,7))]).then((function(e){var t=e[0].DocSearchModal;O=t}))}),[]),w=Object(r.useCallback)((function(){j().then((function(){b(!0)}))}),[j,b]),S=Object(r.useCallback)((function(){b(!1)}),[b]),T=Object(r.useCallback)((function(e){j().then((function(){b(!0),y(e.key)}))}),[j,b,y]),M=Object(r.useRef)({navigate:function(e){var t=e.suggestionUrl;d.push(t)}}).current,P=Object(r.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:s(""+t.pathname+t.hash)})}))})).current,B=Object(r.useMemo)((function(){return function(e){return o.a.createElement(C,Object(a.a)({},e,{onClose:S}))}}),[S]),L=Object(r.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e}),[t.docusaurusVersion]);return function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,r=e.onInput,c=e.searchButtonRef;o.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),c&&c.current===document.activeElement&&r&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&r(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,r,c])}({isOpen:v,onOpen:w,onClose:S,onInput:T,searchButtonRef:h}),o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,null,o.a.createElement("link",{rel:"preconnect",href:"https://"+e.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.a.createElement(k,{onTouchStart:j,onFocus:j,onMouseOver:j,onClick:w,ref:h}),v&&Object(c.createPortal)(o.a.createElement(O,Object(a.a)({onClose:S,initialScrollY:window.scrollY,initialQuery:g,navigator:M,transformItems:P,hitComponent:E,resultsFooterComponent:B,transformSearchClient:L},e)),document.body))}t.a=function(){var e=Object(i.a)().siteConfig;return o.a.createElement(j,e.themeConfig.algolia)}},1736:function(e,t,n){"use strict";var a=n(0),r=n(1725);var o=function(e){var t=Object(a.useState)(e),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,r]},c=n(1756);t.a=function(e){var t=Object(a.useState)(!0),n=t[0],i=t[1],l=Object(a.useState)(!1),u=l[0],s=l[1],f=Object(a.useState)(0),d=f[0],h=f[1],m=Object(a.useState)(0),v=m[0],b=m[1],p=Object(a.useCallback)((function(e){null!==e&&b(e.getBoundingClientRect().height)}),[]),g=Object(r.useLocation)(),y=o(g.hash),k=y[0],O=y[1];return Object(c.a)((function(t){var n=t.scrollY;if(e&&(0===n&&i(!0),!(n<v))){if(u)return s(!1),i(!1),void h(n);var a=document.documentElement.scrollHeight-v,r=window.innerHeight;d&&n>=d?i(!1):n+r<a&&i(!0),h(n)}}),[d,v]),Object(a.useEffect)((function(){e&&(i(!0),O(g.hash))}),[g]),Object(a.useEffect)((function(){e&&k&&s(!0)}),[k]),{navbarRef:p,isNavbarVisible:n}}},1753:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},1754:function(e,t,n){"use strict";var a=n(1725),r=n(10),o=n(1722);t.a=function(){var e=Object(a.useHistory)(),t=Object(a.useLocation)(),n=Object(o.a)().siteConfig,c=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return c+"search?q="+encodeURIComponent(e)}}}},1755:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a);function o(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},1756:function(e,t,n){"use strict";var a=n(0),r=n(10),o=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(o()),r=n[0],c=n[1],i=function(){var t=o();c(t),e&&e(t)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i,{passive:!0})}}),t),r}},1777:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),c=d(o),i=d(n(1727)),l=d(n(7)),u=d(n(1778)),s=d(n(1779)),f=n(1780);function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,f.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,f.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,f.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),o=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return c.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:c.default.createElement(u.default,null),unchecked:c.default.createElement(s.default,null)}},h.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},1778:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},1779:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},1780:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}}}]);