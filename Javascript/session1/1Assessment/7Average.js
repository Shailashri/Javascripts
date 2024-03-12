function averageArray(shaila){
    var sum=0;
    for(i=0; i<shaila.length; i++){
        sum+=shaila[i];
    }
    return sum/shaila.length;
}
var Avearray = [12,2,5,8,3]
console.log(averageArray(Avearray))