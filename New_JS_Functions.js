//task1
 
// function userprofile(name){
//  console.log("Hello" + name);

// }userprofile("Renuka");

//task2

// let double = (num) =>{
//     let a =  num*num;
//     return a;
// }
// console.log("arrow function",double(4));

//task3

// setTimeout(function() {
//     console.log(`"This message is delayed by 2 seconds"` );
// }, 2000);

//task4
function getUserData(callback){
    setTimeout(function() {

        callback();

    }, 3000);

}
getUserData (function(){

    console.log("callback function")
});