// Question 6:
// Examine the code below. What does it log, and why? What concept does it demonstrate?

let bar = function () {
  return (foo) => foo;
};

let qux = (bar) => console.log(bar);

qux(bar()("APM"));

/*
It log string 'APM'.

`bar` is defined on line 4, within the `bar` an arrow function with `foo` parameter is retutrned.
`qux` is initialized to the return value of `bar` invokation. 

qux is invoked and passing 'APM' as argument to 
*/


// -----------------------------------------------------------

// Examine the code below. What does it log, and why? What concept does it demonstrate?  

let createGetter = function () {  
  return (value) => value;  
};  

let logValue = (getter) => console.log(getter);  

logValue(createGetter()("Hello, World!"));  

/*  
It logs the string 'Hello, World!'.  

`createGetter` is defined on line 4, within which an arrow function with `value` as a parameter is returned.  
`logValue` is called with the return value of invoking `createGetter`.   

When `createGetter()` is invoked, it returns a function that simply returns whatever argument it receives. When we pass the string 'Hello, World!' to this returned function, it gets logged by `logValue`.  
*/