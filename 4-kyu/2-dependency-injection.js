/*
	https://www.codewars.com/kata/5302d655be2a91068b0001fb/train/javascript
*/


/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
	this.dependency = dependency;
	console.log(this.dependency);
	
};

// Should return new function with resolved dependencies
DI.prototype.inject =  function(resolve) {
	// 	console.log(resolve.toString())
	// 	console.log(this.dependency);
	const deps = [];
	for(const dep of Object.keys(this.dependency))
		deps.push(this.dependency[dep]);

	const functionArgsRegex = /\(.*\)/;
	const fArgs = resolve.toString().match(functionArgsRegex);

	if(!fArgs)
		throw Error('Need to pass a function to inject');

	// 	console.log(deps);
	// still need to check they exist dammit 
	const sanitizedArgs = fArgs[0].replace('(', '').replace(')', '').split(',');
	const redyFredy = sanitizedArgs.map(arg => {
		console.log(arg, 'in loop')
		console.log(this.dependency, 'in loop')
		return this.dependency[arg.trim()]
	} ).filter(i => i);
	console.log(redyFredy)

	return () => resolve(...redyFredy); 

} 


/*
	Research:
	Objects, object functions and prototypes
	https://levelup.gitconnected.com/the-javascript-object-paradigm-and-prototypes-explained-simply-e9cb9eaa49aa#:~:text=When%20we%20create%20an%20object,actually%20instance%2Dobjects%20of%20Object%20.
	https://stackoverflow.com/questions/53695772/javascript-access-class-instance-property-in-prototype-function
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of	
*/
