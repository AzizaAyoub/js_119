// Describe what is happening here and mention any concepts demonstrated:

function selectType(produceList, selectionCriterion) {
    let produceKeys = Object.keys(produceList);
    let selectedItems = {};
  
    for (let counter = 0; counter < produceKeys.length; counter++) {
      let currentKey = produceKeys[counter];
      let currentValue = produceList[currentKey];
  
      // used to be (currentValue === 'Fruit')
      if (currentValue === selectionCriterion) {
        selectedItems[currentKey] = currentValue;
      }
    }
  
    return selectedItems;
  }

/*
selectType is defined on line 3 with two parameters (produceList, selectionCriterion)
Inside the function produceKeys declared  assigned to the return value of Object.keys()
selectedItems declared on line 5, assigned to empty {}

A for loop is used to iterate over produceKeys array
Inside the for loop currentKey declared 8, initialized to the current key of the produceKeys by using
the counter as index. currentValue is declared on line 9, initalized to the current value of 
produceList by using the currentKey as index

If statement is used to check if currentValue is equal to selectionCriterion then assign the 
currentValue to the selectedItems currentKey


return the selectedItems from the selectType function
*/