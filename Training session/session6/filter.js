var data = [20, 30, 99, 66, 78, 10, 19, 83, 71];
var filteredData = data.filter(function(element, index){
return element <30; 
});
console.log(filteredData);