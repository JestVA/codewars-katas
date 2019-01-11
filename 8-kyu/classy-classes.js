/*
Link to kata: https://www.codewars.com/kata/classy-classes
*/

// Solution

class Person {
  
  constructor(name, age) {
  this.name = name;
  this.age = age;
  }
  
  get info() {
    return this.getInfo();
  }
  
  getInfo() {
    return `${this.name}s age is ${this.age}`
  }
}

/* 
What I have learned:
1. Refreshed knowledge of ES6 classes via https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
2. Better understanding of getters
3. Understanding of undefined and using 'this' keyword to access class methods
4. Binding constructor parameters with 'this'  
5. Making a recursive call to another function from inside a function
6. You can skip using this.name and this.age alltogether when using template literals if you build your class like this: 

class Person {
  constructor(name, age) {
    this.info = `${name}s age is ${age}`;
  }
}
pretty neat ^^

7. Currying 

a. nesting a function inside a function

function A(x) {
	function B() {
	return x * 2
}
return B()
}

A(21) // 42

b. currying

function A(x) {
  function B(y) {
    return x + y
  }
  return B
}

A(2)(3) // 5

or like this: 

const A = x => {
	const B = () => {
		return x * 10
}
return B
}

A(2)() // 20

or like this:

const A = x => {
	const B = () => {
		return x * 10
}
return B()
}

A(2) // 20

*/