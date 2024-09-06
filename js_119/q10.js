// Question 10:
// In the following code, what is the purpose of the foo function and how is it achieved?
// Does foo contain side effects?

const MEALS = {
  breakfast: "bacon & eggs",
  brunch: "coffee & croissant",
  lunch: "hamburger",
  dinner: {
    firstCourse: "beet salad",
    secondCourse: "falafal wrap",
    thirdCourse: "apple tart",
  },
  supper: "champagne & scallops",
};

function foo(mealObj) {
  let newObject = {};

  for (let key in mealObj) {
    if (typeof mealObj[key] !== "object") {
      newObject[key] = mealObj[key];
    } else {
      newObject[key] = JSON.parse(JSON.stringify(mealObj[key]));
    }
  }

  return newObject;
}

console.log(foo(MEALS));