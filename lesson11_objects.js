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
console.log('user plan')
user.plan.basic = 'basic'; //valid because no undefined anymore
console.log('====', user);

console.log(user.plan);
console.log(user);

//delete user.plan; //now deleted undefined
console.log(user.plan);
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

//computed properties
console.log("some advanced tactiks")
let fruit = "apple";
let obj = {
  [fruit] : 5
}

console.log(obj.apple); //5

//property from variable
let name = "Vlad";
let age = 30;
let me = {
  name, //Vlad
  age   //30
}

console.log(me);

console.log("name" in me);  //true
console.log("gsdjgsdk" in me);  //false

for(let prop in me){
  console.log(prop);
}

//integer props sorts by ascending
//otherwise in declaration order

//Object copied by reference
let someUser = {
  name: "John"
}

let admin = someUser;
admin.name = "Pete";
console.log(someUser.name);

//how to copy object
//1 recreate in for in operator
//2 Object.assign(dest, [src1, src2, src3...])
//copy all props from src1..srcN to dest
let user2 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user2, permissions1, permissions2);
console.log(user2); //contains all

//if field exists it will be overwritten
let user3 = { name: "John" };

Object.assign(user3, { name: "Pete", isAdmin: true });
console.log(user3);

//simple clonning
let user4 = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user4);
console.log(clone);

//objects remains the same
let user5 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
let clone2 = Object.assign({}, user5);

console.log(user5.sizes === clone2.sizes); // true
user5.sizes.width++;
console.log(clone2.sizes.width);
//need to check if property is object and copy it too
//https://lodash.com/docs#cloneDeep

console.log('exercises ==============================');
//1 create user, add name John, add surname Smith, change name to Pete, delete name
let user6 = {};
user6.name = "John";
user6.surname = "smith";
user6.name = "Pete";
delete user6.name;

//2 sum of salaries
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key]; //key is just a prop name, so need to take value
}

console.log(sum);
//3 multiply all numeric props by 2
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

for(let prop in menu){
  if(typeof(menu[prop]) == "number"){
    menu[prop] *= 2;
  }
}

console.log(menu);
