const value = {number:10};
debugger;
const multiply = (x={...value})=>{
    console.log((x.number *=2));
}

multiply();
multiply();
multiply(value);
multiply(value);

// output:20, 20, 20, 40