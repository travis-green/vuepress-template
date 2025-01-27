# 小程序的原理和运行机制

----
**<p align="right">「why what how 小程序」</p>**

----------
**小程序的由来。**

在小程序没有出来之前，最初微信WebView逐渐成为移动web重要入口，微信发布了一整套网页开发工具包，称之为 JS-SDK，给所有的 Web 开发者打开了一扇全新的窗户，让所有开发者都可以使用到微信的原生能力，去完成一些之前做不到或者难以做到的事情。

但JS-SDK 的模式并没有解决使用移动网页遇到的体验不良的问题，比如受限于设备性能和网络速度，会出现白屏的可能。因此又设计了一个增强版JS-SDK，也就是“微信 Web 资源离线存储”，但在复杂的页面上依然会出现白屏的问题，原因表现在页面切换的生硬和点击的迟滞感。这个时候需要一个 JS-SDK 所处理不了的，使用户体验更好的一个系统，小程序应运而生。

快速的加载
更强大的能力
原生的体验
易用且安全的微信数据开放
高效和简单的开发


**小程序与普通网页开发的区别？**

小程序与普通网页开发的区别
小程序的开发同普通的网页开发相比有很大的相似性，小程序的主要开发语言也是 JavaScript，但是二者还是有些差别的。

普通网页开发可以使用各种浏览器提供的 DOM API，进行 DOM 操作，小程序的逻辑层和渲染层是分开的，逻辑层运行在 JSCore
中，并没有一个完整浏览器对象，因而缺少相关的DOM API和BOM
API。
普通网页开发渲染线程和脚本线程是互斥的，这也是为什么长时间的脚本运行可能会导致页面失去响应，而在小程序中，二者是分开的，分别运行在不同的线程中。
网页开发者在开发网页的时候，只需要使用到浏览器，并且搭配上一些辅助工具或者编辑器即可。小程序的开发则有所不同，需要经过申请小程序帐号、安装小程序开发者工具、配置项目等等过程方可完成。
小程序的执行环境

**小程序的运行机制**

>小程序的渲染层和逻辑层分别由 2 个线程管理：视图层的界面使用了 WebView 进行渲染，逻辑层采用 JsCore 线程运行 JS脚本。


<img src="https://image.fundebug.com/2019-05-16-002.png"/>
<img src="https://image.fundebug.com/2019-05-16-003.jpeg"/>

----------

那么为什么要这样设计呢，前面也提到了管控和安全，为了解决这些问题，我们需要阻止开发者使用一些，例如浏览器的window对象，跳转页面、操作DOM、动态执行脚本的开放性接口。

我们可以使用客户端系统的 JavaScript 引擎，iOS 下的 JavaScriptCore 框架，安卓下腾讯 x5 内核提供的 JsCore 环境。

这个沙箱环境只提供纯 JavaScript 的解释执行环境，没有任何浏览器相关接口。

这就是小程序双线程模型的由来：

逻辑层：创建一个单独的线程去执行 JavaScript，在这里执行的都是有关小程序业务逻辑的代码，负责逻辑处理、数据请求、接口调用等
视图层：界面渲染相关的任务全都在 WebView 线程里执行，通过逻辑层代码去控制渲染哪些界面。一个小程序存在多个界面，所以视图层存在多个 WebView 线程
JSBridge 起到架起上层开发与Native（系统层）的桥梁，使得小程序可通过API使用原生的功能，且部分组件为原生组件实现，从而有良好体验

**双线程通信**

把开发者的 JS 逻辑代码放到单独的线程去运行，但在 Webview 线程里，开发者就没法直接操作 DOM。

那要怎么去实现动态更改界面呢？

如上图所示，逻辑层和试图层的通信会由 Native （微信客户端）做中转，逻辑层发送网络请求也经由 Native 转发。

这也就是说，我们可以把 DOM 的更新通过简单的数据通信来实现。

Virtual DOM 相信大家都已有了解，大概是这么个过程：用 JS 对象模拟 DOM 树 -> 比较两棵虚拟 DOM 树的差异 -> 把差异应用到真正的 DOM 树上。

如图所示

<img src="https://image.fundebug.com/2019-05-16-004.png">

1. 在渲染层把 WXML 转化成对应的 JS 对象。

2. 在逻辑层发生数据变更的时候，通过宿主环境提供的 setData 方法把数据从逻辑层传递到 Native，再转发到渲染层。

3. 经过对比前后差异，把差异应用在原来的 DOM 树上，更新界面。

我们通过把 WXML 转化为数据，通过 Native 进行转发，来实现逻辑层和渲染层的交互和通信。

而这样一个完整的框架，离不开小程序的基础库。

**小程序的基础库**

小程序的基础库可以被注入到视图层和逻辑层运行，主要用于以下几个方面：

+ 在视图层，提供各类组件来组建界面的元素
+ 在逻辑层，提供各类 API 来处理各种逻辑
+ 处理数据绑定、组件系统、事件系统、通信系统等一系列框架逻辑

由于小程序的渲染层和逻辑层是两个线程管理，两个线程各自注入了基础库。

小程序的基础库不会被打包在某个小程序的代码包里边，它会被提前内置在微信客户端。

这样可以：

+ 降低业务小程序的代码包大小
+ 可以单独修复基础库中的 Bug，无需修改到业务小程序的代码包

Exparser 框架
Exparser是微信小程序的组件组织框架，内置在小程序基础库中，为小程序的各种组件提供基础的支持。小程序内的所有组件，包括内置组件和自定义组件，都由Exparser组织管理。

Exparser的主要特点包括以下几点：

+ 基于Shadow
DOM模型：模型上与WebComponents的ShadowDOM高度相似，但不依赖浏览器的原生支持，也没有其他依赖库；实现时，还针对性地增加了其他API以支持小程序组件编程。
+ 可在纯JS环境中运行：这意味着逻辑层也具有一定的组件树组织能力。
+ 高效轻量：性能表现好，在组件实例极多的环境下表现尤其优异，同时代码尺寸也较小。

>小程序中，所有节点树相关的操作都依赖于Exparser，包括WXML到页面最终节点树的构建、createSelectorQuery调用和自定义组件特性等。

**内置组件**

基于Exparser框架，小程序内置了一套组件，提供了视图容器类、表单类、导航类、媒体类、开放类等几十种组件。有了这么丰富的组件，再配合WXSS，可以搭建出任何效果的界面。在功能层面上，也满足绝大部分需求。

**六、运行机制**

>小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台状态的小程序切换到前台，这个过程就是热启动；冷启动指的是用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动。

+ 小程序没有重启的概念
+ 当小程序进入后台，客户端会维持一段时间的运行状态，超过一定时间后（目前是5分钟）会被微信主动销毁
+ 当短时间内（5s）连续收到两次以上收到系统内存告警，会进行小程序的销毁

**3.闭包的注意点**
>1）由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
>
>2）闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

<img src="https://image.fundebug.com/2019-05-16-005.png">

**七、更新机制**
小程序冷启动时如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动才会应用上。 如果需要马上应用最新版本，可以使用 wx.getUpdateManager API 进行处理。

**八、性能优化**

主要的优化策略可以归纳为三点：

+ 精简代码，降低WXML结构和JS代码的复杂性；
+ 合理使用setData调用，减少setData次数和数据量；
+ 必要时使用分包优化。

**setData 工作原理**

小程序的视图层目前使用 WebView 作为渲染载体，而逻辑层是由独立的 JavascriptCore 作为运行环境。在架构上，WebView 和 JavascriptCore 都是独立的模块，并不具备数据直接共享的通道。当前，视图层和逻辑层的数据传输，实际上通过两边提供的 evaluateJavascript 所实现。即用户传输的数据，需要将其转换为字符串形式传递，同时把转换后的数据内容拼接成一份 JS 脚本，再通过执行 JS 脚本的形式传递到两边独立环境。

而 evaluateJavascript 的执行会受很多方面的影响，数据到达视图层并不是实时的。

**常见的 setData 操作错误**

1. 频繁的去 setData在我们分析过的一些案例里，部分小程序会非常频繁（毫秒级）的去setData，其导致了两个后果：Android下用户在滑动时会感觉到卡顿，操作反馈延迟严重，因为 JS 线程一直在编译执行渲染，未能及时将用户操作事件传递到逻辑层，逻辑层亦无法及时将操作处理结果及时传递到视图层；渲染有出现延时，由于 WebView 的 JS 线程一直处于忙碌状态，逻辑层到页面层的通信耗时上升，视图层收到的数据消息时距离发出时间已经过去了几百毫秒，渲染的结果并不实时；
2. 每次 setData 都传递大量新数据由setData的底层实现可知，我们的数据传输实际是一次 evaluateJavascript
3. 脚本过程，当数据量过大时会增加脚本的编译执行时间，占用 WebView JS 线程， 后台态页面进行
setData当页面进入后台态（用户不可见），不应该继续去进行setData，后台态页面的渲染用户是无法感受的，另外后台态页面去setData也会抢占前台页面的执行。

**总结**

大致从以上几个角度分析了小程序的底层架构，从小程序的由来、到双线程的出现、设计、通信、到基础库、Exparser 框架、再到运行机制、性能优化等等，都是一个个相关而又相互影响的选择。关于小程序的底层框架设计，其实涉及到的还有很多，比如自定义组件，原生组件、性能优化等方面，都不是一点能讲完的，还要多看源码，多思考。每一个框架的诞生都有其意义，我们作为开发者能做的不只是会使用这个工具，还应理解它的设计模式。只有这样才不会被工具左右，才能走的更远！