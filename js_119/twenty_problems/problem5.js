/*
Problem 5
Create a function that takes a string argument and returns the character that occurs most often in the string. If there are multiple characters with the same greatest frequency, return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.

Examples
*/


/*
input: string 
output: string 
rules:
  - get the character that appears most often in the input string 
  - if there are multiple solution, return the first one 
  - the string are not case-sensitive 

d:
object: to sotre the occurense of each character from the input string

a:
- iterate through the input string 
- find out the character that appears most often in the input string 

  - intialize occurence to 0
  - intialize key to '' string 
  - get the occurense of input string ( see the getOccurences(string) bellow ), assign the result to frequency 
  - iterate through the frequency object
  -- if occurence is less than the current key value 
  --- reassign the occurence to current value.
  --- reassign key to the current of iteration 
  - return key

function: getOccurences(string)
  - convert the input string to lowercase, assign the result to string 
  - intialize frequency to empty object 
  - iterate through the input string 
  -- if the current character is not contain within the frequency object 
  --- append to frequency, and assign 1 to its value 
  -- if the current character is contain withing frequency 
  ---- increment its value by 1
  - reutrn frequency 
*/

const p = console.log;


function getOccurences(string) {
  string = string.toLowerCase();
  let frequency = {};

  for (let i = 0; i < string.length; i += 1) {
    if (!frequency.hasOwnProperty(string[i])) {
      frequency[string[i]] = 1;
    } else {
      frequency[string[i]] += 1;
    }
  }
  return frequency;

}

function mostCommonChar(string) {
  let occurence = 0;
  let resultKey = '';
  let frequency = getOccurences(string);
  
  for (let key in frequency) {
    if (frequency[key] > occurence) {
      occurence = frequency[key];
      resultKey = key;
    } 
  }
  return resultKey

}

// p(getOccurences('Hello World'))
p(mostCommonChar('Hello World') === 'l');
p(mostCommonChar('Mississippi') === 'i');
p(mostCommonChar('Happy birthday!') === 'h');
p(mostCommonChar('aaaaaAAAA') === 'a');

let myStr = 'Peter Piper picked a peck of pickled peppers.';
p(mostCommonChar(myStr) === 'p');

myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
p(mostCommonChar(myStr) === 'e');