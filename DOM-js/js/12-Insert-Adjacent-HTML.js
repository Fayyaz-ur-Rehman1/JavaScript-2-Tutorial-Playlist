let a = document.getElementById("insertadjecnet");
let html = "<h1> new h1 tag </h1>";
a.insertAdjacentHTML("beforebegin", html);

let a2 = document.getElementById("insertadjecnet");
let html2 = "<h1> new h1 tag </h1>";
a.insertAdjacentHTML("afterbegin", html2);

let a3 = document.getElementById("insertadjecnet");
let html3 = "<h1> new h1 tag </h1>";
a.insertAdjacentHTML("beforeend", html3);

let a4 = document.getElementById("insertadjecnet");
let html4 = "<h1> new h1 tag </h1>";
a.insertAdjacentHTML("afterend", html4);