const arrArr = [-12, 14, -19, 30, 3];


function findMaxMin(arr){
    let sortArr = arr.sort((a,b)=>a-b);
    let max = sortArr[sortArr.length-1];
    let min = sortArr[0];
    return {
        min:min,
        max:max
    }
}

console.log(findMaxMin(arrArr))