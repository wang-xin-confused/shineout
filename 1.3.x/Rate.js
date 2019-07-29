(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[35],{1402:function(e,t,n){"use strict";var a=n(0),s=n.n(a),r=n(15),c=n(7),o=n(8),l=n(10),i=n(2),u=n(9),m=n(12),f=n.n(m),d=n(34),h=n(56),p=n(17),b=n(5),v=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(i.a)(n).call(this,e))).state={hover:0,highlight:-1},t}return Object(u.a)(n,e),Object(o.a)(n,[{key:"getValue",value:function(){var e=this.state.hover;return 0===e?this.props.value:e}},{key:"getStyle",value:function(){var e=this.props.size;if(e)return{width:e,fontSize:e}}},{key:"getIcon",value:function(e,t,n){var a,r=this.props.repeat,c=this.getValue(),o=c-t;if(Array.isArray(e)?(a=e[r?c-1:t])||(a=e[e.length-1]):a=e,o<=0||1<=o||n)return a;var l={width:"".concat(100*o,"%"),display:"block",overflow:"hidden"};return s.a.createElement("span",{style:l},a)}},{key:"handleClick",value:function(e){var t=this;this.props.clearable&&this.props.value===e&&(e=0,this.setState({hover:0})),this.props.onChange(e),this.setState({highlight:e}),this.highlightTimer&&clearTimeout(this.highlightTimer),this.highlightTimer=setTimeout(function(){t.setState({highlight:-1})},300)}},{key:"handleHover",value:function(e){this.setState({hover:e})}},{key:"handleMove",value:function(e,t){var n=t.target.getBoundingClientRect(),a=n.x,r=n.width;this.setState({hover:e-(a+r/2>t.clientX?.5:0)})}},{key:"renderBackground",value:function(){var t=this,e=this.props,n=e.background,a=e.max,r=e.disabled,c=e.allowHalf,o=this.getStyle(),l=this.getValue();return s.a.createElement("div",{className:Object(b.v)("background")},Object(h.a)(a).map(function(e){return s.a.createElement("span",{key:e,style:Object.assign({visibility:!c&&!r&&e<l?"hidden":"visible"},o)},t.getIcon(n,e,!0))}))}},{key:"renderRate",value:function(){var t=this,e=this.props,n=e.front,a=e.max,r=e.text,c=e.allowHalf,o=this.state.highlight,l=this.getValue(),i=this.getStyle();return s.a.createElement("div",{className:Object(b.v)("front")},Object(h.a)(a).map(function(e){return s.a.createElement("span",{key:e,onClick:t.handleClick.bind(t,e+1),onMouseLeave:t.handleHover.bind(t,0),onMouseMove:c?t.handleMove.bind(t,e+1):void 0,onMouseEnter:c?void 0:t.handleHover.bind(t,e+1),style:i},e<l?t.getIcon(n,e):s.a.createElement("span",null," "),o===e+1&&s.a.createElement("i",{className:Object(b.v)("highlight")},t.getIcon(n,e)))}),s.a.createElement("span",{className:Object(b.v)("text")},r[Math.ceil(l)-1]))}},{key:"renderStatic",value:function(){var t=this,e=this.props,n=e.front,a=e.value,r=e.max,c=e.text,o=this.getStyle();return s.a.createElement("div",{className:Object(b.v)("static")},Object(h.a)(r).map(function(e){return s.a.createElement("span",{key:e,style:o},e<a&&t.getIcon(n,e))}),s.a.createElement("span",{className:Object(b.v)("text")},c[Math.ceil(a)-1]))}},{key:"render",value:function(){var e=f()(Object(b.v)("_"),this.props.className);return s.a.createElement("div",{className:e,style:this.props.style},this.renderBackground(),this.props.disabled?this.renderStatic():this.renderRate())}}]),n}(d.b);v.defaultProps=Object(r.a)({},p.a,{repeat:!0,max:5,size:20,text:[],value:0});var g=v,y=n(194);t.a=function(t,n){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=Object(y.a)(function(e){return s.a.createElement(g,Object.assign({},a,e,{background:t,front:n||t}))});return e.displayName="ShineoutRate",e}},192:function(e,t,n){"use strict";var m=n(20),f=n(0),d=n.n(f),h=n(230),p=n(36),b=n(14);t.a=function(u){return function(e){var t=Object(f.useState)(""),n=Object(m.a)(t,2),a=n[0],r=n[1],c=Object(f.useState)([]),o=Object(m.a)(c,1)[0],l=e.location.hash,i=Object(f.useCallback)(function(e){e.forEach(function(e){o.push(e)})},[]),s=Object(f.useCallback)(function(){if(l){var e=document.querySelector(l);e&&setTimeout(function(){e.scrollIntoView()},50)}},[l]);Object(f.useEffect)(function(){s();var e=function(){var n=document.documentElement.scrollTop,e=o.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),r(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return d.a.createElement("div",{className:Object(b.f)("_")},d.a.createElement(u,{onHeadingSetted:i}),!e.noNav&&d.a.createElement(h.a,{className:Object(b.f)("sticky"),top:50},d.a.createElement("div",{className:Object(b.f)("nav")},o.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return d.a.createElement("a",{key:t,className:Object(b.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===p.a.location.search.indexOf("?example="))p.a.push("".concat(p.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{p.a.push("".concat(p.a.location.pathname,"#").concat(e));var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},198:function(e,t,n){"use strict";var I=n(0),F=n.n(I),u=n(30),A=n(20),a=n(233),m=n.n(a),f=n(31),d=n(50),N=n(14),h=n(11),r=n(12),o=n.n(r),c=n(234),l=n.n(c),z=(n(235),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,r=e.value,c=Object(I.useRef)(null);return Object(I.useEffect)(function(){var e=c.current;l.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),F.a.createElement("pre",{ref:c,className:o()(n||"lang-jsx",Object(N.a)("pre"))},F.a.createElement("code",null,r))}),C=n(217),i=n(45),s=n(7),p=n(8),b=n(10),v=n(2),g=n(9),y=n(34),O=n(208),V=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(b.a)(this,Object(v.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(g.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(O.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(O.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:F.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(y.b),B=n(59),H=n(36),D=F.a.createElement("div",{className:Object(N.a)("placeholder")},F.a.createElement(i.a,null));function j(e){var t=e.component,n=e.id,a=e.name,r=e.rawText,c=e.title,o=Object(I.useRef)(null),l=Object(I.useState)(!1),i=Object(A.a)(l,2),s=i[0],u=i[1],m=Object(I.useState)(Object(I.createElement)(t)),f=Object(A.a)(m,1)[0],d=Object(I.useState)(),h=Object(A.a)(d,2),p=h[0],b=h[1],v=Object(I.useState)(),g=Object(A.a)(v,1)[0],y=function e(t,n,a){o.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(I.useEffect)(function(){if(o.current)if(s)o.current.style.height="".concat(p,"px");else{var e=p%15;0<e&&y(e,1,g),y((p-e)/15,15,g)}},[s]);var O=function(e){u(!s),g=e},j=function(e){return F.a.createElement("a",{href:"javascript:;",className:Object(N.a)("toggle"),onClick:O.bind(null,e)},F.a.createElement(B.a,{name:s?"code-close":"code"}))},E=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),x=H.a.location.search,R="?example=";if(0===x.indexOf(R)&&(x=x.replace(R,""),a.indexOf(x)<0))return null;var w=c.split("\n"),k=Object(C.a)(w),S=k[0],T=k.slice(1);return S&&(S=S.trim()),F.a.createElement(I.Fragment,null,S&&F.a.createElement("h3",{key:"0",id:n},S),F.a.createElement(V,{placeholder:D},F.a.createElement("div",{className:Object(N.a)("_",s&&"showcode")},F.a.createElement("div",{className:Object(N.a)("body")},f),0<c.length&&F.a.createElement("div",{className:Object(N.a)("desc")},T.map(function(e,t){return F.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),j(!1)),F.a.createElement("div",{ref:o,className:Object(N.a)("code")},F.a.createElement(z,{onHighLight:function(e){b(e)},onClose:O,value:E}),j(!0)))))}j.defaultProps={rawText:""};var E=function(e){var t=e.children,n=Object(I.useState)(!1),a=Object(A.a)(n,2),r=a[0],c=a[1],o=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),l=r?"pre":"div";return F.a.createElement("div",{onClick:function(){c(!r)},className:Object(N.e)("console")},F.a.createElement(l,null,o))};E.defaultProps={children:[]};var x=E;function R(e){var t=e.children,n=Object(u.a)(t[1].props.children);try{n.sort(function(e,t){return e.props.children[0].props.children[0].localeCompare(t.props.children[0].props.children[0])})}catch(e){console.log("sort fail...")}return F.a.createElement("div",{style:{overflow:"auto"}},F.a.createElement("table",{className:"doc-api-table"},t[0],F.a.cloneElement(t[1],{children:n})))}R.defaultProps={};var w=R,k=/^<code name="([\w|-]+)" /,S=/^<example name="([\w|-]+)"/;function T(e){var t=e.onHeadingSetted,c=e.codes,o=e.examples,n=e.source,a=Object(I.useState)([]),r=Object(A.a)(a,1)[0],l=Object(I.useState)({}),i=Object(A.a)(l,1)[0];Object(I.useEffect)(function(){t&&t(r)},[]);var s=function(e){r.push(e)};return r=[],F.a.createElement(m.a,{className:Object(N.e)("_"),source:n,renderers:{code:z,heading:function(e){var t,n,a=e.level,r=e.children,c="".concat(a,"-").concat(r[0]),o="h".concat(a);if("object"==typeof r[0])return F.a.createElement(o,null,r);if(!i[c]){var l="heading-".concat((t=a,n=r[0],4===t?Object(d.b)():"".concat(t,"-").concat((n||"").replace(/[\W|-]/g,"-"))));2!==a&&3!==a||s({id:l,level:a,children:r}),i[c]=F.a.createElement(o,{id:l},r)}return i[c]},html:function(e){if("<example />"===e.value)return function(){if(i.examples)return i.examples;if(!o)return F.a.createElement("div",null);var e=Object(h.b)("示例","Example"),t="heading-example-h";return s({id:t,level:2,children:[e]}),i.examples=[F.a.createElement("h2",{key:"h",id:t},e)].concat(Object(u.a)(o.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),r=Object(A.a)(a,1)[0];return s({id:n,level:3,children:[r]}),F.a.createElement(j,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),i.examples}();var t=e.value.match(S);if(t)return function(t){var e="example-".concat(t);if(!i[e]){var n=(o||[]).find(function(e){return e.name===t});i[e]=n?F.a.createElement(j,n):null}return i[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return F.a.createElement("br",null);var n,a,r=e.value.match(k);return r?(n=r[1],(a=c[n])?[F.a.createElement(z,{key:"cb",value:a.text})].concat(Object(u.a)(a.log.map(function(e,t){return F.a.createElement(x,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:w,link:function(e){var t=0===e.href.indexOf("http")?"_blank":void 0;return t?F.a.createElement("a",{href:e.href,target:t},e.children):F.a.createElement(f.a,{to:e.href,target:t},e.children)}}})}T.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var M=n(60),_=n(192);n.d(t,"a",function(){return L});var P,q=((P=function(e){var t=Object(I.useState)(e.source),n=Object(A.a)(t,2),a=n[0],r=n[1];return Object(I.useEffect)(function(){e.loader&&e.loader().then(function(e){r(e.default)})},[]),a?F.a.createElement(T,Object.assign({},e,{source:a})):F.a.createElement(M.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(I.memo)(P));t.b=q;function L(t,n){return Object(_.a)(function(e){return F.a.createElement(q,Object.assign({},e,{noNav:n,loader:t}))})}},208:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return m});var a=n(216),r=n(50),c=n(44),o={},l=null,i=!1,s=c.b.height;function u(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>s){var n=Object(r.b)();return o[n]=e,n}return e.render(),null}function m(e){e&&delete o[e]}document.addEventListener("scroll",function(){l&&clearTimeout(l),l=setTimeout(function(){i||(i=!0,Object.keys(o).forEach(function(e){var t=o[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>s||(delete o[e],a())}),i=!1),l=null},80)},a.a)},869:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(192),o=n(198),l=n(11),i=n(870),s=n.n(i),u=n(871),m=n.n(u),f=Object(l.b)(s.a,m.a),d=[{name:"01-base",title:Object(l.b)("基本用法 \n Rate 为一个函数，创建一个指定图标或文字的 Rate 组件，供多处复用。","Base \n Rate is a function that creates a new custom Rate component that specifies an icon or text."),component:n(872).default,rawText:n(873)},{name:"02-color",title:Object(l.b)("颜色 \n 在创建组件时设置颜色","Icon color \n Set the color when the component is created."),component:n(874).default,rawText:n(875)},{name:"04-max",title:Object(l.b)("最大值 \n 通过 max 属性设置选项最大值，默认为 5","Max \n Set the maximum value of the option through the max attribute. The default value is 5."),component:n(876).default,rawText:n(877)},{name:"05-size",title:Object(l.b)("大小 \n 通过 size 属性可以设置大小","Size \n Set the size through the size property."),component:n(878).default,rawText:n(879)},{name:"06-text",title:Object(l.b)("附加文字 \n text 属性可以为每个选项附加文字","Text \n Set text property to append text to each item."),component:n(880).default,rawText:n(881)},{name:"07-disabled",title:Object(l.b)("只读 \n 设置 disabled 标示为只读，只读状态下，value可以传入小数","Disabled \n Set disabled to true make it be read-only. When disabled, value can be passed in decimals."),component:n(882).default,rawText:n(883)},{name:"08-face",title:Object(l.b)("分级显示 \n 创建组件时可以使用数组显示不同分数下的选项，这种情况下，不支持带小数的value","Array \n You can use arrays to display items with different scores when creating components. In this case, values with decimals are not supported."),component:n(884).default,rawText:n(885)},{name:"09-array",title:Object(l.b)("不重复选项 \n 默认情况下，会重复显示当前分值对应的选项，设置 repeat 属性为 false 可以按分值显示不同选项。","No Repeat \n By default, the item corresponding to the current value is displayed repeatedly. Set repeat property to false to display different item by value."),component:n(886).default,rawText:n(887)},{name:"10-clearable",title:Object(l.b)("清除 \n 通过 clearable 属性可以设置再次点击清除 value。","clear \n Set the clearable to clear value when click again."),component:n(888).default,rawText:n(889)}];t.default=Object(c.a)(function(e){return r.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:f,examples:d}))})},870:function(e,t){e.exports="# Rate *评分*\n\n<example />\n\n## API\n\n#### Rate function(background, front):ReactClass\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | ReactElement \\| string \\| array | 必填 | 待选项 |\n| front | ReactElement \\| string \\| array | background | 选中项，不填和待选项相同 |\n\n### Rate\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | number | | 默认值 |\n| disabled | bool | false | 是否只读 |\n| max | number | 5 | 选项最大值，整数 |\n| onChange | function(d) | | 值改变回调函数 |\n| repeat | bool | true | 为 true 时，显示的选项为当前分值对应选项的复制 |\n| size | number \\| string | 20 | 图标大小 |\n| value | number | 0 | 作为可输入组件时，为整数。只读展示时，可以带小数 |\n| clearable | bool | false | 是否允许再次点击后清除 |\n"},871:function(e,t){e.exports="# Rate\n\n<example />\n\n## API\n\n#### Rate function(background, front):ReactClass\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| background | ReactElement \\| string \\| array | required | Background item for rate |\n| front | ReactElement \\| string \\| array | background | Front item. If it is not set, use background item |\n\n### Rate\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| defaultValue | number | | Default value |\n| disabled | bool | false | read-only |\n| max | number | 5 | The maximum value of the option, integer |\n| onChange | function(d) | | The callback function when the value is changing |\n| repeat | bool | true | When repeat is true, display item is a copy of the item corresponding to the current value |\n| size | number \\| string | 20 | the size of the icon |\n| value | number | 0 | |\n| clearable | bool | false | whether to allow clear when click again |\n"},872:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(1402),o=n(54),l=r.a.createElement(o.a,{name:"star"}),i=Object(c.a)(l,l);t.default=function(){return r.a.createElement(i,null)}},873:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Rate 为一个函数，创建一个指定图标或文字的 Rate 组件，供多处复用。\n * en - Base\n *    -- Rate is a function that creates a new custom Rate component that specifies an icon or text.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return <StarRate />\n}\n"},874:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(1402),o=n(54),l=r.a.createElement(o.a,{name:"heart-o"}),i=r.a.createElement(o.a,{name:"heart",style:{color:"#ff4d4f"}}),s=Object(c.a)(l,i);t.default=function(){return r.a.createElement(s,{defaultValue:2})}},875:function(e,t){e.exports="/**\n * cn - 颜色\n *    -- 在创建组件时设置颜色\n * en - Icon color\n *    -- Set the color when the component is created.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst heartBg = <FontAwesome name=\"heart-o\" />\nconst heart = <FontAwesome name=\"heart\" style={{ color: '#ff4d4f' }} />\nconst HeartRate = Rate(heartBg, heart)\n\nexport default function() {\n  return <HeartRate defaultValue={2} />\n}\n"},876:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(1402),o=n(54),l=r.a.createElement(o.a,{name:"star"}),i=Object(c.a)(l,l);t.default=function(){return r.a.createElement(i,{max:10,defaultValue:3})}},877:function(e,t){e.exports="/**\n * cn - 最大值\n *    -- 通过 max 属性设置选项最大值，默认为 5\n * en - Max\n *    -- Set the maximum value of the option through the max attribute. The default value is 5.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return <StarRate max={10} defaultValue={3} />\n}\n"},878:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(1402),o=n(54),l=r.a.createElement(o.a,{name:"star"}),i=Object(c.a)(l,l);t.default=function(){return r.a.createElement("div",null,r.a.createElement(i,{size:14}),r.a.createElement(i,{size:20}),r.a.createElement(i,{size:40}))}},879:function(e,t){e.exports="/**\n * cn - 大小\n *    -- 通过 size 属性可以设置大小\n * en - Size\n *    -- Set the size through the size property.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return (\n    <div>\n      <StarRate size={14} />\n      <StarRate size={20} />\n      <StarRate size={40} />\n    </div>\n  )\n}\n"},880:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(1402),o=n(54),l=r.a.createElement(o.a,{name:"star"}),i=Object(c.a)(l,l);t.default=function(){return r.a.createElement(i,{defaultValue:4,text:["poor","fair","good","very good","excellent"]})}},881:function(e,t){e.exports="/**\n * cn - 附加文字\n *    -- text 属性可以为每个选项附加文字\n * en - Text\n *    -- Set text property to append text to each item.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return <StarRate defaultValue={4} text={['poor', 'fair', 'good', 'very good', 'excellent']} />\n}\n"},882:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(1402),o=n(54),l=r.a.createElement(o.a,{name:"star"}),i=Object(c.a)(l,l);t.default=function(){return r.a.createElement(i,{value:3.6,disabled:!0})}},883:function(e,t){e.exports="/**\n * cn - 只读\n *    -- 设置 disabled 标示为只读，只读状态下，value可以传入小数\n * en - Disabled\n *    -- Set disabled to true make it be read-only. When disabled, value can be passed in decimals.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return <StarRate value={3.6} disabled />\n}\n"},884:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(124),o=n(1402),l=Object(c.a)("https://at.alicdn.com/t/font_662584_hfkafvbgwurkvs4i.css","facefont"),i=r.a.createElement(l,{name:"question"}),s=[r.a.createElement(l,{name:"cry",style:{color:"#003a8c"}}),r.a.createElement(l,{name:"sad",style:{color:"#222222"}}),r.a.createElement(l,{name:"sleeping",style:{color:"#ffa940"}}),r.a.createElement(l,{name:"happy",style:{color:"#fa541c"}}),r.a.createElement(l,{name:"lol",style:{color:"#fa541c"}})],u=Object(o.a)(i,s);t.default=function(){return r.a.createElement(u,{equal:!1,size:40,defaultValue:3})}},885:function(e,t){e.exports="/**\n * cn - 分级显示\n *    -- 创建组件时可以使用数组显示不同分数下的选项，这种情况下，不支持带小数的value\n * en - Array\n *    -- You can use arrays to display items with different scores when creating components. In this case, values with decimals are not supported.\n */\nimport React from 'react'\nimport { Rate, Icon } from 'shineout'\n\nconst FaceIcon = Icon('https://at.alicdn.com/t/font_662584_hfkafvbgwurkvs4i.css', 'facefont')\nconst background = <FaceIcon name=\"question\" />\nconst front = [\n  <FaceIcon name=\"cry\" style={{ color: '#003a8c' }} />,\n  <FaceIcon name=\"sad\" style={{ color: '#222222' }} />,\n  <FaceIcon name=\"sleeping\" style={{ color: '#ffa940' }} />,\n  <FaceIcon name=\"happy\" style={{ color: '#fa541c' }} />,\n  <FaceIcon name=\"lol\" style={{ color: '#fa541c' }} />,\n]\nconst TextRate = Rate(background, front)\n\nexport default function() {\n  return <TextRate equal={false} size={40} defaultValue={3} />\n}\n"},886:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(1402),o=["A","B","C","D","E"],l=o.map(function(e){return r.a.createElement("span",{style:{color:"red"}},e)}),i=Object(c.a)(o,l);t.default=function(){return r.a.createElement(i,{repeat:!1,defaultValue:2})}},887:function(e,t){e.exports="/**\n * cn - 不重复选项\n *    -- 默认情况下，会重复显示当前分值对应的选项，设置 repeat 属性为 false 可以按分值显示不同选项。\n * en - No Repeat\n *    -- By default, the item corresponding to the current value is displayed repeatedly. Set repeat property to false to display different item by value.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\n\nconst text = ['A', 'B', 'C', 'D', 'E']\nconst front = text.map(t => <span style={{ color: 'red' }}>{t}</span>)\nconst TextRate = Rate(text, front)\n\nexport default function() {\n  return <TextRate repeat={false} defaultValue={2} />\n}\n"},888:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(1402),o=n(54),l=r.a.createElement(o.a,{name:"star"}),i=Object(c.a)(l,l);t.default=function(){return r.a.createElement(i,{clearable:!0})}},889:function(e,t){e.exports="/**\n * cn - 清除\n *    -- 通过 clearable 属性可以设置再次点击清除 value。\n * en - clear\n *    -- Set the clearable to clear value when click again.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return <StarRate clearable />\n}\n"}}]);