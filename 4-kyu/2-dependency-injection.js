/*
	https://www.codewars.com/kata/5302d655be2a91068b0001fb/train/javascript
*/

/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
const DI = function (dependency) {
	this.dependency = dependency;
};

DI.prototype.inject = function (resolve) {
	// captures the function arguments chunk
	const fArgs = resolve.toString().match(/\(.*\)/);

	if (!fArgs) throw Error("Need to pass a function to inject");

	const sanitizedArgs = fArgs[0].replace("(", "").replace(")", "").split(",");
	const deps = sanitizedArgs
		.map(arg => this.dependency[arg.trim()])
		.filter(Boolean);

	return () => resolve(...deps);
};

/*
	Research:
	Objects, object functions and prototypes
	https://levelup.gitconnected.com/the-javascript-object-paradigm-and-prototypes-explained-simply-e9cb9eaa49aa#:~:text=When%20we%20create%20an%20object,actually%20instance%2Dobjects%20of%20Object%20.
	https://stackoverflow.com/questions/53695772/javascript-access-class-instance-property-in-prototype-function
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of	
*/
