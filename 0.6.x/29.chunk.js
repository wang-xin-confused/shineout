(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{194:function(e,n){e.exports="# Radio\n\n<example />"},195:function(e,n){e.exports="# Radio *单选框*\n单选框通常需要一组 (Radio.Group) 使用。\n\n<example />\n\n## API\n\nRadio 不能单独使用\n\n### Radio.Group\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | any | | 默认值，设置 value 时，会覆盖 defaultValue |\n| data | array | 必填 | 数据项 |\n| datum | object | 无 | 数据处理，可以传入一个 [Datum.List](#/components/Datum.List) 对象，或者 Datum.List 配置 |\n| disabled | bool | false | 是否禁用 |\n| keygen | string \\| function(obj):string | index | 生成每一项key的辅助方法<br />不填的情况下，会使用index(不推荐，在某些情况下可能会有问题)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d) => d.id |\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(value) | 无 | value 为 datum.getValue() |\n| renderItem | string \\| function(d) | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| value | any | | 在Form中，value会被表单接管，value无效 |"},233:function(e,n){},234:function(e,n){},235:function(e,n){},5:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=(t(3),t(105)),i=t.n(a),l=t(42),u=t(28),c=t(2),s=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function d(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var f=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r=d(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),r.bindElement=function(e){r.element=e},d(r,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["PureComponent"]),s(n,[{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){window.hljs.highlightBlock(this.element),this.props.onHighLight&&this.props.onHighLight(this.element.offsetHeight)}},{key:"render",value:function(){return o.a.createElement("pre",null,o.a.createElement("code",{ref:this.bindElement,className:this.props.language},this.props.value))}}]),n}();f.defaultProps={language:""};var p=f,m=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw a}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var b=Object(u.a)(t(235),"example"),y=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t.setCodeBlockHeight=function(e){t.codeHeight=e},t.bindCodeBlock=function(e){t.codeblock=e},t.state={showcode:!1};var r=e.title.split("\n"),o=m(r,1)[0];return t.id="h-"+Object(l.a)(o),e.appendHeading({id:t.id,level:3,children:[o]}),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["PureComponent"]),h(n,[{key:"collapse",value:function(e,n,t){var r=this;this.codeblock.style.height=e*(n-1)+"px",n>1&&setTimeout(function(){r.collapse(e,n-1,t)},16),t&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(e){var n=this,t=!this.state.showcode;this.setState({showcode:t},function(){if(t)n.codeblock.style.height=n.codeHeight+"px";else{var r=n.codeHeight%15;r>0&&n.collapse(r,1,e),n.collapse((n.codeHeight-r)/15,15,e)}})}},{key:"renderCodeHandle",value:function(e){var n=this.state.showcode;return o.a.createElement("a",{href:"javascript:;",className:b("toggle"),onClick:this.toggleCode.bind(this,e)},"<",n?"/":" ",">")}},{key:"render",value:function(){var e,n=this.props,t=n.component,a=n.rawText,i=this.state.showcode,l=a.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),u=this.props.title.split("\n"),c=(e=u,Array.isArray(e)?e:Array.from(e)),s=c[0],d=c.slice(1);return o.a.createElement(r.Fragment,null,o.a.createElement("div",{id:this.id,className:b("title")},s,d.length>0&&o.a.createElement("div",{className:b("sub-title")},d.map(function(e,n){return o.a.createElement("div",{key:n,dangerouslySetInnerHTML:{__html:e}})}))),o.a.createElement("div",{className:b("_",i&&"showcode")},o.a.createElement("div",{className:b("body")},Object(r.createElement)(t),this.renderCodeHandle(!1)),o.a.createElement("div",{ref:this.bindCodeBlock,className:b("code")},this.renderCodeHandle(!0),o.a.createElement(p,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,language:"jsx",value:l}))))}}]),n}();y.defaultProps={appendHeading:function(){},rawText:""};var g=y,v=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var w=Object(u.a)(t(234),"markdown"),E=/^<code name="([\w|-]+)" /,O=/^<example name="([\w|-]+)"/,j=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.headings=[],t.appendHeading=t.appendHeading.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["PureComponent"]),v(n,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var n=this.props.codes[e];return n?o.a.createElement(r.Fragment,null,o.a.createElement(p,{language:"jsx",value:n.text}),n.log.map(function(e,n){return o.a.createElement("div",{key:n,className:w("console")},e)})):(console.error("Code "+e+" not existed"),null)}},{key:"renderExamples",value:function(){var e=this,n=this.props.examples;if(!n)return o.a.createElement("div",null);var t=Object(c.a)("示例","Example"),a="h-"+Object(l.a)("Example");return this.appendHeading({id:a,level:2,children:[t]}),o.a.createElement(r.Fragment,null,o.a.createElement("h2",{id:a},t),n.map(function(n,t){if(/\d+-/.test(n.name))return o.a.createElement(g,Object.assign({key:t,appendHeading:e.appendHeading},n))}))}},{key:"renderExample",value:function(e){var n=(this.props.examples||[]).find(function(n){return n.name===e});return n?o.a.createElement(g,n):null}},{key:"render",value:function(){var e=this,n=this.props.source;return this.headings=[],o.a.createElement(i.a,{className:w("_"),source:n,renderers:{code:p,heading:function(n){var t=n.level,r=n.children,a="h-"+Object(l.a)(r[0]);2!==t&&3!==t||e.appendHeading({id:a,level:t,children:r});var i="h"+t;return o.a.createElement(i,{id:a},r)},html:function(n){var t=n.value;if("<example />"===t)return e.renderExamples();var r=t.match(O);if(r)return e.renderExample(r[1],t.indexOf("noExpand")>=0);if("<br>"===t||"<br />"===t)return o.a.createElement("br",null);var a=t.match(E);return a?e.renderCode(a[1]):null}}})}}]),n}();j.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var k=j,x=t(51),_=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var C=t(6);t.d(n,"a",function(){return R});var H,P=((H=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={source:t.props.source},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.PureComponent),_(n,[{key:"componentDidMount",value:function(){var e=this;this.props.loader&&this.props.loader().then(function(n){e.setState({source:n})})}},{key:"render",value:function(){var e=this.state.source;return e?o.a.createElement(k,Object.assign({},this.props,{source:e})):o.a.createElement(x.a,{style:{minHeight:200}})}}]),n}()).defaultProps={loader:void 0,source:void 0},H);n.b=P;function R(e){return Object(C.a)(function(n){return o.a.createElement(P,Object.assign({},n,{loader:e}))})}},576:function(e,n){e.exports="/**\n * cn - \\n 使用 datum disabled 实现有条件禁用\n * en - Disabled\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Radio.Group\n        data={data}\n        datum={{ disabled: d => d === 'yellow' }}\n        value=\"blue\"\n        renderItem={d => d}\n      />\n    </div>\n  )\n}\n"},577:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(1),i=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return o.a.createElement("div",null,o.a.createElement(a.u.Group,{data:i,datum:{disabled:function(e){return"yellow"===e}},value:"blue",renderItem:function(e){return e}}))}},578:function(e,n){e.exports="/**\n * cn - 禁用\n * en - Disabled\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Radio.Group\n        disabled\n        data={data}\n        value=\"blue\"\n        renderItem={d => d}\n      />\n    </div>\n  )\n}\n"},579:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(1),i=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return o.a.createElement("div",null,o.a.createElement(a.u.Group,{disabled:!0,data:i,value:"blue",renderItem:function(e){return e}}))}},580:function(e,n){e.exports="/**\n * cn - 垂直布局\n * en - Block\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default function () {\n  return (\n    <Radio.Group\n      keygen=\"id\"\n      block\n      data={data}\n      datum={{ format: 'id' }}\n      onChange={d => console.log(d)}\n      defaultValue={3}\n      renderItem=\"color\"\n    />\n  )\n}\n"},581:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(1),i=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];n.default=function(){return o.a.createElement(a.u.Group,{keygen:"id",block:!0,data:i,datum:{format:"id"},onChange:function(e){return console.log(e)},defaultValue:3,renderItem:"color"})}},582:function(e,n){e.exports="/**\n * cn -\n *    -- React 组件方式调用\n * en -\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <Radio.Group value=\"yellow\" onChange={v => console.log(v)}>\n      {\n        data.map(d => <Radio key={d} htmlValue={d}>{d}</Radio>)\n      }\n    </Radio.Group>\n  )\n}\n"},583:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(1),i=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return o.a.createElement(a.u.Group,{value:"yellow",onChange:function(e){return console.log(e)}},i.map(function(e){return o.a.createElement(a.u,{key:e,htmlValue:e},e)}))}},584:function(e,n){e.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nfunction renderItem(color) {\n  const style = { borderBottom: `solid 1px ${color}`, paddingBottom: 2 }\n  return <span style={style}>{color}</span>\n}\n\nexport default function () {\n  return (\n    <Radio.Group\n      keygen={c => c}\n      data={data}\n      onChange={c => console.log(c)}\n      defaultValue=\"blue\"\n      renderItem={renderItem}\n    />\n  )\n}\n"},585:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(1),i=["red","orange","yellow","green","cyan","blue","violet"];function l(e){var n={borderBottom:"solid 1px "+e,paddingBottom:2};return o.a.createElement("span",{style:n},e)}n.default=function(){return o.a.createElement(a.u.Group,{keygen:function(e){return e},data:i,onChange:function(e){return console.log(e)},defaultValue:"blue",renderItem:l})}},586:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(6),i=t(5),l=t(2),u=t(195),c=t.n(u),s=t(194),d=t.n(s),f=Object(l.a)(c.a,d.a),p=[{name:"1-base",title:Object(l.a)("基本用法","Base"),component:t(585).default,rawText:t(584)},{name:"1-raw",title:Object(l.a)(" \n React 组件方式调用",""),component:t(583).default,rawText:t(582)},{name:"2-block",title:Object(l.a)("垂直布局","Block"),component:t(581).default,rawText:t(580)},{name:"3-disabled",title:Object(l.a)("禁用","Disabled"),component:t(579).default,rawText:t(578)},{name:"4-disabled",title:Object(l.a)("\n 使用 datum disabled 实现有条件禁用","Disabled"),component:t(577).default,rawText:t(576)}];n.default=Object(a.a)(function(e){return o.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:f,examples:p}))})},6:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(104),i=t(50),l=t(28),u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function c(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var s=Object(l.a)(t(233),"nav");n.a=function(e){return function(n){function t(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={headings:[]},n.setHeading=n.setHeading.bind(n),n}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(t,r["PureComponent"]),u(t,[{key:"setHeading",value:function(e){this.setState({headings:[].concat(c(this.state.headings),c(e))})}},{key:"renderNav",value:function(){var e=this.state.headings;return o.a.createElement(i.a,{className:s("sticky"),top:50},o.a.createElement("div",{className:s("nav")},e.map(function(e,n){var t=e.children.filter(function(e){return"string"==typeof e});return o.a.createElement(a.a,{key:n,className:s("level-"+e.level),to:"#"+e.id},t)})))}},{key:"render",value:function(){return o.a.createElement("div",{className:s("_")},o.a.createElement(e,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),t}()}}}]);