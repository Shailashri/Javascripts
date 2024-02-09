var d = new Date();
var time = d.getHours();
if (time < 0) {
    console.log("Good morning");
} else 	{
    console.log("Good Afternoon")
}
//
function performance (x, y, action) {
    if (action ==="+") {
        console.log(x + y);
} else 	{
    console.log("Give proper action");
    }
}
performance(10, 5, "´+");