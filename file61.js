function Car() {
  this.make = 'Lamborghini';
  return { make: 'Maserati' };
}

const myCar =  Car();
console.log(myCar.make);

// output:Maserati