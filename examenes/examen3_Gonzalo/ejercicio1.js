/*En esta tarea le proporcionamos el inicio de una definicióin para una clase Shape. Tiene tres propiedades:
nombre, laldos, longitudLado. Esta clase solo modela formas cuyos lados tienen la misma longitud,
como un cuadrado o un triángulo equilátero.
-Agregue un constructor a esta clase. El constructor toma argumentos para las
propiedades nombre, lados y longitudLado y los inicializa.
-Agregue un nuevo método calcPerimeter() a la clase, que calcula su perímetro ( la longitud
del borde exterior de la forma) y registra el resultado en la consola
-Cree una nueva instancia de la Shape llamada street con 4 lados de 5cm de longitud
-Llame a calcPerimeter() método para ver si registra el resultado del cáculo en la 
consola del navegador como se esperaba
-Realiza el método toString() para esta clase

A continuacion, crea una clase Square que herede de Shape y agregue un método calcArea()
que calcule el área del cuadrado. También configure el constructor para que las propiedades del nombre
y lados se establezcan automáticamente. Cree una instancia de la clase Square llamada space con los valores de propiedad
apropiados y llame a sus métodos CalcPerimeter() y CalcArea() para demostrar que funciona bien*/

class Shape {
  constructor(nombre, lados, longitudLado) {
    this.nombre = nombre;
    this.lados = lados || 3;
    this.longitudLado = longitudLado;
  }

  calcPerimeter() {
    let perimetro = this.lados * this.longitudLado;
    console.log(`El perímetro del ${this.nombre} es ${perimetro}.`);
  }

  toString() {
    return `Shape: ${this.nombre}, Lados: ${this.lados}, Longitud del lado: ${this.longitudLado}`;
  }
}

class Square extends Shape {
  constructor(nombre, longitudLado) {
    super(nombre, 4, longitudLado);
  }

  calcArea() {
    let area = this.longitudLado * this.longitudLado;
    console.log(`El área del ${this.nombre} es ${area}.`);
  }

  toString() {
    return `Shape: ${this.nombre}, Longitud del lado: ${this.longitudLado}`;
  }
}

let triangulo = new Shape("triangulo", undefined, 5);
triangulo.calcPerimeter();
console.log(triangulo.toString());

let street = new Shape("street", 4, 8);
street.calcPerimeter();
console.log(street.toString());

let cuadrado = new Square("cuadrado", 5);
cuadrado.calcArea();
console.log(cuadrado.toString());

let space = new Square("space", 8);
space.calcPerimeter();
space.calcArea();
console.log(space.toString());
