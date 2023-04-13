let h = document.getElementById("menu3");
let i = document.createElement("li");
i.textContent = "How Are U"
let replace = h.lastElementChild.previousElementSibling.previousElementSibling;
h.replaceChild(i , replace)

let x = document.getElementById("menu3");
let u = document.createElement("li");
u.textContent = "Hello Guys";
let y = x.firstElementChild.nextElementSibling;
x.replaceChild(u , y)
