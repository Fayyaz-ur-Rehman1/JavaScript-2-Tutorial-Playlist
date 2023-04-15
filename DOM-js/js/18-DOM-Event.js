function fn() {
    alert("Button Was onclick");
}


function fn1() {
    alert("Button was click");
}
let listner = document.getElementById("listner");
listner.addEventListener('click', fn1)


let listner2 = document.getElementById("listner2");
listner2.addEventListener('click', function () {
    alert("This is Anonymous fuction with eventlistener")
})


function fn2() {
    console.log("Button was click");
}
let multiplelistner = document.getElementById("multiple");
multiplelistner.addEventListener('click', fn2);

multiplelistner.addEventListener("mouseover", function () {
    console.log("Button was MouseOver")
});

multiplelistner.addEventListener("mouseout", function () {
    console.log("Button was MouseOut")
});