webpackJsonp([11],{235:function(e,t,n){"use strict";var a=n(19);t.a=Object(a.m)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")},644:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),l=n(61),r=n(60),i=n(35),s=n(645),u=n.n(s),p=n(646),c=n.n(p),m=Object(i.a)(u.a,c.a),d=[{name:"1-base",title:Object(i.a)("基本用法 \n Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block \n 如果设置了 style.width，默认 display 为 inline-flex","Base \n Input usually needs to be used with other components, so the default width is 100% and the default display is block. \n If the style.width is set, the default display is inline-flex."),component:n(647).default,rawText:n(648)},{name:"2-size",title:Object(i.a)("大小 \n 提供了三种尺寸的输入框，small、default、large","Size \n There are three size of input, small, default, large."),component:n(649).default,rawText:n(650)},{name:"3-number",title:Object(i.a)("数字 \n type 为 number 时，输入时会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数","Number \n When type is number, it is forbidden to input non-numeric characters, and the number of decimal places is limited according to the digits property"),component:n(651).default,rawText:n(652)},{name:"4-number",title:Object(i.a)(" \n Input.Number 组件，可以通过鼠标和上下键辅助输入"," \n Input.Number component can be assisted by mouse and up and down keyboard."),component:n(653).default,rawText:n(654)},{name:"5-group",title:Object(i.a)("组合 \n Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。","Group \n The Icon, span, string and Button types can be placed directly into the Input.Group. Use b tag can change the background color."),component:n(655).default,rawText:n(656)},{name:"6-tip",title:Object(i.a)("提示文字 \n 在 input 上设置的 tip 在 focus 时弹出","Tip \n The tip set on input pops up when it is focused."),component:n(657).default,rawText:n(658)},{name:"7-validate",title:Object(i.a)("校验 \n 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出 \n 如果没有设置 popover，不会弹出错误提示。 \n 有错误时，提示框不会隐藏。","Validate \n When the rules property is set, it will automatically verify the input data. When the popover property is set, it will pop up at the specified location. \n If the popover property is not set, no error message will pop up. \n If input is invalid, the message will not be hidden."),component:n(659).default,rawText:n(660)},{name:"8-disabled",title:Object(i.a)("禁用 \n 设置 disabled 属性禁用组件","Disabled \n Set the disabled property to disable the component."),component:n(661).default,rawText:n(662)},{name:"9-password",title:Object(i.a)("密码 \n Input.Password 模拟密码输入框，用来阻止 Chrome 提示记住密码。","Password \n Input.Password is a mock input of type 'password', used for disable Chrome autofill."),component:n(663).default,rawText:n(664)}];t.default=Object(l.a)(function(e){return o.a.createElement(r.b,Object.assign({},e,{codes:void 0,source:m,examples:d}))})},645:function(e,t){e.exports="# Input *输入框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | string \\| number | | 默认值 |\n| delay | number | 400 | 用户输入触发 onChange 和校验间隔时间，单位 毫秒。|\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(d) | | 值改变回调函数 |\n| onEnterPress | function(value) | | 回车键回调函数 |\n| placeholder | string | | 同原生 input 标签的 placeholder |\n| popover | string | | 信息弹出位置，可选值为 \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| size | string | 'default' | 可选值 \\['large', 'default', 'small'] |\n| style | object | 无 | 最外层扩展样式 |\n| tip | string \\| ReactElement | | 提示信息 |\n| trim | bool | false | trim 为 true 时，失去焦点时会自动删除空白字符。 |\n| type | string | | 同原生 input 标签的 type |\n| value | string \\| number | | defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效 |\n\n### Input.Number\n\n基本 API 和上表相同，特定的 API 如下：\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| max | number | 无 | 最大值 |\n| min | number | 无 | 最小值 |\n| step | number | 1 | 改变数字跨度，可为小数 |\n"},646:function(e,t){e.exports="# Input\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| defaultValue | string \\| number | | Default value |\n| delay | number | 400 | User input triggers the onChange and to check interval, unit: ms.|\n| name | string | none | The name of Form which access data |\n| onChange | function(d) | | The callback function when the value is changing |\n| onEnterPress | function(value) | | The callback function for enter key |\n| placeholder | string | | Same as the native input tag |\n| popover | string | | The position where the text pop up, options: \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| size | string | 'default' | options: \\['large', 'default', 'small'] |\n| style | object | - | Container element style |\n| tip | string \\| ReactElement | | Prompt information |\n| trim | bool | false | When trim is true, blank characters are automatically deleted when lose focus。 |\n| type | string | | Same as the type of the native input tag |\n| value | string \\| number | | The defaultValue and value can be set at the same time and defaultValue will be overridden by value<br />In the Form, the value will be taken over by the form and the value will lose efficacy. |\n\n### Input.Number\n\nThe basic API is the same as the above table, and the specific API is as follows:\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| max | number | - | The maximum value |\n| min | number | - | The minimum value|\n| step | number | 1 | Change the digital span. It can be decimal. |\n"},647:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),l=n(19);t.default=function(){return o.a.createElement(l.o,{placeholder:"input something"})}},648:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block\n *    -- 如果设置了 style.width，默认 display 为 inline-flex\n * en - Base\n *    -- Input usually needs to be used with other components, so the default width is 100% and the default display is block.\n *    -- If the style.width is set, the default display is inline-flex.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function () {\n  return (\n    <Input placeholder=\"input something\" />\n  )\n}\n"},649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),l=n(19),r={width:120,marginRight:12};t.default=function(){return o.a.createElement("div",null,o.a.createElement(l.o,{size:"small",style:r,placeholder:"small size"}),o.a.createElement(l.o,{style:r,placeholder:"default size"}),o.a.createElement(l.o,{size:"large",style:r,placeholder:"large size"}))}},650:function(e,t){e.exports='/**\n * cn - 大小\n *    -- 提供了三种尺寸的输入框，small、default、large\n * en - Size\n *    -- There are three size of input, small, default, large.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 120, marginRight: 12 }\n\nexport default function () {\n  return (\n    <div>\n      <Input size="small" style={style} placeholder="small size" />\n      <Input style={style} placeholder="default size" />\n      <Input size="large" style={style} placeholder="large size" />\n    </div>\n  )\n}\n'},651:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),l=n(19),r={marginBottom:12};t.default=function(){return o.a.createElement("div",{style:{width:300}},o.a.createElement(l.o,{style:r,type:"number",placeholder:"digits undefined"}),o.a.createElement(l.o,{style:r,digits:0,type:"number",placeholder:"digits 0"}),o.a.createElement(l.o,{style:r,digits:1,type:"number",placeholder:"digits 1"}),o.a.createElement(l.o,{style:r,digits:2,type:"number",placeholder:"digits 2"}),o.a.createElement(l.o,{style:r,digits:3,type:"number",placeholder:"digits 3"}))}},652:function(e,t){e.exports='/**\n * cn - 数字\n *    -- type 为 number 时，输入时会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数\n * en - Number\n *    -- When type is number, it is forbidden to input non-numeric characters, and the number of decimal places is limited according to the digits property\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { marginBottom: 12 }\n\nexport default function () {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} type="number" placeholder="digits undefined" />\n      <Input style={style} digits={0} type="number" placeholder="digits 0" />\n      <Input style={style} digits={1} type="number" placeholder="digits 1" />\n      <Input style={style} digits={2} type="number" placeholder="digits 2" />\n      <Input style={style} digits={3} type="number" placeholder="digits 3" />\n    </div>\n  )\n}\n'},653:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),l=n(19);t.default=function(){return o.a.createElement(l.o.Number,{width:120,min:23,max:100,digits:0})}},654:function(e,t){e.exports="/**\n * cn -\n *  . -- Input.Number 组件，可以通过鼠标和上下键辅助输入\n * en -\n *  . -- Input.Number component can be assisted by mouse and up and down keyboard.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function () {\n  return (\n    <Input.Number width={120} min={23} max={100} digits={0} />\n  )\n}\n"},655:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),l=n(19),r=n(235),i={width:300,marginBottom:12};t.default=function(){return o.a.createElement("div",null,o.a.createElement(l.o.Group,{style:i},o.a.createElement(r.a,{name:"user"}),o.a.createElement(l.o,{placeholder:"first name"}),"-",o.a.createElement(l.o,{placeholder:"last name"})),o.a.createElement(l.o.Group,{style:i},o.a.createElement(l.o,{placeholder:"search text"}),o.a.createElement(r.a,{name:"search"})),o.a.createElement(l.o.Group,{style:i},o.a.createElement(l.o,{style:{flex:1},placeholder:"flex 1"}),o.a.createElement(l.o,{style:{flex:3},placeholder:"flex 3"})),o.a.createElement(l.o.Group,{style:i},o.a.createElement(l.o,{placeholder:"search text"}),o.a.createElement(l.c,{type:"primary"},"Search")),o.a.createElement(l.o.Group,{size:"small",style:i},o.a.createElement("b",null,o.a.createElement(r.a,{name:"envelope"})),o.a.createElement(l.o,{placeholder:"email"}),o.a.createElement("b",null,".com")))}},656:function(e,t){e.exports='/**\n * cn - 组合\n *  . -- Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。\n * en - Group\n *  . -- The Icon, span, string and Button types can be placed directly into the Input.Group. Use b tag can change the background color.\n */\nimport React from \'react\'\nimport { Button, Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function () {\n  return (\n    <div>\n      <Input.Group style={style}>\n        <FontAwesome name="user" />\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <FontAwesome name="search" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input style={{ flex: 1 }} placeholder="flex 1" />\n        <Input style={{ flex: 3 }} placeholder="flex 3" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <Button type="primary">Search</Button>\n      </Input.Group>\n\n      <Input.Group size="small" style={style}>\n        <b><FontAwesome name="envelope" /></b>\n        <Input placeholder="email" />\n        <b>.com</b>\n      </Input.Group>\n    </div>\n  )\n}\n'},657:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),l=n(19),r=n(235),i={marginBottom:12};t.default=function(){return o.a.createElement("div",{style:{width:300}},o.a.createElement(l.o,{style:i,placeholder:"email",tip:"enter you email.",popover:"top-left"}),o.a.createElement(l.o.Group,{style:i,tip:"enter you email."},o.a.createElement(r.a,{name:"envelope"}),o.a.createElement(l.o,{placeholder:"email"})),o.a.createElement(l.o.Group,{style:i},o.a.createElement(r.a,{name:"envelope"}),o.a.createElement(l.o,{tip:"enter you email.",placeholder:"email"})))}},658:function(e,t){e.exports='/**\n * cn - 提示文字\n *    -- 在 input 上设置的 tip 在 focus 时弹出\n * en - Tip\n *    -- The tip set on input pops up when it is focused.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { marginBottom: 12 }\n\nexport default function () {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} placeholder="email" tip="enter you email." popover="top-left" />\n\n      <Input.Group style={style} tip="enter you email.">\n        <FontAwesome name="envelope" />\n        <Input placeholder="email" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <FontAwesome name="envelope" />\n        <Input tip="enter you email." placeholder="email" />\n      </Input.Group>\n    </div>\n  )\n}\n'},659:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),l=n(19),r=[{required:!0,message:"Please enter your email."},{type:"email",message:"Please enter a valid email."}];t.default=function(){return o.a.createElement(l.o,{placeholder:"email",rules:r,tip:"Email, required",popover:"top-left",width:300})}},660:function(e,t){e.exports="/**\n * cn - 校验\n *    -- 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出\n *    -- 如果没有设置 popover，不会弹出错误提示。\n *    -- 有错误时，提示框不会隐藏。\n * en - Validate\n *    -- When the rules property is set, it will automatically verify the input data. When the popover property is set, it will pop up at the specified location.\n *    -- If the popover property is not set, no error message will pop up.\n *    -- If input is invalid, the message will not be hidden.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nconst rules = [\n  { required: true, message: 'Please enter your email.' },\n  { type: 'email', message: 'Please enter a valid email.' },\n]\n\nexport default function () {\n  return (\n    <Input\n      placeholder=\"email\"\n      rules={rules}\n      tip=\"Email, required\"\n      popover=\"top-left\"\n      width={300}\n    />\n  )\n}\n"},661:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),l=n(19),r={width:300,marginBottom:12};t.default=function(){return o.a.createElement("div",null,o.a.createElement(l.o.Group,{disabled:!0,style:r},o.a.createElement(l.o,{placeholder:"first name"}),"-",o.a.createElement(l.o,{placeholder:"last name"})),o.a.createElement(l.o,{disabled:!0,style:r,placeholder:"disabled input"}))}},662:function(e,t){e.exports='/**\n * cn - 禁用\n *    -- 设置 disabled 属性禁用组件\n * en - Disabled\n *    -- Set the disabled property to disable the component.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function () {\n  return (\n    <div>\n      <Input.Group disabled style={style}>\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input disabled style={style} placeholder="disabled input" />\n    </div>\n  )\n}\n'},663:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),l=n(19);t.default=function(){return o.a.createElement(l.o.Password,{placeholder:"input password"})}},664:function(e,t){e.exports="/**\n * cn - 密码\n *    -- Input.Password 模拟密码输入框，用来阻止 Chrome 提示记住密码。\n * en - Password\n *    -- Input.Password is a mock input of type 'password', used for disable Chrome autofill.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function () {\n  return (\n    <Input.Password placeholder=\"input password\" />\n  )\n}\n"}});