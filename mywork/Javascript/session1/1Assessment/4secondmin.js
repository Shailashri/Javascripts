function secondmin(arr){
    var minelement =Math.max(...arr)
    
 arr.splice(arr.indexOf(minelement),3)
 return Math.max(...arr)

}
var result = [12,34,56,13,4]
console.log(secondmin(result))