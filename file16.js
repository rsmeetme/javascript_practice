
// fibonacci series

//0 1 1 2 3 5 8
n2 = 1
f = 1

// mathod 1

function fibonacci(n){
    let fibo=0;
    let num1=0;
    let num2=1;
    for (let i = 0; i < n; i++) {
        console.log(num1);
        fibo = num1 + num2;
        num1 = num2
        num2 = fibo;
    }
}

fibonacci(6);
