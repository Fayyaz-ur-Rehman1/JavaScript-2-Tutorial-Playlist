let selectid = document.getElementById("menu2");
let clonenode = selectid.cloneNode(true);
clonenode.id = "hello"
console.log(clonenode)

let selectid1 = document.getElementById("menu2");
let clonenode2 = selectid1.cloneNode();
console.log(clonenode2)

document.body.appendChild(clonenode)