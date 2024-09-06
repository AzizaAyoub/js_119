// What will be logged and why?

let colors = ['green', 'blue', 'purple', 'orange'];

for (let counter = 0; counter < colors.length; counter += 1) {
  console.log(`I'm the color ${colors[counter]}!`);
}

/*
This code will log:
I'm the color green!
I'm the color blue!
I'm the color purple!
I'm the color orange!

`colors` is initialized to an array `['green', 'blue', 'purple', 'orange']`
By using a for loop syntax we iterate over the `colors` array elements and the for loop condition 
will evaluates as true as long as the counter is less than `colors` length. Inside the for loop log 
the each element with the string `'"I'm the color"` 
*/