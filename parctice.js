// //    id Select


let elm = document.getElementById("first");
console.log(elm);
console.log(elm.innerHTML);

let elm1 = document.getElementById("first");
elm1.innerHTML = "<h1>FayyazSahab</h1>";


// // //   Select an Element by "Class Name"


let cl = document.getElementsByClassName("cl");

for (i = 0; i < cl.length; i++) {
    cl[i].innerHTML = "<p>Danish Chouhan </p>"
}

let mulcl = document.getElementsByClassName("mul cl");

for (i = 0; i < mulcl.length; i++) {
    mulcl[i].innerHTML = "<h1>Ayyaz-Sahab</h1>"
}


// // Select an elemrnt by "Tag Name"


let tag3 = document.getElementsByTagName("p");
for (let i = 0; i < tag3.length; i++) {
    tag3[i].innerHTML = "Hello Guys I am Fayyazurrehman";
}

let div1 = document.getElementById("div1");
let tagchose = div1.getElementsByTagName("h2");

for (let i = 0; i < tagchose.length; i++) {
    tagchose[i].innerHTML = "my name is FayyazUrRehman";
}


// // Query Selector


let Query = document.querySelector("p.intro");
Query.innerHTML = "Hello guys my name is fayyaz urrehman"

let QueryAll = document.querySelectorAll("p.intro");
for (i = 0; i < QueryAll.length; i++) {
    QueryAll[i].innerHTML = "hello guys i am fayyaz"
}


// // Traversing elements


let trv = document.getElementById("intro");
let childtoprt = trv.parentElement;
console.log(childtoprt);

let trv1 = document.getElementById("intro2");
//  let prttochild = trv1.firstElementChild;
//  let prttochild = trv1.lastElementChild;
// let prttochild = trv1.children;
// let prttochild = trv1.nextElementSibling;
// let prttochild = trv1.nextElementSibling.nextElementSibling;
// let prttochild = trv1.previousElementSibling;
let prttochild = trv1.previousElementSibling.previousElementSibling;
console.log(prttochild);


// innerHTML


let idslc = document.getElementById("ptag");
// idslc.innerHTML;
idslc.innerHTML = "my name is fayyazurrehman"
console.log(idslc)


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


let d = document.getElementById('intro3');
let c = document.createElement('h2');
c.className = "heading2";
c.textContent = "hello my name is fayyaz urrehan"
d.appendChild(c)

console.log(c.textContent);


// insert Before

let a1 = document.getElementById("intro6");
let addli = document.createElement("li")
addli.textContent = "list 5";
let pos = a1.firstElementChild.nextElementSibling;
a1.insertBefore(addli, pos)

let u = document.getElementById('intro6');
let elm3 = document.createElement('li');
elm3.textContent = "hello guys i am list 6";
let postion = u.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
u.insertBefore(elm3, postion);

let perent = document.body;

let celm = document.createElement('h1');
celm.textContent = "my nahi is h1";

let intro6 = document.getElementById("intro6");

perent.insertBefore(celm, intro6);




removeChild

let perent1 = document.getElementById("menu");
let Select = perent1.firstElementChild.nextElementSibling.nextElementSibling;
perent1.removeChild(Select);

document.body.removeChild(perent1)



CloneElement 

let perent4 = document.getElementById("clone")
let cloneelm = perent4.cloneNode(true);
cloneelm.id = "mobile"
document.body.appendChild(cloneelm);
console.log(cloneelm);

let perent6 = document.getElementById("clone")
let cloneelm3 = perent6.cloneNode(false);
document.body.appendChild(cloneelm3);
console.log(cloneelm3);



// Replace Element

let prt = document.getElementById("replace")
let creeelm = document.createElement('li')
creeelm.textContent = "uzair"
let replace = prt.firstElementChild.nextElementSibling
    .nextElementSibling.nextElementSibling;
prt.replaceChild(creeelm, replace)



// InsertAdjecent

let a = document.getElementById("intropre");
let html = "<h1>my name is h1</h1>"
// a.insertAdjacentHTML("beforebegin" , html)
// a.insertAdjacentHTML('afterbegin' , html)
// a.insertAdjacentHTML('beforeend' , html)
a.insertAdjacentHTML('afterend' , html);

function recursion() {
    

}