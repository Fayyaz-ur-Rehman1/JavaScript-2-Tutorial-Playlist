let a = document.getElementById("anchor");
a.addEventListener("click", function (event) {
    console.log("this is link not refresh...");
    event.preventDefault();
});

let b = document.getElementById("myform");
b.addEventListener("click", function (event) {
    console.log("this is submit not refresh...");
    event.preventDefault();
});