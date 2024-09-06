// Describe what is happening here and mention any concepts demonstrated:

function selectVowels(str) {
    let selectedChars = '';
  
    for (let counter = 0; counter < str.length; counter += 1) {
      let currentChar = str[counter];
  
      if ('aeiouAEIOU'.includes(currentChar)) {
        selectedChars += currentChar;
      }
    }
  
    return selectedChars;
}

/*
In this code:

selecVovels is defined with str parameter between lines 3 - 16
    - selectedChars variable is declared on line 4, initialized to empty string
    - A for loop is used to iterate over str string (a counterinitaialized to 0,
         if counter is less than str length, increment it by 1 after each iteration)
    - currentChar is declared and initlized to the current character of the str string
    - In if condition we used the string includes method to check whether the currentChar 
        contain any vowel character, if so, then concatnate the current character with selectedChars
    
    Finally, return selectedChars from the function

The concepts does this code demonstrate is STRING iteration

    
*/