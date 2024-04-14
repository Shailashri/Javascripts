// programm to print number recurssive 
function countNumber(number){
    console.log(number);
    let newnum=number-1;
    if(newnum>0){
        countNumber(newnum);
    }
}
countNumber(5);