// Calculate the factorial

// function findFactorial(num){
//     let fac = num;
//     if(num == 0 || num == 1) return 1;
//     for (let index = (num-1); index > 0; index--) {
//        fac = fac*index;
//     }
//     return fac;
// }

// console.log(findFactorial(1));

function factorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}

console.log(factorial(5));