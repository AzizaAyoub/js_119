// Question 7:
// In arrays, what is length? How is it used and what impact does it have on arrays and, 
// in particular, the standard Array.prototype methods? Refer to the following code in your answer.

let arr = [1, 2, 3, 4];
arr.length = 3;
arr.length = 5;
console.log(arr); // [ 1, 2, 3, <2 empty items> ]
arr.forEach((num) => console.log(num));
// 1
// 2
// 3

/*
length is the array property. It represents the number of elemens in an array. We can change the length
of the array, meaning that we can add, remove or/and replace the element of the array by doing this we
are changing the length property of the array. 

When we large the length of the array without assigning the initial elements, it will increase the length
of the array and add (empty items). So in this example on line 6 we are decresing the length of the array 
which is reference by `arr`. We assigned the length of the `arr` array to `3`. Then assigned to `5`.

When we log the arr array it will log: `[ 1, 2, 3, <2 empty items> ]`. Now this array has two empty slots.
When an array contain empty items then we invoke the array method like map forEach and so on, these methods
will ignore the empty items.

Like on line 9, we invoke the forEach method on array which is reference by arr. forEach will iterate 
over the array elements and log it to the console, execpt these two empty items, when we access to these empty items 
it return `undefined`, but they doesn't have any initial value even `undefined`.
*/


