// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions. 

function mergeTwoSortArray(arr1,arr2){
    return [...arr1,...arr2].sort((a,b)=>a-b);
}

console.log(mergeTwoSortArray([2,3,4,5], [190, 89, 100]))