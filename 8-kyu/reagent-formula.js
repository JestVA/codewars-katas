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

/*
What I have learned:

1. To use includes() method which determines whether an array includes a certain value among its entries, returning true or false as appropriate.
(instead of the indexOf (all you have is a hammer everything looks like a nail type of solution)).

2. To shorten the evaluation by creating a function "has()"
    const has = formula.includes.bind(formula)
    ...
    return (
    has(1) && has(2) ? false :
    has(3) && has(4) ? false :
    has(5) ^ has(6) ? false :
    !has(7) && !has(8) ? false :
    true
    )

3. Use of ! not in front of a condition 
I think this is the most elegant
function isValid(f) {
    return (
        !(f.includes(1) && f.includes(2)) &&
        !(f.includes(3) && f.includes(4)) &&
        (f.includes(5) === f.includes(6)) &&
        (f.includes(7) || f.includes(8))
    )
}

*/