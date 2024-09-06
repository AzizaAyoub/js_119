// What is printed and what concepts does it demonstrate?



const arr = [1, 2, 3];
arr.customProperty = 'Hello';
console.log(arr.customProperty); //
console.log(arr.length); // 


/*
Line 3 returns and logs 'Hello'
Line 4 retursn  and logs 3 to the console.

`arr` is declared and initialized to the array objec [1, 2, 3] 
line 2 is an object-key declaration syntax which creates a new key `customProperty` 
and assigns it the string 'Hello'. This is possible because arrays are objects in JavaScirpt, 
meaning that we can create proprties using names that are not non-negative integers. 
So line 3 and 4 is the key reference in which we reference the length and customProperty keys
and their values respectively. However, these two are non-element properties of arr array, 
because they are not stored in a numerical index in the arr. 

This code shows the concept of arrays being object in JavaScript.
*/