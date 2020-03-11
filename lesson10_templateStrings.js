"use strict";

const firstName = 'Vlad';
const lastName = 'Vasiliev';
const age = 30;

let str;

str ='Hello my name is ' + firstName + ' ' + lastName;

str = '<ul>' + 
      '<li>First name: ' + firstName + '</li>' +
      '<li>Last name: ' + lastName + '</li>' +
      '<li>Age: ' + age + '</li>' +
      '</ul>';

console.log(str);

document.body.innerHTML = str;

//ES6
str = `
  <ul>
    <li>First Name: ${firstName}</li>
    <li>Last Name: ${lastName}</li>
    <li>Age: ${age}</li>
    <li>Math.random: ${Math.random()}</li>
    <li>5 + 5: ${5 + 5}</li>
  </ul>
`;

document.body.innerHTML = str;