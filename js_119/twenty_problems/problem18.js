/*
Problem 18
Create a function that takes an array of integers as an argument. Determine and return the index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N. If there is no index that would make this happen, return -1.

If you are given an array with multiple answers, return the index with the smallest value.

The sum of the numbers to the left of index 0 is 0. Likewise, the sum of the numbers to the right of the last element is 0.

In: array
Out: number
Rules:
 - If no N found, return -1
 - If multiple answers found, return the first one

Array: to store the left side elements of N
Array: to store the right side elements of N

 - Iterate through the input array
 - Compare each numbers left and right side elemets sum (to find N)

1. Iterate through input array
 - Get the left side elements of the current number
 - Get the ride side elements of the current number
 - Get the sums of both right and left side elements
 - If both sums are equal
   - Return the current element's index
3. Otherwise, return -1
*/

function equalSumIndex(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    let leftSum = numbers.slice(0, index).reduce((acc, num) => acc + num, 0);
    let rightSum = numbers.slice(index + 1).reduce((acc, num) => acc + num, 0);
    if (leftSum === rightSum) {
      return index;
    }
  }

  return -1;
}

const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
// The above tests should each print true.


// -------------------------------------------


// Problem 18
// Create a function that takes an array of integers as an argument. Determine and return the index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N. If there is no index that would make this happen, return -1.

// If you are given an array with multiple answers, return the index with the smallest value.

// The sum of the numbers to the left of index 0 is 0. Likewise, the sum of the numbers to the right of the last element is 0.
/*

P:
In: an array of integers
OUt: an integer

- determine the sum of numbers to the left of index N and right of it
- if both sum values are equal, return the current N
- the sum of numbers to the left of index 0 is 0
- the sum of numbers to the right of last index is also 0
- if no sum are equal, return -1

D:
an array

a:
- iterate through the input array 
- find the sum of lift and right side of the current number 

1. iterate through the input array 
2. get the left sid elements of the current element 
  - get the sum of left side elements 
3. get the right side elements of the current element 
  - get the sum of right side elements 
4. if the left sum and right sum is equal 
  - return the current index 
5. return -1


*/


function equalSumIndex(array) {
  for (let i = 0; i < array.length; i += 1) {
    let leftSum = array.slice(0, i).reduce((acc, num) => acc + num, 0);
    let rightSum = array.slice(i + 1).reduce((acc, num) => acc + num, 0);
    if (leftSum === rightSum) return i;
  }

  return -1;
}




p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
// The above tests should each print true.