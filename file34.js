function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const lydia = new Person('Lydia', 'Hallie');
  const sarah = Person('Sarah', 'Smith'); // because, object is create with new keyword
  
  console.log(lydia); // {firstName: "Lydia", lastName: "Hallie"} 
  console.log(sarah); // undefined 