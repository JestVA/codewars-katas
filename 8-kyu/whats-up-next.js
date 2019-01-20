// LINK: https://www.codewars.com/kata/whats-up-next
// This kata is notorious for having the wrong kyu difficulty. It is in the range of 4-5 kyu as it was originally made for Closure and Typescript
// SOLUTION

// This solution passes the tests in the KATA but is not the right solution. 
// I also get a memory allocation error
// It seems that this Kata want you to use Generator functions which I 
// don't know how to do that just yet

const nextItem = (xs, item) => {
  let result = [...xs]
  let searchSequence = result.indexOf(item) 
  if (searchSequence == -1) {
    return undefined
  } else {
    return result[++searchSequence]
  }
}