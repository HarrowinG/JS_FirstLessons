"use strict";

//function declaration hoisted
//function expression not hoisted, can be called only after declaration
//self executed functions (function() {})(); or (function() {}()); used to encapsulate variables
//default function result is undefined
//root scope is named as Window scope or global scope
//variables search: inside function -> parameters -> global
//Dont modify global variables !!!!
//arguments will show all parameters passed to function even if func doesn't have parameters

sayHello();
//function declaration hoisted
function sayHello() {
  console.log("hello world");
}

sayHello();

function sayHello2(firstName, lastName) {
  console.log(firstName, lastName);
}

let res1 = sayHello2("Vlad", "Weiss"); //undefined
console.log(res1);

function sayHello3(firstName = "DefaultName", lastName = "DefaultSecondName") {
  console.log(firstName, lastName);
}

sayHello3("Vladi");

//function expression
//square(2); //error cannot access before initialization
const square = function(x) {
  return x * x;
};
square(2);

//self-executed function
(function(msg) {
  console.log(msg);
})("first self-executed");

(function(msg) {
  console.log(msg);
})("second self-executed");

//arguments
function argFunc() {
  console.log(arguments);
}
argFunc(1, 2, 3);
argFunc("asd", "yuio");

console.log("excersises ===============");
//1. multiply any count of numbers
function multiply() {
  if (!arguments.length) {
    return 0;
  }

  let mult = 1;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number" && !isNaN(arguments[i])) {
      mult *= arguments[i];
    }
  }

  return mult;
}

console.log(multiply(2, 4, 5, 6));
console.log(multiply());

//2. reversed string of anything passed in
function reverseString(str) {
  let stringRepresentationOfStr = typeof str === "string" ? str : String(str);
  let reversedString = "";
  for (let i = stringRepresentationOfStr.length - 1; i >= 0; i--) {
    reversedString += stringRepresentationOfStr[i];
  }

  return reversedString;
}

console.log(reverseString("test"));
console.log(reverseString(""));
console.log(reverseString(null));
console.log(reverseString(undefined));
console.log(reverseString());

//3. anything passed in split by space and converted to unicode representation
function getCodeStringFromText(str) {
  let stringRepresentationOfStr = typeof str === "string" ? str : String(str);
  let resultStr = "";
  for (let i = 0; i < stringRepresentationOfStr.length; i++) {
    resultStr += stringRepresentationOfStr.charCodeAt(i) + " ";
  }

  return resultStr.trim();
}

console.log(getCodeStringFromText("hello"));

//4. guess number
//take number from 0 to 10 if not in range throw if not a number throw
//generate random number and check if it match with passed parameter
function guessTheNumber(num) {
  num = typeof num === "string" ? parseInt(num, 10) : num;
  if (typeof num !== "number") {
    return new Error("Please provide a valid number");
  } else if (isNaN(num) || num < 0 || num > 10) {
    return new Error("Please provide number in range 0 - 10");
  }

  let rand = Math.floor(Math.random() * 10 + 1);
  if (rand === num) {
    return "You win!";
  }

  return `You are lose, your number is ${num}, the random number is ${rand}`;
}

console.log(guessTheNumber(5));
