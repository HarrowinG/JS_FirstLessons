"use strict"

//function is an object
//first class functions - can be stored in object variable or array, can be passed as args to another function, can be returned from another function;
//high order function - function that get another function as parameter or return it, or both;
//decorator - functiona that take another function and modify it but bot her code;
//when function return another function we can make double call someFunc()();
//function expression - when function is part of smth else
//function declaration just declared function, hoisting starteed to work
//callback function - function as argument
//functional programming - method of programming whne u can pass functiona as parameter or return it.

function question(job) {
  const jobDictionary = {
    developer: "what is JS",
    teacher: "what are you studying"
  };

  return function (name) {
    return `${name}, ${jobDictionary[job]}?`;
  };
}

const question1 = question("developer")("Vlad");
console.log(question1);
const question2 = question("teacher")("Vlad");
console.log(question2);

console.log("exercises ==============");
//1
//first func takes array and callback
//callbacks process each element preced with "New value:"
//1 callback all concat all letters with UpperCase
function firstFunc(arr, fn) {
  let res = "New value: ";
  for (let item of arr) {
    res += fn(item);
  }

  return res.trim();
}

function handler1(el) {
  return el.length > 1 ? el[0].toUpperCase() + el.slice(1) : el[0].toUpperCase();
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
  return (el * 10) + ", ";
}

console.log(firstFunc([10, 20, 30], handler2))

function handler3(el) {
  return el.name + " is " + el.age + ", ";
}

console.log(firstFunc([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], handler3));

function handler4(el) {
  return el.split("").reverse().join("") + ", ";
}

console.log(firstFunc(['abs', '123'], handler4));

//2. create analog of every function
//check that passed array and function are actualy they and return error

function every(arr, fn) {
  if (!arr || !fn || !Array.isArray(arr) || !fn instanceof Function) {
    return new Error("wrong arguments");
  }

  for (let item of arr) {
    if (fn(item) === false) {
      return false;
    }
  }

  return true;
}
function lessThen5(item, index, arr) {
  return item < 5;
}

let arr = [1, 2, 3, 4];
console.log(every(arr, lessThen5));
arr = [1, 2, 3, 4, 5];
console.log(every(arr, lessThen5));