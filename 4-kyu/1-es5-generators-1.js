/*
ES5 Generators(i)
https://www.codewars.com/kata/53c29a6abb5187180d000b65/train/javascript
*/

const generator = (sequencer, ...args) => {

	// get the optional args
	const opt = args.slice(0);
	
	let state = null;

	return {
		next: () => sequencer()(state), // think I need a clojure to update state
	}
}


const dummySeq = () => () => "dummy";

// 1, 1, 2, 6, 24, ...
const factorialSeq = (current) => (current) => {
	
	// read this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
	console.log(current);
	
	// need to store state somehow 

	let [prev, curr] = [0, 1];
	for(;;) { // this empty condition is taken to evaluate to 1
		[prev, curr] = [curr, prev + curr];
		
		// updating state variable here does not work 
		current = 'something'
		
		return curr;
	}

}




function fibonacciSeq() {
}

function rangeSeq(start, step) {
}

function primeSeq() {
}

function partialSumSeq() {
}