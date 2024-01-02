const numbers = [1, 2, 3];
numbers[10] = 11;

console.log(numbers);

// output: [1, 2, 3, empty x 7, 11]

// When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of undefined, but you will see something like:

// [1, 2, 3, empty x 7, 11]

// depending on where you run it (it's different for every browser, node, etc.)