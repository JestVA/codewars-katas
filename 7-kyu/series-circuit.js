// https://www.codewars.com/kata/coding-3min-series-circuit/train/javascript
// Solution

const voltage = (arr, total) => {
  // find the sum of the resistances
  
  const totalResistance = arr.reduce((a, c) => a + c)
  
  // find out ratio for each resistance 

  const ratios = arr.map(x => x/totalResistance)
  
  // return a new array where the total is multiplied by each resistance ratio

  const voltageValues = ratios.map(x => Number((x * total).toFixed(2)))
  
  return voltageValues
  
}

// What I learned: 
// 1. to use toFixed() to round down numbers (creates a string though)
// 2. that the + operator as a prefix will attempt to make a number from aything (like a string)
// 3. Remember not to forget to return from the function with a value