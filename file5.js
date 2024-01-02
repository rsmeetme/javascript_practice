let a = {key:'value'};
let b = {...a, newkey:'newvalue'};

// console.log(JSON.stringify(b));

console.log(Object.keys(b).length); // 2
