// function lastword(){
//     let sentence = "Hello World";
//     let word  = sentence.split(" ");
//     let lastword = word[word.length -1];
//     let length =  lastword.length;
//     console.log("lastword",lastword);
//     console.log("length of lastword",length);


// }lastword();

// function trimstring(){
// let name = "fly me   to   the moon ";
// let string = name.trim();
// let word = string.split(" ");
// let lastword = word[word.length -1];
// let length = lastword.length;
// return(length);
// }console.log("length of the lastword",trimstring());

// function anagram(){
//     let name1 = "listen";
//     let name2 = "silent";
//     let string1 = name1.replace(/\s /g ,"").toLowerCase();
//     let string2 = name2.replace(/\s /g,"").toLowerCase();
//     let sorted1 = string1.split("").sort().join("");
//     let sorted2 = string2.split("").sort().join("");
//     return sorted1===sorted2;
// }
// console.log("Its a anagram",anagram());

function anagramfalsestatement(){
    let name1 = "HELLO";
    let name2= "WORLD";
    let string1 = name1.replace(/\s /g,"").toLowerCase();
    let string2 = name2.replace(/\s /g,"").toLowerCase();
    let sorted1 = string1.split("").sort().join("");
    let sorted2 = string2.split("").sort().join("");
    return sorted1===sorted2;
    
}console.log("Its not a anagram",anagramfalsestatement());
