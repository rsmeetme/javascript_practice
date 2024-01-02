let a = 3;
let b = new Number(3); // new Number(3), basically it return 3, but type is  'object';
let c = 3;

console.log(a == b); // true
console.log(a === b); // false
console.log(b === c); // false

