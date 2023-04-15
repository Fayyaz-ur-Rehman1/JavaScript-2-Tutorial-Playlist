// window Object method

var a = "Hello world";
console.log(a);
console.log(window.a);  // any global variable use with var that is called window object properties


function fn(){
    console.log("Hy Brother");
}
fn();
window.fn(); // any function we use that is called window method


var Obj = {
    b : "fayyaz"
};

console.log(Obj);
console.log(window.Obj);// any object we use that is called sub object window

// alert and prompt and confirm this are window 
// object method we  direct use any that is called window object .

alert("I am fayyazurrehman");
window.alert("I am fayyazurrehman");