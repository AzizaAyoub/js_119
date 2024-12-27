// Problem 7
// Create a function that takes an array of integers as an argument and returns the number of identical pairs of integers in that array. For instance, the number of identical pairs in [1, 2, 3, 2, 1] is 2: there are two occurrences each of both 2 and 1.

// If the array is empty or contains exactly one value, return 0.

// If a certain number occurs more than twice, count each complete pair once. For instance, for [1, 1, 1, 1] and [2, 2, 2, 2, 2], the function should return 2. The first array contains two complete pairs while the second has an extra 2 that isn't part of the other two pairs.

/*
input: an array 
output: number 
rules:
  - get the number of identical pairs  
  - if the input array is empty or has one element return 0
  - if a number occurs more than twice, count each complete pair once 
  
D:
array: to store the identical pairs 

A:
- iterate throuth input array 
- find out the number identical pairs 

  - initialize counter to 0
  - initialize count object empty 
  - iterate through the input array 
  -- get the occurrences of each number 
  -- assign it to the count object (3: 2)

  - iterate through the count object 
  -- if the current num value is greater 1, get an integer by dividing number by 2, 
  -- assign the result to counter 
  - return counter
*/


function pairs(array) {
  let counter = 0; 
  let count = {};

  array.forEach(num => {
    if (!count.hasOwnProperty(num)) {
      count[num] = 1
    } else {
      count[num] += 1;
    }
  })

  for (let num in count) {
    if (count[num] > 1) {
      counter += parseInt(count[num] / 2);
    }
  }
  return counter;
}


p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);
// // The above tests should each print true.