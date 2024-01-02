// Implement a deep clone function in JavaScript that creates 
//a copy of a nested object or array without any reference to the original. 

function deepCopy(obj){
    return JSON.parse(JSON.stringify(obj));
}

console.log(deepCopy({name:'Rajender', age:18, post:'Developer'}));