// Problem 12
// Create a function that takes a string as an argument and returns true if the string is a pangram, false if it is not.

// Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence "Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.


/*
input: a string 
output: a boolean 
rules:
  - if the input string contains every letter of the alphabet at least once return true
  - the case is not irrelevant 

d:
- 

a:
- check all the alphabetic characters that should be included at least once within the input string 

  - convert the input string to lowercase, reassign input string to the result 
  - create a set of the letters from the input string 
  - if the length of the setted characters is equal to 26 
  -- return true
  - otherwise false 
*/


function isPangram(string) {  
  string = string.toLowerCase();  
  const letterSet = new Set(string.match(/[a-z]/g)); 
  return letterSet.size === 26;  
}

const p = console.log;
p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
p(isPangram(myStr) === true);
// The above tests should each print true.

// -----------------------------------------------------------------------
// Problem 12
// Create a function that takes a string as an argument and returns true if the string is a pangram, false if it is not.

// Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence "Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.


/*
input: string
output: boolean 
rules:
  - if a sentence contain every letter of the alphabet at least once it's a pangram 
  - pangram is case insensitve 


d:
- array: to store the alphabetic characters 

a:
- iterate through the input array of alphabet chars  
- input string should contain all the alphabet characters 

1. convert the input string to lowercase 
2. Create an array of alphabet characters (a-z)
2. Iterate through the `alphabetArr` characters array 
  - if the curren character of the alphabetArr is not within the input string 
  -- return false 

3. return true 
*/


function isPangram(string) {
  string = string.toLowerCase();

  let alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'
  , 'u', 'v', 'w', 'x', 'y', 'z'];

  for (let i = 0; i < alphabetArr.length; i += 1) {
    if (!string.includes(alphabetArr[i])) return false;
  }
  return true;
}

p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard's job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard's task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard's job is to vex chumps quickly in golf.") === true);
p(isPangram("abcdefghijklmnopqrstuvwxy") === false);


p(isPangram(myStr) === true);
// The above tests should each print true.