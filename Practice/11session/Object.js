var object=
{
Name:"Shaila",
FullName:"Shailashri Padache",
ID:345,
Location:"India",
}
console.log(object);

//Object
var myobject=
{
    Name:"Mitisha",
    FullName:"Padache",
    ID:123,
    Location:"India",
}
console.log(myobject);

//dot Notation
var myobject=
{
    Name:"shaila",
    LastName:"Padache",
    Id:123,
}
var object=myobject.Id;
console.log(object);

//Bracket Notation
var myobject=
{
    Name:"Mitisha",
    LastName:"Padache",
    Id:223,
}
var object=myobject["LastName"];
console.log(object);

//Update
var myobject=
{
    Name:"Shaila",
    Id:12345,
    Fullname:"Padache",
    Location:"India",
}
myobject.Fullname="Shailashri Padache"
console.log(myobject);

//Add Property
var myobject=
{
    Name:"shaila",
    Id:3421,
    FullName:"Padache",
}
myobject.FullName="Shailashri Padache"
myobject.Location="India",
myobject["LastName"]="Padache Magadum",
console.log(myobject);

// Delete Property
var myobject=
{
    Name:"shaila",
    Location:"India",
    Id:23456,
    Fullname:"Padache",
    LastName:"Magadum",
}
delete myobject.Id;
delete myobject["LastName"]
console.log(myobject);

//Checking object
var myobject=
{
    Name:"shaila",
    Id:1230,
    Location:"Indias"

}
function checkobj(Checkprop){
if(myobject.hasownproperty(Checkprop))
{
    return myobject[Checkprop];
}
else 
{
    return"change me";
}
}
console.log("Id");

//Complex objects
var mymusic= [
{
artist:"Sonam",
Title:"There bena",
Formats:["CD","8T","LT"],
Gold:true,
},
{
artist: "Shreya",
title:"hum tera ben",
formats:["CD","9T","LT"]
}
]
console.log(mymusic);

//Accessing neste objects

var myStorage=
{
    "car":{
        "inside":
        {
            "Glove box":"maps",
            "seat":"Crumbs",
        },
        "outside":{
            "trunk":"jack",
        }
    }
}
var GloveboxContents=myStorage.car.inside["Glove box"]
console.log(GloveboxContents);