class Student
{
    setDetails(sid,sname,grade)
    {
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;
    } 
    display()
    {
        console.log(this.sid,this.sname,this.grade);
    }
}
let stu=new Student();
stu.setDetails(121,"shaila","A");
stu.display();