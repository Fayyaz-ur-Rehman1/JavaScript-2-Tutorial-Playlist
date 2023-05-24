// // //    id Select


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


// // // Traversing elements


let trv = document.getElementById("intro");
let childtoprt = trv.parentElement;
console.log(childtoprt);

let trv1 = document.getElementById("intro2");
//  let prttochild = trv1.firstElementChild;
// //  let prttochild = trv1.lastElementChild;
// // let prttochild = trv1.children;
// // let prttochild = trv1.nextElementSibling;
// // let prttochild = trv1.nextElementSibling.nextElementSibling;
// // let prttochild = trv1.previousElementSibling;
let prttochild = trv1.previousElementSibling.previousElementSibling;
console.log(prttochild);


// // innerHTML


let idslc = document.getElementById("ptag");
idslc.innerHTML;
idslc.innerHTML = "my name is fayyazurrehman"
console.log(idslc)


// // Append

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
ap1.appendChild(tag1);


document.body.appendChild(tag1);


let d = document.getElementById('intro3');
let c = document.createElement('h2');
c.className = "heading2";
c.textContent = "hello my name is fayyaz urrehan"
d.appendChild(c)

console.log(c.textContent);


// // insert Before

let a1 = document.getElementById("intro6");
let addli = document.createElement("li")
addli.textContent = "list 5";
let pos = a1.firstElementChild.nextElementSibling;
a1.insertBefore(addli, pos)

let u3 = document.getElementById('intro6');
let elm3 = document.createElement('li');
elm3.textContent = "hello guys i am list 6";
let postion = u3.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
u.insertBefore(elm3, postion);

let perent = document.body;

let celm = document.createElement('h1');
celm.textContent = "my nahi is h1";

let intro6 = document.getElementById("intro6");

perent.insertBefore(celm, intro6);




// removeChild

let perent1 = document.getElementById("menu");
let Select = perent1.firstElementChild.nextElementSibling.nextElementSibling;
perent1.removeChild(Select);

document.body.removeChild(perent1)



// CloneElement 

let perent4 = document.getElementById("clone")
let cloneelm = perent4.cloneNode(true);
cloneelm.id = "mobile"
document.body.appendChild(cloneelm);
console.log(cloneelm);

let perent6 = document.getElementById("clone")
let cloneelm3 = perent6.cloneNode(false);
document.body.appendChild(cloneelm3);
console.log(cloneelm3);



// // Replace Element

let prt = document.getElementById("replace")
let creeelm = document.createElement('li')
creeelm.textContent = "uzair"
let replace = prt.firstElementChild.nextElementSibling
    .nextElementSibling.nextElementSibling;
prt.replaceChild(creeelm, replace)




// // InsertAdjecent

let a = document.getElementById("intropre");
let html = "<h1>my name is h1</h1>"
a.insertAdjacentHTML("beforebegin", html)
a.insertAdjacentHTML('afterbegin', html)
a.insertAdjacentHTML('beforeend', html)
a.insertAdjacentHTML('afterend', html);


// // Attribute


let s = document.getElementById("btn");
let Attribute = s.setAttribute("class", "fayyaz");
let Attribute1 = s.getAttribute("class");
let Attribute2 = s.removeAttribute("class");
let Attribute4 = s.hasAttribute("class");
console.log(Attribute4);



// // // Inline Style

let u = document.getElementById("btn1");
u.style.cssText = "color:red; background:yellow";

let u4 = document.getElementById("btn1");
u4.style.cssText += "color:green"

let u2 = document.getElementById("btn1");
u2.style.background = "green";
u2.style.border = "10px solid black"

let u1 = document.getElementById("btn1");
u1.setAttribute("style", "color:green; background:black")



// // getComputedStyle

let h = document.getElementById("btn2");
let css = getComputedStyle(h);
console.log(css);
console.log(css.color);
console.log(css.backgroundColor);



// // CSS Classes 

let p = document.getElementById("box");
p.classList.add("dim");
p.classList.remove("dim");
p.classList.replace("fayyaz", "dim");
let tf = p.classList.contains("dim");
p.classList.toggle("fayyaz")
console.log(tf);




// // Width and Heigth of an Element

let Width = p.offsetWidth;
let Heigth = p.offsetHeight;

console.log(Width);
console.log(Heigth);


function fn() {
    alert("this is onclick")
}

let btn5 = document.getElementById("btn5");

function fn1() {
    alert("this is click");
}

btn5.addEventListener("click", fn1)


btn5.addEventListener('mouseover', function () {
    alert("this is mouse down")
})

btn5.addEventListener('mouseout', function () {
    alert("this is mouse out")
})



// // Remove addEventListener

let btn7 = document.getElementById("btn7");

function click1() {
    console.log("this is click1");
}
function click2() {
    console.log("this is also click2")
}

btn7.addEventListener("click", click1);
btn7.addEventListener("click", click2);

btn7.removeEventListener("click", click2)


// // Page Load Event




// // MouseEvent

function mouseevent() {
    alert("onDoubleclick  onmouseover onmouseout onmouseup onmousedown onclick oncontextmenu")
}


// KeyWord

window.addEventListener('keyup', checkkey);//keydown // keyprees

function checkkey(event) {
    console.log(event.key);
}


// Scroll Event

window.addEventListener("scroll", checkscroll);

function checkscroll() {
    console.log("scrolling...");
}

window.addEventListener("wheel", checkweel);

function checkweel(event) {
    if (event.deltaY < 0) {
        console.log("scroll up");
    } else if (event.deltaY > 0) {
        console.log("scroll down")
    }
}


window.addEventListener("scroll", scrollpx)

function scrollpx() {
    if (window.pageYOffset > 150) {
        document.body.style.background = "green"
    } else {
        document.body.style.background = "white"
    }
}

// Input Event

let o = document.getElementById("name");

o.addEventListener("focus", myfocusfn);
o.addEventListener("blur", myblurfn);

// o.addEventListener('change' , function (){
//     console.log(this.value);
// })

o.addEventListener('input', function () {
    console.log(this.value);
})

function myfocusfn() {
    o.style.background = "black";
    o.style.color = "white"
}

function myblurfn() {
    o.style.background = "green"
}




// Bublling and Capturing Event

let d4 = document.getElementById("mydiv");
let mybtn = document.getElementById("mybtn");

mybtn.addEventListener("click", mybtnfn);
d4.addEventListener("click", mydivfn);
document.body.addEventListener("click", mybodyfn);

function mybtnfn(event) {
    console.log("Click.child..");
    event.stopPropagation()
}
function mydivfn(event) {
    console.log("Child.Parent..");
    event.stopPropagation()
}
function mybodyfn() {
    console.log("Parent.Prent...");
}


let d1 = document.getElementById("mydiv");
let mybtn1 = document.getElementById("mybtn");

mybtn1.addEventListener("click", mybtnfn1, true);
d1.addEventListener("click", mydivfn1, true);
document.body.addEventListener("click", mybodyfn1, true);

function mybtnfn1() {
    console.log("Click.child..");

}
function mydivfn1() {
    console.log("Child.Parent..");

}
function mybodyfn1() {
    console.log("Parent.Prent...");
}



// Prevent Default

let from = document.getElementById("myform");
from.addEventListener("click", myfromfn)

function myfromfn(e) {
    e.preventDefault();
}

let link = document.getElementById("anchor")
link.addEventListener("click", function (e) {
    e.preventDefault()
    console.log("Click me");

});

