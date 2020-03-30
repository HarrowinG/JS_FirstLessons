"use strict"

//> < >= <= == === != !==
//null and undefined on == != not converted to anything !!!!!!!!!!!!!!!!!!!

let value;

console.log(1 == '1');
console.log(1 == true);

//!! can use to cast not bool value to bool
value = null;

console.log(!!value); //false

value = [];

if(value.length){
  console.log('has values');
}
else{
  console.log('empty array');
}

console.log(Array.isArray(value));

let user = {
  name: "Dennis"
}

if(user.name){
  console.log("has value");
}
else {
  console.log("no value");
}

user.name = undefined;
console.log(user.hasOwnProperty('name')); //not checking value only that key exists

let serverNickname = "";
let nickname = serverNickname || "default nickname";
console.log(nickname);

console.log("exercises ===========");

console.log( 5 > 4); //true
console.log("ананас" > "яблоко"); //false
console.log("2" > "12"); //true
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(null == "\n0\n"); //false
console.log(null === +"\n0\n"); //false