let employee=
{
 empname:"scania",
 empid:11,
 basicsal:20000,
 job:"engineer",
 bonus:function ()
    {
    return((this.basicsal * 10)/100);
    }   
};
console.log(employee["empname"]);
//console.log(employee.bonus());