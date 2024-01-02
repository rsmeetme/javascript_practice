// Check the number is prime or not;


function checkPrimeNumber(num){
    
    if(num === 1){
        return false
    } 

    for(let i=2;i<=(Math.sqrt(num));i++){
        if(num%i === 0) {
            return false;
        }
    }

    return true;
}

console.log(checkPrimeNumber(5));