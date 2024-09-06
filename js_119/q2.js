// Question 2:
// Examine the following code:

let fruits = ["mango", "BANANA", "BLUEBERRY"];

let largeFruits = fruits.map((fruit) => { // USE filter() to work correctly
  return fruit === fruit.toUpperCase();
});

console.log(largeFruits); // [ false, true, true ]

// The uppercase strings in the fruits array should be selected for the new largeFruits array.
// However, the code doesn't work as intended. Why? Update the code so that it works as intended.

/*
Since, we used the map method, and it dosn't select elements of the array, instead it perfomes transtomation based
on the return value of its callback. To, refactor the code, and to work as intended, we can use the 
filter method.

filter is one of the array instences method, it take a callback function as argument and perfomes 
selection based on the return value of its callback, it invokes its callback function once for each 
element, and sends each element to its callback in the form of argument. filter select the element
for which the callback returns a turthy value.

So in this case the filter callback returns truthy value for the strings "BANANA", and "BLUEBERRY". 
So, the new array which is returned by filter will contains these two strings.

The output is `["BANANA", "BLUEBERRY"]`.
*/

