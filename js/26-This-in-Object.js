let person = {
    name: "fayyazurrehman",
    secondname: "fayyazkhilji",
    sayhello() {
        console.log("Hello i am " + this.name + " i hava a " + car.brand + " car")
    }
}
let car = {
    brand: "lamborgini",
    model: "Bugatti"
}
person.sayhello();