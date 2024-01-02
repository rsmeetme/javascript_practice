//Implement a function that removes duplicates from an array, keeping only the unique elements. 

// method 1

function removeDuplicate(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// console.log(removeDuplicate([2, 3, 4, 2, 3, 6, 7, 6]));

//method 2

function removeDuplicate2(arr) {
    let unique = [];
    arr.forEach(item => {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    });
    return unique;
}

console.log(removeDuplicate2([2, 3, 4, 2, 3, 6, 7, 6]));