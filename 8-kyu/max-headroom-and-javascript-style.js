/*
Link to kata: https://www.codewars.com/kata/max-headroom-and-javascript-style
*/

// Solution

const getMax1 = () => {
  let max = {name: 'Max Headroom'};
  return max;
  }
  
const getMax2 = () => {
return {
  name: 'Max Headroom'
}
}

const getMax3 = () => ({name: 'Max Headroom'})

/*
What I have learned: 
1. returning an object with fat arrow syntax in one line
const getMax2 = () => ({name: 'Max Headroom'}); if you want to make use of implicit return when using arrow function syntax and the value that you want 
to return is an object, you have to wrap it in "()" parantheses. The compiler
will understand that whay you are returning is an object instead of an error
when doing directly as "{}", the compiler would think that it needs to evaluate
Js code inside the curly brackets.  

2. return needs to evaluate code in-line so you cannot have: 

const getMax2 = () => {
  return   // no code here
  {name: 'Max Headroom'}
  }

instead, move the first curly bracket in line with the return statement:

const getMax2 = () => {
  return  {    // you move the curly bracket here
    name: 'Max Headroom'
  }
  }

*/