/*
Problem 1
Create a function that takes an array of numbers as an argument. For each number, determine how many numbers in the array are smaller than it, and place the answer in an array. Return the resulting array.

When counting numbers, only count unique values. That is, if a number occurs multiple times in the array, it should only be counted once.

*/

/*
input: an array 
output: a new array 
rules: 
  - determine how many numbers are less than the current element 
  - When counting numbers, only count unique values 
D:
-- Array 

A:
1. Iterat throught input array 
2. Get the smaller than numbers 

helper function getSmallNumbers
input: two number currenNum, array  
Output: a number 

    - Initialzie count to 0
  - Iterate through the input array, Initialzie idx to 0
    - if currenNum is less than the current number 
      - increment count by 1


Main function smallerNumbersThanCurrent, with an array 
input: array 
output: a new array 

  - Initialzie resultArray to empty array 
  - Iterate through the input array 
    - Invoke the helper function for each number and pass the current number as the first argumet and input array as the second argument 
    - Append the resultArray
  - Return resultArray 
*/

function getSmallerCount(currentNum, array) {
  let count = [] 

  for (let idx = 0; idx < array.length; idx += 1) {
    //console.log(currentNum > array[idx]);
    if (!count.includes(array[idx]) && currentNum > array[idx]) {
      count.push(array[idx]);
  }
   if (count.length === 0){
    return 0
   }
  }
  return count.length;
}

function smallerNumbersThanCurrent(array) {
  let resultArray = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    let currentNum = array[idx];
    resultArray.push(getSmallerCount(currentNum, array));
  }
  return resultArray;
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(getSmallerCount(8, [8, 1, 2, 2, 3]))
p(getSmallerCount(7, [7, 7, 7, 7]))

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));