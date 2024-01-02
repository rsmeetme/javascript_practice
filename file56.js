// Generator function and yield keyword


// eg:1
function* generator(i) {
    yield i;
    yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);


// this function is iterator function which is not stored in memory, where array is stored in memory, 
// It is used when we have huge element in array
// and we get value from value property


// eg:2

function* count() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const g=count();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

