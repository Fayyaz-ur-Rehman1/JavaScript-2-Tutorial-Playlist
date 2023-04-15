window.addEventListener("keydown", chekkey);

function chekkey(event) {
   console.log(event.key)
}

window.addEventListener("keydown", chekkey1);
function chekkey1(event) {
   if (event.key == "CapsLock") {
      console.log("this is CapsLock ")
   } else {
      console.log(event.key)
   }
}

window.addEventListener("keydown", chekkey2);
function chekkey2(event) {
   if (event.key == "Enter") {
      alert("this is Enter key")
   } else {
      console.log(event.key)
   }
}


window.addEventListener("keyup", chekkey3);

function chekkey3(event) {
   console.log(event.key)
}