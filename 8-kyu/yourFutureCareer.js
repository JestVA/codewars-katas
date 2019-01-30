/*
LINK TO KATA: https://www.codewars.com/kata/a-bugs-trilogy-episode-1-let-math-dot-random-decide-your-future/train/javascript
*/

// SOLUTION:

const yourFutureCareer = () => {
  let career = Math.random()
  if (career <= 0.32) {
  return "FrontEnd Developer"
  } else if (career <= 0.65) {
  return "BackEnd Developer"
  } else {
  return "Full-Stack Developer"
  }
}

yourFutureCareer();


/*
What I learnt:

1. Again, people are clever on CodeWars: learn how to use template literals nesting with a ternary operator conditional.
Very cool use of new syntax. 

const yourFutureCareer = () => {
  let career = Math.random();
  return `${ career <= 0.32 ? 'FrontEnd' : (career <= 0.65 ? 'BackEnd' : 'Full-Stack') } Developer`;
}

*/
