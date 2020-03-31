"use strict"

//while, do while, for, for in (get Props Name), for of (ES6) = foreach in c#

//can break or continue nested loops
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Values (${i},${j})`, '');
    if (!input) break outer; //will break outer loop
  }
}

console.log('Done');