(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[17],{1039:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(192),c=n(198),o=n(271),s=n(11),u=n(1040),l=n.n(u),h=n(1041),f=n.n(h),d=Object(s.b)(l.a,f.a),v=[];o.a.start(),o.a.setType("example"),n(1042);var m=o.a.end(),p={example:{text:n(1043),log:m.example}};t.default=Object(r.a)(function(e){return i.a.createElement(c.b,Object.assign({},e,{codes:p,source:d,examples:v}))})},1040:function(e,t){e.exports='# Datum.Form 表单数据处理\n\nForm 表单数据处理辅助类，用来收集和分发数据到输入组件。\n\n## 示例\n\n<code name="example" />\n\n实际使用见 [Form](/components/Form)\n\n## 初始化参数\n\n### removeUndefined *boolean*\n\n是否移除值为 undefined 的数据，默认值为 true。\n\n### onChange *function(data)*\n\n值变化时回调函数。\n\n### value *object*\n\n初始值\n\n## 函数\n\n### getValue *function():object*\n获取当前表单所有对象值。\n\n### setValue *function(object)*\n设置值。新的值会替代当前值。\n\n### set *fuction(name, value)*\n设置数据。\n\n### get *fuction(name)*\n获取单个字段值。\n\n### validateFields *function(names)*\n校验指定字段。names为字段名称数组。\n\n### validateClear *function()*\n清除校验结果。'},1041:function(e,t){e.exports='# Datum.Form\n\nThe auxiliary class of Form that process data for collecting and distributing data to input components.\n\n## Example\n\n<code name="example" />\n\n<br />\n\nSee the example use in [Form](/components/Form)\n\n## Arguments\n\n### removeUndefined *boolean*\n\nWhether to remove the data whose value is undefined. The default value is true.\n\n### onChange *function(data)*\n\nThe callback function when the value is changing.\n\n### value *object*\n\nThe initial value.\n\n## Methods\n\n### getValue *function():object*\nGet all values of the current form.\n\n### setValue *function(object)*\nSet new value, will replace the current value。\n\n### set *fuction(name, value)*\nSet the value specified by name.\n\n### get *fuction(name)*\nGet a single field value.\n\n### validateFields *function(names)*\nVerify specified fields.\n\n### validateClear *function()*\nClear the validate result.'},1042:function(e,t,n){"use strict";n.r(t);var a=new(n(203).a.Form);a.setValue({email:"test@123.com",name:{lastName:"Potter"},favors:["red","yellow"]}),a.set("age",20),a.set("name.firstName","Harry"),console.log(a.get("age")),console.log(a.get("name")),console.log(a.get("name.firstName")),console.log(a.get("name.lastName")),console.log(a.get("favors[1]")),a.set("favors[2]","blue"),console.log(a.get("favors")),console.log(a.getValue())},1043:function(e,t){e.exports="import { Datum } from 'shineout'\n\nconst datum = new Datum.Form()\n\ndatum.setValue({ email: 'test@123.com', name: { lastName: 'Potter' }, favors: ['red', 'yellow'] })\ndatum.set('age', 20)\ndatum.set('name.firstName', 'Harry')\nconsole.log(datum.get('age'))\nconsole.log(datum.get('name'))\nconsole.log(datum.get('name.firstName'))\nconsole.log(datum.get('name.lastName'))\nconsole.log(datum.get('favors[1]'))\ndatum.set('favors[2]', 'blue')\nconsole.log(datum.get('favors'))\nconsole.log(datum.getValue())\n"},191:function(e,t,n){"use strict";n.d(t,"i",function(){return a}),n.d(t,"j",function(){return i}),n.d(t,"k",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"g",function(){return o}),n.d(t,"f",function(){return s}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return l}),n.d(t,"b",function(){return h}),n.d(t,"h",function(){return f}),n.d(t,"d",function(){return d});var a=function(e){return"__CHANGE_SUBSCRIBE_".concat(e,"__")},i=function(e){return"__ERROR_SUBSCRIBE_".concat(e,"__")},r=function(e){return"__UPDATE_SUBSCRIBE_".concat(e,"__")},c="__CHANGE_TOPIC__",o="__VALIDATE_TOPIC__",s="__RESET_TOPIC__",u="__VALIDATE_FORCE_PASS__",l="__IGNORE_VALIDATE__",h="__UPDATE_ERROR_TYPE__",f="__WITH_OUT_DISPATCH__",d="__IGNORE_BIND__"},192:function(e,t,n){"use strict";var h=n(20),f=n(0),d=n.n(f),v=n(230),m=n(36),p=n(14);t.a=function(l){return function(e){var t=Object(f.useState)(""),n=Object(h.a)(t,2),a=n[0],i=n[1],r=Object(f.useState)([]),c=Object(h.a)(r,1)[0],o=e.location.hash,s=Object(f.useCallback)(function(e){e.forEach(function(e){c.push(e)})},[]),u=Object(f.useCallback)(function(){if(o){var e=document.querySelector(o);e&&setTimeout(function(){e.scrollIntoView()},50)}},[o]);Object(f.useEffect)(function(){u();var e=function(){var n=document.documentElement.scrollTop,e=c.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),i(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return d.a.createElement("div",{className:Object(p.f)("_")},d.a.createElement(l,{onHeadingSetted:s}),!e.noNav&&d.a.createElement(v.a,{className:Object(p.f)("sticky"),top:50},d.a.createElement("div",{className:Object(p.f)("nav")},c.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return d.a.createElement("a",{key:t,className:Object(p.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===m.a.location.search.indexOf("?example="))m.a.push("".concat(m.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{m.a.push("".concat(m.a.location.pathname,"#").concat(e));var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},193:function(e,t,n){"use strict";var a=n(222),u=n.n(a),l=Object.prototype.hasOwnProperty;function h(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function f(e,t){if(!e[t])return[];var n=e[t];return Array.isArray(n)?n:[n]}t.a=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(h(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var a=Object.keys(e),i=Object.keys(t),r=f(n,"skip"),c=f(n,"deep");if(a.length!==i.length)return!1;a.sort(function(e,t){return c.indexOf(e)-c.indexOf(t)});for(var o=0;o<a.length;o++){var s=a[o];if(!r.includes(s)&&(!l.call(t,s)||!h(e[s],t[s]))){if(e[s]instanceof Error&&t[s]instanceof Error){if(e[s].message!==t[s].message)return!1;continue}if(!c.includes(s))return!1;if(!u()(e[s],t[s]))return!1}}return!0}},196:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"c",function(){return l}),n.d(t,"b",function(){return h});var r=n(7),c=n(10),o=n(2),a=n(9),i=n(252),s=function(e){function i(e,t,n){var a;return Object(r.a)(this,i),(a=Object(c.a)(this,Object(o.a)(i).call(this))).message=e,a.name=t,a.value=n,a}return Object(a.a)(i,e),i}(Object(i.a)(Error)),u=function e(t){return t instanceof Error?new s(t.message):Array.isArray(t)?t.map(e):t},l=function(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];return new Promise(function(n,a){Promise.all(e).then(function(e){var t=e.find(function(e){return!0!==e});t?a(t):n(!0)}).catch(function(e){a(t?u(e):e)})})},h=function(e,t){return e===t||(e instanceof Error&&t instanceof Error?e.message===t.message:e===t)}},198:function(e,t,n){"use strict";var w=n(0),S=n.n(w),l=n(30),N=n(20),a=n(233),h=n.n(a),f=n(31),d=n(50),A=n(14),v=n(11),i=n(12),c=n.n(i),r=n(234),o=n.n(r),T=(n(235),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,i=e.value,r=Object(w.useRef)(null);return Object(w.useEffect)(function(){var e=r.current;o.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),S.a.createElement("pre",{ref:r,className:c()(n||"lang-jsx",Object(A.a)("pre"))},S.a.createElement("code",null,i))}),P=n(217),s=n(45),u=n(7),m=n(8),p=n(10),b=n(2),g=n(9),O=n(34),y=n(208),D=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(p.a)(this,Object(b.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(g.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(y.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(y.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:S.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(O.b),I=n(59),F=n(36),R=S.a.createElement("div",{className:Object(A.a)("placeholder")},S.a.createElement(s.a,null));function j(e){var t=e.component,n=e.id,a=e.name,i=e.rawText,r=e.title,c=Object(w.useRef)(null),o=Object(w.useState)(!1),s=Object(N.a)(o,2),u=s[0],l=s[1],h=Object(w.useState)(Object(w.createElement)(t)),f=Object(N.a)(h,1)[0],d=Object(w.useState)(),v=Object(N.a)(d,2),m=v[0],p=v[1],b=Object(w.useState)(),g=Object(N.a)(b,1)[0],O=function e(t,n,a){c.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(w.useEffect)(function(){if(c.current)if(u)c.current.style.height="".concat(m,"px");else{var e=m%15;0<e&&O(e,1,g),O((m-e)/15,15,g)}},[u]);var y=function(e){l(!u),g=e},j=function(e){return S.a.createElement("a",{href:"javascript:;",className:Object(A.a)("toggle"),onClick:y.bind(null,e)},S.a.createElement(I.a,{name:u?"code-close":"code"}))},E=i.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),k=F.a.location.search,$="?example=";if(0===k.indexOf($)&&(k=k.replace($,""),a.indexOf(k)<0))return null;var _=r.split("\n"),V=Object(P.a)(_),C=V[0],x=V.slice(1);return C&&(C=C.trim()),S.a.createElement(w.Fragment,null,C&&S.a.createElement("h3",{key:"0",id:n},C),S.a.createElement(D,{placeholder:R},S.a.createElement("div",{className:Object(A.a)("_",u&&"showcode")},S.a.createElement("div",{className:Object(A.a)("body")},f),0<r.length&&S.a.createElement("div",{className:Object(A.a)("desc")},x.map(function(e,t){return S.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),j(!1)),S.a.createElement("div",{ref:c,className:Object(A.a)("code")},S.a.createElement(T,{onHighLight:function(e){p(e)},onClose:y,value:E}),j(!0)))))}j.defaultProps={rawText:""};var E=function(e){var t=e.children,n=Object(w.useState)(!1),a=Object(N.a)(n,2),i=a[0],r=a[1],c=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),o=i?"pre":"div";return S.a.createElement("div",{onClick:function(){r(!i)},className:Object(A.e)("console")},S.a.createElement(o,null,c))};E.defaultProps={children:[]};var k=E;function $(e){var t=e.children,n=Object(l.a)(t[1].props.children);try{n.sort(function(e,t){return e.props.children[0].props.children[0].localeCompare(t.props.children[0].props.children[0])})}catch(e){console.log("sort fail...")}return S.a.createElement("div",{style:{overflow:"auto"}},S.a.createElement("table",{className:"doc-api-table"},t[0],S.a.cloneElement(t[1],{children:n})))}$.defaultProps={};var _=$,V=/^<code name="([\w|-]+)" /,C=/^<example name="([\w|-]+)"/;function x(e){var t=e.onHeadingSetted,r=e.codes,c=e.examples,n=e.source,a=Object(w.useState)([]),i=Object(N.a)(a,1)[0],o=Object(w.useState)({}),s=Object(N.a)(o,1)[0];Object(w.useEffect)(function(){t&&t(i)},[]);var u=function(e){i.push(e)};return i=[],S.a.createElement(h.a,{className:Object(A.e)("_"),source:n,renderers:{code:T,heading:function(e){var t,n,a=e.level,i=e.children,r="".concat(a,"-").concat(i[0]),c="h".concat(a);if("object"==typeof i[0])return S.a.createElement(c,null,i);if(!s[r]){var o="heading-".concat((t=a,n=i[0],4===t?Object(d.b)():"".concat(t,"-").concat((n||"").replace(/[\W|-]/g,"-"))));2!==a&&3!==a||u({id:o,level:a,children:i}),s[r]=S.a.createElement(c,{id:o},i)}return s[r]},html:function(e){if("<example />"===e.value)return function(){if(s.examples)return s.examples;if(!c)return S.a.createElement("div",null);var e=Object(v.b)("示例","Example"),t="heading-example-h";return u({id:t,level:2,children:[e]}),s.examples=[S.a.createElement("h2",{key:"h",id:t},e)].concat(Object(l.a)(c.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),i=Object(N.a)(a,1)[0];return u({id:n,level:3,children:[i]}),S.a.createElement(j,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),s.examples}();var t=e.value.match(C);if(t)return function(t){var e="example-".concat(t);if(!s[e]){var n=(c||[]).find(function(e){return e.name===t});s[e]=n?S.a.createElement(j,n):null}return s[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return S.a.createElement("br",null);var n,a,i=e.value.match(V);return i?(n=i[1],(a=r[n])?[S.a.createElement(T,{key:"cb",value:a.text})].concat(Object(l.a)(a.log.map(function(e,t){return S.a.createElement(k,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:_,link:function(e){var t=0===e.href.indexOf("http")?"_blank":void 0;return t?S.a.createElement("a",{href:e.href,target:t},e.children):S.a.createElement(f.a,{to:e.href,target:t},e.children)}}})}x.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var U=n(60),H=n(192);n.d(t,"a",function(){return G});var B,L=((B=function(e){var t=Object(w.useState)(e.source),n=Object(N.a)(t,2),a=n[0],i=n[1];return Object(w.useEffect)(function(){e.loader&&e.loader().then(function(e){i(e.default)})},[]),a?S.a.createElement(x,Object.assign({},e,{source:a})):S.a.createElement(U.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(w.memo)(B));t.b=L;function G(t,n){return Object(H.a)(function(e){return S.a.createElement(L,Object.assign({},e,{noNav:n,loader:t}))})}},203:function(e,t,n){"use strict";var a=n(209),p=n(7),b=n(8),g=n(193),O=n(191),i=function(){function u(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};Object(p.a)(this,u);var t=e.format,n=e.onChange,a=e.separator,i=e.value,r=e.prediction,c=e.distinct,o=e.disabled,s=e.limit;this.distinct=c,this.limit=s,this.separator=a,this.initFormat(t),this.$events={},this.$cachedDisabled={},this.setDisabled(o),r&&(this.prediction=r),this.setValue(i,O.h),this.onChange=n}return Object(b.a)(u,[{key:"setDisabled",value:function(e){this.$cachedDisabled!==e&&(this.$cachedDisabled=e,this.disabled=function(){switch(typeof e){case"boolean":return e;case"function":return e.apply(void 0,arguments);default:return!1}})}},{key:"handleChange",value:function(e){if(this.$values=e,this.dispatch(O.a),this.onChange){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];this.onChange.apply(this,[this.getValue()].concat(n))}}},{key:"add",value:function(e){var t=this;if(null!=e){1===this.limit&&(this.$values=[]);var n=Array.isArray(e)?e:[e];n=n.filter(function(e){return!t.disabled(e)&&(!t.distinct||!t.check(e))});var a=[],i=!0,r=!1,c=void 0;try{for(var o,s=n[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var u=o.value,l=this.format(u);void 0!==l&&a.push(l)}}catch(e){r=!0,c=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw c}}this.handleChange(this.values.concat(a),e,!0)}}},{key:"set",value:function(e){this.$values=[],this.add(e)}},{key:"check",value:function(e){if(this.prediction){for(var t=0,n=this.values.length;t<n;t++)if(this.prediction(this.values[t],e))return!0;return!1}return 0<=this.values.indexOf(this.format(e))}},{key:"clear",value:function(){this.values=[]}},{key:"dispatch",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var i=this.$events[e];i&&i.forEach(function(e){return e.apply(void 0,n)})}},{key:"initFormat",value:function(t){switch(typeof t){case"string":this.format=function(e){return e[t]};break;case"function":this.format=function(e){return t(e)};break;default:this.format=function(e){return e}}}},{key:"defaultPrediction",value:function(e,t){return e===this.format(t)}},{key:"remove",value:function(e){var t=this;if(e){var n=Array.isArray(e)?e:[e];n=n.filter(function(e){return!t.disabled(e)});var a=[],i=this.prediction||this.defaultPrediction.bind(this),r=!0,c=!1,o=void 0;try{e:for(var s,u=this.values[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){for(var l=s.value,h=0;h<n.length;h++)if(n[h].IS_NOT_MATCHED_VALUE||i(l,n[h])){n.splice(h,1);continue e}a.push(l)}}catch(e){c=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(c)throw o}}this.handleChange(a,e,!1)}}},{key:"subscribe",value:function(e,t){this.$events[e]||(this.$events[e]=[]);var n=this.$events[e];t in n||n.push(t)}},{key:"unsubscribe",value:function(e,t){this.$events[e]&&(this.$events[e]=this.$events[e].filter(function(e){return e!==t}))}},{key:"getValue",value:function(){var e=this.values;return 1===this.limit?e=this.values[0]:this.separator&&(e=this.values.join(this.separator)),this.$cachedValue=e}},{key:"resetValue",value:function(e,t){this.$values=e,this.onChange&&!t&&this.onChange(this.getValue()),this.dispatch(O.a),this.dispatch("set-value")}},{key:"formatValue",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];return 1!==this.limit||Array.isArray(e)?e?Array.isArray(e)?e:"string"==typeof e?this.separator?e.split(this.separator).map(function(e){return e.trim()}):(console.warn("Select separator parameter is empty."),[e]):(console.error(new Error("Select values is not valid.")),[]):[]:[e]}},{key:"setValue",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];(1<arguments.length?arguments[1]:void 0)===O.h?this.$values=this.formatValue(e):this.resetValue(this.formatValue(e),Object(g.a)(this.$cachedValue,e)),this.$cachedValue=this.getValue()}},{key:"length",get:function(){return this.$values.length}},{key:"values",get:function(){return this.$values},set:function(e){this.$values=e,this.dispatch(O.a),this.onChange&&this.onChange(this.getValue())}}]),u}(),y=n(25),j=n(10),E=n(2),k=n(9),r=n(0),$=n.n(r),c=n(49),_={form:a.a,list:i},o=Object(c.b)(function(e,a){var t,n,i=e||{},r=i.type,c=void 0===r?"list":r,o=i.key,s=void 0===o?"value":o,u=i.limit,l=void 0===u?0:u,h=i.bindProps,f=void 0===h?[]:h,d=i.ignoreUndefined,v=i.pure,m=_[c];return n=t=function(e){function o(n){var e;Object(p.a)(this,o),e=Object(j.a)(this,Object(E.a)(o).call(this,n));var t=n.datum,a=n.onChange,i=n.initValidate,r=n[s];if(t instanceof m)e.datum=t;else{var c=f.reduce(function(e,t){return e[t]=n[t],e},{value:r,limit:l,initValidate:i});e.datum=new m(Object.assign(c,t))}return a&&(e.datum.onChange=a),e}return Object(k.a)(o,e),Object(b.a)(o,[{key:"componentDidMount",value:function(){this.prevValues=this.props[s]}},{key:"componentDidUpdate",value:function(e){e.onChange!==this.props.onChange&&(this.datum.onChange=this.props.onChange);var t=this.props[s];Object(g.a)(t,this.prevValues)||(this.setValue(this.props.initValidate?void 0:O.e),this.prevValues=t)}},{key:"setValue",value:function(e){var t=this.props[s];d&&void 0===t||this.datum.setValue(t,e)}},{key:"render",value:function(){var e=this.props,t=e.onDatumBind,n=Object(y.a)(e,["onDatumBind"]);return t&&t(this.datum),f.includes("disabled")&&void 0!==n.disabled&&this.datum.setDisabled(n.disabled),"list"===c&&this.setValue(O.h),$.a.createElement(a,Object.assign({},n,{datum:this.datum}))}}]),o}(void 0===v||v?$.a.PureComponent:$.a.Component),t.defaultProps={initValidate:!1},n});t.a={Form:a.a,List:i,hoc:o}},208:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return h});var a=n(216),i=n(50),r=n(44),c={},o=null,s=!1,u=r.b.height;function l(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>u){var n=Object(i.b)();return c[n]=e,n}return e.render(),null}function h(e){e&&delete c[e]}document.addEventListener("scroll",function(){o&&clearTimeout(o),o=setTimeout(function(){s||(s=!0,Object.keys(c).forEach(function(e){var t=c[e],n=t.element,a=t.render,i=n.getBoundingClientRect();i.bottom<0||i.top>u||(delete c[e],a())}),s=!1),o=null},80)},a.a)},209:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n(30),u=n(7),a=n(8),i=n(222),r=n.n(i),c=n(58),l=n(62),h=n(43),f=n(4),d=n(196),v=n(191),s=function(){function s(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};Object(u.a)(this,s);var t=e.removeUndefined,n=void 0===t||t,a=e.rules,i=e.onChange,r=e.value,c=e.error,o=e.initValidate;this.rules=a,this.onChange=i,this.removeUndefined=n,this.$inputNames={},this.$values={},this.$defaultValues={},this.$validator={},this.$events={},this.$errors={},this.deepSetOptions={removeUndefined:n,forceSet:!0},r&&this.setValue(r,o?void 0:v.e),c&&this.setError("",c)}return Object(a.a)(s,[{key:"handleChange",value:function(){this.onChange&&this.onChange(this.getValue())}},{key:"reset",value:function(){this.$errors={},this.setValue(Object(c.f)(Object(l.b)(this.$defaultValues)),v.c,!0),this.handleChange(),this.dispatch(v.f)}},{key:"get",value:function(e){var t=this;return Array.isArray(e)?e.map(function(e){return t.get(e)}):Object(h.a)(this.$values,e)}},{key:"set",value:function(e,t,n){Object(f.k)(e)&&(t=Object(h.f)(e),e=Object.keys(e)),Object(f.a)(e)?this.setArrayValue(e,t):t!==this.get(e)&&(Object(h.d)(this.$values,e,t,this.deepSetOptions),this.$inputNames[e]&&(this.dispatch(Object(v.k)(e),t,e),this.dispatch(Object(v.i)(e))),n&&this.publishValue(e,v.c),this.dispatch(v.a),this.handleChange())}},{key:"setArrayValue",value:function(e,n){var a=this;e.forEach(function(e,t){Object(h.d)(a.$values,e,n[t],a.deepSetOptions)}),e.forEach(function(e,t){a.$inputNames[e]&&(a.dispatch(Object(v.k)(e),n[t],e),a.dispatch(Object(v.i)(e)))}),this.dispatch(v.a),this.handleChange()}},{key:"insert",value:function(e,t,n){this.insertError(e,t,void 0);var a=this.get(e);a?(a.splice(t,0,n),this.publishValue(e,v.e),this.publishError(e)):this.set(e,[n])}},{key:"splice",value:function(e,t){this.spliceError(e,t),this.get(e).splice(t,1),this.publishValue(e,v.e),this.publishError(e)}},{key:"remove",value:function(e){Object(h.c)(this.$values,e)}},{key:"publishValue",value:function(e,t){var n=this,a="".concat(e,"["),i="".concat(e,".");Object.keys(this.$inputNames).filter(function(e){return 0===e.indexOf(a)||0===e.indexOf(i)}).forEach(function(e){n.dispatch(Object(v.k)(e),n.get(e),e,t)})}},{key:"getError",value:function(e,t){return t?this.$errors[e]:Object(c.b)(e,this.$errors)}},{key:"setError",value:function(e,t,n){void 0===t?delete this.$errors[e]:this.$errors[e]=t,this.dispatch(Object(v.j)(e),this.getError(e),e,v.b),n&&this.publishError(e)}},{key:"insertError",value:function(e,t,n){Object(c.d)(this.$errors,e,t,n)}},{key:"spliceError",value:function(e,t){Object(c.e)(this.$errors,e,t)}},{key:"publishError",value:function(e){var t=this,n="".concat(e,"["),a="".concat(e,".");Object.keys(this.$inputNames).filter(function(e){return 0===e.indexOf(n)||0===e.indexOf(a)}).forEach(function(e){t.dispatch(Object(v.j)(e),t.getError(e),e,v.b)})}},{key:"getRule",value:function(e){return this.rules&&Object(h.a)(this.rules,e)||[]}},{key:"getValue",value:function(){return Object(l.a)(this.$values)}},{key:"setValue",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=1<arguments.length?arguments[1]:void 0;!(2<arguments.length?arguments[2]:void 0)&&r()(e,this.$values)||(this.$values=Object(h.b)({},e,{clone:!0}),setTimeout(function(){Object.keys(t.$inputNames).sort(function(e,t){return e.length-t.length}).forEach(function(e){t.dispatch(Object(v.k)(e),t.get(e),e,n),t.dispatch(Object(v.i)(e))}),t.dispatch(v.a)}))}},{key:"bind",value:function(e,t,n,a){this.$inputNames[e]&&console.warn('There is already an item with name "'.concat(e,'" exists. The name props must be unique.')),void 0!==n&&null==this.get(e)&&(this.set(e,n,!0),this.dispatch(Object(v.i)(e)),this.dispatch(v.a)),n&&(this.$defaultValues[e]=Object(l.b)(n)),this.$validator[e]=a,this.$inputNames[e]=!0,this.subscribe(Object(v.k)(e),t),this.subscribe(Object(v.j)(e),t)}},{key:"unbind",value:function(e){var t=this;Array.isArray(e)?e.forEach(function(e){return t.unbind(e)}):(this.unsubscribe(Object(v.k)(e)),this.unsubscribe(Object(v.j)(e)),delete this.$inputNames[e],delete this.$validator[e],delete this.$errors[e],delete this.$defaultValues[e],Object(h.c)(this.$values,e),this.formUnmount||setTimeout(function(){t.handleChange()}))}},{key:"dispatch",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var i=this.$events[e];i&&i.forEach(function(e){return e.apply(void 0,n)})}},{key:"subscribe",value:function(e,t){this.$events[e]||(this.$events[e]=[]);var n=this.$events[e];t in n||n.push(t)}},{key:"unsubscribe",value:function(e,t){this.$events[e]&&(t?this.$events[e]=this.$events[e].filter(function(e){return e!==t}):delete this.$events[e])}},{key:"validate",value:function(r){var c=this;return new Promise(function(n,a){var e=Object.keys(c.$validator),t=c.getValue(),i=[].concat(Object(o.a)(e.map(function(e){return c.$validator[e](c.get(e),t,r)})),Object(o.a)((c.$events[v.g]||[]).map(function(e){return e()})));Promise.all(i).then(function(e){var t=e.find(function(e){return!0!==e});void 0===t?n(!0):a(t)}).catch(function(e){a(new d.a(e))})})}},{key:"validateFieldsByName",value:function(t,n){var a=this;if(!t||"string"!=typeof t)return Promise.reject(new Error('Name expect a string, get "'.concat(t,'"')));var i=[],r=this.getValue();return Object.keys(this.$validator).forEach(function(e){e!==t&&0!==e.indexOf(t)||i.push(a.$validator[e](a.get(e),r,n))}),Object(d.c)(i)}},{key:"validateFields",value:function(e,t){var n=this;Array.isArray(e)||(e=[e]);var a=e.map(function(e){return n.validateFieldsByName(e,t)});return Object(d.c)(a)}},{key:"validateClear",value:function(){var t=this,e=Object.keys(this.$validator);this.$errors={};var n=e.map(function(e){return t.$validator[e](v.c)});Promise.all(n)}}]),s}()},271:function(e,t,n){"use strict";var a=n(7),i=n(8),r=window.console,c=function(){function e(){Object(a.a)(this,e),this.logs={default:[]},this.current=this.logs.default}return Object(i.a)(e,[{key:"setType",value:function(e){this.logs[e]||(this.logs[e]=[]),this.current=this.logs[e]}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.map(function(e){return"".concat((t=e,JSON.stringify(t,function(e,t){return"function"==typeof t?"fn#fn".concat(t.toString(),"fn#fn"):t},2)));var t});this.current.push(a)}}]),e}();t.a={start:function(){window.console=new c},setType:function(e){window.console.setType(e)},end:function(){var e=window.console.logs;return window.console=r,e}}}}]);