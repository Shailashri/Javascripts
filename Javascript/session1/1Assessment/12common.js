function commonarrar(arr1,arr2){
    var set = new Set(arr1);
    var intersection = arr2.filter(item => set.has(item));
    return intersection
}
    var arr1=[1,2,3,4]
    var arr2=[3,4,,5,6]
    console.log(commonarrar(arr1,arr2))
