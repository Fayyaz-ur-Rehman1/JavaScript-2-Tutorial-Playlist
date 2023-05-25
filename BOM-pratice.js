// // BOM

// // window Object

var a = "fayyazurrehman";
console.log(window.a);


function fn() {
    console.log("i am fayyazurrehman");
}
window.fn();

window.alert("Haallooo");

// inner window

console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(window.outerHeight);
console.log(window.outerWidth);

// // window

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


// Time out and Time Interval

let set = setTimeout(mytimefn, 2000);

function mytimefn() {
    console.log("Time is Over");
    alert("Time is Over")
}

clearTimeout(set)



let Interval = setInterval(myfn, 2000);

function myfn() {
    console.log("Time is Start");
}

let btn4 = document.getElementById("btn4");
btn4.addEventListener('click', function () {
    clearInterval(Interval);
})



// Location Object

console.log(location.href);
console.log(location.pathname);
console.log(location.protocol);

function fun() {
    window.location = "https://www.google.com"
    location.href = "https://www.google.com"
    location.assign("https://www.google.com")
    location.replace("https://www.google.com")
    location.reload();
}


// Navigetor

console.log(navigator.appVersion);
console.log(navigator.appCodeName);
console.log(navigator.cookieEnabled);
console.log(navigator.javaEnabled());
console.log(navigator.userAgent);
console.log(navigator.platform);


// screenn h w

console.log(screen.colorDepth);
console.log(screen.width);
console.log(screen.height);