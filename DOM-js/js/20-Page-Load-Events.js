window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM tree Create")
});

window.addEventListener("load", function () {
    console.log("Fully loaded");
});

let img1 = document.getElementById("img1");
img1.addEventListener("load", function () {
    console.log("Fully loaded")
});