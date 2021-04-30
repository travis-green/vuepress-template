# 如何写一个自己专属的脚手架

----
**<p align="right">「如何写一个自己的脚手架 一键初始化项目」</p>**

**介绍：**
 
脚手架的作用：为减少重复性工作而做的重复性工作，构建项目需要的基本模板，打造适用于自己开发习惯的脚手架。

>即为了开发中的：编译 es6，js 模块化，压缩代码，热更新等功能，我们使用webpack等打包工具，但是又带来了新的问题：初始化工程的麻烦，复杂的webpack配置，以及各种配置文件，所以就有了一键生成项目，自定义配置开发的脚手架。

**期望：** 

在命令行执行输入 my-cli create text-project，回车后直接创建项目并生成模板，还会把依赖都下载好，下面就开始教你如何实现一个脚手架：

**1、创建项目 my-cli，执行 npm init -y 快速初始化项目**

生成如下的package.json 文件结构，我们在文件中间添加 

（用处:用来指定各个内部命令对应的可执行文件的位置）

> "bin": { 
    "my-cli": "bin.js"  //key 值随意自定义
  }

```
<script>
  {
    "name": "clitest",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "bin": {  
      "my-cli": "lib/bin.js" 
    }, 
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }
</script>
```

接下来我们创建一个lib文件夹，用于存放bin.js。

>mkdir lib && cd lib && vim bin.js ，并把下面内容粘贴进去，保存。

bin.js 内容如下
```
#!/usr/bin/env node

console.log(process.argv);

```

>#!/usr/bin/env node，这一行是必须加的，就是让系统动态的去全局环境中查找node来执行你的脚本文件。

接下来命令行执行 npm link ，创建软链接至全局，这样我们就可以全局使用my-cli命令了，在开发 npm 包的前期都会使用link方式在其他项目中测试来开发，后期再发布到npm上

在控制台看到类似如下输出。

```
up to date in 0.264s
/usr/local/bin/my-cli -> /usr/local/lib/node_modules/clitest/lib/bin.js
/usr/local/lib/node_modules/clitest -> /Users/travis/Documents/GitHub2/clitest
```

我们紧接着在命令行执行 my-cli 1 2 3

>输出：[ '/usr/local/bin/node', '/usr/local/bin/my-cli', '1', '2', '3' ]。

这样我们就可以获取到用户的输入参数，我们换成常用的脚手架构建方式：my-cli create test-project

```
clitest my-cli create test-project
[
  '/usr/local/bin/node',
  '/usr/local/bin/my-cli',
  'create',
  'test-project'
]
```

以上我们就可以通过数组第 [2] 位判断命令类型create，通过第 [3] 位拿到项目名称test-project

---

**2. 使用commander**

node的命令行解析最常用的就是commander库，来简化复杂cli参数操作

我们首先需要先安装commander库 ,npm install commander --save 

我们可能还需要安装一个mkdirp库 ,npm install mkdirp --save 

（我们现在的参数简单可以不使用commander，直接用process.argv[3]获取名称，但是为了之后会复杂的命令行，这里也先使用commander）

**创建项目**

我们修改bin.js 为如下内容。

```
#!/usr/bin/env node

const program = require("commander");
const version = require("../package.json").version;

program.version(version, "-v, --version");

program
  .command("create <app-name>")
  .description("使用 my-cli 创建一个新的项目")
  .option("-d --dir <dir>", "创建目录")
  .action(name => {
    const create = require("./create")
    create(name)
  });

program.parse(process.argv);
```

process.cwd()获取工作区目录，和用户传入项目名称拼接起来

（创建文件夹我们使用mkdirp包，可以避免我们一级一级的创建目录）

修改bin.js的action方法：

commander 解析完成后会触发action回调方法

命令行执行：my-cli -v

输出：1.0.0

命令行执行： my-cli create test-project

输出：创建成功

并在命令行所在目录创建了一个test-project文件夹, 目前目录的文件结构如下。

```
├── lib
│   ├── bin.js
│   └── create
│       └── index.js
├── package-lock.json
├── package.json
└── test-project
```

**模板**

首先需要先列出我们的模板包含哪些文件，一个最基础版的vue项目模板是这样的：

```
│- src
│  ├── main.js
│  └── App.vue
│  └── components
│       └── HelloWorld.vue
├── index.html
├── package.json
```

和我们创建的结构已经很像了，接下来我们需要优化creat/index函数


```
const path = require("path");
const fs = require("../utils/fs-promise");
const install = require("../utils/install");

module.exports = async function (name) {
  const projectDir = path.join(process.cwd(), name);
  await fs.mkdirp(projectDir);
  console.log(`创建${name}文件夹成功`);
  fs.readdir('./lib/generator', function (err, files) {
    for (var i = 0; i < files.length; i++) {
      const { template, dir, name: fileName } = require(`../generator/${files[i]}`)(name);
      fs.writeFile(path.join(projectDir, dir, fileName), template.trim());
      install({ cwd: projectDir });
      console.log(`创建${fileName}文件成功`);
    }
  })
  
```

**结语**

关于进一步优化：

更多功能与健壮 例如指定目录创建项目，目录不存在等情况
chalk和ora优化log，给用户更好的反馈
通过inquirer问询用户得到更多的选择：模板vue-router，vuex等更多初始化模板功能，eslint
更多的功能：

内置 webpack 配置
一键发布服务器
其实要学会善用第三方库，你会发现我们上面的每个模块都有第三方库的身影，我们只是将这些功能组装起来，再结合我们的想法进一步封装。

虽然有vue-cli，create-react-app这些已有的脚手架，但是我们还是可能在某些情况下需要自己实现脚手架部分功能，根据公司的业务来封装，减少重复性工作，或者了解一下内部原理

