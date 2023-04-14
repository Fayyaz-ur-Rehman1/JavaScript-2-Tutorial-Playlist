let p = document.getElementById("box");
console.log(p.className);
p.className += " dim";

let q = document.getElementById("box");
console.log(q.classList);


let q1 = document.getElementById("box");
let p1 =  q1.classList;

for(let x = 0 ; x < p1.length ; x++){
    console.log(p1[x]);
}

let r2 = document.getElementById("box");
r2.classList.add("background")

let r1 = document.getElementById("box");
r1.classList.remove("background")

let r3 = document.getElementById("box");
r3.classList.replace("background" , "Hello")
 
let r4 = document.getElementById("box");
let  l = r4.classList.contains("color");
console.log(l)

let r5 = document.getElementById("box");
let  l1 = r5.classList.contains("dimaaa");
console.log(l1)


let r6 = document.getElementById("box");
r6.classList.toggle("dim")


let r7 = document.getElementById("box");
r7.classList.toggle("dim")