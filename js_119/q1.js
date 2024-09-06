// Examine the following code. What do lines 9 and 10 return, and why?
let spaceshipCrew = ["Martina", "Lucas", "Emily", "Bob"];

function trainCrew(crew) {
  return crew.forEach((member) => {
    member += " ==> fully trained.";
  });
}

console.log(trainCrew(spaceshipCrew));
console.log(spaceshipCrew); 

/*
trainCrew function is defined with crew parameter. inside the function forEach is invoked on array
which is referecnce by crew 


forEach is one the array instences method, it take a callback function as argument, 
forEach iterate over the array element, invoke its callback once for each element, and sends each 
element to the callback parameter in the form of argument. The return value of the forEach is always
`undefined`.


In this case, the callback parameter is `member` and, the forEach sends each element to the `member` as 
argument, within the callback the value of `member` will concatenate with string `" ==> fully trained."`

So, because the return value of forEach is undefined, it returns undefined.
*/


// Refactor the function so that line 9 returns the expected array:

// To transforme the array we can use the map method
function trainCrew(crew) {
  return crew.map((member) => {
    return member += " ==> fully trained.";
  });
}

console.log(trainCrew(spaceshipCrew)); // Expected output:
[
  'Martina ==> fully trained.',
  'Lucas ==> fully trained.',
  'Emily ==> fully trained.',
  'Bob ==> fully trained.'
]
console.log(spaceshipCrew); //  ["Martina", "Lucas", "Emily", "Bob"]



// The refactored function should not have side effects.

// Note that we're showing the array nicely formatted. Your system may format it differently.
