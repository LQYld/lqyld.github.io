(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{425:function(r,a,t){"use strict";t.r(a);var _=t(42),v=Object(_.a)({},(function(){var r=this,a=r.$createElement,t=r._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"浏览器的功能与组成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的功能与组成"}},[r._v("#")]),r._v(" 浏览器的功能与组成")]),r._v(" "),t("h2",{attrs:{id:"浏览器的功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的功能"}},[r._v("#")]),r._v(" 浏览器的功能")]),r._v(" "),t("ul",[t("li",[r._v("网络")]),r._v(" "),t("li",[r._v("资源管理")]),r._v(" "),t("li",[r._v("网页浏览")]),r._v(" "),t("li",[r._v("多页面管理")]),r._v(" "),t("li",[r._v("插件管理")]),r._v(" "),t("li",[r._v("账户和同步")]),r._v(" "),t("li",[r._v("安全机制")]),r._v(" "),t("li",[r._v("开发者工具")]),r._v(" "),t("li",[r._v("......")])]),r._v(" "),t("h2",{attrs:{id:"浏览器的内核-渲染引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的内核-渲染引擎"}},[r._v("#")]),r._v(" 浏览器的内核（渲染引擎）")]),r._v(" "),t("p",[r._v("在浏览器中有个最重要的模块，它的主要功能是把一切请求回来的资源变为可视化的图像。"),t("br"),r._v("\n这个模块就是浏览器内核，通常它也被称为渲染引擎。"),t("br"),t("br"),r._v("\n浏览器内核总结：")]),r._v(" "),t("h3",{attrs:{id:"ie-trident"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ie-trident"}},[r._v("#")]),r._v(" IE---------\x3eTrident")]),r._v(" "),t("h3",{attrs:{id:"safari-webkit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#safari-webkit"}},[r._v("#")]),r._v(" Safari---------\x3eWebKit")]),r._v(" "),t("p",[r._v("WebKit 本身主要是由两个小引擎构成的。"),t("br"),r._v("\n一个正是渲染引擎“WebCore”。"),t("br"),r._v('\n另一个则是 javascript 解释引擎 "JSCore"。'),t("br"),r._v("\n它们均是从 KDE 的渲染引擎 KHTML 及 javascript 解释引擎 KJS 衍生而来。")]),r._v(" "),t("h3",{attrs:{id:"chrome-webkit-的分支引擎-blink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chrome-webkit-的分支引擎-blink"}},[r._v("#")]),r._v(" Chrome---------\x3eWebKit 的分支引擎---------\x3eBlink")]),r._v(" "),t("p",[r._v("在 13 年发布的 Chrome 28.0.1469.0 版本开始，Chrome 放弃 Chromium 引擎转而使用最新的 Blink 引擎（基于 WebKit2__苹果公司于 2010 年推出的新的 WebKit 引擎），\nBlink 对比上一代的引擎精简了代码、改善了 DOM 框架，也提升了安全性。")]),r._v(" "),t("h3",{attrs:{id:"opera"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#opera"}},[r._v("#")]),r._v(" Opera")]),r._v(" "),t("p",[r._v("旧版 Opera 4 至 6 版本：Elektra 排版引擎"),t("br"),r._v("\nOpera7.0 :Presto 渲染引擎"),t("br"),r._v("\nOpera 在 2013 年 2 月宣布放弃 Presto；采用 Chromium;又转为 Blink 引擎;")]),r._v(" "),t("h3",{attrs:{id:"firefox-gecko"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firefox-gecko"}},[r._v("#")]),r._v(" Firefox---------\x3eGecko")]),r._v(" "),t("h2",{attrs:{id:"进程与线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程"}},[r._v("#")]),r._v(" 进程与线程")]),r._v(" "),t("h3",{attrs:{id:"进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[r._v("#")]),r._v(" 进程")]),r._v(" "),t("p",[r._v("程序的一次执行，它占有一片独有的内存空间，是操作系统执行的基本单元。"),t("br"),r._v("\n一个进程中至少又一个运行的线程：主线程，进程启动后自动创建。"),t("br"),r._v("\n一个进程中也可以同时运行多个线程，我们会说程序是多线程运行的\n一个进程内的数据可以供其中的多个线程直接共享，多个进程之间的数据是不能直接共享的")]),r._v(" "),t("h3",{attrs:{id:"线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[r._v("#")]),r._v(" 线程")]),r._v(" "),t("p",[r._v("是进程内的一个独立执行单元，是 CPU 调度的最小单元。程序运行的基本单元线程池（thread pool）：保存多个线程对象的容器，实现线程对象的反复利用")]),r._v(" "),t("h4",{attrs:{id:"js-引擎是单线程运行-事件循环机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-引擎是单线程运行-事件循环机制"}},[r._v("#")]),r._v(" JS 引擎是单线程运行（事件循环机制）")]),r._v(" "),t("h2",{attrs:{id:"现代浏览器-多进程、多线程模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现代浏览器-多进程、多线程模型"}},[r._v("#")]),r._v(" 现代浏览器：多进程、多线程模型")]),r._v(" "),t("h3",{attrs:{id:"_1-不堪回首的过去"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-不堪回首的过去"}},[r._v("#")]),r._v(" 1.不堪回首的过去：")]),r._v(" "),t("p",[r._v("当你通过浏览器打开很多页面的时候，如果其中一个页面不响应了或者崩溃了，\n那么随之而来的将会是更不幸的事情，你打开的所有页面都会得不到响应，\n最让人不能忍受的是，其中的一些页面可能还包含了未保存或者未发送更多信息")]),r._v(" "),t("h3",{attrs:{id:"_2-浏览器厂商如何解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-浏览器厂商如何解决"}},[r._v("#")]),r._v(" 2.浏览器厂商如何解决？")]),r._v(" "),t("p",[r._v("采用多进程模型，该模型可以带来的好处")]),r._v(" "),t("ul",[t("li",[r._v("避免因单个页面的不响应或者崩溃影响整个浏览器的稳定性")]),r._v(" "),t("li",[r._v("当第三方插件崩溃时，也不会影响整个浏览器的稳定性")]),r._v(" "),t("li",[r._v("安全")])]),r._v(" "),t("h3",{attrs:{id:"_3-浏览器到底有些什么进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-浏览器到底有些什么进程"}},[r._v("#")]),r._v(" 3.浏览器到底有些什么进程")]),r._v(" "),t("ul",[t("li",[r._v("Browser 进程\n"),t("ul",[t("li",[r._v("浏览器的主进程，负责浏览器页面的显示，和各个页面的管理，浏览器中所有其他类型进程的祖先，负责其他进程的创建和销毁，它有且只有一个！！！！")])])]),r._v(" "),t("li",[r._v("Renderer 进程\n"),t("ul",[t("li",[r._v("网页渲染进程，负责页面的渲染，可以有多个，当然渲染进程的数量不一定等于你打开网页的个数")])])]),r._v(" "),t("li",[r._v("各种插件进程")]),r._v(" "),t("li",[r._v("GPU 进程")])]),r._v(" "),t("h4",{attrs:{id:"移动设备的浏览器可能不太一样"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动设备的浏览器可能不太一样"}},[r._v("#")]),r._v(" 移动设备的浏览器可能不太一样")]),r._v(" "),t("ul",[t("li",[r._v("Android 不支持插件，所以就没有插件进程")]),r._v(" "),t("li",[r._v("GPU 演化成了 Browser 进程的一个线程")]),r._v(" "),t("li",[r._v("Renderer 进程演化成了操作系统的一个服务进程，它仍然时独立的")])]),r._v(" "),t("h3",{attrs:{id:"_4-每个进程内部又有很多线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-每个进程内部又有很多线程"}},[r._v("#")]),r._v(" 4.每个进程内部又有很多线程")]),r._v(" "),t("p",[r._v("多线程的目的主要是保持用户界面的高度响应"),t("br"),r._v("\n例如:为了不让 Browser 进程的 UI 线程被其他耗时的操作（大文件的加载，本地文件读写）所阻塞，\n那么我们就把这些操作放到分线程中去处理。"),t("br"),r._v("\n利用计算机的多核优势，让渲染的不同阶段在不同的线程中执行。")])])}),[],!1,null,null,null);a.default=v.exports}}]);