// What is logged and why?

function makeMultiplier(multiplier) {
  return function(value) {
    return value * multiplier;
  };
}
  
const double = makeMultiplier(2);
console.log(double(5)); // 10