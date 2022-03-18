//// primitive types///
// number, boolean, string, undefined, null, //Symbol, BigInt
//Object, Array

// const { type } = require("os");

// console.log(typeof [1,9]);  // object
// let str = new String("asd");
// console.log(typeof str); /// object

// let a = function foo() {};
// console.log(typeof a);  // function

// console.log(typeof null); // object
// console.log(typeof undefined);  // undefined

//////////////////////////////////////
// let obj = {
//   name: "asdf",
// };

// function foo(obj) {
//   obj = { name: "cahnged" };
//   console.log(obj); => changed
// }

// foo(obj);
// console.log(obj);  // asdf
/////////////////////////////////////

///if you dont use strict mode; without using var, let, const the variable acts like var declatration
//////////////////
// function foo() {
//   var a = 0;
//   if (true) {
//     a = 6;
//     let b = 0;
//   }
//   console.log(a); // 6
// }

// foo();
///////////////////
////Immediately invoked function
// function foo() {
//   if (true) {
//     (function () {
//       var a = 6;
//       console.log(a);
//     })();
//   }
// }
// foo();
/////////
////////
// a = 5;
// console.log(a); // 5 // hoisting, no strict mode;
////////
/////
// class Person {
//   constructor() {}
// }

// function Person(){} <===> class Person{}
// console.log(typeof Person); // function
/////

////////CONTS///
//const is a new keyword in ES6, immutable.
///////
/////E6
// const contacts = {
//   name: "Muto",
//   age: 12,
//   role: "asd",
// };

// let { name: newName, age, role } = contacts;
// console.log(newName); //Muto
////
//////Promise//ES6
// const url = "https://jsonplaceholder.typicode.com/posts";
// const getData = (url) => {
//   return fetch(url);
// };

// getData(url)
//   .then((data) => data.json())
//   .then((result) => console.log(result));
////////
// ##### Your JavaScript code runs single threaded. There is just one thing happening at a time.
//This is a limitation that’s actually very helpful, as it simplifies a lot how you program without worrying about concurrency issues.
////////
//////
///////What is coercion in JavaScript
//Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.
// const value1 = "5";
// const value2 = 9;
// let sum = value1 + value2;

// console.log( sum); // 59 // string
/////////////////////
///
////Null / Undefined in JavaScript
//undefined means a variable has been declared but has not yet been assigned a value
//null is an assignment value. It can be assigned to a variable as a representation of no value
////
///What is a Polyfill///
///A polyfill is a browser fallback, made in JavaScript, that allows functionality you expect to work in modern browsers to work in older browsers, e.g., to support canvas (an HTML5 feature) in older browsers.

// It's sort of an HTML5 technique, since it is used in conjunction with HTML5, but it's not part of HTML5, and you can have polyfills without having HTML5 (for example, to support CSS3 techniques you want).///
///////Explain event bubbling and how one may prevent it.
//////When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
///
/////Undefined vs not defined
///
// undefined => It works like when we declared a variable in the code but did not assign the value before printing the variable value
// not defined => It works like when we did not declare the variable and try to call that variable.
///

/////////What is currrying in js///////
///////
// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(add(3)(4)); //7
//////
