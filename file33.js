function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person('Rajender', 'Sharma');

Person.getFullName = function(){  // this incorrect way
    return this.firstName + ' ' + this.lastName;
}

// Person.prototype.getFullName = function(){  // this is correct way
//     return this.firstName + ' ' + this.lastName;
// }

console.log(member.getFullName());




// --------------------------------------
// In JavaScript, functions are objects, and therefore, the method getFullName gets added to the constructor function object itself. For that reason, we can call Person.getFullName(), but member.getFullName throws a TypeError.

// If you want a method to be available to all object instances, you have to add it to the prototype property:

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

