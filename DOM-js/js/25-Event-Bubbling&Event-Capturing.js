let d = document.getElementById("mydiv");
let b = document.getElementById("btn");

b.addEventListener("click", btnfn);
d.addEventListener("click", divfn);
document.body.addEventListener("click", bodyfn);


function btnfn() {
    console.log("this is child");
};

function divfn() {
    console.log("this is father-child");
};

function bodyfn() {
    console.log("this is grandfather child");
};


let d1 = document.getElementById("mydiv");
let b2 = document.getElementById("btn");

b2.addEventListener("click", btnfn, true);
d1.addEventListener("click", divfn, true);
document.body.addEventListener("click", bodyfn, true);


function btnfn() {
    console.log("this is child");
};

function divfn() {
    console.log("this is father-child");
};

function bodyfn() {
    console.log("this is grandfather child");
};



let d2 = document.getElementById("mydiv");
let b3 = document.getElementById("btn");

b3.addEventListener("click", btnfn);
d2.addEventListener("click", divfn);
document.body.addEventListener("click", bodyfn);


function btnfn(event) {
    event.stopPropagation();
    console.log("this is child");
};

function divfn(event) {
    event.stopPropagation();

    console.log("this is father-child");
};

function bodyfn() {
    console.log("this is grandfather child");
}; 