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

// class Productos {
//     constructor(name, price, stock) {
//         this.name = name;
//         this.price = price;
//         this.stock = stock;
//     }

// }

// Crear un método que permita en los objetos de esta clase disminuir el stock cuando el usuario realiza una compra

class Productos {
    constructor(name, price, stock) {
        this.nombre = name;
        this.precio = price;
        this.cant_disp = stock;
    }
    restarStock() {
        this.cant_disp = this.cant_disp-1;
    }
}

let manzana = new Productos("manzana", 130, 16);
console.log(`El stock original es de: ${manzana.cant_disp}`);
manzana.restarStock();
console.log(`El stock actual es de: ${manzana.cant_disp}`);

// Crear una clase para un conjunto de productos cuyas propiedades son:
// - nombre
// - precio
// - stock

class Products {
    constructor(nombre, precio, stock) {
        this.name = nombre;
        this.price = precio;
        this.stock = stock;
    }
    agregarStock(cantidad) {
        this.stock = this.stock + cantidad;
    }
}

const chicken = new Products("chicken", 600, 123);
console.log(chicken);


// Crear un método que permita agregar una cantidad de stock dada
console.log(`El stock original es de: ${chicken.stock}`);
chicken.agregarStock(5);
console.log(`El stock actual es de: ${chicken.stock}`);