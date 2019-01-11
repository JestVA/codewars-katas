/*
Link to kata:
https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
*/

// Solution
const duplicateEncode = word => {
  let caseInsesitive = word.toLowerCase();
  let playDataUnique = new Set(caseInsesitive);
  let playDataNotUnique = caseInsesitive.split``;
  let solution = "";
  
  // first, check for base case when all elements are unique
  if (playDataUnique.size === playDataNotUnique.length) {
    solution = playDataNotUnique.map(e => e = "(").join``;
  } else {
  // logic for elements if they occur more than once in the array 
  // ["s", "u", "c", "c", "e", "s", "s"]
  solution = playDataNotUnique.map((e, k) => {
      (caseInsesitive.indexOf(playDataNotUnique[k]) !== caseInsesitive.lastIndexOf(playDataNotUnique[k])) ? 
      e = ")" : e = "(";
      return e
  }).join``

  }
  return solution
}

/*
Things I have learned:
1. Using "~" to evaluate truthy / falsy 
(~"success".indexOf('s')) ? console.log('truthy') : console.log('falsy')
2. Remember to use the spread "..." operator more often. 
Like in this example, [...word.toLowerCase()] spreads all characters of string in an array and makes using .split`` redundant
3. If you find yourself using too many variables you are probably missing an easier way to solve things  
*/