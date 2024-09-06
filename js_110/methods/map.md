**What does the map method do?**  

`map` also take a callback function as argument like the `filter` method, but the main different between 
these two methods is that `filter` examin the return value of the callback to performe selection, while the `map` method use the return value of the callback to performe transformation.

If the callback function return any truthy value for any element then `map` will transforme these elements and return them in the form of new array. If the callback function doesn't return any truthy value for any element, the default value of callback is `undefined` so `map` will return `undefined` in the form of array element. This case is also true when we used curly braces for the callback function and doesn't use any explicit return statement to return something from method.

If the return value of the callback be a boolean value then `map` will return an array of boolean.