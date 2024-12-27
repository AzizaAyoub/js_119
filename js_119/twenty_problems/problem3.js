// Problem 3
// Create a function that takes a string argument and returns a copy of the string with every second character in every third word converted to uppercase. Other characters should remain the same.

/*
input: a string 
output: a new string 
rules: 
  - convert the second character of each third word to uppercase
  - other characters should remain the same 

d:
array: to store the words of input array 

a:
- iterate through the input 
- convert each second character of each third word to uppercase 

  - convert the input string to an array of words 
  - iterate through the array of words, start idx from 0
  -- if idx is evenly divisable by 3
    -- convert the second character of this word to uppercase 
  -- otherwise return word 


Helper: toUpper(word) 
  - convert the input word to an array of characters 
  -- iterate through the array of characters, strat from idx 0
  --- if the current idx is evenly divisable by 2
  ---- convert the current character to uppercase 
  -- otherwise return character 
*/
const p = console.log;


function toWeirdCase(string) {
  return string.split(' ').map((word, idx) => {
    if ((idx + 1) % 3 === 0) {
      return toUpper(word);
    }
    return word
  }).join(' ');
}

function toUpper(word) {
  return [...word].map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toLowerCase();
    } else {
       return char.toUpperCase();
    }
  }).join('');
}


let original = 'Lorem Ipsum is simply dummy text of the printing world';

let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
p(toWeirdCase(original) === expected);

original = 'It is a long established fact that a reader will be distracted';
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
p(toWeirdCase(original) === expected);

p(toWeirdCase('aaA bB c') === 'aaA bB c');

original = "Mary Poppins' favorite word is " +
           "supercalifragilisticexpialidocious";
expected = "Mary Poppins' fAvOrItE word is " +
           "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
p(toWeirdCase(original) === expected);
// The above tests should each print true.


