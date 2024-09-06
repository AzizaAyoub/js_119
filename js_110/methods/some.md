**What does the `some` method do?**  

`some` is one of the array instances method, it take a callback as argument and send each element to the callback as argument. `some` examine the return value of the callback function. If callback returns a truthy value for some of the elements `some` returns `true`, if callback doesn't return any truthy value to `some`, `some` returns `false`.

`some` method asks: are there some values for which the callback return a truthy value?

With `Object.keys()`, `values()`, `entries()` we can use the `some` method with objects