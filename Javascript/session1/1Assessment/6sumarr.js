function sumArray(arr){
    var sum=0;
    for (i=0; i<Array.length; i++){
        sum+=arr[i]
    }
    return sum;
}
var Array=[12,3,4,5,6,]
console.log(sumArray(Array))