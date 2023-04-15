let x = document.getElementById("input-form");
x.addEventListener("focus", focusfunction);
x.addEventListener("blur", blurfunction);
x.addEventListener("change", function () {
    console.log(this.value)
});
x.addEventListener("input", function () {
    console.log(this.value)
})

// x.addEventListener("input",function () {
//     alert(this.value)
// })

function focusfunction() {
    x.style.background = "pink"
    x.style.color = "red"
}

function blurfunction() {
    x.style.background = "white"
    x.style.color = "white"
}