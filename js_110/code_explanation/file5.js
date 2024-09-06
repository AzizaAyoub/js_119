// What will be logged and why?

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};
  
let pets = Object.keys(numberOfPets);
let counter = 0;
  
while (counter < pets.length)  {
  let currentPet = pets[counter];
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
  counter += 1;
}

/*
numbersOfPets is initialized to an object which is {dogs: 2, cats: 4, fish: 1}
pets initialized to the return value of keys method. also counter initialized to the num 0

by using a while loop syntax we iterater over the pets array while codition will evaluates as true as
long as the counter is less than pets length.
Inside the while loop currentPet is initialized to the current element.
currentPetNumber is initialized to the current number of pets.
Then we loged the string 'I have with currentPetNumber with currentPet to the console.
After each iteration we increment the value of counter by 1
*/

