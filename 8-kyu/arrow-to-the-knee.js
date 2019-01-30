/*
LINK TO KATA: https://www.codewars.com/kata/take-an-arrow-to-the-knee-functionally/train/javascript
*/

// Solution
const ArrowFunc = arr => arr.map(char => String.fromCharCode(char)).join(''); 

/*
What I have learned:
1. How to use String.fromCharCode(ASCIInumber) method to convert ASCII values to letters (strings)
2. That I can use the .apply() function which takes a value for "this" and the arguments as an array:
   const ArrowFunc = arr => String.fromCharCode.apply(String, arr)
3. That I can use ... spread operator to spread the elements of the array:
   const ArrowFunc = arr => String.fromCharCode(...arr)
*/
