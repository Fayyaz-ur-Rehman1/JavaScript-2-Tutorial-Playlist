// Prototype

function Student(fname , lname , cls , age){
    this.firstName = fname ,
    this.lastName = lname,
    this.Class = cls,
    this.Age = age
 }
 Student.prototype.Country = "India"

 var Student1 = new Student("Fayyaz","urRehman","11th",17);
 var Student2 = new Student("Ayyaz","urRehman","9th",14);

 console.log(Student1);
 console.log(Student2);