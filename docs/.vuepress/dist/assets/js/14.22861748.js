(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{381:function(e,n,t){"use strict";t.r(n);var s=t(25),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"如何写一个自己专属的脚手架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何写一个自己专属的脚手架"}},[e._v("#")]),e._v(" 如何写一个自己专属的脚手架")]),e._v(" "),t("hr"),e._v(" "),t("p",[t("strong",[t("p",{attrs:{align:"right"}},[e._v("「如何写一个自己的脚手架 一键初始化项目」")])])]),e._v(" "),t("p",[t("strong",[e._v("介绍：")])]),e._v(" "),t("p",[e._v("脚手架的作用：为减少重复性工作而做的重复性工作，构建项目需要的基本模板，打造适用于自己开发习惯的脚手架。")]),e._v(" "),t("blockquote",[t("p",[e._v("即为了开发中的：编译 es6，js 模块化，压缩代码，热更新等功能，我们使用webpack等打包工具，但是又带来了新的问题：初始化工程的麻烦，复杂的webpack配置，以及各种配置文件，所以就有了一键生成项目，自定义配置开发的脚手架。")])]),e._v(" "),t("p",[t("strong",[e._v("期望：")])]),e._v(" "),t("p",[e._v("在命令行执行输入 my-cli create text-project，回车后直接创建项目并生成模板，还会把依赖都下载好，下面就开始教你如何实现一个脚手架：")]),e._v(" "),t("p",[t("strong",[e._v("1、创建项目 my-cli，执行 npm init -y 快速初始化项目")])]),e._v(" "),t("p",[e._v("生成如下的package.json 文件结构，我们在文件中间添加")]),e._v(" "),t("p",[e._v("（用处:用来指定各个内部命令对应的可执行文件的位置）")]),e._v(" "),t("blockquote",[t("p",[e._v('"bin": {\n"my-cli": "bin.js"  //key 值随意自定义\n}')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<script>\n  {\n    "name": "clitest",\n    "version": "1.0.0",\n    "description": "",\n    "main": "index.js",\n    "bin": {  \n      "my-cli": "lib/bin.js" \n    }, \n    "scripts": {\n      "test": "echo \\"Error: no test specified\\" && exit 1"\n    },\n    "keywords": [],\n    "author": "",\n    "license": "ISC"\n  }\n<\/script>\n')])])]),t("p",[e._v("接下来我们创建一个lib文件夹，用于存放bin.js。")]),e._v(" "),t("blockquote",[t("p",[e._v("mkdir lib && cd lib && vim bin.js ，并把下面内容粘贴进去，保存。")])]),e._v(" "),t("p",[e._v("bin.js 内容如下")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#!/usr/bin/env node\n\nconsole.log(process.argv);\n\n")])])]),t("blockquote",[t("p",[e._v("#!/usr/bin/env node，这一行是必须加的，就是让系统动态的去全局环境中查找node来执行你的脚本文件。")])]),e._v(" "),t("p",[e._v("接下来命令行执行 npm link ，创建软链接至全局，这样我们就可以全局使用my-cli命令了，在开发 npm 包的前期都会使用link方式在其他项目中测试来开发，后期再发布到npm上")]),e._v(" "),t("p",[e._v("在控制台看到类似如下输出。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("up to date in 0.264s\n/usr/local/bin/my-cli -> /usr/local/lib/node_modules/clitest/lib/bin.js\n/usr/local/lib/node_modules/clitest -> /Users/travis/Documents/GitHub2/clitest\n")])])]),t("p",[e._v("我们紧接着在命令行执行 my-cli 1 2 3")]),e._v(" "),t("blockquote",[t("p",[e._v("输出：[ '/usr/local/bin/node', '/usr/local/bin/my-cli', '1', '2', '3' ]。")])]),e._v(" "),t("p",[e._v("这样我们就可以获取到用户的输入参数，我们换成常用的脚手架构建方式：my-cli create test-project")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("clitest my-cli create test-project\n[\n  '/usr/local/bin/node',\n  '/usr/local/bin/my-cli',\n  'create',\n  'test-project'\n]\n")])])]),t("p",[e._v("以上我们就可以通过数组第 [2] 位判断命令类型create，通过第 [3] 位拿到项目名称test-project")]),e._v(" "),t("hr"),e._v(" "),t("p",[t("strong",[e._v("2. 使用commander")])]),e._v(" "),t("p",[e._v("node的命令行解析最常用的就是commander库，来简化复杂cli参数操作")]),e._v(" "),t("p",[e._v("我们首先需要先安装commander库 ,npm install commander --save")]),e._v(" "),t("p",[e._v("我们可能还需要安装一个mkdirp库 ,npm install mkdirp --save")]),e._v(" "),t("p",[e._v("（我们现在的参数简单可以不使用commander，直接用process.argv[3]获取名称，但是为了之后会复杂的命令行，这里也先使用commander）")]),e._v(" "),t("p",[t("strong",[e._v("创建项目")])]),e._v(" "),t("p",[e._v("我们修改bin.js 为如下内容。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('#!/usr/bin/env node\n\nconst program = require("commander");\nconst version = require("../package.json").version;\n\nprogram.version(version, "-v, --version");\n\nprogram\n  .command("create <app-name>")\n  .description("使用 my-cli 创建一个新的项目")\n  .option("-d --dir <dir>", "创建目录")\n  .action(name => {\n    const create = require("./create")\n    create(name)\n  });\n\nprogram.parse(process.argv);\n')])])]),t("p",[e._v("process.cwd()获取工作区目录，和用户传入项目名称拼接起来")]),e._v(" "),t("p",[e._v("（创建文件夹我们使用mkdirp包，可以避免我们一级一级的创建目录）")]),e._v(" "),t("p",[e._v("修改bin.js的action方法：")]),e._v(" "),t("p",[e._v("commander 解析完成后会触发action回调方法")]),e._v(" "),t("p",[e._v("命令行执行：my-cli -v")]),e._v(" "),t("p",[e._v("输出：1.0.0")]),e._v(" "),t("p",[e._v("命令行执行： my-cli create test-project")]),e._v(" "),t("p",[e._v("输出：创建成功")]),e._v(" "),t("p",[e._v("并在命令行所在目录创建了一个test-project文件夹, 目前目录的文件结构如下。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("├── lib\n│   ├── bin.js\n│   └── create\n│       └── index.js\n├── package-lock.json\n├── package.json\n└── test-project\n")])])]),t("p",[t("strong",[e._v("模板")])]),e._v(" "),t("p",[e._v("首先需要先列出我们的模板包含哪些文件，一个最基础版的vue项目模板是这样的：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("│- src\n│  ├── main.js\n│  └── App.vue\n│  └── components\n│       └── HelloWorld.vue\n├── index.html\n├── package.json\n")])])]),t("p",[e._v("和我们创建的结构已经很像了，接下来我们需要优化creat/index函数")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('const path = require("path");\nconst fs = require("../utils/fs-promise");\nconst install = require("../utils/install");\n\nmodule.exports = async function (name) {\n  const projectDir = path.join(process.cwd(), name);\n  await fs.mkdirp(projectDir);\n  console.log(`创建${name}文件夹成功`);\n  fs.readdir(\'./lib/generator\', function (err, files) {\n    for (var i = 0; i < files.length; i++) {\n      const { template, dir, name: fileName } = require(`../generator/${files[i]}`)(name);\n      fs.writeFile(path.join(projectDir, dir, fileName), template.trim());\n      install({ cwd: projectDir });\n      console.log(`创建${fileName}文件成功`);\n    }\n  })\n  \n')])])]),t("p",[t("strong",[e._v("结语")])]),e._v(" "),t("p",[e._v("关于进一步优化：")]),e._v(" "),t("p",[e._v("更多功能与健壮 例如指定目录创建项目，目录不存在等情况\nchalk和ora优化log，给用户更好的反馈\n通过inquirer问询用户得到更多的选择：模板vue-router，vuex等更多初始化模板功能，eslint\n更多的功能：")]),e._v(" "),t("p",[e._v("内置 webpack 配置\n一键发布服务器\n其实要学会善用第三方库，你会发现我们上面的每个模块都有第三方库的身影，我们只是将这些功能组装起来，再结合我们的想法进一步封装。")]),e._v(" "),t("p",[e._v("虽然有vue-cli，create-react-app这些已有的脚手架，但是我们还是可能在某些情况下需要自己实现脚手架部分功能，根据公司的业务来封装，减少重复性工作，或者了解一下内部原理")])])}),[],!1,null,null,null);n.default=a.exports}}]);