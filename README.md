### steamer-plugin-example

steamer plugin example

#### How to write a plugin

* Create a new function

An argv option will be passed into the function. Argument detail, please take a look at [yargs](https://github.com/yargs/yargs).

```
function ExamplePlugin(argv) {
	this.argv = argv;
}
```

* Create `init` function

Create `init` prototype function for the plugin since this function will be invoked right after the command is typed.

```
ExamplePlugin.prototype.init = function() {
	console.log(this.argv);
};

module.exports = ExamplePlugin;
```

* Specify a main file and a bin file in package.json

```
"main": "index.js",
"bin": "index.js",
```

#### Develop
```
// link you module to global path, then you can use steamer xxx directly
npm link

// when you finish testing, please unlink the module
npm unlink steamer-plugin-xxx

```
