"use strict";

const user = {
  firstName: 'Vlad',
  age: 20,
  isAdmin: true,
  email: 'test@test.com',
  'user-address': {  // - cant be in name, use '' for specific symbols
    city: 'Minsk'
  },
  skills: ['html', 'css', 'js']
};

console.log(user);

//read
let value;
let prop = 'skills';
value = user.firstName;
console.log(value);

value = user['user-address']; //[''] should be used for fields defined with ''
console.log(value);

value = user['user-address'].city;
console.log(value);

value = user[prop]; //same as [''] just called with variable
console.log(value);

//write

user.firstName = 'Vladi';

value = user.firstName;
console.log(value);

user.info = 'Some info'; //it will add value to user object
value = user.info;
console.log(value);

user['user-address'].country = 'Belarus';
console.log(user);

console.log(user.plan); //undefined
//user.plan.basic = 'basic'; //error cannot set property to undefined

user.plan = {};
user.plan.basic = 'basic'; //valid because no undefined anymore
console.log(user);

//tests
console.log('test this in object ========================')
// object is not class, visibility is entire file
let myName = 'Vladi';
let person1 = {
  myName: 'Chris',
  greeting: function(){
    console.log('Hi! I\'m ' + myName + '.'); //it sees all the values above
    console.log('Hi! I\'m ' + this.myName + '.'); //now it uses object property
  }
};
person1.greeting();

console.log('exercises ==============================');

