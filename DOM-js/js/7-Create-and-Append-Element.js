let elmid = document.getElementById("container3");

let append_child = document.createElement("h1");

append_child.className = "clsname";

append_child.id = "idname";

let textchild = document.createTextNode("My Name Is Fayyaz");

elmid.appendChild(append_child);

append_child.appendChild(textchild);

let body = document.body.appendChild(append_child);

let textappend = document.getElementById("main");
let textchild1 = document.createElement("li");
textchild1.textContent = " add List 5";
textappend.appendChild(textchild1);

let read = document.getElementById("pread");
console.log(read.textContent);