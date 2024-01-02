const shape = {
    redius: 10,
    diameter: function () {
        return this.redius * 2;
    },
    perimeter: () => 2 * Math.PI * this.redius
}

console.log(shape.diameter())
console.log(shape.perimeter())