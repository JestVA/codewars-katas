// collective learnings 
// pass in default function parameter and use it in context 
let describeAge=(a,b="You're a(n) ")=>a<13?b+"kid":a>12&&a<18?b+"teenager":a>17&&a<65?b+"adult":b+"elderly"

// use + overload to concatenate the first string to the true condition
const describeAge = n => "You're a(n) " + ( n < 13 ? 'kid': n < 18 ? 'teenager': n < 65 ? 'adult' : 'elderly')

// you can have ternary operator inside template literals interpolation
var describeAge=a=>`You're a(n) ${a<13?"kid":a<18?"teenager":a<65?"adult":"elderly"}`;

// charAt(0) + substring(1)
let newArrCamel= newArr.map(item=> item.charAt(0).toUpperCase() + item.substr(1).toLowerCase())

// very nice solution, to write a function that capitalizes words and pass it as a callback in the map function (brilliant!)
// good use of the first function and the return with ternary condition
// I also used more unshift() - add an element in front of array
// substring and slice are similar 

function generateHashtag (str) {
    return str.length > 140 || str === '' ? false :
      '#' + str.split(' ').map(capitalize).join('');
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

// Basic username regex test (only small letters, 0-9 numbers, length between 4-16 including and no white space allowed)
/^[a-z0-9_]{4,16}\S*$/.test(username); 
// ^    - start of string 
// $    - end of string
// ######### THIS IS THE CORRECT REGEX ACTUALLY ############
/^[a-z0-9_]{4,16}$/

// ^[a-z0-9_]{0,}$
// It's important to use {0,} it matches any preceding token 0 or more times 

// Too cool to ignore (only as an example of thinking inversely. As a code this is broken and has bug (i.e. non char letters like #$%))
function validateUsr(arg) {
    return arg.length > 3 ? !/[A-Z ]/.test(arg) : false;
  };
// remember, thinking outside the box

// ! replace char in string 

// another while loop example

function remove(s,n){
    while(n) {
      s = s.replace("!", "");
      n--;
    }
    return s;
  }

// good to keep in mind you can decrement to make sure you are not stuck 
// in infinite loop

function remove(s, n) {
    return s.replace(/!/g, c => n-- > 0 ? "" : c)
  }

// or use a regex to do the replace 

/*
String.prototype.replace()
Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.

The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the 

!!!!! replacement can be a string or a function !!!! (again, have to learn better to make use of functions)


to be called for each match. If pattern is a string, only the first occurrence will be replaced.


*/