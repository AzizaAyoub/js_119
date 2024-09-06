// What will be logged and why?

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let counter = 0;

while (counter < alphabet.length) {
  console.log(alphabet[counter]);
  counter += 1;
}

// Debugger dev tool

/*
This code log the characters from 'a' to 'z' one by one


alphabet is initalized to string 'abcdefghijklmnopqrstuvwxyz'
counter is initialized to 0

while counter is less than alphabet length the while loop will evaluates as true as long as the counter
is less than alphabet length
log each characther of the alphabet to the console
increment the value of counter by 1 after each iteration.


*/



/*
This code will log each character from 'a' to 'z' on each iteration.

The code iterates over the string referenced by `alphabet`
`counter` is used to keep track of each iteration as well as to prevent the infinite loop. 

Within the while loop, the current character is accessed with the element refrence operator ([]) and the current index using counter `alphabet[counter]`. 
After each iteration counter is incremented by 1. 

*/