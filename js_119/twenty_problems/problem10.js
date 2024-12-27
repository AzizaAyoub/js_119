// Problem 10
// Create a function that takes a string of digits as an argument and returns the number of even-numbered substrings that can be formed. For example, in the case of '1432', the even-numbered substrings are '14', '1432', '4', '432', '32', and '2', for a total of 6 substrings.

// If a substring occurs more than once, you should count each occurrence as a separate substring.


/*
In: string
Out: number
Rules:
 - Count even-numbered substrings
 - If a substring occurs multiple times, count them separately
 - If no even-numbered substring found, return 0

"542" ==>> 6

Array: to store all possible substrings

 - Get all substrings of input string
 - Extract the substrings that are even-numbered

1. Get the substrings
2. Convert all substrings to numbers
3. Filter the substrings to even integers
4. Return the length of the result array

function: getSubs(strng)
--------------------
1. Create an empty array substrings
2. Iterate through the input string
 - Get the substring starting with the current char
 - Append the substring to substrings
3. Return substrings
*/

function evenSubstrings(string) {
  let substrings = getSubs(string).map(Number);
  return substrings.filter(num => (num % 2) === 0).length;
}

function getSubs(string) {
  let substrings = [];
  for (let startIdx = 0; startIdx < string.length; startIdx++) {
    for (let endIdx = startIdx + 1; endIdx <= string.length; endIdx++) {
      substrings.push(string.slice(startIdx, endIdx));
    }
  }

  return substrings;
}

const p = console.log;
p(evenSubstrings('1432') === 6);
p(evenSubstrings('3145926') === 16);
p(evenSubstrings('2718281') === 16);
p(evenSubstrings('13579') === 0);
p(evenSubstrings('143232') === 12);
// The above tests should each print true.