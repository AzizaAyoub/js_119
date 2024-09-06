///Using forEach
function interleave(arr1, arr2) {
  let combinedArray = [];
  arr1.forEach((element) =>
  combinedArray.push(element, arr2[arr1.indexOf(element)]));
  
  return combinedArray;
}
  
  ///Using map
function interleave(arr1, arr2) {
  let combinedArray = [];
  arr1.map((element) =>
  combinedArray.push(element, arr2[arr1.indexOf(element)]));
  
  return combinedArray;
}

// My question:  Is there a way to not use push and have the combinedArray variable store the 
// return value from forEach or map?  I couldn't figure out another way.  
// Or maybe what I have come up with is fine?

console.log(interleave([]))