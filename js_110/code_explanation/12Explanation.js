
let arr = [2, 1, 4, 3, 5].findIndex(num => num < 1) // undefined
console.log(arr);

/*
My explanation:
It will return -1 since:
    - we invoke the findIndex method on an array of numbers findIndex takes a callback function as argument
    and sends each element of the array to the callback function in the form of argument.
    findIndex will invoke its callback function for each element and it return the element index
    for which the callback return a truthy value -1 otherwise. Within the callback function we check weather the value of num param is less than 1,
    it will return false in each iteration since there is no such element in the array that is less than
    1. So the callback will return falsy value so whenever callback doesn't return any truthy value for any 
    element findIndex will return -1. 
*/

/*
Another student's explanation:
The number -1 will be returned here.
findIndex iterates over the array, invoking its callback once on each iteration, and passing the 
current element’s value as the argument to the callback. It returns the index of the first element 
for which the callback returns a truthy value, or -1 if none of the iterations returns a truthy value.
 Here, because the callback returns true if the value of the element is less than 1, 
 it will not return a truthy value on any of the iterations, 
 because none of the elements is smaller than 1. Hence -1 is returned.
*/

