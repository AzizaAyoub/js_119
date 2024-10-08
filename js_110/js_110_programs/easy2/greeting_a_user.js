// Write a program that will ask for user's name. The program will then greet the user. 
// If the user writes "name!" then the computer yells back to the user.


//What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt('What is you name?');
let name = readline.question();

if (!name.endsWith('!')) {
  prompt(`Hello ${name}`);
} else {
  prompt(`HELLO, ${name.toUpperCase()} WHY ARE WE SCREAMING?`);
}