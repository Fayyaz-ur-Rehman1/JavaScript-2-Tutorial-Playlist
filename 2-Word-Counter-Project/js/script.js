let textbox = document.getElementById("textbox");
textbox.addEventListener("focus", myfocous);
textbox.addEventListener("blur", myblur);
let heading = document.getElementById("heading");
let pragraph = document.getElementById("pragraph");




textbox.addEventListener("input", function () {
    var text = this.value;
    var char = text.length;
    var select = document.getElementById("char");
    select.innerHTML = char;

    var text = text.trim();
    var words = text.split(" ");
    var cleanlist = words.filter(function (elm) {
        return elm != "";
    })
    document.getElementById("word").innerHTML = cleanlist.length
});




function myfocous() {
    textbox.style.background = "black";
    textbox.style.color = "white";
};

function myblur() {
    textbox.style.background = "white";
};

textbox.style.width = "99.3%";
textbox.style.border = "2px solid #006780";
textbox.style.fontSize = "20px"

document.body.style.padding = "50px 100px";

heading.style.textAlign = "center";
heading.style.background = "#006780";
heading.style.color = "white";
heading.style.padding = "10px";

pragraph.style.textAlign = "center";
pragraph.style.background = "#006780";
pragraph.style.padding = "15px";
pragraph.style.color = "white";
pragraph.style.fontSize = "25px";
pragraph.style.fontWeight = "bold";
pragraph.style.margin = "0px";