// Nested - Object

var user = {
    email: "fayyaz746@gmail.com",
    id: 2023,

    personalInfo: {
        name: "fayyaz",
        Age: 17,
        class: "11th",

        Address: {
            country: "india",
            city: "rajasthan",
        }
    }
};

console.log(user);
console.log(user.personalInfo);
console.log(user.personalInfo.Address);
console.log(user.personalInfo.name);
console.log(user.personalInfo.Address.country);
console.log(user.email)