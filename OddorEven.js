// function OddorEven(){

//     for(let i=0;i<=20;i++){
//         if (i%2===0){
//             console.log(i,"return even number")
//                     }
//     else{
// console.log(i,"return odd number")
//     }        
//             }}
//             OddorEven();


function isOddOrEven(inputnumber){
   // let number=inputnumber;
    if(inputnumber%2===0){
    return "Even";
    console.log("Return the Even number");
    }
    else if(inputnumber%2==1){
    return "Odd";
    console.log("Return the Odd number");
    }
}
console.log(isOddOrEven(15));

// function isOddOrEven(inputnumber){
//     let number=205;
//     if(number%2===0){
//         return "Even";
//     }
//     else if(number%2===1){
//         return "Odd"
//     }
//      console.log(isOddOrEven(number));
// }