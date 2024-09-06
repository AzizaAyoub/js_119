// What does the code return and what concepts does this demonstrate?

const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num)); 

/*
This code return:
1
2
3
4
to the console. `numbers` initialized to `[1, 2, 3, 4]`. `forEach` is invoked on `numbers` toke a callback fucn
as argument sents each element to the callback's `num` parameter as argumnet. Inside the callback each 
element is logging to the console. Finally, `forEach` returns `undefined`
*/
// ------------------------------------------------
const isEven = numbers.every(num => num % 2 === 0);
console.log(isEven); // false

/*
This code return `false`.

`isEven` initialized to the return value of the `every` method, `every` is invoked on `numbers` array toke a
callback as argument sends each element to the callback's `num` parameters as argument. inside the callback
`num` is checking in each iteration that, is `num` divided by `2` remainder is equal to `0`, if callback returns
a truthy value for all of the elements `every` retrun `true`, so there are elements for which the callback returns 
a `falsy` value so, the whole return value or the `every` return value is `false`. Since there are not all elements
for which the callback returns a truthy value.

So therefor the return value is `false`
*/
// ------------------------------------------------
const hasOdd = numbers.some(num => num % 2 !== 0);
console.log(hasOdd); // true

/*
This code return `true`

`hasOdd` is initialized to the return value of `some`, `some` is invoked on numbers array. It take a callback
as argument `some` sends each element to the callback's num parameter as argumen. Inside the callback 
num is checking that is num divided by 2 remainder is not equal to 0, if so callback will return a truthy
value and `some` return true, if not `some` return false. So, there are some numbers for which the callback 
returns a truthy value, so `some` returned true.

So, therefor the output is `true`.
*/
// ------------------------------------------------
const fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 1, 'blueberry'); // Removes 'banana', adds 'blueberry'
console.log(fruits); // ['apple', 'blueberry', 'cherry']

/*
This code logs ['apple', 'blueberry', 'cherry'].

fruits is initialized to an array ['apple', 'banana', 'cherry'].
On line two splice is invoked on fruits, splice is one of the array instences method and it add, remove
and replace the elements of the array which is called on. We passed three arguments to the splice method
which are (1, 1, 'blueberry'), meaning that removes the element at index 1 and, 1 element, 
add the string 'blueberry' instead of it. splice method returns the modifyed array, it means that it mutate the original array.

The conceps does this code demonstrate is:
array mutation
*/
// -----------------------------------------------
const slicedFruits = fruits.slice(1, 2);
console.log(slicedFruits); // ['blueberry']

/*
This code logs ['blueberry']

slicedFruits is initialized to the return value of slice, slice is invoked on fruits array.
we pass two arguments to the slice method, the first index is 1 from which we want to extraction,
the second index is 2 in which we want to end the extraction and the last index element is not include.
So it will return an array of one element which is `['blueberry']`.

The slice method returns a new array `['blueberry']`, and it doesn't mutate the original array.
*/
// -----------------------------------------------
const hasCherry = fruits.includes('cherry');
console.log(hasCherry); // true

/*
This code return true.

hasCherry is initialized to the return value of include, includes is invoke on fruits array, and passed
the string 'cherry' as argument to check is this string includes in fruits array, so it is include,
the includes method returns true.

So, therefor the output is true.
*/
// -----------------------------------------------
const index = fruits.findIndex(fruit => fruit === 'blueberry');
console.log(index); // 1

/*
This code return number 1.

index is initialized to the return value of findIndex method. findIndex is invoked on fruits array.
It take a callback as argument sends each element to the callback's fruit parameter as argument.
Inside the callback we find the index of 'blueberry' element. So findIndex will return the index of the 
element for which the callback returns a truthy value.

So, therefor the output is 1.
*/
// ---------------------------------------------
const indexOfApple = fruits.indexOf('apple');
console.log(indexOfApple); // 0

/*
This code return 0.

indeOfApple is initialized to the return value of indexOf, indexOf is invoked on fruits array.
we pass the string 'apple' to the indexOf method to find the index of 'apple'.
So, apple is at index 0, and indexOf method also return 0.
*/
// ---------------------------------------------
const str = 'Hello, world!';
const hasWorld = str.includes('world');
console.log(hasWorld); // true

/*
This code returns true.

`str` is initialized to string `"Hello, world!"`. `hasWorld` is initialized to the return value of `includes`.
includes is invoked on str variable, passing 'world' as argument, to check is this string includes in 
`str` variable value. So this string is include and therefor `includes` return `true`.

Thus, the output is true.
*/
// ---------------------------------------------
const position = str.indexOf('world');
console.log(position); // 7

/*
This code return 7.

position is initialized to the return value of indexOf method. indexOf is invoked on str, passing 'world'
as argument, indexOf will return the index of the string `'world'` 

So the output is number 7.
*/