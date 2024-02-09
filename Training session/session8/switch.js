var color = "black";
switch(color){
    case"red":
    console.log("This is a red color");
    break;
    case "blue":
        console.log("This is a blue color");
        break;
        case "green":
            console.log("This is green color");
            break;
            default:
                console.log("case did not match");
}

function calculator(x, y, action){
    switch(action){
        case "+":
            console.log(x + y);
            break;
            case "-":
                console.log(x - y);
                break;
                case "*":
                    console.log(x * y);
                    break;
                    case "/":
                        console.log(x / y);
                        break;
                     }
}
calculator(2, 3, "*");