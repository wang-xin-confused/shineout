(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{207:function(e,n){e.exports="# Icon\n\n<example />"},208:function(e,n){e.exports="# Icon *图标*\n组件库没有内置图标集，而是提供了一个函数生成一个新的图标组件。可以在一个项目内创建多个不同名称的图标组件。\n\n<example />\n\n## API\n\n### Icon *function(url, fontFamily, prefix):ReactClass*\n函数，返回一个新的组件，一个项目内可以创建多个，但是 fontFamily 不能相同\n\n| 参数 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| url | string | 必填 | 图标css文件地址，使用远程地址，不需要引入到项目中 |\n| fontFamily | string | 'iconfont' | font-family 需要和引入的css文件内的font-family一致 |\n| prefix | string | 'icon' | 类名前缀 |\n\n### CreatedIcon *Icon函数创建的图标组件*\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | string | 无 | 图标 unicode 编码，和 name 二选一 |\n| name | string | '' | 图标类名（去除前缀的部分），值参照具体使用的图标库 |\n| fontSize | string | 无 | 图标大小，和 style.fontSize 相同 |\n| style | object | 无 | 扩展样式，可以用来设定特定的大小和颜色等 |\n| type | string | 'default' | 内置颜色，可选值为 \\['default', 'primary', 'secondary', 'success', 'info', 'warning', 'danger'] |"},233:function(e,n){},234:function(e,n){},235:function(e,n){},5:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=(t(3),t(105)),i=t.n(a),c=t(42),s=t(28),l=t(2),u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function f(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var m=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),r.bindElement=function(e){r.element=e},f(r,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["PureComponent"]),u(n,[{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){window.hljs.highlightBlock(this.element),this.props.onHighLight&&this.props.onHighLight(this.element.offsetHeight)}},{key:"render",value:function(){return o.a.createElement("pre",null,o.a.createElement("code",{ref:this.bindElement,className:this.props.language},this.props.value))}}]),n}();m.defaultProps={language:""};var p=m,d=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var y=Object(s.a)(t(235),"example"),g=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t.setCodeBlockHeight=function(e){t.codeHeight=e},t.bindCodeBlock=function(e){t.codeblock=e},t.state={showcode:!1};var r=e.title.split("\n"),o=d(r,1)[0];return t.id="h-"+Object(c.a)(o),e.appendHeading({id:t.id,level:3,children:[o]}),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["PureComponent"]),h(n,[{key:"collapse",value:function(e,n,t){var r=this;this.codeblock.style.height=e*(n-1)+"px",n>1&&setTimeout(function(){r.collapse(e,n-1,t)},16),t&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(e){var n=this,t=!this.state.showcode;this.setState({showcode:t},function(){if(t)n.codeblock.style.height=n.codeHeight+"px";else{var r=n.codeHeight%15;r>0&&n.collapse(r,1,e),n.collapse((n.codeHeight-r)/15,15,e)}})}},{key:"renderCodeHandle",value:function(e){var n=this.state.showcode;return o.a.createElement("a",{href:"javascript:;",className:y("toggle"),onClick:this.toggleCode.bind(this,e)},"<",n?"/":" ",">")}},{key:"render",value:function(){var e,n=this.props,t=n.component,a=n.rawText,i=this.state.showcode,c=a.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),s=this.props.title.split("\n"),l=(e=s,Array.isArray(e)?e:Array.from(e)),u=l[0],f=l.slice(1);return o.a.createElement(r.Fragment,null,o.a.createElement("div",{id:this.id,className:y("title")},u,f.length>0&&o.a.createElement("div",{className:y("sub-title")},f.map(function(e,n){return o.a.createElement("div",{key:n,dangerouslySetInnerHTML:{__html:e}})}))),o.a.createElement("div",{className:y("_",i&&"showcode")},o.a.createElement("div",{className:y("body")},Object(r.createElement)(t),this.renderCodeHandle(!1)),o.a.createElement("div",{ref:this.bindCodeBlock,className:y("code")},this.renderCodeHandle(!0),o.a.createElement(p,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,language:"jsx",value:c}))))}}]),n}();g.defaultProps={appendHeading:function(){},rawText:""};var b=g,v=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var w=Object(s.a)(t(234),"markdown"),E=/^<code name="([\w|-]+)" /,j=/^<example name="([\w|-]+)"/,O=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.headings=[],t.appendHeading=t.appendHeading.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["PureComponent"]),v(n,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var n=this.props.codes[e];return n?o.a.createElement(r.Fragment,null,o.a.createElement(p,{language:"jsx",value:n.text}),n.log.map(function(e,n){return o.a.createElement("div",{key:n,className:w("console")},e)})):(console.error("Code "+e+" not existed"),null)}},{key:"renderExamples",value:function(){var e=this,n=this.props.examples;if(!n)return o.a.createElement("div",null);var t=Object(l.a)("示例","Example"),a="h-"+Object(c.a)("Example");return this.appendHeading({id:a,level:2,children:[t]}),o.a.createElement(r.Fragment,null,o.a.createElement("h2",{id:a},t),n.map(function(n,t){if(/\d+-/.test(n.name))return o.a.createElement(b,Object.assign({key:t,appendHeading:e.appendHeading},n))}))}},{key:"renderExample",value:function(e){var n=(this.props.examples||[]).find(function(n){return n.name===e});return n?o.a.createElement(b,n):null}},{key:"render",value:function(){var e=this,n=this.props.source;return this.headings=[],o.a.createElement(i.a,{className:w("_"),source:n,renderers:{code:p,heading:function(n){var t=n.level,r=n.children,a="h-"+Object(c.a)(r[0]);2!==t&&3!==t||e.appendHeading({id:a,level:t,children:r});var i="h"+t;return o.a.createElement(i,{id:a},r)},html:function(n){var t=n.value;if("<example />"===t)return e.renderExamples();var r=t.match(j);if(r)return e.renderExample(r[1],t.indexOf("noExpand")>=0);if("<br>"===t||"<br />"===t)return o.a.createElement("br",null);var a=t.match(E);return a?e.renderCode(a[1]):null}}})}}]),n}();O.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var x=O,_=t(51),k=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var F=t(6);t.d(n,"a",function(){return P});var H,C=((H=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={source:t.props.source},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.PureComponent),k(n,[{key:"componentDidMount",value:function(){var e=this;this.props.loader&&this.props.loader().then(function(n){e.setState({source:n})})}},{key:"render",value:function(){var e=this.state.source;return e?o.a.createElement(x,Object.assign({},this.props,{source:e})):o.a.createElement(_.a,{style:{minHeight:200}})}}]),n}()).defaultProps={loader:void 0,source:void 0},H);n.b=C;function P(e){return Object(F.a)(function(n){return o.a.createElement(C,Object.assign({},n,{loader:e}))})}},6:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(104),i=t(50),c=t(28),s=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function l(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var u=Object(c.a)(t(233),"nav");n.a=function(e){return function(n){function t(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={headings:[]},n.setHeading=n.setHeading.bind(n),n}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(t,r["PureComponent"]),s(t,[{key:"setHeading",value:function(e){this.setState({headings:[].concat(l(this.state.headings),l(e))})}},{key:"renderNav",value:function(){var e=this.state.headings;return o.a.createElement(i.a,{className:u("sticky"),top:50},o.a.createElement("div",{className:u("nav")},e.map(function(e,n){var t=e.children.filter(function(e){return"string"==typeof e});return o.a.createElement(a.a,{key:n,className:u("level-"+e.level),to:"#"+e.id},t)})))}},{key:"render",value:function(){return o.a.createElement("div",{className:u("_")},o.a.createElement(e,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),t}()}},860:function(e,n){e.exports='/**\n * cn - 尺寸 \\n 提供了一个fontSize属性设置图标大小，效果和 style.fontSize 相同\n * en - Font Size\n */\nimport React, { Fragment } from \'react\'\nimport { Icon } from \'shineout\'\n\nconst url = \'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\'\nconst FontAwesome = Icon(url, \'FontAwesome\', \'fa\')\nconst margin = { marginRight: 20 }\n\nexport default function () {\n  return (\n    <Fragment>\n      <FontAwesome style={margin} name="home" />\n      <FontAwesome style={margin} name="home" type="info" fontSize={18} />\n      <FontAwesome style={margin} name="home" type="success" fontSize="24px" />\n      <FontAwesome style={{ fontSize: 30, color: \'#f5222d\' }} name="home" />\n    </Fragment>\n  )\n}\n'},861:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(1),i=Object(a.l)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa"),c={marginRight:20};n.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement(i,{style:c,name:"home"}),o.a.createElement(i,{style:c,name:"home",type:"info",fontSize:18}),o.a.createElement(i,{style:c,name:"home",type:"success",fontSize:"24px"}),o.a.createElement(i,{style:{fontSize:30,color:"#f5222d"},name:"home"}))}},862:function(e,n){e.exports='/**\n * cn - 使用 Iconfont \\n 可以在 iconfont.cn 定制一个图标\n * en - Use Iconfont\n */\nimport React, { Fragment } from \'react\'\nimport { Icon } from \'shineout\'\n\nconst Iconfont = Icon(\'//at.alicdn.com/t/font_550076_uyvw3e8ul8w4gqfr.css\')\nconst margin = { marginRight: 20 }\n\nexport default function () {\n  return (\n    <Fragment>\n      <Iconfont style={margin}>&#xe64e;</Iconfont>\n      <Iconfont style={margin} name="info" type="info" />\n      <Iconfont style={margin} name="right" type="success" />\n      <Iconfont style={margin} name="error" type="danger" />\n    </Fragment>\n  )\n}\n'},863:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(1),i=Object(a.l)("//at.alicdn.com/t/font_550076_uyvw3e8ul8w4gqfr.css"),c={marginRight:20};n.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement(i,{style:c},""),o.a.createElement(i,{style:c,name:"info",type:"info"}),o.a.createElement(i,{style:c,name:"right",type:"success"}),o.a.createElement(i,{style:c,name:"error",type:"danger"}))}},864:function(e,n){e.exports='/**\n * cn - 使用 FontAwesome\n * en - Use FontAwesome\n */\nimport React, { Fragment } from \'react\'\nimport { Icon } from \'shineout\'\n\nconst url = \'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\'\nconst FontAwesome = Icon(url, \'FontAwesome\', \'fa\')\nconst margin = { marginRight: 20 }\n\nexport default function () {\n  return (\n    <Fragment>\n      <FontAwesome style={margin} name="home" />\n      <FontAwesome style={margin} name="info" type="info" />\n      <FontAwesome style={margin} name="check" type="success" />\n      <FontAwesome style={margin} name="close" type="danger" />\n    </Fragment>\n  )\n}\n'},865:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(1),i=Object(a.l)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa"),c={marginRight:20};n.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement(i,{style:c,name:"home"}),o.a.createElement(i,{style:c,name:"info",type:"info"}),o.a.createElement(i,{style:c,name:"check",type:"success"}),o.a.createElement(i,{style:c,name:"close",type:"danger"}))}},866:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(6),i=t(5),c=t(2),s=t(208),l=t.n(s),u=t(207),f=t.n(u),m=Object(c.a)(l.a,f.a),p=[{name:"1-awesome",title:Object(c.a)("使用 FontAwesome","Use FontAwesome"),component:t(865).default,rawText:t(864)},{name:"2-iconfont",title:Object(c.a)("使用 Iconfont \n 可以在 iconfont.cn 定制一个图标","Use Iconfont"),component:t(863).default,rawText:t(862)},{name:"3-size",title:Object(c.a)("尺寸 \n 提供了一个fontSize属性设置图标大小，效果和 style.fontSize 相同","Font Size"),component:t(861).default,rawText:t(860)}];n.default=Object(a.a)(function(e){return o.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:m,examples:p}))})}}]);