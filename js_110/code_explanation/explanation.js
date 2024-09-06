greeter();
greetiest();

function greeter() {
  const hello = "Hello";
  const world = "World";

  function greetiest() {
    console.log(world);
  }
  console.log(hello);
}

// What is the output and why?

/*
My explanation:
The console outputs are logging string `"Hello"`, 
and a `ReferenceError`: `greetiest` function is not defined. 

`greeter` is defined between lines 4 - 13, within the function declared two const var `hello` and `world`
assign them to the string `"Hello"`, `"World"`. After that we defined another 
function named `greetiest` within the `greeter` function, so this function has a local scope
and this called a nested function. Within the `greeter` function we are going to log the value of `hello` var
After logging the value of `hello` we get a ReferenceError since we are going to inovke a nested function 
in global scope.

The concepts does this code demonstrate are:
`Hoisting` invokation of a function declartion before its defenation 
`function scope` `greetiest` is a nested function declared within the `greeter` 
*/

/*
Generosa explanation:

The console outputs a ReferenceError: greetiest is not defined.
This error
is due to an issue with scope.  The greetiest function is inner scoped as it
is nested inside of the greeter function, thus it can't be accessed in the outer
scope which is where the function invocation of greetiest was called in line 2.
The only way to invoke the greetiest function is by moving its invocation
inside the greeter function's block (between it's curly braces) making it in scope.
*/

/*
Fuad explanation:
Ok here's my take, not as concise though

This will output the string Hello to the console, followed by throwing a reference error.
The greeter function, defined between lines 4 – 13, is invoked on the first line. 
The invocation of a function before it’s declared is allowed in Javascript, and so the function is 
invoked and a new function (local) scope starts.
Within the body of the function, two local is code will first invoke the `greeter` function andvariables, hello and world are declared and assigned to 
strings. Then a nested function, greetiest, is declared within the body of the greeter function 
between lines 8 - 10, within which the value of world is logged. However, greetiest is never invoked 
from within greeter.


Finally, on line 12, the value of hello is logged to the console, hence its assigned string Hello gets output to the console. greeter then returns, the function scope ends, and execution resumes with the code on line 2. We are now back in the global scope, and on line 2, there is an attempt to invoke greetiest. However, that was a private, nested function that was locally function scoped to greeter, and it went out of scope when greeter returned, hence at upon its attempted invocation on line 2, a referenceError is thrown.
The concepts demonstrated here are hoisting, i.e. invoking a function before it’s declared (which works but is considered bad practice), and function scope. (edited) 
*/

/*

Clear explanation:

1. **Function Calls**: 
    - The code begins with two function calls: `greeter();` and `greetiest();`. 

2. **Function Declaration**: 
   - The `greeter` function is defined, which declares two constants, `hello` and `world`, and defines a nested function called `greetiest`.
   - Within `greeter`, it logs the value of `hello`, which is `"Hello"`.

3. **Scope of Functions**:
   - The `greetiest` function is scoped only within the `greeter` function. This means that it cannot be called from the global scope, where you are trying to call it with `greetiest();`, leading to a `ReferenceError`.
   - The `hello` variable is successfully logged from within the `greeter` function.

4. **Output**: 
   - When `greeter();` is called, it logs `Hello` to the console.
   - When `greetiest();` is called, since `greetiest` is not defined in the global scope, a `ReferenceError` occurs.

5. **Concepts Demonstrated**:
   - **Hoisting**: The function declaration of `greeter` is hoisted, allowing it to be called before its definition. However, the nested function `greetiest` is not hoisted to the global scope.
   - **Function Scope**: `greetiest` is a nested function, meaning it is limited to the scope of `greeter`, and thus cannot be invoked from outside `greeter`.

*/