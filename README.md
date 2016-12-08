### steamer-plugin-example

steamer plugin example

#### How to write a plugin

1. Create a new function

An argv option will be passed into the function. Argument detail, please take a look at [yargs](https://github.com/yargs/yargs).

```
function ExamplePlugin(argv) {
	this.argv = argv;
}
```

2. Create `init` function

Create `init` prototype function for the plugin since this function will be invoked right after the command is typed.

```
ExamplePlugin.prototype.init = function() {
	console.log(this.argv);
};

module.exports = ExamplePlugin;
```

3. Specify a main file in package.json

```
"main": "index.js",
```
