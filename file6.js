let n=[1,9,3,2,5];
let h=n.some(x=>{
    return x%2==0
})

console.log(h) 

// output:true  
// it return boolean value only
// the some function returns true, if the first condition matched and exit.  
//it does'nt modify the array