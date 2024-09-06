// Question 3:
// Imagine that you are playing a role-playing game and you are given an array of all the characters on the playing field.
// In order to know how to proceed, you will need to determine if there are enemies present.
//  If any enemies are on the field, you will not be able to proceed.

// Without using a for or while loop, write the enemiesPresent function that will determine whether there are any enemies present.


function enemiesPresent(array) {
  for (let element of array) {
    if (element.characterType === 'enemy') {
      return true;
    } else {
      return false;
    }
  }
}

console.log(enemiesPresent([
  { characterType: "enemy", hitPoints: 100, defense: 3 },
  { characterType: "NPC", hitPoints: 80, defense: 6 },
  { characterType: "teammate", hitPoints: 300, defense: 7 },
])); // Should return true

console.log(enemiesPresent([
  { characterType: "NPC", hitPoints: 20, defense: 1 },
  { characterType: "NPC", hitPoints: 80, defense: 6 },
  { characterType: "teammate", hitPoints: 300, defense: 7 },
  { characterType: "Quest Giver", hitPoints: 1000, defense: 10 },
])); // Should return false

/*
In this example, we can use the for/of loop to iterate over the array, 
and to determine the are there any enemis present.

for/of is one the loops that we can use it to iterate over the array elements. Instead of the 
basic for and while loop, it is a clear and simple way to iterate over the array elements.
*/