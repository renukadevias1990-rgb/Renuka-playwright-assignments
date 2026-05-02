const { type } = require("node:os");

function positivenegativezeronumber(number){                                                                                                                                                                              
if(number>0){
    return `number is positive,Type:${typeof number}`
}
    else{
if(number<0){
    return`number is negative,Type:${typeof number}`
}
    else{

        return `number is equals to zero,Type:${typeof number}`
    
}}

}console.log(positivenegativezeronumber(20));