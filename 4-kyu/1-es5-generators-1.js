/*
ES5 Generators(i)
https://www.codewars.com/kata/53c29a6abb5187180d000b65/train/javascript
*/

const generator = (sequencer, ...args) => ({
	next: sequencer,
	state: null
});


const dummySeq = () => "dummy";

// 1, 1, 2, 6, 24, ...
const factorialSeq = () => 
{
	if(! this.state)
	{
		this.state = 1
		return this.state; // 0!
	}

	let result = 1;

	for(let i = this.state; i > 0; i--)
	{
		result *= i;
	}

	this.state += 1;
	return result;
}








// const factorialSeq = (current) => (current) => {
	
// 	// read this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// 	console.log(current);
	
// 	// need to store state somehow 

// 	let [prev, curr] = [0, 1];
// 	for(;;) { // this empty condition is taken to evaluate to 1
// 		[prev, curr] = [curr, prev + curr];
		
// 		// updating state variable here does not work 
// 		current = 'something'
		
// 		return curr;
// 	}

// }




function fibonacciSeq() {
}

function rangeSeq(start, step) {
}

function primeSeq() {
}

function partialSumSeq() {
}