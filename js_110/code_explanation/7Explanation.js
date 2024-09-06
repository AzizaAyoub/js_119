// Any feedback on my explanation about what the code logs and why?  Thanks in advance! (edited) 

let produce = {
    apple: 'Fruit',
    carrot: 'Vegetable',
    pear: 'Fruit',
    broccoli: 'Vegetable'
  };
  
  let produceValues = Object.values(produce);
  
  produceValues.forEach(value => {
    console.log(value);
  });

/*
This code will log strings:
`'Fruit'`
`'Vegetable'`
`'Fruit'`
`'Vegetable'`

`produce` variable is declared on line 3, initialized to an object.
`produceValues` is declared on line 10 initialized to the return value of Object.values() which is an array of values
On line 12 we used `forEach` to iterate over the `produceValues` array `forEach` take a callback as argument
and it invoke its callback function once for each element. 
*/