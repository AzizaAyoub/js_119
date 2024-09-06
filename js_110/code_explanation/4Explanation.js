// Can someone review my answer to this code snippet?  Appreciate it! (edited) 


// Explain why the `printName` function invocation logs the string "Emma"
// while the last line logs "John"
let name = "John";

function printName() {
  let name = "Emma";
  console.log(name); // Output: Emma
}

printName();
console.log(name); // Output: John

/*
Line 13 will log string "Emma", and line 14 log string "John"

`name` is declared on line 6 initialized to string `"John"`
`printName` is defined from line 8 to 12 without any argument
When `printName` is invoked on line 13 wihtin the function another `name` variable is declared and assigned
to the string `"Emma"`, this `name` variable shadows the global `name` variable 
Then we log the value of `name` so it will log string `"Emma"` instead of `"John"`
When we log the value of `name` outside the function it will log the value of global `name` which is `"John"`


The concepts this code demonstrates are:
Variable shadowing
Variable scope
*/