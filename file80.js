function addToList(item, list) {
    return list.push(item);
  }
  
  const result = addToList('apple', ['banana']);
  console.log(result);

//   output:2

// The .push() method returns the length of the new array! Previously, the array contained one element (the string "banana") and had a length of 1. After adding the string "apple" to the array, the array contains two elements, and has a length of 2. This gets returned from the addToList function.

// The push method modifies the original array. If you wanted to return the array from the function rather than the length of the array, you should have returned list after pushing item to it.

