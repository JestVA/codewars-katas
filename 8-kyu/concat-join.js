/*
https://www.codewars.com/kata/training-js-number-29-methods-of-arrayobject-concat-and-join/train/javascript
*/

// Solution

const bigToSmall = arr => [].concat(...arr).sort((a, b) => b - a).join('>')

/*
What I learnt:
1. To use [].concat(...arr) for flattening a multidimensional array (2d array)
2. To create a repeat function like:
function repeat(string, number) {
  return [...Array(number)].join(string)
}
*/