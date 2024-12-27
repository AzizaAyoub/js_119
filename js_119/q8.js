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



// -----------------------------------------------

// Question 9:  
// Examine the code below. Line 12 should output the result shown in the comment on line 13. That is not what happens.  
// Explain what happens in the code step by step, including mention of the bug in the code.  

let sampleArray = ["x", 2, { key: "value" }, null];  

let filteredArray = sampleArray.filter((element) => {  
  let processedElement;  
  if (typeof element === "object") {  
    processedElement = element;  
  }  
  return processedElement;  
});  

console.log(filteredArray);   
// [{ key: 'value' }]


// ----------------------------------------


/*
sampleArray is an array containing four elements: a string ("x"), a number (2), an object ({ key: "value" }), and a null value.
Filtering the Array:

The .filter() method is used to create a new array (filteredArray) containing elements that satisfy a certain condition.
The callback function within .filter() processes each element in sampleArray.
Inside the filter Callback:

The variable processedElement is declared but not initialized immediately.
The if statement checks if the type of the current element is "object". In JavaScript, both objects and null are considered to have type "object".
If the element is an object, it is assigned to processedElement.
However, if the element is not an object (i.e., if it’s a string, number, or null), processedElement remains undefined.
Returning processedElement:

The return processedElement; statement is evaluated.
If processedElement is undefined, it returns false, which means that the current element will not be included in filteredArray.
As a result, for element of type "object" (the object { key: "value" }), processedElement would be equal to that object, which evaluates to true.
For null, while it has a type of "object", processedElement is still null, which evaluates to false.
Output of console.log(filteredArray);
Given the above evaluation, the only element that evaluates to true and is included in filteredArray is { key: "value" }.
javascript
console.log(filteredArray);  
// Output: [{ key: 'value' }]  
The Bug:
The bug in the code is related to how filtered elements are being determined.

The filter's return statement relies solely on processedElement, but it does not account for null. When null is passed, it is technically treated as an object but, when it is assigned to processedElement, it evaluates to false in the context of the filter.
The Expected Behavior versus Actual Behavior:

The comment suggests the intention might have been to include all objects, but the inclusion of null (which is also treated as an object) is not handled correctly in the return statement. As a result, null is omitted from the output.
With proper handling, the filter function should be updated to better determine what qualifies as an element to include:

Corrected Code Example:
To fix this, you could directly check for element !== null and typeof element === "object":

javascript
let filteredArray = sampleArray.filter((element) =>   
   typeof element === "object" && element !== null  
);  
This change would ensure that only non-null objects are included in filteredArray.
*/