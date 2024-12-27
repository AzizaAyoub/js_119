// Problem 14
// Create a function that takes a single integer argument and returns the sum of all the multiples of 7 or 11 that are less than the argument. If a number is a multiple of both 7 and 11, count it just once.

// For example, the multiples of 7 and 11 that are below 25 are 7, 11, 14, 21, and 22. The sum of these multiples is 75.

// If the argument is negative, return 0.

/*
In: an integer
Out: an integer sum

- find all multiples of 7 and 11 below the argument integer
- get their sum
- if argument is a negative integer, return 0

D:

A:
- iterate over the input number upto 0
- get multiples of 7 and 11
- get their sum
-------------
1. Initialize sum to 0
2. If input number is negative, return sum
2. Iterate over numbers from 1 up to n
 - If the current number is evenly divisible by 7:
  - Increment sum by 7
 - if the current number is evenly divisible by 11
  - Increment sum by 11
3. Return sum
*/

function sevenEleven(int) {
  let sum = 0;
  if (int < 0) {
    return sum;
  }

  for (let n = 1; n < int; n += 1) {
    if ((n % 7 === 0) || (n % 11 === 0)) {
      sum += n;
    }
  }

  return sum;
}

const p = console.log;
p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);
// The above tests should each print true.