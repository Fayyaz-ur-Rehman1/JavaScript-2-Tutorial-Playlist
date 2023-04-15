let clname = document.getElementsByClassName("cl");
console.log(clname)
console.log(clname.length)
for (let i = 0; i < clname.length; i++) {
    clname[i].innerHTML = "<p> Hello </p>"
};