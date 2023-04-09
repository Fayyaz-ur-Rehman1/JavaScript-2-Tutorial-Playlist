function add() {

    if (arguments.length == 0) {

        console.log("No Passed Argument");

    } else {

        let sum = 0;//24+35

        for (i = 0; i < arguments.length; i++) {

            sum = sum + arguments[i];

        }

        console.log(sum);
    }

}

add(24, 35);


function addition() {
    console.log(arguments[1])
}
addition(5, 4, 6)


function addi() {
    console.log(arguments)
}
addi(5, 4, 6)
addi(34,54,54)
addi(34,54,54)