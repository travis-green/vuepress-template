# Http 2.0 新增了哪些特性

-验证码（CAPTCHA）是“Completely Automated Public Turing test to tell Computers and Humans Apart”（全自动区分计算机和人类的图灵测试）的缩写，是一种区分用户是计算机还是人的公共全自动程序。可以防止：恶意破解密码、刷票、论坛灌水，有效防止某个黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试，实际上用验证码是现在很多网站通行的方式，我们利用比较简易的方式实现了这个功能。这个问题可以由计算机生成并评判，但是必须只有人类才能解答。由于计算机无法解答CAPTCHA的问题，所以回答出问题的用户就可以被认为是人类.
**以上是百度百科给出的解释,简单的说验证码是用来区分人还是机器的,我们需要明白的是很多黑客会写出特定的程序来一次一次的尝试用户密码直到成功登录窃取用户信息。因此验证码就显得尤为必要了,有了验证码,黑客就必须一遍遍的输入验证码才能继续尝试用户密码(当然,没有黑客有这么多精力去干这种蠢事了),这就确保了用户信息的安全性,防止被黑客窃取。**
#验证码怎么做出来的
**从我们平时上网的经验来看,验证码一般是四位,由数字和字母组成。**
**那么接下来楼主将带领大家一步步用JavaScript做出一个验证码脚本!**
先给出成品，方便大家理解：
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
     <style>
        #securityCode{
            background-color: #008000;
            width:70px;
            height:30px;
            font-family: '楷体', serif;
            font-size: 20px;
            color:white;
        }
    </style>
    <script language="JavaScript" type="text/javascript">
      function createCode(){
            var code=new Array(0,1,2,3,4,5,6,7,8,9,
                    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
            var codeNumber;
            securityCode="";//全局变量,方便后续验证
            for(var i=0;i<4;i++){
                codeNumber=Math.floor(Math.random()*36);
                securityCode+=code[codeNumber];
            }
            document.getElementById("securityCode").value=securityCode;
        }
        function verify(){
            var enterCode=document.getElementById("enterCode").value;
            if(enterCode.toUpperCase()==securityCode){
                alert("输入正确,通过验证!");
            }
            else{
                enterCode.value="";
                createCode();
            }
        }
    </script>
       <title>Jizhen Tan</title>
</head>
<body  onLoad="checkCookie()" >
     <input type="text" id="enterCode"><br/>
     <input type="button" id="securityCode"   onclick="createCode()">
     <a href="###" onclick="createCode()">看不清楚</a><br/>
     <input type="button" style="background-color: #0099FF; font-size: 20px;"value="验证" onclick="verify()">
</body>
</html>
```
1.既然是四位验证码,我们的思路就要打开一些了,首先我们需要一个数组来储存字母和数字。
```
 var code=new Array(0,1,2,3,4,5,6,7,8,9,
                    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
```
2.然后我们需要让它随机显示数组中的元素，这里我们建立一个codeNumber变量来随机显示的数字,但我们需要的是四位验证码，而现在数组中的元素都是单个的，怎么办呢？简单！我们再建立一个securityCode变量来储存数组中的元素不就得了。代码如下：
```
 var codeNumber;
            securityCode="";//全局变量,方便后续验证
            for(var i=0;i<4;i++){
                codeNumber=Math.floor(Math.random()*36);
                securityCode+=code[codeNumber];
            }
```
**可以看出此时securityNumber变量储存的就是一个四位随机验证码**
3.好了，经过简单的两步，我们就得到了四位验证码。我们将它放在一个createCode函数中。
```
   function createCode(){
            var code=new Array(0,1,2,3,4,5,6,7,8,9,
                    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
            var codeNumber;
            securityCode="";//全局变量,方便后续验证
            for(var i=0;i<4;i++){
                codeNumber=Math.floor(Math.random()*36);
                securityCode+=code[codeNumber];
            }
            document.getElementById("securityCode").value=securityCode;
        }
```
4.接下来我们创建一个验证机制：
```
  function verify(){
            var enterCode=document.getElementById("enterCode").value;
            if(enterCode.toUpperCase()==securityCode){
                alert("输入正确,通过验证!");
            }
            else{
                enterCode.value="";
                createCode();
            }
        }
```
5.小小修饰下验证码：
```
 <style>
        #securityCode{
            background-color: #008000;
            width:70px;
            height:30px;
            font-family: '楷体', serif;
            font-size: 20px;
            color:white;
        }
    </style>
```
#结束