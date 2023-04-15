let qury = document.querySelector("p.intro");
qury.innerHTML = "My Name FayyazKhilji";
console.log(qury);

let qury = document.querySelectorAll("p.intro");
for (i = 0; i < qury.length; i++) {
    qury[i].innerHTML = "my name is fayyazkhilji"
}

let quer3 = document.querySelectorAll("h2.intro");
for(i = 0 ; i < quer3.length ; i++){
    quer3[i].innerHTML = "Hello guys"
}