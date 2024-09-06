// What will be logged and why? 

let number;

do {
  number = Math.floor(10 * Math.random());
  console.log(number);
} while (number !== 5);

console.log('Exiting...');

/*
The code logs some numbers and then string 'Exiting' to the console.

number is just declared not initialized.

A do while loop is used to iterate over some numbers. Inside the do block the number is initialized 
to the return value of Math.floor, and then log each number to the console.
*/