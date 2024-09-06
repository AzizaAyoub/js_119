// Question 9:
// The code below is missing the final piece of logic that will sort the objects in AMAA_GROSS_PROFIT from highest profit to lowest. 
// Implement the missing logic and explain what it does.

// Code may only be added to the location of the comment within compareFn. Code may not be altered or added elsewhere.

const AMAA_GROSS_PROFIT = [
  { amazon: 114.9 },
  { meta: 94.8 },
  { apple: 170.7 },
  { alphabet: 97.7 },
];

function compareFn(a, b) {
  for (let key1 in a) {
    for (let key2 in b) {
      return b[key2] - a[key1];
    }
  }
}

function profitSort(profitsArr) {
  return profitsArr.sort(compareFn);
}

console.log(profitSort(AMAA_GROSS_PROFIT));
// [
//   { apple: 170.7 },
//   { amazon: 114.9 },
//   { alphabet: 97.7 }
//   { meta: 94.8 },
// ]
