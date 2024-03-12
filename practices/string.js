var myStr="shaila is \"my\" name";
console.log(myStr);

var myStr='my name is "shaila" padache';
console.log(myStr);

var myStr="\'shaila\' \"padache\" ";
console.log(myStr);

var myname="shaila";
console.log(myname);

//Plus operator
var myStr='shaila.' + 'shaila';
console.log(myStr);

var myStr="shaila";
var myStrs="Padache";
console.log(myStr,myStrs);

var myStr="shailashri.";
myStr+="surname is padache";
console.log(myStr);

var adstr="shaila.";
var str="padache";
str+=adstr;
console.log(str);

var firstName="shailashri";
var firstNameLength=firstName.length;
console.log(firstNameLength);

var lastName="Padache";
var lastNameLength=lastName.length;
console.log(lastNameLength);

var firstName="Shailashri";
var firstNameLength=firstName[0];
console.log(firstNameLength);

var myName="shailashri";
var mynamelength=myName[myName.length-2];
console.log(mynamelength);

var ourArray=[["john", 12345],[2345,"jienny"]];
console.log(ourArray[0,1]);

var ourArray=[[12,78,99],[1,4,6],[8,9,67]];
mtdata=ourArray[2][2];
console.log(mtdata);


//push method
var ourArray=["mango","apple","orange","pinaapple"];
ourArray.push(["iphone"]);
console.log(ourArray);

var ourArray=["mango","apple","orange","pinaapple"];
ourArray.pop();
console.log(ourArray);

var ourArray=["mango","orange","apple","pinapple"];
ourArray.shift();
console.log(ourArray);
var ourArray=["apple","banans","orange","pinapple","cherry"];
ourArray.unshift(["lemon"]);
console.log(ourArray);
