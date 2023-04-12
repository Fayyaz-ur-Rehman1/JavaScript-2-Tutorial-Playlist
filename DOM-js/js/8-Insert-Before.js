let insert = document.getElementById("insertul");
let createelm = document.createElement("li");
insert.appendChild(createelm);
createelm.textContent = "New list 5";


let insertbef = document.getElementById("insertul");
let createelm1 = document.createElement("li");
createelm1.textContent = " new List 0 ";
let position = insertbef.firstElementChild;
insertbef.insertBefore(createelm1 , position)

let insertbef1 = document.getElementById("insertul");
let createelm1 = document.createElement("li");
createelm1.textContent = " new List 0 ";
let position1 = insertbef1.firstElementChild.nextElementSibling
.nextElementSibling.nextElementSibling;
insertbef1.insertBefore(createelm1 , position1);

