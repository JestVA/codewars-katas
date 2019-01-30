/*
LINK: https://www.codewars.com/kata/training-js-number-21-methods-of-string-object-trim-and-the-string-template
*/

// Solution

const fiveLine = s => {
  cleanString = s.trim()
  result = `${cleanString.repeat(1)}
${cleanString.repeat(2)}
${cleanString.repeat(3)}
${cleanString.repeat(4)}
${cleanString.repeat(5)}`
  return result
}

/* 
What I learnt:
1. That you can use .join('\n') with '\n' new line symbol and have it work. 
a = ["abc", "abc", "abc", "abc"]
a.join('\n')
"abc
abc
abc
abc"

2. And this clever muthafucka'
let fiveLine = (s, t=s.trim(), r='') => [...Array(5)].map(_ => r += t).join('\n');
*/