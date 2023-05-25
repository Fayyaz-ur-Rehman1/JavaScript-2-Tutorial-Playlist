// BOM

// window Object

var a = "fayyazurrehman";
console.log(window.a);


function fn(){
    console.log("i am fayyazurrehman");
}
window.fn();

window.alert("Haallooo");

// inner window

console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(window.outerHeight);
console.log(window.outerWidth);

// window

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let url = "https://www.google.com"
let features = "height=300,width=300"
let win;

btn1.addEventListener("click", function () {
    win = window.open(url, 'google', features)
})

btn2.addEventListener("click", function () {
    window.open("https://www.yahoo.com", "google", features)
})

btn3.addEventListener("click", function () {
    win.close();
})

