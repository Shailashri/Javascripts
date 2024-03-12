function secondlargestnum(elements){
var max2 = Math.min(...elements)
elements.splice(elements.indexOf(max2),2)// it removes the max element by using idex value but we are not passing any instruction like how many elements it has to remove
return(Math.min(...elements))// array holds only 12,34,5,98 
}
let inputarray = [12,34,5,100,102,98]
console.log(secondlargestnum(inputarray))
console.log(inputarray)