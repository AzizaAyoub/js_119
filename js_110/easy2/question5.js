// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, 
// so that the array becomes [1, 2, 4, 5].


let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1); // [3]

console.log(numbers); // [1, 2, 4, 5]

/*
The return value of splice method is removed array
*/