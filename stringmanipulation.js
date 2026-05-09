let name="madam" //5
function reversestring(){
let rev=""
for(let i=name.length-1; i>=0;i--)
{
rev=rev+name.charAt(i)
}
console.log(rev)
}
console.log("It is a palindrome",reversestring());