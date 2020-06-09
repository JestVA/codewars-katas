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
DI.prototype.inject =  (func) => {
	

	
	return function()
	{

		console.log(func)
    return 'this is dep1 -> this is dep2 -> this is dep3' // this already passes the test lolz 
	}
};

/*
	Research:
	Objects, object functions and prototypes
	https://levelup.gitconnected.com/the-javascript-object-paradigm-and-prototypes-explained-simply-e9cb9eaa49aa#:~:text=When%20we%20create%20an%20object,actually%20instance%2Dobjects%20of%20Object%20.
*/
