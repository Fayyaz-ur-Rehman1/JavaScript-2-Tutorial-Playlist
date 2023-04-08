let a = 10;
if (a <= 10) {
    alert("yeh brother");
    alert("this is a true ");
}

let b = 10;
if (b <= 22) {
    alert("Congrulation");
    alert("this is a true ");
}


let c = 10;
if (c <= 22) {
    alert("Good luck brother");
} else {
    alert("Bad luck brother")
}

let d = 10;
if (d <= 2) {
    alert("Good luck brother");
} else {
    alert("Bad luck brother")
}


let e = 10;
let f = "yes"
if (e <= 10 && f == "yes") {
    alert("u are rigth");
} else {
    alert("u are worng ")
}

let g = 10;
let h = "yes"
if (g <= 10 && h == "no") {
    alert("Good days");
} else {
    alert(" Bad days");
}

let age = 10;
let choese = "Yes";

if (age >= 18 && choese == "Yes") {
    alert("yes u are elegibal")
} else if (age <= 17 && choese == "Yes"){
    alert("no you are not elegibale")
}else{
    alert(" you cannot chose the vote")
} 

let x = 14;
let y = "right";
if (x >= 10) {
    if (y == "riht") {
        alert("yes");
    } else {
        alert("No");
    }
} else {
    alert("you cannot vote")
} 

let isloggedin = 0 ;
if(isloggedin == 0){
    document.write('Login')
}else {
    document.write('logout')
}
 
document.write("<br>")

// Conditional ternory

let w = 1
let person = w == 1 ? 'Logout' : 'Login';
document.write(person)

// Nullish Coalscing Opreater(??);

let user;
console.log(user ?? "Guest User");

let nul = null;
console.log(nul ?? "Nothing")

let num = 0 ;
console.log(num ?? 3)

let user1 ;
user1 = "fayyazurrehman";
console.log(user1)