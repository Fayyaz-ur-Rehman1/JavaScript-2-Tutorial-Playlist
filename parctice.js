// //    id Select


// let elm = document.getElementById("first");
// console.log(elm);
// console.log(elm.innerHTML);

// let elm1 = document.getElementById("first");
// elm1.innerHTML = "<h1>FayyazSahab</h1>";


// // //   Select an Element by "Class Name"


// let cl = document.getElementsByClassName("cl");

// for (i = 0; i < cl.length; i++) {
//     cl[i].innerHTML = "<p>Danish Chouhan </p>"
// }

// let mulcl = document.getElementsByClassName("mul cl");

// for (i = 0; i < mulcl.length; i++) {
//     mulcl[i].innerHTML = "<h1>Ayyaz-Sahab</h1>"
// }


// // Select an elemrnt by "Tag Name"


// let tag = document.getElementsByTagName("p");
// for (let i = 0; i < tag.length; i++) {
//     tag[i].innerHTML = "Hello Guys I am Fayyazurrehman";
// }

// let div1 = document.getElementById("div1");
// let tagchose = div1.getElementsByTagName("h2");

// for (let i = 0; i < tagchose.length; i++) {
//     tagchose[i].innerHTML = "my name is FayyazUrRehman";
// }


// // Query Selector


// let Query = document.querySelector("p.intro");
// Query.innerHTML = "Hello guys my name is fayyaz urrehman"

// let QueryAll = document.querySelectorAll("p.intro");
// for (i = 0; i < QueryAll.length; i++) {
//     QueryAll[i].innerHTML = "hello guys i am fayyaz"
// }


// // Traversing elements


// let trv = document.getElementById("intro");
// let childtoprt = trv.parentElement;
// console.log(childtoprt);

// let trv1 = document.getElementById("intro2");
//  let prttochild = trv1.firstElementChild;
//  let prttochild = trv1.lastElementChild;
// let prttochild = trv1.children;
// let prttochild = trv1.nextElementSibling;
// let prttochild = trv1.nextElementSibling.nextElementSibling;
// let prttochild = trv1.previousElementSibling;
// let prttochild = trv1.previousElementSibling.previousElementSibling;
// console.log(prttochild);


// innerHTML


// let idslc = document.getElementById("ptag");
// // idslc.innerHTML;
// idslc.innerHTML = "my name is fayyazurrehman"
// console.log(idslc)


// Append

let ap = document.getElementById("intro3");
let tag = document.createElement("h1");

let append = ap.appendChild(tag);

console.log(append);

let ap1 = document.getElementById("intro3");
let tag1 = document.createElement("h1");
tag1.className = "heading h11";
tag1.id = "fayyaz";
let text = document.createTextNode("hello bahijaan asslamualikum");
tag1.appendChild(text)
// ap1.appendChild(tag1); 


document.body.appendChild(tag1);


let a = document.getElementById('intro3');
let c = document.createElement('h2');
c.className = "heading2";
c.textContent = "hello my name is fayyaz urrehan"
a.appendChild(c)

console.log(c.textContent);