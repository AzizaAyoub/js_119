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