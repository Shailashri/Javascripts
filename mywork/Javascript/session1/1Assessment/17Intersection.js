var firstarray = [3,5,5.6,8,19,45,78];
var secondarray = [5,6,99,5.6,3,11,12,13];
var newarray = firstarray.filter(
    (vanitha) => secondarray.includes(vanitha));
   
console.log(newarray);