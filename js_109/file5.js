// Explain what is logged?


const str = 'hello world';
const upperStr = str.toUpperCase();
console.log(upperStr); // 'HELLO WORLD'

/*
Line 3 logs the value of upperStr to the console, which is 'HELLO WORLD'.
str is declared and initialized to the lowercase form of string 'hello world'.
the toUpperCase() method is invoked on the value of str which converts a string into 
uppercase and returns a new string now in uppercase. The return value is then assigned to upperStr.
`toUpperCase` is not a destructive method, since strings are immutable in JavaScript, 
any operation on string values returns a new string. We can see that by logging the value of str 
after running this code. 
str:'hello world' 
*/