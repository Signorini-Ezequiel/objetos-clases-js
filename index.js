// Crea un objeto literal llamado User que contenga las propiedades:
// - Nombre
// - Edad
// - Mail
// - Si está vivo o no

let User = {
    nombre: "Ezequiel",
    edad: 17,
    mail: "ezequiel@algo.com",
    vivo: true
};

// Accede a cada una de las propiedades por separado a través de la consola
console.log(User.nombre);
console.log(User.edad);
console.log(User.mail);
console.log(User.vivo);

// Cambia los valores a la propiedad Edad y muéstralo por la consola

User.edad = 18
console.log(User.edad);


//  Cases
class UserClass {
    constructor(name, age, mail) {
        this.name = name;
        this.age = age;
        this.mail = mail;
    }
}

// Crear dos objetos que se basen en dicha clase
let newUser1 = new UserClass("Alexander", 21, "alexander@algo.com");
const newUser2 = new UserClass("Emanuel", 34, "emanuel@algo.com");

// Al primer objeto que creaste reasígnale un nuevo valor en alguna de sus propiedades y muestralo por consola
newUser1.mail = "gutierres@alexander.com";
console.log(`El correo mail de ${newUser1.name} es: ${newUser1.mail}`);

// Crea una clase para un conjunto de productos cuyas propiedades son:
// - Nombre
// - Precio
// - Stock

class Producos {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}