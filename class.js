
var student={
    //key:value .. value can be any datatype value
    name:"Purva",
    Address:"Google",
    RollNo:11,
    isGraduated: true,
    details: function(){
        console.log(this.name)
        console.log(this.Address)
        console.log(this.isGraduated)
        console.log(this.RollNo)
    },
    marks:{
        name:"10th",
        English:20,
        Maths:40,
        //TODO: discuss arrow function vs function keyweord
        details:function(){
            console.log(this.name)
            console.log(this.English)
            console.log(this.Maths)
        }
    }
}
// student.details()
// console.log("Now printing marks details")
// student.marks.details()

// student.fulname="aaa bb"
// console.log(student.fulname)
// student.details()
class Student{
   constructor(name, address, rollNumber, isGraduated){
       this.name=name
       this.address=address
       this.rollNumber=rollNumber
       this.isGraduated=isGraduated
   } 
   details(){
    console.log(this.name)
    console.log(this.address)
    console.log(this.isGraduated)
    console.log(this.rollNumber)
   }
   getName(lastname){
       return this.name+ " " +lastname
   }
}
var student1 = new Student("Faraz", "google", 11, true)
student1.details()
console.log(student1.getName("abc"))
