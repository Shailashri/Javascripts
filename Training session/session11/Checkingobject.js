/*var myobject = {
    Name: "shaila",
    ID:324,
    Locations:"sweden"


}
function checkobj(checkprop) {
    if(myobject.hasownProperty(checkprop)){
        return myobject[checkprop];
    }
else{
        return "change me!"; }
}*/
var myObject = {
    Name: "Humira",
    ID: 543,
    Locations:"Sweden"


}
function checkobj(checkprop){

    if(myObject.hasOwnProperty(checkprop)){
        return myObject[checkprop];
    }
    
    else{
    return "Change Me!";}
}

console.log(checkobj("ID"))