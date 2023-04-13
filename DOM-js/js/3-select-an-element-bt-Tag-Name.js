let tagelm = document.getElementsByTagName("h2");
for (i = 0 ; i < tagelm.length ; i++){
   tagelm[i].innerHTML = "Hello";
};

let container = document.getElementById("container");
let tagelm1 = container.getElementsByTagName("h2");
for (i = 0 ; i < tagelm1.length ; i++){
   tagelm1[i].innerHTML = "Hello";
};

let ptag = document.getElementById("ptag");
let change_p_tag = ptag.getElementsByTagName("p");

for (i = 0 ; i < change_p_tag.length ; i++){
    change_p_tag[i].innerHTML = "Hello Guys My Name Is Fayyazyrrehman";
};