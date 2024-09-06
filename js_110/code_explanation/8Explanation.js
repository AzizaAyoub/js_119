// What will be logged to the console and why? Mention any concepts involved


let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) continue;

  let square = numbers[index] * numbers[index];
  console.log(square);
}

/*
The code will log numbers:
16
36
4

numbers is declared on line 4 initialized to an array of numbers
A for loop is used to iterate over the numbers array elements. Within the for loop an if condition 
is checked wheather the current num divided by 2 remainder is 1 the continue which skips the current
iteration and move to the next iteration, if not, then square variable will declared and assigned
it to the return value of this `numbers[index] * numbers[index]` expresstion, which is the square of numbers.

Finally, log the value of square and it will log:
`16`
`36`
`4`
*/