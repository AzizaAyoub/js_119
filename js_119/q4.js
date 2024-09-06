// Question 4:
// What do lines 5 and 6 return in the code below? 
// Explain your answer with detailed reference to line 3.


let famousAuthors = ["Kurt Vonnegut", "Virginia Woolf", "Jane Austen"];

let author = famousAuthors.splice(1, 1);

console.log(famousAuthors); // [ 'Kurt Vonnegut', 'Jane Austen' ]
console.log(author); // [ 'Virginia Woolf' ]

/*
Line 5 returns `[ 'Kurt Vonnegut', 'Jane Austen' ]`, and line 6 returns `[ 'Virginia Woolf' ]`.

splice is one of the array instences method, it can removes add and replace the element of the array 
which is called on. splice is a destractive method it mutate the array. 

In this example `splice` method is used on `famousAuthors`,  and passed two arguments which are `(1, 1)`, meaning that remove
1 element at index 1. So, it will remove one element from the `famousAuthors` which will be `"Virginia Woolf"`.
and this is returned in the form of new array element from the `splice` method and assigned to the `author` variable.


Since, `splice` is destractive method, the `famousAuthors` is mutated.
*/

