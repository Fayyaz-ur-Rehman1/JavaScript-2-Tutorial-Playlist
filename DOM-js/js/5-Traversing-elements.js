let trelm = document.getElementById("second");
let preelm = trelm.parentElement;
preelm.innerHTML="my name is fayyaz sahab"
console.log(preelm)

let tridelm = document.getElementById("main");
let childelm = tridelm.firstElementChild;
console.log(childelm);

let tridelm1 = document.getElementById("main");
let childelm2 = tridelm.lastElementChild;
console.log(childelm2);

let tridelm2 = document.getElementById("main");
let childelmall = tridelm2.children;
console.log(childelmall)

let tridelm3 = document.getElementById("main");
let childelmall1 = tridelm2.children;

for (i = 0 ; i < childelmall1.length ; i++){
    childelmall1[i].innerHTML = "Hello Guys How Are U"
}

let siblling = document.getElementById("third");
let prisib = siblling.previousElementSibling;
console.log(prisib)

let siblling1 = document.getElementById("third");
let prisib2 = siblling.nextElementSibling;
console.log(prisib2)