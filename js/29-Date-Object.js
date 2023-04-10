var getdate = new Date();
console.log(getdate);


console.log(getdate.getHours());

console.log(getdate.getDate());

console.log(getdate.getFullYear());

console.log(getdate.getMonth());

console.log(getdate.getDay());

console.log(getdate.getSeconds());

console.log(getdate.getMilliseconds());

console.log(getdate.getTime());


let setdate = new Date("january 9 2006  11:12:33");
console.log(setdate);


setdate.setFullYear(2023);
console.log(setdate);

setdate.setDate(12);
console.log(setdate);

setdate.setHours(9);
console.log(setdate);

setdate.setMonth(3);
console.log(setdate);

setdate.setTime(12);
console.log(setdate);

setdate.setMinutes(40);
console.log(setdate);

setdate.setSeconds(3);
console.log(setdate);


let currentdate = new Date();
console.log(currentdate);

currentdate.setDate(currentdate.getDate() + 20);
console.log(currentdate);

// compare

let compare = new Date();
let compare2 = new Date();

if (compare > compare2) {
    console.log("past date")
} else if (compare2 > compare) {
    console.log("feature date")
} else {
    console.log("Both are Same")
}