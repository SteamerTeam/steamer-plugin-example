"use strict";

function ExamplePlugin(argv) {
	this.argv = argv;
}

ExamplePlugin.prototype.init = function() {
	console.log(this.argv);
};

module.exports = ExamplePlugin;