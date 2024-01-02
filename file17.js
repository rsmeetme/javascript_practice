// find largest number into nested array

function findLargestInNestedArray(nestedarray) {
    let largest = 0;
    for (let arr of nestedarray) {
        // if (typeof arr !== 'object') { // this also working
        if (!Array.isArray(arr)) {
            if (arr > largest) {
                largest = arr;
            }
        } else {
            for (let num of arr) {
                if (num > largest) {
                    largest = num;
                }
            }
        }
    }
    return largest;
}

console.log(typeof [])
const large = findLargestInNestedArray([1, 5, [8, 101], 78, [99, 67, 45], 56]);

console.log(large);