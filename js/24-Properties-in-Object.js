let person = {
    fname: "fayyaz",
    lname: "urrehman"
};
console.log(person.fname);
console.log(person['lname']);
console.log(person.age);
console.log(person);

let person1 = {
    fname: "fayyaz",
    lname: "urrehman"
};
person1.lname = "Khilji";
person1.age = 17;
console.log(person1.lname);
console.log(person1)


let person2 = {
    fname: "fayyaz",
    lname: "urrehman"
};
person2.age = 15;
delete person2.lname
console.log(person2)
console.log('fname' in person2);
console.log('lname' in person2);


let person3 = {
    fname: "fayyaz",
    lname: "urrehman"
};
person3.age = 15;
console.log(person3)

for (let key in person3) {
    console.log(key + ": " + person3[key]);
}