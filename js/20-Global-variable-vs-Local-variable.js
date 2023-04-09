let car = "Audi";// Golbal variable

function add(){
    let result = 62;//Local-Variable
    console.log(result);
    console.log(car);
}
// console.log(result)

console.log(car);
add()

function sub(){
    let result = 6;
    console.log(result);
}
sub()

let result = 4;
console.log(result); 