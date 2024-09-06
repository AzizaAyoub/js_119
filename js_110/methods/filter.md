**What does the filter method do?**  

`filter` is an array method it take a callback function as argument, and invoke its callback once for each element. `filter` sends each element to the callback in the form of argument, and `filter` select the element for which the callback returns a truthy value. filter perform selection based on the return value of the callback

If the filter's callback return any truthy value for any element then filter will return these elements in a new array. When callback doesn't return any truthy value for any element `filter` won't select any element and return empty array `[]`

If we doesn't use curly braces for the filter's callback we doesn't have to use explicit return statement. Or if we used curly braces, then we need to use explicit return statement to return something from method.