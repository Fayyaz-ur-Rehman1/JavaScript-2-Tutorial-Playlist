window.addEventListener("scroll", function () {
    console.log("Scrolling-----")
})


window.addEventListener("wheel", function (event) {
    if (event.deltaY < 0) {
        console.log("scroll-up.....");
    } else if (event.deltaY > 0) {
        console.log("scroll-down...");
    }
});

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 1500) {
        document.body.style.background = "aqua"
    } else {
        document.body.style.background = "white"
    }
})