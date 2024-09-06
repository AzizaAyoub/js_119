// What is logged and what does it demonstrate?



const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

/*
When the code runs the array [1, 4, 9, 16, 25] is logged.
`squaredNumbers` is assigned the return value of map call on the array reference by `numbers`. 

As a `map` is a method of array instances, it takes a callback function and uses the return value 
of the callback to transomr every element in the original array and returns a new array comprised 
of the transformed elements. 

In this case the callback returns the square of each number when invoked on each number in the 
`numbers` array individually. map then places that square in the new array that it is going to return. Thus, squaredNumbers is assigned to that returned array. 
map is a higher-order function, thus it takes a callback function as an argument. 
Also as functions are first calss values in JavaScript, they can be passed to other functions as 
the arguments, making it more flexible to work with. map does not modify the orignal array, 
and we can see this by checking the value of numbers array. 
*/