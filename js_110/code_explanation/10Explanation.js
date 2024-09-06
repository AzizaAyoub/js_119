// What will be the values on lines 4 and 5 after the code is run?

let nums = [1, 2, 3];
let reversedNums = nums.slice().reverse();

reversedNums; // [3, 2, 1]
nums;  // [1, 2, 3]

/*
My explanation:
reversedNums will be: [3, 2, 1]
nums will be: [1, 2, 3]

We declared two vars nums and reversedNums, 
nums is initialized to an array of nums
reversedNums is initialized to the return value of reversedNums.

We invoke the slice method on nums array it will take a shallow copy of this array,
and it won't mutate our original array. Then we invoke the reverse method on the return value of slice,
reverse method will reverse the elements of the copyed array in place meaning the the first element will become the 
last element and last element will become the first element. So reverse is a mutative mthod and it will 
mutate the reversedNums. So the mutation doesn't affect on nums array since we first make a shallow copy of the 
original array by using the slice.

*/

/*
Another student's explanation:
The value of reversedNums on line 4 will be [3, 2, 1] and the value of nums on line 5 will be [1, 2, 3]
On line 2, nums.slice() returns a shallow copy of the nums array, and reverse is then chained to this 
copied array, returning a the copied array with the elements reversed in place. reverse is 
destructive, but since it was invoked on a copy of the nums array, nums was not mutated.

*/