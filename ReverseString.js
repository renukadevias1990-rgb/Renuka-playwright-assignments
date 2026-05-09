function reversestring(){
    let string = "silent";
    let rev = "";
        for(let i=string.length-1;i>=0;i--)
    {
        rev = rev + string.charAt(i);
      
    }  return rev;
}console.log("revese a string",reversestring());