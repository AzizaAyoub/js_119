//Question 5:
// Write a function, objectGenerator, that receives an array of objects as an argument. 
// The function should return a new object that contains all of the key/value pairs of every object 
// in the array.


function objectGenerator(profitsArr) {
  let object = {};

  for (let element of profitsArr) {
    for (let key in element) {
      object[key] += element[key];
    }
  }

  return object;
}

const AMAA_GROSS_PROFIT = [
  { amazon: 114.9 },
  { meta: 94.8 },
  { apple: 170.7 },
  { alphabet: 97.7 },
];
console.log(objectGenerator(AMAA_GROSS_PROFIT));
// { amazon: 114.9, meta: 94.8, apple: 170.7, alphabet: 97.7 }

const SHOPPING_LIST = [
  { cabbage: 1, steaks: 3, basmatiRice: 2 },
  { hoodie: 1, dress: 2, tShirt: 3 },
];
console.log(objectGenerator(SHOPPING_LIST));
// { cabbage: 1, steaks: 3, basmatiRice: 2, hoodie: 1, dress: 2, tShirt: 3 } 

/*
`objectGenerator` is defined with profitsArr as parameter.
Within the function object is initialize to empty ({})

for/of loop is used to iterate over the outer array elements, which are nested objects. 
Within the for/of for/in is used to iterate over the nested objects key/value/pairs.
Within the for/in loop each current key value will assigne to the object[key]

Then we return object from the function.
*/