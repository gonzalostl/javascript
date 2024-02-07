// Creamos la clase Shape que pide el ejercicio
class Shape {
    // Propiedades de la clase
    nombre;
    lados;
    longitudLado;

    // Constructor de la clase
    constructor (nombre, lados, longitudLado) {
        this.nombre = nombre;
        this.lados = lados;
        this.longitudLado = longitudLado;
    }

    // Método para calcular el perímetro del objeto
    calcPerimeter() {
        let perimeter = this.lados*this.longitudLado;
        console.log("El perímetro de este objeto es: " + perimeter + ".");
    }

    // Método especializado toString()
    toString() {
        let mensaje = "Propiedades de este objeto:\n";
        for (let propiedad in this) {
            mensaje += propiedad + ": " + this[propiedad] + ".\n";
        }
        console.log(mensaje);
    }
}

// Creamos una nueva instancia de clase Shape
let shape = new Shape("square", 4, 5);
// Pruebas de métodos Shape
console.log("------ Pruebas de métodos de la clase Shape ------");
// Hacemos una llamada a su método calcPerimeter()
shape.calcPerimeter();
// Hacemos ahora una llamada a su método toString()
shape.toString();

// Creamos ahora la clase Square que hereda la clase Shape
class Square extends Shape {
    // Constructor especializado para el objeto Square (conocemos el nombre y los lados)
    constructor(longitudLado) {
        super("nombre", 4, longitudLado);
    }

    // Método para calcular el área de este cuadrado
    calcArea() {
        let area = this.longitudLado*this.longitudLado;
        console.log("El área de este cuadrado es: " + area + ".");
    }
}

// Creamos una nueva instancia de la clase Square
let square = new Square(7);
// Probamos sus métodos para probar que funcionan bien
console.log("------ Pruebas de métodos Square ------");
square.calcPerimeter(); // 28
square.calcArea();  // 49
square.toString();