// Problem 13
// Create a function that takes two strings as arguments and returns true if some portion of the characters in the first string can be rearranged to match the characters in the second. Otherwise, the function should return false.

// You may assume that both string arguments only contain lowercase alphabetic characters. Neither string will be empty.

/*
input: two strings 
output: boolean 
rules:
  - if some portion of the characters in the first string can be rearranged to match the characters in th second return true 
  - if not return false 
  
D:

a:
- iterate through the input string 
- rearange the first string like second string 

  - initialize resutl to empty string 
  - convert the first input string to an array of characters
  - iterate through the input string 
  -- if the current character of second string is include 
  --- get the index of current character from teh charsArr 
  --- splice this character from the charsArr 
  --- concatnate it with the resutl 
  - if result and str2 is equal return true


str1-split('') to chars
for i < str1 i + 1
  if (str1) includes (str2[i]) 
    get the index of this char 
    splice this char from the array (mutate it)
    join it to a str back 
    result += splicedStr 
*/

function unscramble(str1, str2) {
  let result = ''
  let charsArr = str1.split('');
  
  for (let i = 0; i <= str2.length; i += 1) {
    if (charsArr.includes(str2[i])) {
      let indexOf = charsArr.indexOf(str2[i]) 
      let splicedStr = charsArr.splice(indexOf, 1).join('');
      result += splicedStr;
    }
  }
  return result === str2;
}


const p = console.log;
p(unscramble('ansucchlohlo', 'launchschool') === true);
p(unscramble('phyarunstole', 'pythonrules') === true);
p(unscramble('phyarunstola', 'pythonrules') === false);
p(unscramble('boldface', 'coal') === true);
// The above tests should each print true.