"use strict";

//length can be overrided do not do it
//push add to end and return length
//pop take and remove from end
//unshift add to start and return length
//shift take and remove from start
//slice take part of array, index can be negative, without parameters copies array
//splice from index remove range and return removed as array. Modifies initial array itself !!!!!
//    all other params add the values after that index
//    index can be negative
//reverse changes array itself just reverse but return the same array after reverse
//concat concat array with passed parameters dont modify existing
//join return array as string with separator default is ,
//split return array from string, default returns array with single item
//indexOf, lastIndexOd, includes
//find function(item, index, array)
//filter function(item, index, array) == where in c#
//map function(item, index, array) == Select in c#
//sort changes array itself, sorts based on string values need to pass comparison function
//split string to array
//join array to string
//reduce, reduceRight == Aggregate in c# when no initial start with take 1 elemnt and start from 2

//thisArg
//arr.find(func, thisArg);
//arr.filter(func, thisArg);
//arr.map(func, thisArg);
//when we pass func of some object we also need to pass this object as "this" object to call on.
//but better to just use arrow function and call it directly from object

//https://www.freecodecamp.org/news/lets-clear-up-the-confusion-around-the-slice-splice-split-methods-in-javascript-8ba3266c29ae/
//https://learn.javascript.ru/array-methods


let numArr = [2, 5, 7];
numArr.length = 0;
console.log(numArr);
numArr.length = 100;
console.log(numArr);

numArr = [2, 5, 7];
console.log(Array.isArray(numArr));

let value = numArr.indexOf(5);
console.log(value, numArr);

value = numArr.push(100);
console.log(value, numArr);
value = numArr.pop();
console.log(value, numArr);
value = numArr.unshift(111);
console.log(value, numArr);
value = numArr.shift();
console.log(value, numArr);
value = numArr.slice(0, 2);
console.log(value, numArr);
value = numArr.splice(0, 1, 666, 667);
console.log(value, numArr);
value = numArr.splice(3, 0, 33, 34); //insert only because delete range is 0
console.log(value, numArr);
value = numArr.reverse();
console.log(value, numArr);
value = numArr.concat(1, 2, 5);
console.log(value, numArr);
value = numArr.join();
console.log(value, numArr);
value = numArr.join("");
console.log(value, numArr);
value = numArr.join(" ");
console.log(value, numArr);
value = "hello world".split();
console.log(value);
value = "hello world".split("");
console.log(value);
value = "hello world".split(" ");
console.log(value);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} has a place ${index} in ${array}`);
});

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [1, 2, 15];
arr.sort();
console.log(arr);  // 1, 15, 2
//arr.sort(compareNumeric);
arr.sort((a, b) => a - b); //same as previous
console.log(arr);  // 1, 2, 15

//thisArg
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  { age: 16 },
  { age: 20 },
  { age: 23 },
  { age: 30 }
];

let soldiers = users.filter(army.canJoin, army);
//let soldiers2 = users.filter(army.canJoin); //this is undefined so minAge and maxAge can't be red
//let soldiers 3 = users.filter(user => army.canJoin(user)); //same but we have this implicitly by calling on it

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23

console.log("exercises ================================");
//1. camelize list-style-image => listStyleImage
let camelize = function (str) {
  return str.split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//2. filterRange(arr, a, b) return values between a and b
//dont change array itself
let filterRange = function (arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

let testArr = [5, 3, 8, 1];
let filtered = filterRange(testArr, 1, 4);
console.log(testArr);
console.log(filtered);

//3. filterRangeInPlace(arr, a, b) same as 2 task but change array itself
let filterRangeInPlace = function (arr, a, b) {
  arr.filter((item, index, arr) => {
    if (item < a || item > b) {
      arr.splice(index, 1);
    }
  });
}

testArr = [5, 3, 8, 1];
console.log(testArr);
filterRangeInPlace(testArr, 1, 4);
console.log(testArr);

//4.sort by descending
testArr = [5, 2, 1, -10, 8];
console.log("before sort", testArr);
testArr.sort((a, b) => b - a);
console.log(testArr);

//5. copy sorted string array copySorted(arr)
testArr = ["HTML", "JavaScript", "CSS"];
let copySorted = function (arr) {
  return arr.slice().sort();
}
let copiedArr = copySorted(testArr);

console.log(testArr);
console.log(copiedArr);

//6. create Calculator that has calculate func take string "number operator number"
// should work with + and -
// addMethod(name, func) add this func that extend calculator with new funcs
// add * / and ** (rise in power) operations to it
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function (str) {
    let operands = str.split(" ");
    if (isNaN(+operands[0]) || isNaN(+operands[2])) {
      return NaN;
    }
    if (!this.methods[operands[1]]) {
      return new Error("unknown operation " + operands[1]);
    }

    return this.methods[operands[1]](+operands[0], +operands[2]);
  };

  this.addMethod = function (name, func) {
    if (this.methods[name]) {
      return new Error("Operation already exists");
    }
    this.methods[name] = func;
  };
}

let calc = new Calculator();
console.log(calc.calculate("1 + 2"));
console.log(calc.calculate("1 - 2"));
console.log(calc.calculate("1 * 2"));
console.log(calc.calculate("1 / 2"));
console.log(calc.calculate("1 ** 2"));
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);
console.log(calc.calculate("1 * 2"));
console.log(calc.calculate("1 / 2"));
console.log(calc.calculate("2 ** 3"));

//7. Transform objects to array of its names
let vasya = { name: "Vasya", age: 25 };
let petya = { name: "Petya", age: 30 };
let masha = { name: "Masha", age: 28 };

let testUsers = [vasya, petya, masha];

let names = testUsers.map((item) => item.name);
console.log(names);

//8. same transform but to objects
vasya = { name: "Vasya", surname: "Pupkin", id: 1 };
petya = { name: "Petya", surname: "Ivanov", id: 2 };
masha = { name: "Masha", surname: "Petrova", id: 3 };

testUsers = [vasya, petya, masha];
let usersMapped = testUsers.map((item, index) => ({
  fullName: item.name + " " + item.surname,
  id: index
}));
console.log(usersMapped);

//9. sort users by age
let vasya1 = { name: "Vasya", age: 25 };
let petya1 = { name: "Petya", age: 30 };
let masha1 = { name: "Masha", age: 28 };

let testUsers2 = [vasya1, petya1, masha1];
console.log("before sort", testUsers2);  //it is also sorted somehow ...
let sortByAge = function (arr) {
  arr.sort((a, b) => a.age - b.age);
};

testUsers2.sort((a, b) => a.age - b.age);
//sortByAge(testUsers2);
console.log(testUsers2);

//10. shuffle array in random order with equal probability shuffle(array)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = array[i];
    array[i] = array[j];
    array[j] = t;
  }
}
let someArray = [1, 2, 3];
console.log(someArray);
shuffle(someArray);
console.log(someArray);

//11. get average of years getAverageAge(users)
let vasya3 = { name: "Vasya", age: 25 };
let petya3 = { name: "Petya", age: 30 };
let masha3 = { name: "Masha", age: 29 };

let testUsers3 = [vasya3, petya3, masha3];

let getAverageAge = function (users) {
  return users.reduce((sum, item) => sum + item.age, 0) / users.length;
}

console.log(getAverageAge(testUsers3));

//12. leave only unique elemnts in array (not delete entirely rather make it single)
let unique = function (arr) {
  let resArr = [];
  if (arr.length > 0) {
    arr.forEach((item) => {
      if (!resArr.includes(item)) {
        resArr.push(item);
      }
    });
  }

  return resArr;
};

let testArray = ["chrishna", "chrishna", "hare", "hare", "hare", "hare", "chrishna", "chrishna", ":-0"];

console.log(testArray);
console.log(unique(testArray));