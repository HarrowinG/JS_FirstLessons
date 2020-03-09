"use strict";

//js holds precise values only when .5 slices because it base of 2

//Numbers
const num1 = 10;
const num2 = 20;
let value;

value = 0.6 + 0.7; //1.29999999999999998
console.log(value);
value = value.toFixed(2); //string
value = +value;
//or
//value = parseFloat(value);
console.log(value);

//Math ==========
console.log('Math========');

value = Math;
console.log(value);

value = Math.round(2.4);
console.log(value);

value = Math.ceil(2.1); //to greater
console.log(value);

value = Math.floor(2.9); //to lower
console.log(value);

value = Math.min(2, 4, 6);
console.log(value);

value = Math.floor(Math.random() * 10 + 1);
console.log(value);

const arr = ['black', 'red', 'yellow', 'pink', 'white', 'blue', 'green'];
value = Math.floor(Math.random() * arr.length);
console.log(value, arr[value]);

//===========================
console.log('other values ==================');
value = 1e9;
console.log(value);
value = 1e-6;
console.log(value);

//all 255
value = 0xff;
console.log(value);
value = 0b11111111;
console.log(value);
value = 0o377;
console.log(value);

console.log(value.toString(16));
console.log(value.toString(8));
console.log(value.toString(2));
console.log(value.toString(3));

console.log('tricks=================')
//.. on numbers first for decimal part second for method
console.log(123456..toString(36)); //max base

console.log(Object.is(NaN,NaN)); //true
console.log(Object.is(0,-0)); //false

let a = new Number('123');
console.log(typeof(a));  //object  !!!!!!!!!!!
console.log(a === 123); //false
let b = Number('123');
console.log(typeof(b)); //number
let c = 123;
console.log(typeof(c)); //number
console.log(a === c); //false

a instanceof Number; // true
b instanceof Number; // false

console.log('exercises===============');
//round 6.35 to 1 decimal place => 6.4
console.log(6.35.toFixed(1)); //claims 6.3 of storage error
console.log(6.35.toFixed(20));
//no error when you under 0.5 slices
a = Math.round(6.35 * 10) / 10; // 6.35 -> 63.5 -> 64(rounded) -> 6.4
console.log(a.toFixed(1));

//write random from min till max(excluded)
let min = 2;
let max = 5;
a = min + Math.random() * (max - min);
console.log(a);

//write random from min till max(inclusive) integers only
min = 2;
max = 5;
a = Math.floor(min + Math.random() * (max + 1 - min));
console.log(a);