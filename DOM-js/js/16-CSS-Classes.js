// let p = document.getElementById("box");
// console.log(p.className);
// p.className += "dim";

let q = document.getElementById("box");
console.log(q.classList);


let q1 = document.getElementById("box");
let p1 =  q1.classList;

for(let x = 0 ; x < p1.length ; x++){
    console.log(p1[x]);
}

// let r = document.getElementById("box");
// r.classList.add("dim")

// let r1 = document.getElementById("box");
// r1.classList.remove("dim")

// let r = document.getElementById("box");
// r.classList.replace("color" , "dim")

let r = document.getElementById("box");
let  l = r.classList.contains("color");
console.log(l)

let r1 = document.getElementById("box");
let  l1 = r1.classList.contains("dim");
console.log(l1)