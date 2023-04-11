var person = {
    name : "fayyazurrehman",
    class : "11th",
    age : 17
}
console.log(person.name);

var person1 = {
    name : "fayyaz",
    class : "10",
    age : 11,
}
console.log(person1);


function Student(fname , lname , cls , age){
   this.firstName = fname ,
   this.lastName = lname,
   this.Class = cls,
   this.Age = age
}
var Student1 = new Student("ayyaz","urRehman","11th",17);
Student1.firstName = "Fayyaz"
var Student2 = new Student("Aijaj","Khilji","5th",10);
var Student3 = new Student("Uzaifa","khilji","3th",7);
var Student4 = new Student("Hamza","Khilji","1th",5);
var Student5 = new Student("Ayyaz","urRehman","9th",14);

console.log(Student1)
console.log(Student2)
console.log(Student3)
console.log(Student4)
console.log(Student5)