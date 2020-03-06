//prohibit to use undefined variables
"use strict"; 
//num = 5; //error num is not defined

//variables
//var, (let, const) from ES6
console.log('var ===============');
var name = 'Vlad';
console.log(name);
name = 'Vlad2';
console.log(name);

var age;
console.log(age); //undefined
age = 30;
console.log(age);

//var issues =======================
//can duplicate declaration
var car = 'bmw';
var car = 'audi';
console.log(car);

//hoisting  всплытие
//visible everywhere in function
//all var declaration going up but initialization stay where it was
console.log(car2);  //car2 exists but undefined
var car2 = 'testCar';
console.log(car2);
//translates to
/*
var car2;
console.log(car2);
car2 = 'testCar';
console.log(car2);
*/

//let =====================
console.log('let ================');
//console.log(nickName); //error cannot access before initialization
let nickName = 'dmgame';
//let nickName = 'dm';  //error has already declared
console.log(nickName);

//only block visible vs var visible everywhere in function of hoisting
{
    var a = 'a';
    let b = 'b'
}
console.log(a);
//console.log(b);  //error b is not defined

//const ==================
//same as let, no duplicate definition, no hoisting
console.log('const ==============')
//but it is readonly and should be initialized;
const firstName = 'John';
//firstName = 'Viva'; //error assignment to constant variable
//const secondName; //error missing initializer in const declaration
console.log(firstName);

//const is mutable !!!!!
//cant assign, but can modify inner state
const user = {
    name: 'Denis',
    age: 30
};
//user = 2; //error assignment to constant variable
user.age = 25;
console.log(user); //prints age: 25
