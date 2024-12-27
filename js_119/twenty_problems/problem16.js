// Problem 16
// Create a function that returns the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. You may assume that the input string contains only alphanumeric characters.

/*
input: string 
output: number 
rules:
  - count the characters that occur more than once in the input string 
  - the input string contains only alphanumeric characters 
  - check the characters case-insensitive 
d:
- object: to store the occurence of each character 

a:
- iterate through the input string 
- get the characters that appears more than once in the input string 

  - get the occurences of each character ( see the getOccurences(string) bellow ), assign the result to `occurence`
  - intitialize count to 0
  - iterate through the occurence object 
  -- if the current key value is greater than 1 
  -- increment count by 1
  - return count 


function getOccurences(string)
  - intitialize occurence to an empty object 
  - convert the input string to lowercase, reassign the input string to the result 
  - iterate through the string 
  -- if the current character doesn't exist within the occurence object 
  --- append it to occurence object and assign 1 to its value 
  -- else increment the value of current key by 1 
*/

const p = console.log;

function getOccurences(string) {
  let occurence = {};
  string = string.toLowerCase();
  for (let char of string) {
    if (!occurence.hasOwnProperty(char)) {
      occurence[char] = 1;
    } else {
      occurence[char] += 1;
    }
  }
  return occurence;
}


function distinctMultiples(string) {
  let occurence = getOccurences(string);
  let count = 0; 

  for (let key in occurence) {
    if (occurence[key] > 1) {
      count += 1;
    }
  }
  return count;
}
p(distinctMultiples('xyz') === 0);              // (none)
p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
p(distinctMultiples('unununium') === 2);        // u, n
p(distinctMultiples('multiplicity') === 3);     // l, t, i
p(distinctMultiples('7657') === 1);             // 7
p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5
// The above tests should each print true.

/// ////////////////////////////////////////////////////////////////





function distinctMultiples(str){
  str = str.toLowerCase();

  let counts = {};

  for(let char of str){
    if(/[a-z0-9]/g.test(char)){
      counts[char] = (counts[char] || 0) + 1;
    }
  }

  let result = Object.values(counts).filter(count => count >1).length;

  return result;
}
p(distinctMultiples('xyz')=== 0);              // (none)
p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
p(distinctMultiples('unununium') === 2);        // u, n
p(distinctMultiples('multiplicity') === 3);     // l, t, i
p(distinctMultiples('7657') === 1);             // 7
p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5