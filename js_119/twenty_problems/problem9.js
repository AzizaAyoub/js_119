// Problem 9
// Create a function that takes two string arguments and returns the number of times that the second string occurs in the first string. Note that overlapping strings don't count: 'babab' contains 1 instance of 'bab', not 2.

// You may assume that the second argument is never an empty string.

/*
input: two strings 
output: a number 
rules:
  - get the number of times that the second string occurs in the first string 
  - overlapping strings don't count 
  - the second argument shouldn't be empty 

d:
array: to store the substrings from the input string 

a:
- iterate through the input string 
- count the occurence of second input string witin the first input string 



  - initialize `count` to 0
  - initialize `index` to 0 

  - get the first index at which `str2` occurs first, start seaching from `index`
  - while `index` is not equal to `-1` 
  -- increment `count` by  `1`
  -- increment `index` to the length of `str2` 
  - return `count` 
*/

function countSubstrings(str1, str2) {
  let count = 0; 
  let index = 0; 

  while ((index = str1.indexOf(str2, index)) !== -1) {
    count += 1;
    index += str2.length; 
  }

  return count;
}
const p = console.log;
p(countSubstrings('babab', 'bab') === 1);
p(countSubstrings('babab', 'ba') === 2);
p(countSubstrings('babab', 'b') === 3);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('', 'x') === 0);
p(countSubstrings('bbbaabbbbaab', 'baab') === 2);
p(countSubstrings('bbbaabbbbaab', 'bbaab') === 2);
p(countSubstrings('bbbaabbbbaabb', 'bbbaabb') === 1);
// // The above tests should each print true.