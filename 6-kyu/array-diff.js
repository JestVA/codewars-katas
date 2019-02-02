// https://www.codewars.com/kata/array-dot-diff/train/javascript
const array_diff = (a, b) => a.filter(x => !b.filter(y => y === x).length)
