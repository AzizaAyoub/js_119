/*
Problem 11
Create a function that takes a nonempty string as an argument and returns an array consisting of a string and an integer. If we call the string argument s, the string component of the returned array t, and the integer component of the returned array k, then s, t, and k must be related to each other such that s === t * k. The values of t and k should be the shortest possible substring and the largest possible repeat count that satisfies this equation.

You may assume that the string argument consists entirely of lowercase alphabetic letters.

In: string
Out: array
Rules:
 - Find the shortest substring that can be repeated k number of times
  - to make the input stirng

Array: to store the substrings

 - Get the subsequent substrings
 - Repeat every subsequent substrings
 - Find the subsequent that can produce the input string

1. Get the subsequent substrings
2. Iterate through substrings
  - Create a counter assign it to 1
  - While the current substring length is less than input string
    - Concatenate the current substring with itself
    - Increment counter by 1
  - If the repeated string is equal to input string
    - Return the current substring with the count as array elements

function: getSubstrings(string)
---------------------
1. Create an empty array substrings
2. Iterate through input string
  - Slice the input string starting with 0 upto the current string
  - Append the sliced string to substrings
3. Return the substrings

*/

function repeatedSubstring(string) {
  let substrings = getSubstrings(string);
  for (let currentStr of substrings) {
    let counter = 0;
    let substr = "";
    while (substr.length < string.length) {
      substr += currentStr;
      counter += 1;
    }

    if (substr === string) {
      return [currentStr, counter];
    }
  }
}



function getSubstrings(string) {
  let substrings = [];
  for (let index = 1; index <= string.length; index++) {
    substrings.push(string.slice(0, index));
  }

  return substrings;
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
p(eq(repeatedSubstring('superduper'), ['superduper', 1]));
// // The above tests should each print true.