"use strict";

//length can be overrided do not do it
//push add to end and return length
//pop take and remove from end
//unshift add to start and return length
//shift take and remove from start
//slice take part of array, index can be negative, without parameters copies array
//splice from index remove range and return removed as array. Modifies initial array !!!!!
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
