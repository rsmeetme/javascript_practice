const bird = {
    size:'small'
}

const mouse = {
    name:'Mickey',
    small:'true'
}


console.log(mouse.bird.size) //invalid
console.log(mouse[bird.size]) // valid
console.log(mouse[bird[size]]) // valid
