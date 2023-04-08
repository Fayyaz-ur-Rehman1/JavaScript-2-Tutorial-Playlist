// 1) alert() => Show a massage
// 2) prompt()=> show a massage input text . it return the text on ok or ,
// if Cancle button or Esc is clicked null.
// 3) confirm() => shows a massage , conforim with "OK" or "Cancle".it returns true for OK and
// false for Cancle /Esc.

alert("Hello My name is Fayyazurrehman");

var age =  prompt("Your Age is");
document.write(age);

var age = prompt("Your age is " , "Enter Your Age")
if (age != null){
    document.write(`Your Age is ${age}`)
}else{
    document.write(`Age Field was Blank`)
}

let c = confirm("Are you sure , You want to Delete");
if (c){
    document.write("Deleted");
}else{
    document.write("Not Deleted")
}