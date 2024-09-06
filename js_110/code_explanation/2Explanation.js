// // What is the output of this code and why? (edited) 

// const numbers = [1, 2, 3];

// function modifyArray(arr) {
//   arr.push(4);
//   arr = [5, 6, 7]; 
//   arr.push(8); 
// }

// modifyArray(numbers); // [5, 6, 7, 8]
// console.log(numbers); // [1, 2, 3, 4]

// /*
// The output of line 11 is `[1, 2, 3, 4]`, line 12 is `[5, 6, 7, 8]` 

// `numbers` is declared on line 3 initialized to an array of numbers `[1, 2, 3]`
// `modifyArray` function is defined betweene lines 5 - 10 with one param `arr`
// When `modifyArray` function is invoked on line 11 with `numbers` as argument, since `numbers` contain array
// object javascript will pass a referece to `arr` param within the function. In this case both `arr` and 
// `numbers` points to same array or memory location.

// Inside the `modifyArray` function by using the `push` method we want to add num `4` to the array 
// which is reference by `arr` variable. In this case `push` will mutatue our original array which is 
// reference by `numbers` variable. 

// Secondly we reassign the `arr` var value to a whole new array `[5, 6, 7]`
// So this ressignment doesn't affect on `numbers` array.

// Finally, we used push method to add num 8 to the end of the `[5, 6, 7]` array

// So the result will become `[5, 6, 7, 8]`, and `[1, 2, 3, 4]`
// */

// // Vowel Families
// // Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.


// /*
// P:
// In: an array of words
// Out: an array of words that have the same vowels as the first word in the original array

// Inter: an array of words

// A:
// - Find the vowels of the first letter in array
// - find words that have exacly the same vowels as the first letter
// -----------
// 1. Extract the vowels of first word to targetVow
// 2. Initialize an empty result array
// 3. Iterate over the input array
//   - If current word includes only those vowels of the first word:
//    - Append it to the result array
// 4. Return result
// */


// function sameVowelGroup(array) {
//   let vowels = 'aioue';
//   return [...array].map((char, _, array) => {
//     if (vowels.includes(array[0][char])) {
//       let firstWordVowels = char;
//       return firstWordVowels;
//     } 
//   })
// }
// sameVowelGroup(["toe", "ocelot", "maniac"]) //➞ ["toe", "ocelot"]

// sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) //➞ ["many"]

// sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) //➞ ["hoops", "bot", "bottom"]
// // Notes
// // Words will contain only lowercase letters, and may contain whitespaces.
// // Frequency does not matter (e.g. if the first word is "loopy", then you can include words with any number of o's, so long as they only contain o's, and not any other vowels).


// /*
// Get all the vowels from the first word of input array 
// Iterate through the input array 
// Check if the current word includes any vowel like the first word 
// Return that word in the array  
// */

let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail