"use strict"

//symbols always different even with same description
//Symbols not implicitly convertable to strings, need to use toString() or description property.
//When you add your info to object that used elsewhere add it through Symbol other code will not see it and even if create the same Symbol there'll be no collision, but strings will override each other
//when add Symbol to literal object need to use []
//for in, Object.keys ignore symbols 
//but Object.assign will copy all properties. Object.getOwnPropertySymbols(obj) Reflect.ownKeys(obj)
//Global symbols saved in global registry, we can share them. Not for local symbols
//  Symbol.for - get or create and get symbol from registry
//  Symbol.keyFor - takes symbol and returns his name

let id = Symbol(); //create unique symbol
id = Symbol("id"); //symbol with description

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false
console.log(id);
//alert(id); //Error Cannot convert a Symbol value to a string
//alert(id.toString());
//alert(id.description);

let user = {
  name: "Vasya"
};

id = Symbol("id");
user[id] = 1;
console.log(user[id]);

id = Symbol("id");
user = {
  name: "Vasya",
  [id]: 123 // simple "id: 123" will not work
};

let id3 = Symbol.for("id3");
let idAgain = Symbol.for("id3");
console.log(id3 === idAgain); // true

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol)); // name,global
console.log(Symbol.keyFor(localSymbol)); // undefined not global

console.log(localSymbol.description); // name