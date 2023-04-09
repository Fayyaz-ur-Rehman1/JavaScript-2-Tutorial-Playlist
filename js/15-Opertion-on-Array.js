let books = ["Math", "Physics", "Bio", "Computer Science"];
console.log(books.length);

let books1 = ["Math", "Physics", "Bio", "Computer Science"];
books1.push("Urdu", "English", "Hindi");
console.log(books1);

let books2 = ["Math", "Physics", "Bio", "Computer Science"];
books2.unshift("Hindi", "Urdu", "English");
console.log(books2);

let books3 = ["Math", "Physics", "Bio", "Computer Science"];
books3.pop();
console.log(books3);

let books4 = ["Math", "Physics", "Bio", "Computer Science"];
books4.shift();
console.log(books4);

let books5 = ["Math", "Physics", "Bio", "Computer Science"];
console.log(Array.isArray(books5));

let books6 = ["Math", "Physics", "Bio", "Computer Science"];
let books7 = books6.splice(0, 2)
console.log(books7);

let books8 = ["Math", "Physics", "Bio", "Computer Science"];
console.log(books8.join("="));

let books9 = "my name is fayyaz urrehman"
let books10 = books9.split(' ')
console.log(books10);

let books11 = ["Math", "Physics", "Bio", "Computer Science"];
let books12 = ["Math", "Physics", "Bio", "Computer Science"];
console.log(books11.concat(books12));

let books13 = [
    ["fayyazurrehman", 17],
    ["danishchouhan", 18],
    ["UzairKhilji", 16],
];
console.log(books13[0][1])
console.log(books13)



let arr = ["fayyaz", "danish", "uzair", "saifu"];
let lengtharr = arr.length
for (i = 0; i < lengtharr; i++) {
    console.log(`my name  ${i}  is ${arr[i]}  `)
}

let arr2 = ["fayyaz", "danish", "uzair", "saifu"];
let foreach = arr2.forEach(fn);
function fn(value, index) {
    console.log(value, index)
}

let book = ["Math", "Physics", "Bio", "Computer Science"];
console.log(book = []);
book.length = 0;
console.log(book)

let book1 = ["Math", "Physics", "Bio", "Computer Science"];
let book2 = book1.indexOf("Bio");
console.log(book2)