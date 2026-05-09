function intersectionarray(array1,array2){
    let result = array1.filter(function(num){
     return array2.includes(num);
    });
    return result;


}console.log(intersectionarray([1,2,3,4],[3,4,5,6]));