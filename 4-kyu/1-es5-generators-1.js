/*

ES5 Generators(i)
https://www.codewars.com/kata/53c29a6abb5187180d000b65/train/javascript

*/


// This is parent func., doesn't need additional
// context of `thisArg` so it is ok to write as ES6 => func.
const generator = (sequencer, ...args) => {
	const state = {
		iterationCount: 0,
		nextIndex: 1,
	};

	const withStateSequencer = sequencer.bind(state);

	return {
		next: () => withStateSequencer(...args),
	};
};

const dummySeq = () => "dummy"; // doesn't need `thisArg`, ok as arrow func.

// since this function is defined outside of the context
// where it will be called, we write it with function keyword
// to enable binding of context from wrapper where we will
// store some internal state for iterator
// and use the sequencer to update parent state
function factorialSeq() {
	let factorial = 1;

	for (let i = this.iterationCount; i > 0; i--) factorial *= i;

	this.iterationCount++;

	return factorial;
};


// created a test benchmark on jsperf.com
// somewhere between O(N) and O(2N) complexity
// https://jsperf.com/fibsequencer/1
// comparing to classic recurrsion, whileloop, memoization techniques
// found out generator like this is on par with memoization
// but 94% slower than classic loop - resolves in linear time
// space complexity constant
function fibonacciSeq() {
	let [, curr] = [this.iterationCount, this.nextIndex];

	[this.iterationCount, this.nextIndex] = [
		this.nextIndex,
		this.iterationCount + this.nextIndex,
	];

	return curr;
}

function rangeSeq(start, step) {
	if (this.iterationCount === 0) {
		this.iterationCount++;
		this.nextIndex = start;
		return start;
	}

	const result = this.nextIndex + step;

	this.nextIndex = result;

	return result;
}

function primeSeq() {
	
}

function partialSumSeq() {
}