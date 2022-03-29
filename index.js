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

///////=====HTML///////////////
//
// The <meta> tag defines metadata about an HTML document. Metadata is data (information) about data.

// <meta> tags always go inside the <head> element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.

// Metadata will not be displayed on the page, but is machine parsable.

// Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.

// There is a method to let web designers take control over the viewport (the user's visible area of a web page), through the <meta> tag (See "Setting The Viewport" example below).
/////
//
////What is iframe and how it works
//An iFrame or Inline Frame is a component of an HTML element that allows you to embed documents, videos, and interactive media within a page. By doing this, you can display a secondary webpage on your main page.
//
{
  /* <iframe src="https://www.youtube.com/embed/dXBohfjc4WA" width="680" height="480" allowfullscreen></iframe> */
}
//
////////
///////////SEO///
// SEO means Search Engine Optimization and is the process used to optimize a website's technical configuration, content relevance and link popularity so its pages can become easily findable, more relevant and popular towards user search queries, and as a consequence, search engines rank them better.
////
//////What is Character Encoding
///ASCII was the first character encoding standard. ASCII defined 128 different characters that could be used on the internet: numbers (0-9), English letters (A-Z), and some special characters like ! $ + - ( ) @ < > .
////
///
////////What’s new in HTML5
//Intro of audio and video
//Vector Graphics
///Header and Footer
//Figure and Figcaption:
///Nav tag
///Progress tag
//Placeholder Attribute:
//Email attribute
//Storage =>    In the case of HTML, we can use the browser as the temporary storage whereas, in the case of HTML5, application cache, web SQL database, and web storage is used.
//////Canvas vs SVG
//=== Canvas is a JavaScript drawing API

//////////
///////What does a DOCTYPE do
//The HTML document type declaration, also known as DOCTYPE, is the first line of code required in every HTML or XHTML document. The DOCTYPE declaration is an instruction to the web browser about what version of HTML the page is written in. This ensures that the web page is parsed the same way by different web browsers.
//////////////////
//What are `defer` and `async` attributes on a <script> tag
///
// Without async or defer, browser will run your script immediately, before rendering the elements that's below your script tag.

// With async (asynchronous), browser will continue to load the HTML page and render it while the browser load and execute the script at the same time.

// With defer, browser will run your script when the page finished parsing. (not necessary finishing downloading all image files. This is good.)
///////////////
/////////////////CSS//////
////How would you approach fixing browser-specific styling issues
//
// After identifying the issue and the offending browser, use a separate style sheet that only loads when that specific browser is being used. This technique requires server-side rendering though.
// Use libraries like Bootstrap that already handles these styling issues for you.
// Use autoprefixer to automatically add vendor prefixes to your code.
// Use Reset CSS or Normalize.css.

///////////////////////////////

// //////////Give an example of an @media property other than screen
// The @media rule is used in media queries to apply different styles for different media types/devices.

// Media queries can be used to check many things, such as:

// width and height of the viewport
// width and height of the device
// orientation (is the tablet/phone in landscape or portrait mode?)
// resolution
// Using media queries are a popular technique for delivering a tailored style sheet (responsive web design) to desktops, laptops, tablets, and mobile phones.

////////////
// //////What's the difference between inline and inline-block?
// .inline-element {
//   display: inline;
//   width: 1000px; /* ❌ won't have any effect */
//   height: 1000px; /* ❌ won't have any effect */
// }

// .inline-block-element {
//   display: inline-block;
//   width: 1000px; /* ✅  yes, it will work */
//   height: 1000px; /* ✅  yes, it will work */
// }

///////////////////////////////

/////////////////  Describe pseudo-elements and discuss what they are used for.

// A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, ::first-line can be used to change the font of the first line of a paragraph.

// /* The first line of every <p> element. */
// p::first-line {
//   color: blue;
//   text-transform: uppercase;
// }
//////////////////////////////////////////////////////////////
// v////////////////////What's the difference between a relative, fixed, absolute and statically positioned element?
////Static =>position: static is the default value that an element will have. This means if you don't declare position for an element in CSS, it will automatically be set to static.It’s important to note that having a static position is the same as not setting the position property at all. (This will come into play a bit later on with absolute positioning.)
// Relative =>position: relative is similar to static in that relatively positioned elements will follow the normal flow of the webpage. But the main difference is that using relative will now unlock the other CSS layout properties.Think about it this way: you are setting the element to be positioned relative to other elements on the page. Let’s see what this looks like, and adjust our CSS like this:
// .first {
//   position: static;
// }
// .another {
//   position: relative;
//   top: 50px;
// }
// All the CSS is exactly the same, except that we changed the second element to use position: relative. Doing this makes that top: 50px work!
// Absolute => position: absolute will cause an element to be taken out of that normal flow of the webpage. Wait, what does that mean?So before, using static or relative positioning, elements would be nicely displayed one below the other, depending on their order in the HTML markup. But with absolute positioning, the element is completely taken out of that entire flow.

//Fixed =>position: fixed will take the element out of the normal flow, and also position it in the same place in the viewport (what's visible on screen). This means that scrolling will not affect its position at all.
//////////////////////////////////////////////////////////////
// ///////////////////// Why is it generally a good idea to position CSS <link>s between <head></head>? Do you know any exceptions?
// CSS files are linked in the head because they get applied regardless of DOM already rendered or not. Hence the webpage looks elegant as soon as the page loads. However just like JS you can link the CSS at the end which would mean that the webpage first loads with just plain HTML and then the CSS is applied to it. This shift is clearly visible to the user and moreover an important thing to remember is that the page would load with bare minimum HTML and if the user has slow Internet connection, the CSS load would take considerable amount of time, which means that the webpage shows just the HTML meanwhile. This might make the user close the website without waiting for it to load fully.
