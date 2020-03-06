//Data types
//value types
//Number, Boolean, String, Null, Undefined, BigInt, Symbol
console.log(2019, 1.5);
console.log(2019 * 'asd'); //NaN
console.log(1 / 0); //Infinity

console.log('Hello', "Hello", `Hello`);

console.log(true, false);

console.log(null);

console.log(undefined);  //empty variable

console.log(Symbol());

//reference types
//Object as part of it Array, Function, Date
console.log({ name: 'Me', age: 30 });
console.log([1, 2, 3, 4]);

console.log(typeof null); //"object" All known mistake of language
console.log(typeof function(){});//"function" still object type