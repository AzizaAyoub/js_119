// Question 8:
// Examine the code below. Line 11 should output the result shown in the comment on line 12. That is not what happens.
//  Explain what happens in the code step by step, including mention of the bug in the code.


let foo = ["a", 1, ["a"], { 1: 1 }, null];

let filteredFoo = foo.filter((item) => {
  let newItem;
  if (typeof item === "object") {
    newItem = item;
  }
  return newItem;
});

console.log(filteredFoo); 
// [{ '1': 1 }]

/*
This code doesn't work as intended. Why?

`foo` is initialized to a nested collection which is array (object).
`fileteredFoo` is initialized to the return value of `filter`.

`filter` is one of the array instences method, it take a callback function as argument and performs 
selection based on the return value of its callback, it invokes its callback function once for each 
element, and sends each element to the callback in the form of argument. `filter` select the element
for which the callback returns a turthy value.

And returns the selected elements in a new array.

`filter` sends each element to the callback within the callback function it assigns to the callback `item` 
parameter, within the callback `newItem` is initialized empty. 
if the type of each element is object then assign it to the `newItem`, return the `newItem` from the function.

When we log the returend value of the `filteredFoo` to the console, it log `[ [ 'a' ], { '1': 1 } ]`.
instead of `[{ '1': 1 }]`, so this is because: the type of array is also object. Meaning that array
is object type in JavaScript. So that's why the output is: `[ [ 'a' ], { '1': 1 } ]`.


And the type of `null` is also object, but `null` is a falsy value, and the callback returns falsy in this iteration
to the `filter` so, we said above `filter` will select the element for the callback returns a truthy value. So
for that reason `filter` doesn't select `null`. 
*/
