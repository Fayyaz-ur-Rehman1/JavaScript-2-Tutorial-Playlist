let attributeset = document.getElementById("attribute1");
attributeset.setAttribute("name", "form1");

let attributeset1 = document.getElementById("attribute1");
attributeset1.setAttribute("class", "cl");

let attributeget = document.getElementById("attribute1");
let attributeget1 = attributeget.getAttribute("name");
console.log(attributeget1)

let attributeget2 = document.getElementById("attribute1");
let attributeget3 = attributeget2.getAttribute("class");
console.log(attributeget3);

let attributeremove = document.getElementById("attribute1");
attributeremove.removeAttribute("class");

let attributehas = document.getElementById("attribute1");
let attributehas1 = attributehas.hasAttribute("name");
console.log(attributehas1);

let attributehas2 = document.getElementById("attribute1");
let attributehas3 = attributehas2.hasAttribute("class");
console.log(attributehas3)

let attributehas4 = document.getElementById("attribute1");
let attributehas5 = attributehas4.hasAttribute("hfdjshn");
console.log(attributehas5);