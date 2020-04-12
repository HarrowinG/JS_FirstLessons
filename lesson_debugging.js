"use strict"
//https://learn.javascript.ru/debugging-chrome
function hello(name) {
  let phrase = `Hello, ${name}`;
  //debugger;
  say(phrase);
}

function say(phrase) {
  alert(`** ${phrase} **`);
}