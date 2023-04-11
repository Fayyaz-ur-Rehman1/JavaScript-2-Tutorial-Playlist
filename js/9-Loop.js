// While -Loop 
let counter = 1;
while (counter <= 10) {
    document.write("Hello Guys" + "</br>");
    counter++
}

let counter2 = 1;
while (counter2 <= 10) {
    document.write("Hello Guys" + "</br>");
    counter2 = counter2 + 2
}

let Asc = 0;
while (Asc <= 10) {
    document.write(Asc + "</br>")
    Asc++
}

document.write("</br>")

let Desc = 10;
while (Desc >= 0) {
    document.write(Desc + "</br>")
    Desc--
}

document.write("<br>")

let table = 2;
while (table <= 20) {
    document.write(table + "<br>")
    table = table + 2;
} 

let counter3 = 1;
let sum = 0;

while (counter3 <= 100){
    if(counter3 % 2 == 0 ){
        sum = sum + counter3
    }
    counter3++;
}
console.log(sum)

// do-While-Loop

let d = 1;
do {
    document.write("Hello Guys");
    d++ ;
 } while(12 <= 10);

// document.write("<br>")

let e = 1;
do {
    document.write("Hello Guys" + "<br>");
    e++ ;
}while(e <= 10);

// // For-Loop

for(let counter4 = 1 ; counter4 <= 10 ; counter4++){
    document.write("My name is Fayyazurrehman" + "<br>")
}