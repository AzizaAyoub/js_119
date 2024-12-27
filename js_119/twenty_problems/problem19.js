/*
Problem 19
Create a function that takes an array of integers as an argument and returns the integer that appears an odd number of times. There will always be exactly one such integer in the input array.

input: array 
output: a number 
rules:
  - get the integer that appears an odd number of times 
  - the input array should contain a number that appears an odd number of times 

d
- object: to store the occurence of each number 

a:
1. Get the frequency of the input numbers
2. Find the number that appears odd number of times

  - get the frequency (see getOccurences function below)
  - iterate through the numbers occurence 
  -- if the current number occurs odd number of times
  --- return the current number


function: getOccurences(array)
----------------------------
  - intialize count object empty 
  - iterate over the input array 
  -- if the current number doesn't exist within the count 
  --- append it to count and assign 1 to its value 
  -- if the current number exist within the count
  --- increment its value by 1
  - return the count
*/


function oddFellow(array) {
  let count = getOccurences(array);

  for (let num in count) {
    if (count[num] % 2 === 1) {
      return Number(num);
    }
  }
}

function getOccurences(array) {
  let count = {};

  array.forEach(num => {
    if (!count.hasOwnProperty(num)) {
      count[num] = 1;
    } else {
      count[num] += 1;
    }
  });
  
  return count;
}
const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);
// The above tests should each print true.