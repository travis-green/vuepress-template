(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{391:function(n,t,a){"use strict";a.r(t);var e=a(25),r=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[n._v("#")]),n._v(" ElasticSearch")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("##JavaScript的闭包")]),n._v(" "),a("hr"),n._v(" "),a("p",[a("strong",[n._v("首先声明，这是一篇面向小白的博客，不过也欢迎各位大牛批评指正,谢谢。")])]),n._v(" "),a("p",[n._v("  其实关于闭包各个论坛社区里都有很多的文章来讲它，毕竟闭包是JavaScript中一个特色，也正因为这个雨中不同的特色也让闭包理解起来有一些吃力。笔者在这里不仅仅是想介绍闭包，也向列举一些笔者所见过的一些闭包，如果有读者还有一些比较经典的闭包例子，希望可以在评论区里留一下，谢谢。")]),n._v(" "),a("p",[a("strong",[n._v("说了半天，究竟什么是闭包呢？")])]),n._v(" "),a("ul",[a("li",[n._v("闭包就是函数的局部变量集合，只是这些局部变量在函数返回后会继续存在。")]),n._v(" "),a("li",[n._v("闭包就是就是函数的“堆栈”在函数返回后并不释放，我们也可以理解为这些函数堆栈并不在栈上分配而是在堆上分配。")]),n._v(" "),a("li",[n._v("当在一个函数内定义另外一个函数就会产生闭包。")])]),n._v(" "),a("p",[a("strong",[n._v("为了便于理解，我们可以简单的将闭包理解为：")])]),n._v(" "),a("ul",[a("li",[n._v("闭包：是指有权访问另外一个函数作用域中的变量的函数。")]),n._v(" "),a("li")]),n._v(" "),a("p",[n._v("###JavaScript中的作用域")]),n._v(" "),a("hr"),n._v(" "),a("p",[a("strong",[n._v("JavaScript中是没有块级作用域的。不过关于块级作用域我们在这里不做深入探究，笔者在"),a("a",[n._v("http://segmentfault.com/a/1190000004092842M")]),n._v("中有对块级作用域较为详细的解释，不懂的读者可以去看看。")])]),n._v(" "),a("blockquote",[a("p",[n._v("变量的作用域无非就是两种：全局变量和局部变量。\nJavascript语言的特殊之处，就在于函数内部可以直接读取全局变量。")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("　  var n=999;\n　　function f1(){\n　　　　alert(n);\n　　}\n　　f1(); // 999\n")])])]),a("p",[a("strong",[n._v("如上函数，f1可调用全局变量n")])]),n._v(" "),a("p",[n._v("另一方面，在函数外部自然无法读取函数内的局部变量。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function f1(){\n　　　　var n=999;\n　　}\n　　alert(n); // error\n")])])]),a("p",[a("strong",[n._v("这里有一个地方需要注意，函数内部声明变量的时候，一定要使用var命令。如果不用的话，你实际上声明了一个全局变量。")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function f1(){\n　　　　n=999;\n　　}\n　　f1();\n　　alert(n); // 999\n\n")])])]),a("p",[n._v("###闭包")]),n._v(" "),a("p",[a("strong",[n._v("1.理解闭包")])]),n._v(" "),a("p",[a("strong",[n._v("我们已经理解了什么是作用域，什么是块级作用域，那又该如何去访问函数内部的变量呢？")])]),n._v(" "),a("p",[n._v("出于种种原因，我们有时候需要得到函数内的局部变量。但是，前面已经说过了，正常情况下，这是办不到的，只有通过变通方法才能实现。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("　function f1(){\n　　　　var n=999;\n　　　　function f2(){\n　　　　　　alert(n);\n　　　　　　} \n       return f2;\n　　}\n　var result=f1();\n　result();// 弹出999\n")])])]),a("p",[a("strong",[n._v("上面函数中的f2函数就是闭包，就是通过建立函数来访问函数内部的局部变量。")])]),n._v(" "),a("p",[a("strong",[n._v("2.闭包的用途")]),n._v("\n  闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("　　function f1(){\n　　　　var n=999;\n　　　　nAdd=function(){n+=1}\n　　　　function f2(){\n　　　　　　alert(n);\n　　　　}\n　　　　return f2;\n　　}\n　　var result=f1();\n　　result(); // 999\n　　nAdd();\n　　result(); // 1000\n")])])]),a("p",[a("strong",[n._v("在这段代码中，result实际上就是闭包f2函数。它一共运行了两次，第一次的值是999，第二次的值是1000。这证明了，函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除。")])]),n._v(" "),a("p",[a("strong",[n._v("为什么会这样呢？原因就在于f1是f2的父函数，而f2被赋给了一个全局变量，这导致f2始终在内存中，而f2的存在依赖于f1，因此f1也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收。")])]),n._v(" "),a("p",[a("strong",[n._v('这段代码中另一个值得注意的地方，就是"nAdd=function(){n+=1}"这一行，首先在nAdd前面没有使用var关键字，因此nAdd是一个全局变量，而不是局部变量。其次，nAdd的值是一个匿名函数（anonymous function），而这个匿名函数本身也是一个闭包，所以nAdd相当于是一个setter，可以在函数外部对函数内部的局部变量进行操作。')])]),n._v(" "),a("p",[a("strong",[n._v("3.闭包的注意点")])]),n._v(" "),a("blockquote",[a("p",[n._v("1）由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。")]),n._v(" "),a("p",[n._v("2）闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。")])]),n._v(" "),a("p",[a("strong",[n._v("4.经典闭包小案例")])]),n._v(" "),a("p",[a("strong",[n._v("如果你能理解下面全部的案例，那你的闭包就算是真正掌握了。")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('　　var name = "The Window";\n　　var object = {\n　　　　name : "My Object",\n　　　　getNameFunc : function(){\n　　　　　　return function(){\n　　　　　　　　return this.name;\n　　　　　　};\n　　　　}\n　　};\n　　alert(object.getNameFunc()());//The Window\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('　  var name = "The Window";\n　　var object = {\n　　　　name : "My Object",\n　　　　getNameFunc : function(){\n　　　　　　var that = this;\n　　　　　　return function(){\n　　　　　　　　return that.name;\n　　　　　　};\n　　　　}\n　　};\n　　alert(object.getNameFunc()());//My Object\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function fun(n,o) {\n  console.log(o)\n  return {\n    fun:function(m){\n      return fun(m,n);\n    }\n  };\n}\nvar a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);//undefined,?,?,?\nvar b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?\nvar c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined,?,?,?\n")])])]),a("blockquote",[a("p",[n._v("//问:三行a,b,c的输出分别是什么？")])]),n._v(" "),a("p",[a("strong",[n._v("这是一道非常典型的JS闭包问题。其中嵌套了三层fun函数，搞清楚每层fun的函数是那个fun函数尤为重要。")])]),n._v(" "),a("blockquote",[a("p",[n._v("//答案：\n//a: undefined,0,0,0\n//b: undefined,0,1,2\n//c: undefined,0,1,1")])]),n._v(" "),a("p",[a("strong",[n._v("都答对了么？如果都答对了恭喜你在js闭包问题当中几乎没什么可以难住你了。")])]),n._v(" "),a("p",[n._v("#Happy hacking!")])])}),[],!1,null,null,null);t.default=r.exports}}]);