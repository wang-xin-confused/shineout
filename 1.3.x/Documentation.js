(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[19],{1392:function(e,t,n){"use strict";n.r(t);var a=n(30),c=n(198),r=n(295),o=["API",{name:"Props",cn:"约定",level:2,component:Object(c.a)(function(){return n.e(51).then(n.t.bind(null,1382,7))},!0)},{name:"Classname",level:2,component:Object(c.a)(function(){return n.e(50).then(n.t.bind(null,1383,7))},!0)},"CHANGELOG"].concat(Object(a.a)(["1.x.x"].map(function(e){return{name:e,level:2,component:Object(c.a)(function(){return n(459)("./".concat(e,".md"))},!0)}})));t.default=Object(r.a)(o)},192:function(e,t,n){"use strict";var d=n(20),m=n(0),f=n.n(m),h=n(230),b=n(36),p=n(14);t.a=function(u){return function(e){var t=Object(m.useState)(""),n=Object(d.a)(t,2),a=n[0],c=n[1],r=Object(m.useState)([]),o=Object(d.a)(r,1)[0],l=e.location.hash,i=Object(m.useCallback)(function(e){e.forEach(function(e){o.push(e)})},[]),s=Object(m.useCallback)(function(){if(l){var e=document.querySelector(l);e&&setTimeout(function(){e.scrollIntoView()},50)}},[l]);Object(m.useEffect)(function(){s();var e=function(){var n=document.documentElement.scrollTop,e=o.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),c(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return f.a.createElement("div",{className:Object(p.f)("_")},f.a.createElement(u,{onHeadingSetted:i}),!e.noNav&&f.a.createElement(h.a,{className:Object(p.f)("sticky"),top:50},f.a.createElement("div",{className:Object(p.f)("nav")},o.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return f.a.createElement("a",{key:t,className:Object(p.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===b.a.location.search.indexOf("?example="))b.a.push("".concat(b.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{b.a.push("".concat(b.a.location.pathname,"#").concat(e));var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},198:function(e,t,n){"use strict";var C=n(0),T=n.n(C),u=n(30),L=n(20),a=n(233),d=n.n(a),m=n(31),f=n(50),W=n(14),h=n(11),c=n(12),o=n.n(c),r=n(234),l=n.n(r),z=(n(235),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,c=e.value,r=Object(C.useRef)(null);return Object(C.useEffect)(function(){var e=r.current;l.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),T.a.createElement("pre",{ref:r,className:o()(n||"lang-jsx",Object(W.a)("pre"))},T.a.createElement("code",null,c))}),I=n(217),i=n(45),s=n(7),b=n(8),p=n(10),v=n(2),O=n(9),E=n(34),j=n(208),D=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(p.a)(this,Object(v.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(O.a)(n,e),Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(j.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(j.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:T.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(E.b),H=n(59),R=n(36),_=T.a.createElement("div",{className:Object(W.a)("placeholder")},T.a.createElement(i.a,null));function g(e){var t=e.component,n=e.id,a=e.name,c=e.rawText,r=e.title,o=Object(C.useRef)(null),l=Object(C.useState)(!1),i=Object(L.a)(l,2),s=i[0],u=i[1],d=Object(C.useState)(Object(C.createElement)(t)),m=Object(L.a)(d,1)[0],f=Object(C.useState)(),h=Object(L.a)(f,2),b=h[0],p=h[1],v=Object(C.useState)(),O=Object(L.a)(v,1)[0],E=function e(t,n,a){o.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(C.useEffect)(function(){if(o.current)if(s)o.current.style.height="".concat(b,"px");else{var e=b%15;0<e&&E(e,1,O),E((b-e)/15,15,O)}},[s]);var j=function(e){u(!s),O=e},g=function(e){return T.a.createElement("a",{href:"javascript:;",className:Object(W.a)("toggle"),onClick:j.bind(null,e)},T.a.createElement(H.a,{name:s?"code-close":"code"}))},y=c.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),w=R.a.location.search,k="?example=";if(0===w.indexOf(k)&&(w=w.replace(k,""),a.indexOf(w)<0))return null;var x=r.split("\n"),S=Object(I.a)(x),N=S[0],P=S.slice(1);return N&&(N=N.trim()),T.a.createElement(C.Fragment,null,N&&T.a.createElement("h3",{key:"0",id:n},N),T.a.createElement(D,{placeholder:_},T.a.createElement("div",{className:Object(W.a)("_",s&&"showcode")},T.a.createElement("div",{className:Object(W.a)("body")},m),0<r.length&&T.a.createElement("div",{className:Object(W.a)("desc")},P.map(function(e,t){return T.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),g(!1)),T.a.createElement("div",{ref:o,className:Object(W.a)("code")},T.a.createElement(z,{onHighLight:function(e){p(e)},onClose:j,value:y}),g(!0)))))}g.defaultProps={rawText:""};var y=function(e){var t=e.children,n=Object(C.useState)(!1),a=Object(L.a)(n,2),c=a[0],r=a[1],o=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),l=c?"pre":"div";return T.a.createElement("div",{onClick:function(){r(!c)},className:Object(W.e)("console")},T.a.createElement(l,null,o))};y.defaultProps={children:[]};var w=y;function k(e){var t=e.children,n=Object(u.a)(t[1].props.children);try{n.sort(function(e,t){return e.props.children[0].props.children[0].localeCompare(t.props.children[0].props.children[0])})}catch(e){console.log("sort fail...")}return T.a.createElement("div",{style:{overflow:"auto"}},T.a.createElement("table",{className:"doc-api-table"},t[0],T.a.cloneElement(t[1],{children:n})))}k.defaultProps={};var x=k,S=/^<code name="([\w|-]+)" /,N=/^<example name="([\w|-]+)"/;function P(e){var t=e.onHeadingSetted,r=e.codes,o=e.examples,n=e.source,a=Object(C.useState)([]),c=Object(L.a)(a,1)[0],l=Object(C.useState)({}),i=Object(L.a)(l,1)[0];Object(C.useEffect)(function(){t&&t(c)},[]);var s=function(e){c.push(e)};return c=[],T.a.createElement(d.a,{className:Object(W.e)("_"),source:n,renderers:{code:z,heading:function(e){var t,n,a=e.level,c=e.children,r="".concat(a,"-").concat(c[0]),o="h".concat(a);if("object"==typeof c[0])return T.a.createElement(o,null,c);if(!i[r]){var l="heading-".concat((t=a,n=c[0],4===t?Object(f.b)():"".concat(t,"-").concat((n||"").replace(/[\W|-]/g,"-"))));2!==a&&3!==a||s({id:l,level:a,children:c}),i[r]=T.a.createElement(o,{id:l},c)}return i[r]},html:function(e){if("<example />"===e.value)return function(){if(i.examples)return i.examples;if(!o)return T.a.createElement("div",null);var e=Object(h.b)("示例","Example"),t="heading-example-h";return s({id:t,level:2,children:[e]}),i.examples=[T.a.createElement("h2",{key:"h",id:t},e)].concat(Object(u.a)(o.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),c=Object(L.a)(a,1)[0];return s({id:n,level:3,children:[c]}),T.a.createElement(g,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),i.examples}();var t=e.value.match(N);if(t)return function(t){var e="example-".concat(t);if(!i[e]){var n=(o||[]).find(function(e){return e.name===t});i[e]=n?T.a.createElement(g,n):null}return i[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return T.a.createElement("br",null);var n,a,c=e.value.match(S);return c?(n=c[1],(a=r[n])?[T.a.createElement(z,{key:"cb",value:a.text})].concat(Object(u.a)(a.log.map(function(e,t){return T.a.createElement(w,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:x,link:function(e){var t=0===e.href.indexOf("http")?"_blank":void 0;return t?T.a.createElement("a",{href:e.href,target:t},e.children):T.a.createElement(m.a,{to:e.href,target:t},e.children)}}})}P.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var B=n(60),M=n(192);n.d(t,"a",function(){return q});var U,F=((U=function(e){var t=Object(C.useState)(e.source),n=Object(L.a)(t,2),a=n[0],c=n[1];return Object(C.useEffect)(function(){e.loader&&e.loader().then(function(e){c(e.default)})},[]),a?T.a.createElement(P,Object.assign({},e,{source:a})):T.a.createElement(B.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(C.memo)(U));t.b=F;function q(t,n){return Object(M.a)(function(e){return T.a.createElement(F,Object.assign({},e,{noNav:n,loader:t}))})}},208:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return d});var a=n(216),c=n(50),r=n(44),o={},l=null,i=!1,s=r.b.height;function u(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>s){var n=Object(c.b)();return o[n]=e,n}return e.render(),null}function d(e){e&&delete o[e]}document.addEventListener("scroll",function(){l&&clearTimeout(l),l=setTimeout(function(){i||(i=!0,Object.keys(o).forEach(function(e){var t=o[e],n=t.element,a=t.render,c=n.getBoundingClientRect();c.bottom<0||c.top>s||(delete o[e],a())}),i=!1),l=null},80)},a.a)},216:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return s});var a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"},c="transform";function r(){return c}function o(){if(!window.getComputedStyle)return!1;var t,n=document.createElement("p");return document.body.insertBefore(n,null),Object.keys(a).forEach(function(e){void 0!==n.style[e]&&(n.style[e]="translate3d(1px,1px,1px)",c=e,t=window.getComputedStyle(n).getPropertyValue(a[e]))}),document.body.removeChild(n),void 0!==t&&0<t.length&&"none"!==t}var l=!1;try{var i=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("test",null,i)}catch(e){}var s=!!l&&{passive:!0}},230:function(e,t,n){"use strict";var a=n(15),i=n(35),c=n(7),r=n(8),o=n(10),l=n(2),s=n(21),u=n(9),d=n(3),m=n(0),f=n.n(m),h=n(34),b=n(53),p=n(216),v=n(17),O=n(44),E=["scroll","resize","pageshow","load"],j=Object(b.a)("position","sticky"),g=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(o.a)(this,Object(l.a)(n).call(this,e))).state={},t.bindElement=t.bindElement.bind(Object(d.a)(Object(d.a)(t))),t.bindPlaceholder=t.bindPlaceholder.bind(Object(d.a)(Object(d.a)(t))),t.handlePosition=t.handlePosition.bind(Object(d.a)(Object(d.a)(t))),t}return Object(u.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){Object(s.a)(Object(l.a)(n.prototype),"componentDidMount",this).call(this);var e=this.props.target;this.targetElement=Object(b.e)(this.element,e),this.handlePosition(),this.bindScroll()}},{key:"componentWillUnmount",value:function(){Object(s.a)(Object(l.a)(n.prototype),"componentWillUnmount",this).call(this),this.unbindScroll(),this.scrollTimer&&clearTimeout(this.scrollTimer)}},{key:"getStyle",value:function(e,t,n,a){var c,r=this.props.style.zIndex,o=void 0===r?900:r,l=(c={position:"fixed",left:n,width:a},Object(i.a)(c,e,t),Object(i.a)(c,"zIndex",o),c);return this.targetElement&&(j?l.position="sticky":(l.position="absolute",l.transform="translateY(".concat(t).concat(this.targetElement.scrollTop,"px)"),delete l.left)),l}},{key:"setPosition",value:function(){var e,t,n=this.props,a=n.bottom,c=n.top,r=n.target,o=this.state,l=o.mode,i=o.scrollWidth,s=this.element.getBoundingClientRect(),u=(this.targetElement||document.body).getBoundingClientRect(),d=this.placeholder?this.placeholder.getBoundingClientRect():null,m=O.b.height,f={width:s.width,height:r&&j?0:s.height},h=c,b=m-a;this.targetElement&&(h+=u.top,b=u.bottom-a),void 0!==c&&"bottom"!==l&&(s.top<h?(this.setState({scrollWidth:u.width,mode:"top"}),e=this.getStyle("top",c,s.left,s.width),t=f):d&&s.top<d.top?r&&s.top===h||(this.setState({mode:""}),e={},t=null):this.targetElement&&d?(e=this.getStyle("top",c,s.left,s.width),t=f):i&&d&&i!==u.width&&(this.setState({scrollWidth:u.width,mode:"top"}),e=this.getStyle("top",c,d.left,d.width),t=f)),void 0!==a&&"top"!==l&&(s.bottom>b?(this.setState({scrollWidth:u.width,mode:"bottom"}),e=this.getStyle("bottom",a,s.left,s.width),t=f):d&&(this.targetElement?u.bottom:s.bottom)>d.bottom?(this.setState({mode:""}),e={},t=null):this.targetElement&&d?(e=this.getStyle("bottom",a,s.left,s.width),t=f):i&&d&&i!==u.width&&(this.setState({scrollWidth:u.width,mode:"bottom"}),e=this.getStyle("bottom",a,d.left,d.width),t=f)),void 0!==t&&this.setState({placeholder:t}),e&&this.setState({style:e})}},{key:"handlePosition",value:function(){var e=this;this.locked?this.scrollCount+=1:(this.locked=!0,this.scrollCount=0,this.setPosition(),this.scrollTimer=setTimeout(function(){e.locked=!1,0<e.scrollCount&&e.handlePosition()},48))}},{key:"bindElement",value:function(e){this.element=e}},{key:"bindPlaceholder",value:function(e){this.placeholder=e}},{key:"bindScroll",value:function(){var t=this;this.targetElement?this.targetElement.addEventListener("scroll",this.handlePosition,p.a):E.forEach(function(e){window.addEventListener(e,t.handlePosition)})}},{key:"unbindScroll",value:function(){var t=this;this.targetElement?this.targetElement.removeEventListener("scroll",this.handlePosition):E.forEach(function(e){window.removeEventListener(e,t.handlePosition)})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.target,c=this.state.placeholder,r=this.props.style,o=this.state.style;return a&&j&&(r=Object.assign({},r,o),o={}),f.a.createElement("div",{style:r,className:n},f.a.createElement("div",{ref:this.bindElement,style:o},t),c&&f.a.createElement("div",{ref:this.bindPlaceholder,style:c}))}}]),n}(h.b);g.defaultProps=Object(a.a)({},v.a),g.displayName="ShineoutSticky",t.a=g},295:function(e,t,n){"use strict";var u=n(20),d=n(0),m=n.n(d),f=n(31),h=n(24),b=n(230),p=n(11),v=n(60),O=n(14),E=n(59),j=["Datum.Form","Datum.List"];function g(e,t){return""===t.path?e:"".concat(e,"/").concat(t.path||t.name)}t.a=function(s){return function(e){var n=e.match.url,t=s.find(function(e){return"string"!=typeof e}),a=(e.history.location||{search:""}).search;0===a.indexOf("?example=")&&a.replace("?example=","");var c=Object(d.useState)(window.innerWidth<979),r=Object(u.a)(c,2),o=r[0],l=r[1],i=function(){if(!(979<window.innerWidth)){var e=document.querySelector("#-shineout-menu"),t=!o;t?(l(t),setTimeout(function(){e&&(e.style.display="none")},400)):(setTimeout(function(){return l(t)},16),e&&(e.style.display="block"))}};return Object(d.useEffect)(function(){var e=function(){l(window.innerWidth<979)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),m.a.createElement(d.Fragment,null,m.a.createElement("div",{tabIndex:"-1",className:Object(O.d)("nav-open-close")},m.a.createElement(E.a,{name:o?"Menu":"close",onClick:i})),m.a.createElement(b.a,{top:0},m.a.createElement("div",{id:"-shineout-menu",className:Object(O.d)("menu",o&&"hidden")},s.filter(function(e){return-1===j.indexOf(e.name)}).map(function(e,t){return"string"==typeof e?m.a.createElement("label",{key:t},e):m.a.createElement(f.b,{className:Object(O.d)(2===e.level&&"sub"),activeClassName:Object(O.d)("active"),key:e.name,to:g(n,e),onClick:i},m.a.createElement("p",null,e.name,m.a.createElement("span",null,Object(p.b)(e.cn))))}))),m.a.createElement("div",{className:Object(O.d)("page")},m.a.createElement(d.Suspense,{fallback:m.a.createElement(v.a,null)},m.a.createElement(h.d,null,m.a.createElement(h.a,{from:n,exact:!0,to:g(n,t)}),s.filter(function(e){return"object"==typeof e}).map(function(e){return m.a.createElement(h.b,{key:e.name+a,path:g(n,e),component:e.component,onEnter:function(){i.bind(null)}})})))))}}},459:function(e,t,a){var c={"./0.x.x.md":[1384,53],"./1.x.x.md":[1385,54]};function n(t){var n=c[t];return n?a.e(n[1]).then(function(){var e=n[0];return a.t(e,7)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return Object.keys(c)},n.id=459,e.exports=n}}]);