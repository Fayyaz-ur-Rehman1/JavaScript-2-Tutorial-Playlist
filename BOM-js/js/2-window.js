console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(window.outerHeight);
console.log(window.outerWidth);




let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    window.open();
});

let btn1 = document.getElementById("btn");
let btn2 = document.getElementById("btn1");

let url = "http://www.google.com";
let features = "height= 400 , width= 400";
btn1.addEventListener("click", function () {
    window.open(url, "google", features);
});


btn2.addEventListener("click", function () {
    window.open('https://www.yahoo.com', 'google');
});




let btn3 = document.getElementById("btn1");
let btn4 = document.getElementById("btn2");
let btn5 = document.getElementById("btn3")

let url1 = "https://www.google.com";
let features2 = "height= 400 , width= 400";
let win;

btn3.addEventListener("click", function () {
    win = window.open(ur1, 'google', features2);
});


btn4.addEventListener("click", function () {
    window.open('https://www.yahoo.com', 'google');
});

btn5.addEventListener("click", function () {
    win.close();
});
