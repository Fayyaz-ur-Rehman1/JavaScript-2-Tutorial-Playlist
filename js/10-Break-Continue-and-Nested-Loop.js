// Break

for (let counter = 1; counter <= 10; counter++) {
    if (counter == 6) {
        break;
    }
    document.write(counter + "<br>")
}

document.write("<br>")

// Countinue

for (let counter1 = 1; counter1 <= 10; counter1++) {
    if (counter1 == 6) {
        continue;
    }
    document.write(counter1 + "<br>")
}
document.write("<br>")

// Nasted Loop

for (let counter4 = 1; counter4 <= 10; counter4++) {
    document.write(counter4 + "<br>");

    for (let counter5 = 1; counter5 <= 4; counter5++) {
        document.write('Fyyazurrehman' + "</br>")
    }
}


for (let counter6 = 1; counter6 <= 10; counter6++) {
    document.write(counter6 + "<br>");

    for (let counter7 = 1; counter7 < 7; counter7++) {
        if ((counter6 == 5) || (counter6 == 7)) {
            break;
        }
        document.write("Hello Guys" + "<br>")
    }
}


for (let counter6 = 1; counter6 <= 10; counter6++) {
    if (counter6 == 5) {
        break;
    }
    document.write(counter6 + "<br>");

    for (let counter7 = 1; counter7 < 7; counter7++) {
        document.write("Hello Guys" + "<br>")
    }
}

outer:for (let counter6 = 1; counter6 <= 10; counter6++) {
    document.write(counter6 + "<br>");

    for (let counter7 = 1; counter7 < 7; counter7++) {
        if ((counter6 == 5) || (counter6 == 7)) {
            break outer;
            // continue outer;
        }
        document.write("Hello Guys" + "<br>")
    }
}