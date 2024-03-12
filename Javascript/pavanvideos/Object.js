let person=
{
    age:20,
    height:5.5,
    Name:"shaila",
    Lastname:"padache"
}
//Accessing object properties
//console.log(person["Name"]);
//console.log(person.age);

//Update existing property
person.age=50;
console.log(person.age);

//Add new property to the existing object
person["weight"]=45;
console.log(person["weight"]);

// Remove the property from the object
delete (person.age);
console.log(person.age); //undefined


// for/in loop
for(let x in person)
{
   //console.log(x); // print only property names
//console.log(person[x]); // print values of the properties
console.log(x+"  "+person[x]);
}
