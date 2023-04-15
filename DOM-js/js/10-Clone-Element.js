let selectid = document.getElementById("menu2");
let clonenode = selectid.cloneNode(true);
clonenode.id = "hello";
console.log(clonenode);

let selectid1 = document.getElementById("menu2");
let clonenode2 = selectid1.cloneNode(true);
clonenode2.id = "hy"
console.log(clonenode2);

document.body.appendChild(clonenode2);

let a = document.getElementById("menu2");
let b = a.cloneNode();
b.id = "hy"
console.log(b);

document.body.appendChild(b);