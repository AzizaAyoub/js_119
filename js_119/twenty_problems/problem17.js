// Problem 17
// Create a function that takes an array of integers as an argument. The function should determine the minimum integer value that can be appended to the array so the sum of all the elements equal the closest prime number that is greater than the current sum of the numbers. For example, the numbers in [1, 2, 3] sum to 6. The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.

// Notes:

// The array will always contain at least 2 integers.
// All values in the array must be positive (> 0).
// There may be multiple occurrences of the various numbers in the array.




/*
input: an array 
output: a string with number 
rules:
  - the input should include positive integer greater than 0
  - the array will always contain two integers 
  - the input array may contain multiple occurrences of the various numbers 

d:
-

a:
1. Iterate through the input array 
2. Get the sum of all integers from the input array 
3. get the count of added number to sum 
  
  - intialize count to 0
  - initalize sum to 0 
  - iterate through the input number 
  -- append the sum of integers from input array to sum variabel 
  -- increment sum by 1, assign the result to nextPrime
  -- while nextPrime is not a prime number 
  --- increment count by 1
  --- increment nextPrime by 1 
  --- if the nextPrime number is a prime 
  ---- return count 
  - return count 



helper function isPrime(number)
------------------------------------[1, 2, 3]
  - if the input number is less than 2 return false 

  - iterate through the input number start from idx 2 
  -- if the number remainder idx is equal to 0 
  --- return false
  - return true

*/
function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }

  return true;
}

function nearestPrimeSum(array) {
  let count = 1; 
  let sum = 0; 

  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }

  let nextPrime = sum + count;

  while (!isPrime(nextPrime)) {
    count += 1;
    nextPrime += 1;

    if (isPrime(nextPrime)) {
      return count
    }
  }
  
  return count;
}



const p = console.log;
p(nearestPrimeSum([1, 2, 3])) //=== 1);        // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);
// The above tests should each print true.

// ------------------------------------------------------------------


/*
Create a function that takes an array of integers as an argument. The function should determine the minimum integer value that can be appended to the array so the sum of all the elements equal the closest prime number that is greater than the current sum of the numbers. For example, the numbers in [1, 2, 3] sum to 6. The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.

Notes:

The array will always contain at least 2 integers.
All values in the array must be positive (> 0).
There may be multiple occurrences of the various numbers in the array.
*/

/*
Input:: An array
Output: A number

Rules:
- Find the minimum count, that added to the sum of input array, to get the a prime number 
- the output prime number must be greater than sum of input array 
- array will contain at least 2 integers
- all values in the array are positive

D: 

A:
1 - Iterate through input array
2. Find the prime number that is larger than the sum of input array 
3. Find the minimum count, and get the prime number





- initilize sum to 0
- initilize count to 1
- Iterate through input array, start from index 0; 
  - add current value to sum

- add 1 to the sum and assign the result to nextPrime 
- iterate through the nextPrime 

-- if nextPrime is not a prime number  ( see isPrime(nextPrime) bellow)
--- increment count by 1
--- increment nextPrime by 1

- if the nextPrime is a prime number ( see isPrime(nextPrime) bellow)
-- return count 

- return count


- Create a loop that run until count + sum is a prime number. (invoke isPrime)
  -- increment count + 1;
- return count 


function isPrime(number)
  - if the number is less than 2 return false 
  - Iterate through number, start from index 2; 
  -- if the input number is evenly divisable by index, return false
  - return true
*/


function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true; 
}

function nearestPrimeSum(array) {
  let sum = 0;
  let count = 1; 

  for (let i = 0; i < array.length; i += 1) {
    sum += array[i]
  }

  let nextPrime = sum + 1; 

  while (!isPrime(nextPrime)) {
    count += 1;
    nextPrime += 1;

    if (isPrime(nextPrime)) return count;
  }
  return count;
}
p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);

/// -----------------------------------------

// function nearestPrimeSum(array){
//   let sum = 0;
//   let count = 1;
  
//   sum = array.reduce((acc, current) => acc + current)
 
//  while(!isPrime(sum + count)){
//      count += 1
//  }
//  return count
// }