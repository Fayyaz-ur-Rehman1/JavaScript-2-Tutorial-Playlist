setTimeout(myfn , 10000);
function myfn(){
    alert("Arlm is on");
}

let timeoutid = setTimeout(fn , 2000);
function fn(){
    alert("Arlm is on");
};
clearTimeout(timeoutid);

setInterval(fn , 2000);
function fn(){
    console.log("this is setintervel")
}

let y = setInterval(fn , 1000);
function fn(){
    console.log("this is setintervel")
}

let x = document.getElementById("btn4");

x.addEventListener('click' , function () {
   clearInterval(y)
})