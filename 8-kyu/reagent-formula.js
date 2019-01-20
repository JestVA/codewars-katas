// LINK: https://www.codewars.com/kata/simple-fun-number-352-reagent-formula/train/javascript

// SOLUTION: 

const isValid = formula => {
  //coding and coding..
  if (formula.indexOf(1) > -1 && formula.indexOf(2) > -1) {
    return false
  } else if (formula.indexOf(3) > -1 && formula.indexOf(4) > -1) {
    return false
  } else if (formula.indexOf(7) > -1 || formula.indexOf(8) > -1) {
    if (formula.indexOf(5) > -1 && formula.indexOf(6) > -1) {
      return true
    } else if (formula.indexOf(5) > -1 || formula.indexOf(6) > -1) {
      return false
    } return true
  } return false
}