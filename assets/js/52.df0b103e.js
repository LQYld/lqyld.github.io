(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{411:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"call-stack-调用栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#call-stack-调用栈"}},[t._v("#")]),t._v(" Call stack （调用栈）")]),t._v(" "),n("p",[t._v("调用栈是解释器（比如浏览器中的 JavaScript 解释器）追踪函数执行流的一种机制。当执行环境中调用了多个函数时，通过这种机制，\n我们能够追踪到哪个函数正在执行，执行的函数体中又调用了多个函数时，通过这种机制，我们能够追踪到哪个函数正在执行，执行的函数体重又调用了哪个函数。")]),t._v(" "),n("ul",[n("li",[t._v("每调用一个函数，解释器就会把该函数添加进调用栈并开始执行。")]),t._v(" "),n("li",[t._v("正在调用栈中执行的函数还调用了其他函数，那么新函数也将会被添加进调用栈，一旦这个函数被调用，便会立即执行。")]),t._v(" "),n("li",[t._v("当前函数执行完毕后，解释器将其清出调用栈，继续执行当前执行环境下的剩余的代码。")]),t._v(" "),n("li",[t._v('当分配的调用栈空间被占满时，会引发"堆栈溢出"错误。')])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("greeting")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1] 其他代码")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHi")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [2] 其他代码")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHi")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用 `greeting` 函数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("greeting")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [3] 其他代码")]),t._v("\n")])])]),n("p",[t._v("上面的代码会按照如下流程这样执行：")]),t._v(" "),n("p",[t._v("1、忽略前面所有函数，直到 greeting() 函数被调用。"),n("br"),t._v("\n2、把 greeting() 添加进调用栈列表。"),n("br"),t._v("\n3、执行 greeting() 函数体中的所有代码。"),n("br")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("调用栈列表")]),t._v(" "),n("ul",[n("li",[t._v("greeting")])])]),t._v(" "),n("p",[t._v("4、代码执行到 sayHi() 时，该函数被调用。"),n("br"),t._v("\n5、把 sayHi() 添加进调用栈列表。"),n("br"),t._v("\n6、执行 sayHi() 函数体中的代码"),n("br")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("调用栈列表")]),t._v(" "),n("ul",[n("li",[t._v("sayHi")]),t._v(" "),n("li",[t._v("greeting")])])]),t._v(" "),n("p",[t._v("7、返回来继续执行 greeting() 函数体中 sayHi() 后面的代码"),n("br"),t._v("\n8、删除调用栈列表中的 sayHi() 函数。"),n("br"),t._v("\n9、当 greeting() 函数体中的代码全部执行完毕，返回到调用 greeting() 的代码行，继续执行剩下的 JS 代码。"),n("br")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("调用栈列表")]),t._v(" "),n("ul",[n("li",[t._v("greeting")])])]),t._v(" "),n("p",[t._v("10、删除调用栈列表中的 greeting() 函数。"),n("br"),n("br"),t._v("\n一开始，我们得到一个空空如也的调用栈。随后，每当有函数被调用都会自动地添加进调用栈，执行完函数体重的代码后，调用栈又会自动地移除这个函数。最后，我们又得到了一个空空如也的调用栈。")])])}),[],!1,null,null,null);s.default=e.exports}}]);