/*var arr=[3];
console.log(arr.length);*/

function plaindrome(arr){
  for(var i=0,j=arr.length - 1; i < j; i++, j--)
  {
  
if(arr[i] !== arr[j])
{
return false
}
}

return true
}
var output=plaindrome([1,2,3,2,1]);
console.log(output)
