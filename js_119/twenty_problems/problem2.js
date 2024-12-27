// Problem 2
// Create a function that takes an array of integers as an argument. The function should return the minimum sum of 5 consecutive numbers in the array. If the array contains fewer than 5 elements, the function should return null.



/*
input: an array 
output: number 
rules:
  - get the minimum sum of 5 consecutives 
  - if the input array length is less than 5 return null 
  
d:
array: to sotre the 5 consecutive numbers 

a:
- iterate through the input array 
- get the minimum sum of 5 consecutive numbers 

  - if input array length is less than 5 return `null` 
1. intialize `consecSubArr` to empty array 
2. Initialize `sum` to 0
3. Iterate through the input array 
  - get sub numbers start from 0 upt `numOfConse` the second argument 
  - append the result to `consecSubArr` 
4. Get the sum of each 5 consecutives 
  - if `sum` is greater than the current sum 
  - reassign `sum` to the current sum 
5. return sum 
*/
const p = console.log;

function fiveConsecutives(array, numOfConse) {
  let consecSubArr = [];

  for (let i = 0; i <= array.length - numOfConse; i += 1) {
    consecSubArr.push(array.slice(i, i + numOfConse));
  }
  return consecSubArr;
}

function minimumSum(array) { 
  if (array.length < 5) return null; 
  array = fiveConsecutives(array, 5); 
  let sumArr = array.map(arr => arr.reduce((acc, num) => acc + num));

  return Math.min(...sumArr);
}



p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
// The above tests should each print true.

// ======================================================


// Problem 2
// Create a function that takes an array of integers as an argument. The function should return the minimum sum of 5 consecutive numbers in the array. If the array contains fewer than 5 elements, the function should return null.

/*
input: array 
output: number 
rules:
  - get the minimum sum of five consecutive numbers 
  - if the input array length is fewer than 5 return null 
  - the input array may contain negative numbers 

e:

d:
- array: to store all five consecutive numbers 

a:
- iterate through the input array 
- get the minimum sum of five consecutive numbers 

  - initialize sum as 0 
  - get an array of five consecutive numbers, assign it to consecArr 
  - iterate through the consecArr 
  -- get the sum of current subarray, assign the result to currentSum 
  -- if current sum is greater than sum 
  --- reassign sum to currentSum 
  - return sum 



function getFiveCons
- input array, numOfCons 
- output array 

  - initialize consecArr as empty 
  - iterate through the input array 
  -- slice off the numbers from the input array start from currnt index upt numOfCons 
  -- append it to consecArr 
  - return consecArr 
*/

// function getFive(arr, num) {
//   let fiveArr = [];

//   for (let i = 0; i <= arr.length - num; i += 1) {
//     fiveArr.push(arr.slice(i, i + num));
//   } 
//   return fiveArr;
// }

// function minimumSum(arr) {
//   let fiveArr = getFive(arr, 5);

//   return arr.length < 5 ? null : Math.min(...fiveArr.map(arr => arr.reduce((sum, acc) => sum + acc, 0)));
// }

// const p = console.log;
// p(minimumSum([1, 2, 3, 4]) === null);
// p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// p(minimumSum([1, 2, 3, 4, 5, 6])  === 15);
// p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
// // // The above tests should each print true.
