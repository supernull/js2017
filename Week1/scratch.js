// var abc;
//
// if("") {
// console.log("truthy");
// }
//
// //Notes
//
// //!"" Not operator
// //!!"" Not operator + absolute type
// //&& and + absolute type
//
// //Always use strict equality operator (=== / !==)
//
// //Logical short circuiting:
// //"test" && "hello"
// //false && "hello"
// //0 && "hello"
//

// var temp = 90;
// var precip = 'raining';
// var indoors = true;
//
// if (temp >= 80 && precip === false) {
//   console.log("Time to swim");
// }

//For syntax
// for(var i=2;i<=10;i-=0.5) {
//   console.log(i)
// }

// for(i=99;i>=0;i--) {
//   console.log(i + " bottles of beer on the wall!");
//     if (i===0) {
//       console.log("We need more beer!"); }
// }
//
// While syntax
// while([conditional]) { function }
//
//switch syntax
var animal = "lion";
switch (animal) {
  case "lion": //Demonstrates 'fall through'
  case "bear":
    console.log("Run");
    break;
  case "cat":
    console.log("Aww");
  default:
    console.log(animal);
}



//Homework: Fizzbuzz to 1000
Multiples of 3 = Fizz
Multiples of 5 = buzz

If both = fizbuzz
