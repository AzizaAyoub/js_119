// Why does the code  log "Online" Instead of logging "Offline", what concept does this demonstrate? (edited) 

let status = "Online";

function changeStatus(status) {
  status = "Offline";
  return status;
}

changeStatus();
console.log(status);

/*
Line 11 log string "Online" instead of "Offline"

status is declared on line 3 initialized to string `"Online"`
`changeStatus` is defined betweene lines 5 - 9 with `status` param
When `changeStatus` is invoked on line 10 without any argument so the value of `status` will be implicitly
`undefined`, so this local status will shadows the global status variable.
within the function on line 6 we reassign the `status` local variable to string `"Offline"`,
And then we return `status` from the function

Finally, when we want to log the value of `status` variable it will log string `"Online"`, since we doesn't 
pass any argument to the `changeStatus` function in time of invokation, and reassignment inside the function
doesn't affect on the value of global `status`, because local status var shadows the global status var.

So, that's why we get string `"Online"`

The concepts does this code demonstrate are:
variable scope
Variable shadowing
Immutablity
*/




/*
Clear explanation:

Line 11 logs the string "Online" instead of "Offline".  

- The variable 'status' is declared on line 3 and initialized to the string "Online".  
- The function 'changeStatus' is defined between lines 5 - 9 with a parameter also named 'status'.  
- When 'changeStatus' is invoked on line 10 without any arguments, the value of the parameter 'status' defaults to 'undefined' within the function.  
- The local 'status' variable shadows the global 'status' variable, meaning any changes made to 'status' inside the function will not affect the global variable.  
- Inside the function on line 6, we reassign the local variable 'status' to the string "Offline", but this change is local to the function.  
- The return value of 'changeStatus', which is "Offline", is not captured or used, so it does not affect the global 'status'.  

Finally, when we log the value of 'status' on line 11, it logs the global variable 'status', which is still "Online", since the reassignment inside the function does not change the global variable.  

Thus, the final output is "Online".  

The concepts demonstrated by this code include:  
- Variable Scope: The distinction between global and local variables.  
- Variable Shadowing: The local variable 'status' shadows the global variable of the same name.  
- Immutability: While the local variable can be reassigned, it doesn't affect the global variable.

*/