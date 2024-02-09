function performOperation(x, y, action)	{
    if (action === "+")	{
        console.log(x + y);
    } else if(action === "-") {
        console.log(x - y);
    } else if (action === "*")	{
        console.log(x * y);
    } else if (action === "/")	{
        console.log(x / y);
    }else 	{
        console.log("Pass valid action like + or - or * or /");
        }
    }
performOperation(20,10, "-");

//ex2
var d = new Date();
var time = d.getHours;
if(time < 12) {
    console.log("Good morning");
} else if (time > 12 && time < 14) {
    console.log("Good afternoon");
} else {
    console.log("Good night");
}