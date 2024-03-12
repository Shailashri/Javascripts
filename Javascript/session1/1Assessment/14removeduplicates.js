function removeduplicates(arr){
    return[...new Set(arr)]    //by using set() method
}
    var array= [1,5,6,5,1,7,8,5]
    console.log(removeduplicates(array))
