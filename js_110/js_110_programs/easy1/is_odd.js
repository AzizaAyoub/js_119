// Write a function that takes one integer argument, which may be positive, negative, or zero. 
// This method returns true if the number's absolute value is odd. 
// You may assume that the argument is a valid integer value.


function isOdd(num) {
  if(num % 2 === 0) {
    return false;
  } else if (num % 2 === 1 || num % 2 === -1) {
    return true;
  }
}


console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true