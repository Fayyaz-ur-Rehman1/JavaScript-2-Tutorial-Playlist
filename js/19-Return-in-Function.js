function fn(a, b) {
    return a * b;
}
let a = fn(2, 3);
console.log(a);



function fn1(c, d) {
    return 100;
}
let e = fn1(23, 3)
console.log(e)



function compare(a, b) {
    if (a < b) {
        return 1;
    } else if (b < a) {
        return -1;
    } else {
        return 0;
    }
}
let b = compare(3, 5);
console.log(b)