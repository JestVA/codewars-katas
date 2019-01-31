// https://www.codewars.com/kata/playing-with-digits/train/javascript
const digPow = (n, p) => {
  sumOfDigits = n.toString().split``.map((n, i) => {
  return {
number: n, 
power: i+p
}
}).map(s => s.number ** s.power).reduce((a, c) => a + c)
return sumOfDigits%n === 0 ? sumOfDigits / n : -1
}
