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

// Question 12:  
// In the following code, what is the purpose of the summarizeMenu function and how is it achieved?  
// Does summarizeMenu have any side effects?  

const MENU_ITEMS = {  
  starter: "spring rolls",  
  mainDish: "grilled chicken",  
  dessert: {  
    sweet: "pavlova",  
    fruit: "mango sorbet",  
  },  
  drink: "white wine",  
};  

function summarizeMenu(menuObj) {  
  let copiedMenu = {};  

  for (let item in menuObj) {  
    if (typeof menuObj[item] !== "object") {  
      copiedMenu[item] = menuObj[item];  
    } else {  
      copiedMenu[item] = JSON.parse(JSON.stringify(menuObj[item]));  
    }  
  }  

  return copiedMenu;  
}  

console.log(summarizeMenu(MENU_ITEMS));


let string = 'abcdEFGgedccab';
