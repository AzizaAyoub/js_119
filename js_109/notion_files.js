// Explain what's gonna return from on line 13 and why?

// Does the function below have any side effects? If so, refactor the function so it doesn't have any side effects.

let students = ["Chris", "Pete", "Nick", "Jordan"];

function passedStudents(list) {
  let passed = list.splice(2, 2);
  return passed;
}

passedStudents(students);
console.log(students); // ["Chris", "Pete"]

// Explanation: 
/*
Line 13 returns: `["Nick", "Jordan"]`

On line 13, `passedStudents` is invoked, passed it `students` as an argument, since `students` 
references an array, this acts as pass-by-reference. Inside the function `list` references the 
same array which `students` points to. On line 9, `splice` method is invoked on the array `list`, 
`splice` is a destructive method (it mutates the array) it removes some elments from the array, 
returns the removed elements in the form of an array. The first argument determines the index where 
to start removing the elments, the second argument determines how many elements to remove. 

In this case, `splice` removes the last two elements and returns the removed elements in an array 
(`["Nick", "Jordan"]`), which is assigned to `passed`, and is returned from the `passedStudents` 
function.


Yes, the function has a side effect by mutating the argument that is passed to the function. 
To solve this issue, we can use the `slice` method to extract the specific elements without changing 
the original array. Here's the solution:
*/

function passedStudents(list) {
  let passed = list.slice(2);
  return passed;
}

// This time `slice` is used to extact some elements based on the arguments passed to the method
// which is in this case `2`. It starts extracting the elements from index 2 until the end of the 
// array, and returns a shallow copy of those elements.

/*
Khumari explanation:

Line 13 returns: ['Nick', 'Jordan']
`students` is declared and initialized on line 5 to an array, hence `["Chris", "Pete", "Nick", "Jordan"]`.

On line 13, `passedStudents` is invoked, passing it the value of `students` as an argument. 
As `students` references to an array, the parameter `list` gets assigned a reference to that 
array due to pass-by-reference with objects in JavaScript. 

Within `passedStudents` the splice method is inokec on the value of list. `splice` adds, 
removes and replaces elements in an array destructively. It returns an array of the removed elements. 
It uses the first argument as the start index from which to start removing elements, and uses the 
second argument as the delete count to determine the amount of elements to be removed. 

In this case, slice removes two elements in `list` from index 2,  hence 'Nick' and 'Jordan' and 
returns in a new array, assigned to 'passed', which is then returned by passedStudents. 

Yes, the function has a side which mutates the array passed to it as the argument, 
to make it so that it does the provided service but without mutating the array, we can use `slice` 
instead. `slice` takes a start and end argument, and uses them to extract the elements from the 
start index up to the end exlusive. If the end is not specified it will return the extracted elements 
up to the end of the array:
*/
function passedStudents(list) {
  let passed = list.slice(2);
  return passed;
}

// Unlike splice, slice does not mutate the original array, because it returns a new array. We can confirm that by checking the value of `students` afterwards.
// students ['Chris', 'Pete', 'Nick', 'Jordan']