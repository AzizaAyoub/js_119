// What is return and logged here? Describe precisely what forEach method do?
let result = [1, 2, 3].forEach((number, idx) => {
    console.log(`${idx}: ${number}`);
    return true;
  });
  
  console.log(result);
  /*
  This code return `undifined` and log:
  0: 1
  1: 2
  2: 3
  
  `forEach` is invoked on `[1, 2, 3]`, takes a callback as argument.
  
  `forEach` is an iterative method that takes a callback function as the argument. 
  It can pass the current element, idx and even the array to the callback. 
  
    The callback perfoms a specific action on the element passed by `forEach`. 
    `forEach` does not use the return value of the callback and always returns `undefined`
  
  `forEach` invokes its callbak once for each element, sends each element to the callback's parameter `number` 
  as argument and also sends the index of each element to the callback's second `idx` parameter as 
  argument. Within the callback each element is logged to the console with its index. 
  forEach doesn't mutate the original array it returns `undefined`
  */