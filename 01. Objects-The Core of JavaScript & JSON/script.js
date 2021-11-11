// Javascript Object
// This variable are collecting information of an user
// These all areb related variable
// In this perspective we can use object
let name = 'John';
let age = 47;
let hobby = 'Coding';

// Object
let user = {
  name: 'John',
  age: 47,
  hobby: 'Coding',
  isMarried: true
};

console.log(user);

// Accecc property of an object
// Use of DOT
console.log(user.name);
console.log(user.age);
console.log(user.hobby);

// Use of [] bracket
console.log(user['name']);
console.log(user['age']);
console.log(user['hobby']);

// Object Manipulation
// Adding, Modifying, Deleting Properties(with Dynamic property access)

// Add property in object
user.email = 'john@gmail.com';
user['phone'] = '01704346050';

// UPDATE
user.isMarried = false;
user.age = user.age + 3;

// DELETE
//delete user['age'];
console.log(user);

//Objects Method and This Keywords
const user2 = {
  name: 'John',
  age: '50',
  isMarried: true,
  friends: ['Marry', 'Smith'],
  selectedColor: null,
  calculateAge: function () {
    console.log(this);
    console.log(`I am ${this.age} years old`);
  }
};

user2.calculateAge();