// Problem 8
// Create a function that takes a non-empty string as an argument. The string consists entirely of lowercase alphabetic characters. The function should return the length of the longest vowel substring. The vowels of interest are "a", "e", "i", "o", and "u".


/*
input: a string 
output: number 
rules:
  - get the length of longest vowel substring 
  - if the input string doesn't include vowels return 0 

D:
- array to store the vowel characters 

A:
- iterate through the input string 
- get the vowel substrings 

  - initialize count to 0
  - initialize vowelSubs to empty stirng 
  - iterate through the input string 
  -- if the current character is a vowel 
  --- append it to vowelSubs 
  
  -- else 
        the vowelSubs length is greater than count 
       --- reassign count to the length of vowelSubs
  --- reassign vowelSubs to empty string 
  -- count is less than the lenegth of vowelSubs 
  --- reassign count to the lenegth of vowelSubs 
  - return count 
*/


function longestVowelSubstring(string) {
  let count = 0; 
  let vowelSubs = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i].match(/[aioue]/)) {
      vowelSubs += string[i]
    } else {
      if (vowelSubs.length > count) {
        count = vowelSubs.length;
      }
      vowelSubs = '';
    }
  }
  if (count < vowelSubs.length) count = vowelSubs.length;
  return count;
}


// second solution:
/*
get all the subarrays of vowel characters, or an array of empty string 
- iterate through array of subarrays 
-- convert each word to its length 
- get the greatest length

*/
function longestVowelSubstring(string) {
  let vowelSubs = string.match(/[aioue]+/g) || [""];
  let subsLength = vowelSubs.map(word => word.length);
  return Math.max(...subsLength);
}


const p = console.log;
p(longestVowelSubstring('many') === 1);

p(longestVowelSubstring('many') === 1);
p(longestVowelSubstring('launchschoolstudents') === 2);
p(longestVowelSubstring('eau') === 3);
p(longestVowelSubstring('beauteous') === 3);
p(longestVowelSubstring('sequoia') === 4);
p(longestVowelSubstring('miaoued') === 5);
// The above tests should each print true.


/// // 61. Find the missing letter
// (https://www.codewars.com/kata/5839edaa6754d6fec10000a2)
// 6 kyu
// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

/*
input: array 
output: string 
rules:
  - get the missed letter from the input array 
  - the input array will always contain letters in only one case 
  - the input array will always contain a missing letter 

d:
- array: to store all 26 alphabet characters 

a:
- sort the input array in alphabetical order - we don't need this
(['O','Q','R','S'])


- iterate through the array 



- get the missing letter from the sorted array 
(['O','Q','R','S'])

upperCaseAlphabeticalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

iteration
O - is this the missing letter? 

- check 
// 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' => A
- how can we get OPQRS from thie alphabets? 
 
// ['O','Q','R','S'] --> false 

this algorithm didn't go right. 


  - intialize missedLetter to empty string 
  - intialize upperLetters to all the uppercase English letters (it should be an array)
  - intialize lowerLetters to all the lowercase English letters (it should be an array)
  - intialize slicedLetters to empty stirng 

  -if the first letter is uppercase 
  -- slice off the letters from the upperLetters array, assign the result to `slicedLetters` var

  - otherwise 
  -- slice off the letters from the lowerLetters array, assign the result to `slicedLetters` var

  - iterate through the input array 
  - if the first letter is uppercase 
    -- if the current letter of input array and the current letter of upperLetters is not equal 
      ---- reassing missedLetter to the current letter of upperLetters 

  -- otherwise 
  --- reassing missedLetter to the current letter of lowerLetters
  - return missedLetter 

['O','Q','R','S']
['O','Q','R','S']

['O','Q','P', 'R','S']

what is the output you want? 
Input = ['O','Q','R','S']
You have let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
Algorithm to get this ouput-> ['O','Q','P','R','S']

1. slice off the letters from the string  
  - start from the 0-indexed letter of input array 
  upt the input array length + 1

*/



// Example:

const log = console.log;

function missingLetter(arr) {
  let missedLetter = "";
  let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let slicedLetters = upperLetters.slice(upperLetters.indexOf(arr[0]), arr.length + 1);

  log(slicedLetters);
}


// missingLetter(['a','b','c','d','f']) // e
missingLetter(['O','Q','R','S']) // P
// missingLetter(['H','I','k'])// J
// ['a','b','c','d','f'] -> 'e' 
// ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)


// --------------------------------------------------------------------


// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.



/*
Rules:
  -- will always have an array as input 
  -- there will alwyas be one letter missing
  -- The array will always contain letters in only one case



  Input: array
  Output: string


A:

Create out function `missingLetter`
  -- iterate through the input array ( start at idx 0 up to length - 1)
    --- check if the next letters charcode is not more than the cuurent
    --- if its missing, then return the missing letter

*/

function missingLetter(array){

  for(let i = 0; i < array.length -1; i++) {
    if ((array[i].charCodeAt(0) + 1) !== (array[i + 1].charCodeAt(0))){
        return String.fromCharCode(array[i].charCodeAt(0)+ 1)
    }
  }
}

console.log(missingLetter(['a','b','c','d','f'])) // e
console.log(missingLetter(['O','Q','R','S'])) // P
console.log(missingLetter(['H','I','K']))// J