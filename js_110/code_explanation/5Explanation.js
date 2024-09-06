// What is the return value of map in the following code and why?

[1, 2, 3].map(num => {
    num * num;
  });

/*
The return value of map will be: `[undefined, undefined, undefined]`

map is invoked on an array of numbers and it take a callback fucntion as argument, invoking its
callback function once for each element and send each element to the num parameter 
so inside the callback we doesn't use any explicit return statement so the callback doesn't return anything so its default value is
undefined and map will return undefined in the form of new array elements
*/