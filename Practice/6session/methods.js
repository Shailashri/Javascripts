var mydata = [10,20,30,40,50];
var mystr=mydata.includes(1);
console.log(mystr);

// index of() method is used to check weather element present in array
var mydata=[100,200,300,400,500];
var mystr=mydata.indexOf(500);
console.log(mystr);


//for Each() method is used access each and every element in the array
var mydata=[10,20,30,40,50,60];
mydata.forEach(function(element,index,array){
    console.log(element,index,array);
});

mydata=[100,200,300,400,500,600];
mydata.forEach(function(element,index,array) {
    console.log(element,index,array);
    
});


//Last index of() methos is used to check weather element is present or not in the array
//starts at specified index & searches from right to Left

var mydata=[20,30,40,50,20,10];
var myelement=mydata.lastIndexOf(10);
console.log(myelement);

// map () method is used to get access of each  & every element of the array
var mydata= [20,30,40,50,60];
var myelement=mydata.map(function(element,index,array){
return element +10;
});
console.log(myelement);


//filetr () 

var mydata=[100,200,300,400,500];
var newmydata=mydata.filter(function(element,index){
    return element <300;
});
console.log(newmydata);


//slice() method it returns the selected elements in an array
var mydata= [100,200,300,400,500,600];
console.log(mydata.slice(0,3));

var myelement= [10,20,30,40,50,60,70,80,90];
console.log(myelement.slice(3,6));


//splice() method is adds or removes the array elements
var mydata= [100,200,300,400,500,600,700];
mydata.splice(3,3,333);
console.log(mydata);