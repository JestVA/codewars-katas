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


// (~"success".indexOf('s')) ? console.log('truthy') : console.log('falsy')