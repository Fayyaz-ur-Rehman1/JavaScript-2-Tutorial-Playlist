let obj = {
    fname: "fayyaz",
    lname: "urrehman",
    age: 17,
}
obj.fay = function () {
    console.log("How Are U ?");
}
obj.fay();




let obj1 = {
    fname: "fayyaz",
    lname: "urrehman",
    age: 17,
}
function greet() {
    console.log("Hello Guys");
}
obj1.sayhello = greet;
obj1.sayhello();



let obj2 = {
    fname: "fayyaz",
    lname: "urrehman",
    age: 17,
    Address: function () {
        console.log("Hello Bro");
    }
}
obj2.Address();



let obj3 = {
    fname: "fayyaz",
    lname: "urrehman",
    age: 17,
    Email  (){
        console.log("Hello People");
    }
};
obj3.Email()