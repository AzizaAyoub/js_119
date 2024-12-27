// Problem 20
// Create a function that takes an array of numbers, all of which are the same except one. Find and return the number in the array that differs from all the rest.

// The array will always contain at least 3 numbers, and there will always be exactly one number that is different.


/*
input: array 
output: number 
rules:
  - find the number that is different from other elements of input array 
  - input array should always contain at least 3 numbers 
  - there will always be a different number  

d:

a:
- iterate through the input array 
- find the different number from input array 


  - get the length of the input array, assign it to `length`
  - iterate through the length 
  -- splice the current number from the input array 
  -- if the current number doesn't exist within the rest of the numbers 
  -- return current numbers 
*/


function whatIsDifferent(array) {
  let count = getOccurences(array);

  for (let num in count) {
    if (count[num] === 1) {
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
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);
// The above tests should each print true.



// ----------------------------------------------------

// Problem 20
// Create a function that takes an array of numbers, all of which are the same except one. Find and return the number in the array that differs from all the rest.

// The array will always contain at least 3 numbers, and there will always be exactly one number that is different.a

/*
input: array 
output: number 
rules:
  - get the number that is different from other numbers in the input array 
  - the input array will always contain at least 3 numbers 
  - the input array will always contain a different number 

d:
- object: to store the occurence of each number from the input array 

a:
- iterate through the input array 
- get the number that is different from other numbers in the input array 

  - intialize count to an empty object 
  - iterate through the input array, start from idx 0 
  - if the current number doesn't exist within the count object 
  -- create the current key in count object, assign 1 to its value 
  -- else increment the current key value by 1

  - iterate through the count object 
  -- if the current key value is equal to 1 
  --- return this key as number 
*/


function whatIsDifferent(array) {
  let count = {};

  for (let i = 0; i < array.length; i += 1) {
    if (!count.hasOwnProperty(array[i])) {
      count[array[i]] = 1;
    } else {
      count[array[i]] += 1;
    }
  }

  for (let key in count) {
    if (count[key] === 1) return Number(key);
  }
}
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);
// The above tests should each print true.

// ======================================================

/////////////////////////////////////////
function whatIsDifferent(arr) {

  const counts = {};

  arr.forEach(num => {
    counts[num] = (counts[num] || 0) + 1;
  });

  for (let num in counts) {
    if (counts[num] === 1) {
      return Number(num);  
    }
  }
}
///////////////////////

function whatIsDifferent(arr) {
 
  const common = arr[0] === arr[1] ? arr[0] : arr[2];
  return arr.filter(x => x !== common)[0];
}