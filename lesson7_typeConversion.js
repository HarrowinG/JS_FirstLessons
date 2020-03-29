"use strict"

//https://medium.com/@sergeybulavyk/%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2-%D0%B2-javascript-35a15ddfc333
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical_operators
//=== -> strict equality no implicit casting
//==  -> loose equality implicitcasting
console.log(true == 1);
console.log(true === 1); //no implicit conversion
//valueOf(), toString()
//null equals only to null and undefined
//NaN not equals to anything even itself -> value !== value
//excplicit functions String(), Boolean(), NUmber(), parseInt(), parseFloat()
//anythin in String() or concat(+) just take string of it except object -> [object Object]
//'' -> 0, other string with int -> NaN, false -> 0, null -> 0, true -> 1,
//undefined -> Nan (string + just concat it), array to number -> NaN
//parseInt, parseFloat when starts with number or space it will cut NaN part of it otherwise NaN
//'someString' -> true, '' -> false, anyNumber -> true, 0 -> false
//undefined -> false, null -> false
//any object or array even empty {} -> true, [] -> true
//Symbol must be casted explicitly

let value;
//To String ====================
//Number to String
value = String(10);
value = String(10 + 40);
value = (40).toString();

console.log(value);
console.log(typeof value);

//Boolean to String
value = String(false);
console.log(value);
console.log(typeof value);

//Array to String
value = String([1,2,3]);
console.log(value);
console.log(typeof value);

//Object to String
value = String({ name: 'Vlad', age: 25});  //[object Object]
console.log(value);
console.log(typeof value);

value = 30 + '' + 30;  // + concatanation always to string
console.log(value);
console.log(typeof value);

//To Number ===========================
value = 30 - '';  //'' converted to number 0
console.log(value);
console.log(typeof value);

value = 30 - 'asf'; //NaN but still number
console.log(value);
console.log(typeof value);

value = 30 - '5';// 25 number
console.log(value);
console.log(typeof value);

value = '30' - 5;// still 25 number
console.log(value);
console.log(typeof value);

value = true + 10; //11
console.log(value);
console.log(typeof value);

value = Number('23');
console.log(value);
console.log(typeof value);

value = Number(true);
console.log(value);
console.log(typeof value);

value = Number(false);
console.log(value);
console.log(typeof value);

value = Number(null);
console.log(value);
console.log(typeof value);

value = Number('false'); //NaN but still number
console.log(value);
console.log(typeof value);

value = Number([1,2,3]); //NaN but still number
console.log(value);
console.log(typeof value);

//Other functions
value = parseInt('200.212dghlskdf'); //when starts with number or space it will cut NaN part of it -> 200
console.log(value);
console.log(typeof value);

value = parseInt('asd200asd'); //NaN not start with number
console.log(value);
console.log(typeof value);

value = parseFloat('200.212adfg');
console.log(value);
console.log(typeof value);

//To Boolean ==============================
value = Boolean('aasdf'); //non empty string true
console.log(value);
console.log(typeof value);

value = Boolean(''); //empty false
console.log(value);
console.log(typeof value);

value = Boolean(-100); //any non 0 is true
console.log(value);
console.log(typeof value);

value = Boolean(0) //false
console.log(value);
console.log(typeof value);

value = Boolean(undefined); //false
console.log(value);
console.log(typeof value);

value = Boolean(null); //false
console.log(value);
console.log(typeof value);

value = Boolean({}); //object even if empty true
console.log(value);
console.log(typeof value);

value = Boolean([]); //array even if empty true;
console.log(value);
console.log(typeof value);


console.log('exercises===============');
//true + false = 1
console.log(true + false);
//12 / "6" = 2
console.log(12 / "6");
//"number" + 15 + 3 = "number153"
console.log("number" + 15 + 3);
//15 + 3 + "number" = "18number"
console.log(15 + 3 + "number");
//[1] > null = true
console.log([1] > null);
//"foo" + + "bar" = "fooNaN"
console.log("foo" + + "bar");
//'true' == true = false
console.log('true' == true);
//false == 'false' = false
console.log(false == 'false');
//null == '' = false
console.log(null == '');
//!!"false" == !!"true" = true
console.log(!!"false" == !!"true");
//['x'] == 'x' = true
console.log(['x'] == 'x');
//[] + null + 1 = "null1"
console.log([] + null + 1);
//[1,2,3] == [1,2,3] = false
console.log([1,2,3] == [1,2,3]);
//{} + [] + {} + [1] = "[object Object][object Object]1"
console.log({} + [] + {} + [1]);
//! + [] + [] + ![] = "truefalse"
console.log(! + [] + [] + ![]);
//new Date(0) - 0 = 0
console.log(new Date(0) - 0);
//new Date(0) + 0 = "dateString0"
console.log(new Date(0) + 0);