// Getter Peroperty

var person = {
    name: "Fayyazurrehman",
    age: 17,
    class: "11th",

    get getname() {
        return this.name.toUpperCase();
    }
}
console.log(person.getname);

// Setter property

var person1 = {
    name: "Fayyaz",
    age: 17,
    class: "11th",

    set setname(n) {
        this.name = n.toUpperCase();
    }
}

person1.setname = "Fayyaz ur rehman"
console.log(person1)