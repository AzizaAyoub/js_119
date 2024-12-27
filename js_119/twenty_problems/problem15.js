/*
Problem 15
Create a function that takes a string argument that consists entirely of numeric digits and computes the greatest product of four consecutive digits in the string. The argument will always have more than 4 digits.

*/
/*
Input: a string of nums
output: a number

Rules: 
 --- Find the largest product of four consecutive digits in the input string
 --- consecutive digits are digits that next to each other. 
 --- input string will always be greater than 4

 D: 
 - An array to store numbers 

 A: 
 
 Helper function: fourConsecutiveNum ( string)
 --- initialize `substring` as empty array
 --- iterate through `string`
   --- create a substring that consist from idx to idx + 3;
   --- append the substring to `substring`

Function greatestProduct (string)
--- invoke function `fourCosecutiveNum` passing `string` as argument, assign it to `fourDigitsNum`
---initialize `largestProduct` = 0;
--- Iterate through `fourDigitsNum`, starting at idx = 0 to length of `fourDigitsNum`
  --- At each iteration, find the product of the substring
     --- iterate through the substring and find the product of each element at every iteration.
     --- compare products with `largestProduct`, return the larger one. 
*/
const p = console.log;
function fourConsecutiveNum(string, numOfConse){
  let substring = []
  for (let idx = 0; idx < string.length - numOfConse; idx += 1){
  //  if((string.slice(idx, idx +4 )).length >= 4)
    substring.push(string.slice(idx, idx +4 ))
  }
  return substring
}
p(fourConsecutiveNum('323545454', 4))
function greatestProduct ( string){
  let fourDigitsNum = fourConsecutiveNum(string);
  let largestProduct = 0;

  for(let idx = 0; idx < fourDigitsNum.length; idx += 1){
    let currentProduct = fourDigitsNum[idx].split("").reduce((accumulator, current) => accumulator* current)
  
    if (largestProduct < currentProduct)
    {largestProduct = currentProduct}
  }

  return largestProduct
}

p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6

// ---------------------------------------------------

// Problem 15
// Create a function that takes a string argument that consists entirely of numeric digits and computes the greatest product of four consecutive digits in the string. The argument will always have more than 4 digits.


/*
input: string 
output: a number 
ruels:
  - compute the greatest product of four consecutive digits in the input string 
  - the argument will always have more than 4 digits 

d:
- array: to store all four consecutives 

a:
- iterate through the input string 
- compute the greatest product of four consecutives 

  - intialize largeProduct to 0
  - get the array of four Consecutives ( see the getFourConsec(string) bellow ), assign the result to fourConsecutives
  - iterate through the fourConsecutives 
  -- Convert the current substring into an array of characters 
  -- iterate through the array of characters 
  --- convert each character to a number, and get the sum of the array 
  --- assign the result ot currentSum 

  -- if currentSum is less than largeProduct 
  --- reassign largeProduct to currentSum
  - return largeProduct


function: getFourConsec(string) 
  - intialize fourConsecutives to an empty array 
  - iterate through the input string 
  -- get a substring of four consecutives 
  -- append the result to fourConsecutives 
  - return fourConsecutive
*/


function getFourConsec(string) {
  let fourConsecutives = [];

  for (let i = 0; i <= string.length - 4; i += 1) {
    fourConsecutives.push(string.slice(i, i + 4));
  } 
  return fourConsecutives;
}


function greatestProduct(string) {
  let fourConsecutives = getFourConsec(string);
  let largeProduct = 0; 

  for (let i = 0; i < fourConsecutives.length; i += 1) {
    let currentProduct = fourConsecutives[i].split('').reduce((acc, num) => acc * num)

    if (currentProduct > largeProduct) {
      largeProduct = currentProduct;
    }
  }
  return largeProduct;
}
p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6
// The above tests should each print true.

function maxSubArraySum(arr) {  
  if (arr.length === 0) return 0;  
  
  let maxSoFar = arr[0];  
  let maxEndingHere = arr[0];  

  for (let i = 1; i < arr.length; i++) {  
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);  
    maxSoFar = Math.max(maxSoFar, maxEndingHere);  
  }  

  return maxSoFar;  
}  

// Example usage:  
const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];  
console.log(maxSubArraySum(numbers));  // Output: 6 (subarray [4, -1, 2, 1] has the maximum sum)


// ----------------------------------------------------------

// Your job is to write a function which increments a string to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number, the number 1 should be appended to the new string.
// Examples:

// foo -> foo1
// foobar23 -> foobar24
// foo42 -> foo43
// foo9 -> foo10
// foo99 -> foo100

console.log(incrementString("foobar0")); // "foobar1"
console.log(incrementString("foobar999")); // "foobar1000"
console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foobar1")); // "foobar2"
console.log(incrementString("1")); // "2"
console.log(incrementString("9")); // "10"
console.log(incrementString("fo99obar99")); // "fo99obar100"

/*
Input: a string
Output: a string

Rules: 
- Increment the end number of input string by 1
- If the string does not end with a number, add 1 to the new string

D:
array: to store characters from the input string 

A: 
- conver the input string to an array of characters 
- increment the last character by 1 

  - convert the input string to an array of characters assign the result to charsArr  
  -- convert the last character to a number, assign the result to isNumber  
  -- if isNumber increment its value by 1 
  -- otherwise add 1 to the end of tha charsArr 
  -- convert the charsArr back to a string, reassign the input string to the result  
  - return string 

*/


/*
Your job is to write a function which increments a string to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number, the number 1 should be appended to the new string.
Examples:

foo -> foo1
foobar23 -> foobar24
foo42 -> foo43
foo9 -> foo10
foo99 -> foo100
In: string
Out: string
Rule
 - If the string ends with a number, increment that number by 1
 - If the string doesn't end with a number, append 1

 - Extract the number from the end of the string
 - Increment the number by 1
 - Combine the numbers with the rest of the string

1. If the input string doesn't end wiht a number
  - Append 1 to the end of the string, return it
2. Get the number from the end of the input string
3. Increment the number by 1
4. Combine the rest of the string with the result
5. Return the string

function: lastNumber(string)
------------------------
1. Create an empty string `num`
2. Iterate through the input string from the end
 - If the current char is not a number
  - Return `num`
 - Prepend the current char to `num`
3. Return `num`
*/

function incrementString(string) {
  let lastChar = string[string.length - 1]
  if (!(lastChar >= 0 &&  lastChar <= 9)) {
    return string + "1";
  }

  let lastNum = lastNumber(string);
  let str = string.slice(0, string.length - lastNum.length);
  lastNum = Number(lastNum) + 1;
  return str + lastNum;
}


function lastNumber(string) {
  let num = "";
  for (let index = string.length - 1; index >= 0; index--) {
    if (!(string[index] >= 0 && string[index] <= 9)) {
      return num;
    }
    num = string[index] + num;
  }

  return num;
}


console.log(incrementString("foobar0")); // "foobar1"
console.log(incrementString("foobar999")); // "foobar1000"
console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foobar1")); // "foobar2"
console.log(incrementString("1")); // "2"
console.log(incrementString("9")); // "10"
console.log(incrementString("fo99obar99")); // "fo99obar100"
