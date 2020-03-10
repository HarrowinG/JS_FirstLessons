"use strict";

//when created a primitive type it is wrapped
//strings are immutable

const firstName = 'Vlad';
const lastName = 'Vasiliev';
const age = 20;
const str = 'Hello my name is Vlad';

let value;

value = firstName + ' ' + lastName;
console.log(value);
value +=' I am ' + age;
console.log(value);
console.log(value.length);
console.log(value[2]);
console.log(value[value.length - 1]);

console.log(firstName.toUpperCase());
console.log(firstName); //still the same
console.log(firstName.concat(' ', lastName));

value = firstName.indexOf('ad'); //first occurence -1 if not found, can be added start position
value = firstName.lastIndexOf('ad'); //last occurence -1 if not found, can be added start position
console.log(value);

value = str.includes('my');
console.log(value);

//slice (till end index) and substr(by length) most usefull for minus values
//substring minus values = 0, by indexes
//substr not in oficial ecma script
value = str.slice(0, 5);
console.log(value);
value = str.slice(0, 4);
console.log(value);
value = str.slice(5);
console.log(value);
value = str.slice(0, -3); //minus count from end
console.log(value);

value = str.replace('Vlad', 'Vladi');
console.log(value);

console.log("\u{1F60D}");

console.log('utf symbols ==============');
console.log('a' > 'Z'); //true
console.log( 'Österreich' > 'Zealand' ); // true special symbols go after all

//codePointAt fromCodePoint
console.log("z".codePointAt(0)); //122
console.log("Z".codePointAt(0)); //90

console.log(String.fromCodePoint(90)); //Z
console.log('\u005a'); //Z
//locale compare, additional params, language and difference in modified letters
console.log( 'Österreich'.localeCompare('Zealand') ); // -1

//surrogate pairs need 4 bytes
console.log( '𝒳'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X
console.log( '😂'.length ); // 2, FACE WITH TEARS OF JOY
console.log( '𩷶'.length ); // 2, редкий китайский иероглиф

console.log( '𝒳'[0] ); // странные символы…
console.log( '𝒳'[1] ); // …части суррогатной пары

console.log( '𝒳'.charCodeAt(0).toString(16) ); // d835, между 0xd800 и 0xdbff
console.log( '𝒳'.charCodeAt(1).toString(16) ); // dcb3, между 0xdc00 и 0xdfff

//diactritics Например, буква a — это основа для àáâäãåā.
console.log( 'S\u0307' ); // Ṡ
console.log( 'S\u0307\u0323' ); // Ṩ

console.log( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true
console.log( "S\u0307\u0323".normalize().length ); // 1
console.log( "S\u0307\u0323".normalize() == "\u1e68" ); // true


console.log('examples =============');

//first letter to uppercase chack if strin not empty
let st = '';
if(!st) {value = st;}
else {value = st[0].toUpperCase() + st.slice(1);}

console.log(value);

//check if string contains 'viagra' or 'XXX'
//make sure about case sensivity
st = 'asdsd viagra ads';
value = st.toLowerCase().includes('viagra') || st.toLowerCase().includes('XXX');
console.log(value);

//truncate string for number of symbols and last set as ...
st = '123456789123456789123';
if(st.length > 20){
  value = st.slice(0, 19) + "\u2026";
}
else{
  value = st;
}
console.log(value);