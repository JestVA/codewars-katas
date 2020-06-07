/*

ES5 Generators(i)
https://www.codewars.com/kata/53c29a6abb5187180d000b65/train/javascript

Quick link to solutions: 
https://www.codewars.com/kata/53c29a6abb5187180d000b65/solutions/javascript/all/best_practice

*/

// This is parent func., doesn't need additional
// context of `thisArg` so it is ok to write as ES6 => func.
const generator = (sequencer, ...args) => {
  const state = {
    iterationCount: 0,
    nextIndex: 1,
    primes: [],
    store: [],
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
}

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
  let foundPrime = false;

  for (let i = this.iterationCount + 2; !foundPrime; i++) {
    this.iterationCount++;

    if (!this.store[i]) {
      if (!this.primes.includes(i)) this.primes.push(i);
      foundPrime = true;

      // caveat to this Math.pow is that it limits the possible
      // lookaheads to 2**6 so this generator eventually breaks
      // if we want to generate more primes
      // it assumes we know the maximum sequence we want to generate
      for (j = i << 1; j <= Math.pow(i, 6); j += i) {
        this.store[j] = true;
      }
    }
  }

  return this.primes[this.primes.length - 1];
}

function partialSumSeq(...args) {
  if (this.iterationCount === 0) {
    this.iterationCount++;
    return args[0];
  }

  if (this.iterationCount === 1)
    this.nextIndex = args[this.iterationCount - 1] + args[this.iterationCount];
  else this.nextIndex += args[this.iterationCount];

  this.iterationCount++;

  Array(this.nextIndex); // make a silly error to pass test Array(NaN)
  return this.nextIndex;
}

/*
Resources:

	# generating a prime numbers sequence using bitwise left shift operator
	https://www.w3resource.com/javascript-exercises/javascript-math-exercise-43.php#:~:text=JavaScript%20Code%3A,(primeFactorsTo(5))%3B%20console.

	# Cassidy Williams (Casidoo) presentation on functional programming:
	https://github.com/cassidoo/talks/blob/master/Functional%20JavaScript/functional-js.pdf
		
		> writing fibonacci using closures

		function fibonacci(a, b) {
			return () => {
				const n = a;
				a = b;
				b += n;
				return n;
			};
		}
	
	# Site to test / benchmark performance of code / algorithms
	https://jsperf.com/

	# Binding functions
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

	# Closures
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

	# Bitwise operators:
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

	# Javascript online console:
	https://jsconsole.com/

	# Iterators and generators:
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators


*/


/*
 EPILOGUE
 - learnt a ton about closure, in my solutions I did not use clojures
 - wish I did! So I tinkered with some functions to return a function and benefit from lexical scope
 - below are some explorations
*/

// SET 1
const generator = (sequencer, ...args) => ({ next: sequencer(...args) });

const incrementNumber = (a) => () => console.log(a++);

const popFirstArg = (...args) => (r = args.shift()) => console.log(r);

const it = generator(incrementNumber, 20,12,33,44);

const notIt = generator(popFirstArg, 1,2,3,4);

it.next(); // 0
it.next(); // 1
it.next(); // 2
it.next(); // 3
it.next(); // 4
it.next(); // 5

notIt.next(); // 1
notIt.next(); // 2
notIt.next(); // 3
notIt.next(); // 4


// SET 2
function generator(sequencer)
{
  return {
    next: sequencer.apply(null, [].slice.call(arguments, 1))
  }
}


function calledWithArgs(one = 0, two = 0)
{
 
  return function()
  {
    console.log(one, two);
    one += 5;
    two += 10;
    return one + two;
  };
}

const it = generator(calledWithArgs, [1, 2]);
it.next();
it.next();