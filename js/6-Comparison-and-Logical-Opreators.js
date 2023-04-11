// Comparision

console.log(5 == 5);
console.log(5 == 6);
console.log(5 == "5");
console.log(1 == true);
console.log(0 == false);
console.log(null == undefined);
console.log(3 === 3);
console.log(4 === "4");
console.log(6 === 4);
console.log(1 === true);
console.log("1" === "1");
console.log(1 != 2);
console.log(2 != 2);
console.log(4 != true);
console.log(0 != false);
console.log(2 !== 2);
console.log(2 !== "2");
console.log(5 !== 5);
console.log([5] !== 5);
console.log(4 !== 4);
console.log(5 < 8);
console.log(5 > 8);
console.log(4 > 2);
console.log(4 < 2);
console.log(5 <= 5);
console.log(5 < 5);
console.log(5 >= 5);
console.log(5 > 5);

// Logical

let a = 10;
if (a < 11 && a > 2) {
    console.log("this is true");
} else {
    console.log("this is false");
}

let b = 10;
if (b > 11 && b > 2) {
    console.log("this is true");
} else {
    console.log("this is false");
}

let c = 20;
if (c < 110 || c > 190) {
    console.log("this is true");
} else {
    console.log("this is false");
}


let d = 20;
if (d > 110 || d > 190) {
    console.log("this is true");
} else {
    console.log("this is false");
}

let e = 11;
if (e !== 13) {
    console.log("this is true");
} else {
    console.log("this is false");
}

let f = 12;
if ((f < 30) && (f > 2)) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}

let g = 12;
if ((g < 30) && (g < 2)) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}

let h = 12;
if ((h < 30) || (h < 2)) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}

let i = 12;
if ((i > 30) || (i < 2)) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}