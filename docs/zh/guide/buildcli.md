# 如何从0写一个脚手架

----
##DOM
什么是DOM？简单地说DOM是一套对文档内容进行抽象和概念化的方法。
**&nbsp;&nbsp;W3C给出的DOM定义是这样的：“一个与系统平台和编程语言无关的接口，程序和脚本以通过这个接口动态的访问和修改文档的内容，结构和样式。”**
&nbsp;&nbsp;那么楼主在这里主要是跟大家分享下JavaScript中如何使用DOM，当然如果会用JavaScript使用DOM，当你使用PHP或是Python之类的语言来解析XML文档的时候，我们获得的DOM新知识将会有很大的帮助。
**DOM中的“D"，”O"，“M”。**
  &nbsp;&nbsp;“D”当然就是“document”了，没有document的存在DOM也就无从谈起，浏览器在加载完我们所写的网页时，DOM就在后台产生了。浏览器将之转化为一个可读的文档对象。
  &nbsp;&nbsp;"O"呢，就是“object”,JavaScript中对象分为三种，分别是：用户自定义对象（用户自行创建的对象），宿主对象（浏览器提供的对象）和内建对象（JavaScript中的内建对象，如：Math，Date）。对象就是我们操作的主要目标。
  &nbsp;&nbsp;“M"怎么说呢，说它是”Modle"可以，也能说是“Map”本身DOM的存在就是让我们对整个文档有一个把握，所以说它是模型有道理，说它是地图也有道理。这里我们姑且把它当做是Map吧，既然是地图，那必然要有诸如图例，方向，等高线和比例尺之类的图例。我们要向看懂地图就需要对这些图例了如指掌。对于DOM同样如此，DOM把文档表示成一棵树（这里的“树”是数学上的概念），也是我们理解和运用这一模型的关键。家谱树模型非常适合用来表示一分用（X)HTML编写的文档。
  **比如：**
```
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Canvas</title>
<style>
</style>
</head>
<body>
  <h1 title="example">Examples</h1>
  <p>A example</p>
  <ul id="number">
    <li class="one">第一条</li>
    <li class="two">第二条</li>
    <li class="three">第三条</li>
  </ul>
</body>
</html>
```
![效果](http://img.blog.csdn.net/20151125205707478)
##节点
&nbsp;&nbsp;&nbsp;&nbsp;节点是个网络术语，他表示的是构成网络中的一个连接点。一个网络就是由一些节点所构成的集合。
**那么在DOM中同样存在节点，浏览器所解析的文档就是由一个个的节点构成，这个节点就是我们上面所画出来的树中的树叶和树枝。那么这些树叶和树枝被分为了三种：元素节点，属性节点，文本节点。，接下来我们一一看一下：**
**1.元素节点**
>元素节点其实很好理解，我们文档中诸如body,p,ul,li等标签都是一个元素节点。
标签的名字就是元素节点的名字。
**比如：**
```
<p>A example</p>
```
**这里的p标签就是一个元素节点，p就是元素节点的名称。**

**2.属性节点**
>属性节点是为了对元素做出更具体的描述，比如我们文档中：
```
<h1 title="example">Examples</h1>
```
**这里的title就是一个属性节点，属性节点用用比较广泛，CSS中的诸如style，id,class我们都可以把它看做是一个属性节点访问。**

**3.文本节点**
**文本节点就更容易理解了，就是文本内容嘛。**比如：
```
<ul>
    <li>第一条</li>
    <li>第二条</li>
    <li>第三条</li>
  </ul>
```
**在XHTML中文本节点被包含在元素节点的内部，当并非所有的元素节点都包含文本节点，就像这里的ul标签没有文本内容，它包含了li标签，li有文本内容，里面的内容就构成了文本节点。**
##获取元素
>有三种方法可以获取元素节点，分别是通过元素ID（getElementByID),通过标签名字（getElementByTagName），通过类名字（getELementByClassName）来获取：
**1.getElementById**
**注意：JavaScript区分大小写，getELementById这几个字母不能写错了**
```
<script>
   var number=document.getElementById("number");
   alert(typeof number);
</script>
```
我们会得到 如图所示的alert对话框：
![object对象](http://img.blog.csdn.net/20151125205749111)
**由此我们也能更深入的理解了HTML中处处皆对象的概念。**

**2.getElementByTagName**
getElementTagName会得到一个数组，这个数组对应着给定标签的每一个元素，
**比如：**
```
var element=document.getElementsByTagName("li");
for(var i=0;i<element.length;i++){
alert(typeof element[i]);
}
```
我们依然可以看到：
![object对象](http://img.blog.csdn.net/20151125205749111)
**3.getElementByClassName**
```
var element=document.getElementsByClassName("one");
alert(typeof element);
```
我们仍旧可以看到：
![object对象](http://img.blog.csdn.net/20151125205749111)
到这里我们就学完了获取元素的三种方法，**我想你一定厌倦了看那么多变的显示着object的alert对话框，你一定也明白了文档中每个节点都是一个对象。**
那么我们下一次就要说一下**节点对象的属性和方法**了。利用这些方法我们就可以随心所欲的改变文档中的内容，甚至改变某些元素的属性。
**下面是对本次学习的一个总结：**
>一份文档就是一棵节点树.

>节点分为不同的类型，元素节点，属性节点和文本节点等。

>getElementByTagName和getElementByClassName将返回一个对象数组，他们对应着一组特定的元素节点。

>每个节点都是一个对象。
#Happy hacking !