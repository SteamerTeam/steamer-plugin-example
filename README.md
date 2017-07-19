# steamer-plugin-example

steamer plugin 例子

* 确认是否已安装steamer CLI工具，如果还未安装，请参考https://github.com/steamerjs/steamerjs

完成这个example plugin之后，可以这样使用这个插件：

```javascript
steamer example -c config.js
// 或
steamer example --config config.js
```


## 如何写一个 steamerjs 插件

* 创建一个函数作为插件

```javascript
function ExamplePlugin(argv) {
	this.argv = argv;
}
```
当在终端输入插件命令时，命令的参数将被传入这个函数

更多相关参数的文档，请参考 [yargs](https://github.com/yargs/yargs).

* `init` 函数

为插件创建 `init` prototype 函数， 插件命令在启动时会自动调用此函数。

```javascript
ExamplePlugin.prototype.init = function() {
	console.log(this.argv);
};

module.exports = ExamplePlugin;
```


* `help` 函数

为插件创建`help` prototype 函数

```javascript
ExamplePlugin.prototype.help = function() {
	console.log("Usage of Example: ");
}
```

当使用命令`steamer [plugin name] -h`或者`steamer [plugin name] --help`时，会自动调用 `help` 函数，用于输出插件帮助文档。

* 在package.json中指定入口

```javascript
"main": "index.js"
```

## `Util` 库

开发插件时，常常需要一些 `Util` 函数，帮助你快速开发，`Steamer` 提供以下 `Util` 库：

* [steamer-pluginutils](https://github.com/SteamerTeam/steamer-pluginutils)


## 插件的使用

```javascript
// 将你的插件链接至全局路径，就可以直接使用 `steamer example`
npm link

// 当你完成开发，可以 `unlink` 你的插件
npm unlink

```
