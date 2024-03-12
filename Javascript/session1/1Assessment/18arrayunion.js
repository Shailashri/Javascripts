function unionarray(arr1,arr2){
    var set1 = new Set(arr1);
    var set2 = new Set(arr2);
    var result=[...set1, ...set2];
    return [...new Set(result)];
}
var unionoutput=unionarray([9,2,3],[2,3,5,6])
console.log(unionoutput);

// var result = [...set1,...set2] set1=1,2,3 and set2=4,6,7,8 now result holds array value of set1 and set2
// return (new Set(...result));¨
// out of the function 
// pass the values to the parameters arr1=1,2,3 and arr2=4,6,7 
// var result = unionarray([1,2,3,4],[7,9,0,10,12,3,2])
// console.log(result);