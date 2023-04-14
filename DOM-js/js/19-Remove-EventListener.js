let a = document.getElementById("removelistener");

function fn3(){
    console.log("click1 is active");
}
function fn4(){
    console.log("click2 is active");
}
a.addEventListener("click" , fn3);
a.addEventListener("click" , fn4);

a.removeEventListener("click" , fn4);