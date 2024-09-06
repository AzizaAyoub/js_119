// What will be logged and why?

let mixed = ['hello' , 10, undefined];

for (let counter = 0; counter < mixed.length; counter += 1) {
  console.log(typeof mixed[counter]);
}

/*
This code log:
string
number
undefined 

mixed is initialized to an array ['hello' , 10, undefined]. by using a for loop we iterate over the 
mixed array elements. for loop will evaluates as true as long as the length of the mixed is greater than counter
Within the for loop we log the type of each element to the console.
*/