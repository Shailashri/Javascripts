function unioarray(arr1,arr2){
return Array.from(new Set([...arr1, ...arr2]))
}
    var array1=[1,2,3,4]
    var array2=[3,4,5,6]
    console.log(unioarray(array1,array2))
