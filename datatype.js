const { truncateSync } = require("node:fs");

var firstName= "renuka"
console.log(firstName, typeof firstName);

var companyName ="XYZ"
console.log(companyName, typeof companyName);

var number= 123456789
console.log(number, typeof number);

var boolentype= true
console.log(boolentype, typeof boolentype);
 
var hasPlaywright=
console.log(hasPlaywright,typeof hasPlaywright);

var isAutomation= null
console.log(isAutomation,typeof isAutomation);

// //Redeclaration using "var" keyword is allowed


// var x // Memory Created and labelled the memory space as x


// // Redeclaration 


// var x  // Memory Created again and relabelled the memory space as x



// console.log(x) // undefined



// /* ************ */



// //Reassignment using "var" keyword is allowed


// var x =123 // Memory Created and labelled the memory space as x


// // Redeclaration 


// x=456  // Memory Created again and relabelled the memory space as x



// console.log(x) // 456 // reassignment is allowed using var


/* 
In other pgm language redeclarion is not possible
int x 
int x */



 //Redeclaration using "let" keyword is not allowed


//let y// Memory Created and labelled the memory space as x
 


//let y  // Memory Created again and relabelled the memory space as x


//console.log(y); // Reference error



 //Reassignment using "let" keyword is allowed


// let sal=10000// Memory Created and labelled the memory space as x


// // Reassignment is allowed 


// sal=20000  // Memory Created again and relabelled the memory space as x


// console.log(sal); // Reference error



// //Declaration using "const" keyword 


const z=898// Memory Created and labelled the memory space as x


// Redeclaration using "const" is not allowed


z=6765 // Memory Created again and relabelled the memory space as x


console.log(z); // Reference error because we cannot assigne a new value to a varible like final value like your aadhar number


/* ************************ */



// //Redeclaration and Reassignment  using "const" keyword is not possible like your account number


const accountNumber=89889098// Memory Created and labelled the memory space as "accountNumber"


// Redeclaration using "const" is not allowed and reassignment is also not allowed


accountNumber=6765678678 // Memory Created again and relabelled and reassigned the memory space as "accountNumber"


console.log(accountNumber); // Reference error because we cannot assigne a new value to a varible like final value like your aadhar number
//Note: we cannot leave the varibale declared with const without inialization for sure we have initialize const variable

let