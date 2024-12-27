// Problem 6
// Create a function that takes a string argument and returns a hash in which the keys represent the lowercase letters in the string, and the values represent how often the corresponding letter occurs in the string.

/*
input: a string 
output: an object 
rules:
  - count each character of the input string, that how many times it occurs 
  - assign the count to the character key within the object ({'w': 1, 'o': 2})
  - the input string length does not matter 
  - if the input string is empty return empty object 

D:
- object to sotre the characters and its count 

A:
- iterate through the input string 
- determine the number of each character that how many times it occurs 

  - initialize count to an empty object 
  if the input string is empty return empty object 
  - iterate through the input string 
  -- if the current character doesn't exist wihtin the count object 
  --- use the current character as a key and assign one to its value 
  -- if the current character exist within the count object 
  --- increment its value by 1
  - return count 
*/
const p = console.log;
const objeq = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (! keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}


function countLetters(string) {
  string = string.replace(/[^a-z]/g, '');
  let count = {}
  if (string === '') return count;

  for (let i = 0; i < string.length; i += 1) {
    if (!count.hasOwnProperty(string[i])) {
      count[string[i]] = 1;
    } else {
      count[string[i]] += 1;
    }
  }
  return count;
}


let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
p(objeq(countLetters('woebegone'), expected));

expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
            'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
p(objeq(countLetters('lowercase/uppercase'), expected));

expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
p(objeq(countLetters('W. E. B. Du Bois'), expected));
countLetters('lowercase')//, {'x': 1}
p(objeq(countLetters(''), {}));
p(objeq(countLetters('!!!'), {}));
// The above tests should each print true. 
