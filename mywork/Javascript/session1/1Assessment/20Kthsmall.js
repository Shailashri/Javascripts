function Kthsmallest(arr,k){
arr.sort((a,b) => a-b);
return arr [k-1]
}
var smallest = [2,8,12,5,4]
var k = 3;
console.log(Kthsmallest(smallest,k))