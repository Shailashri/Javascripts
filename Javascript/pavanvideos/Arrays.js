let cars=["bmw", "volvo", "benz"]
//let cars=new Array("valvo", "bmw", "benz");
//console.log(cars[2]);  //accessing element
cars[2]="scorpio"; // change the value
console.log(cars);

// we can have variables of different types in the same array
let myarray=[100, "shaila", 10.15, true];
console.log(myarray);

// we can objects in the array
 let person1={
              name:"shaila",
               age:10
              };
let person2={
             name:"mahant",
             age:20
            };
let myarray1=[person1, person2];
console.log(myarray1);
console.log(myarray1[1])


//to fing length in the array
let fruits=["mango", "banana", "apple", "grabes"];
console.log(fruits.length);

//Looping elements from array
/*for(i=0; i<=fruits.length-1; i++)
{
console.log(fruits[i]);
}*/

// Looping elements from array forof loop
for(elements of fruits)
{
    console.log(elements);
}

//Recognize an array -type of
console.log(typeof fruits); //object

//to check weather it is array or not(Array=free defined object in js)
console.log(Array.isArray(fruits));// ans is true // try without giving fruits and check, i will give false



