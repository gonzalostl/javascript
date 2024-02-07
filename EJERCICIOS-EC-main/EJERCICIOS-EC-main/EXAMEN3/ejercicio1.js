//creo la clase shape
class shape {
  //constructor
  constructor(nombre, lados, longitudLado) {
    this._nombre = nombre;
    this._lados = lados;
    this._longitudLado = longitudLado;
  }
  //metodos
  calcPerimeter() {
    //como es equilatero la clase el perimetro es lados * longitud
    console.log(this._lados * this._longitudLado);
  }
  //tostring
  toString() {
    return `${this._nombre} tiene ${this._lados} lados de ${this._longitudLado} cm`;
  }
}
//creo cuadrado
let cuadrado = new shape("cuadrado", 4, 5);
//perimetro
cuadrado.calcPerimeter();
//metodo tostring
console.log(cuadrado.toString());

//creo square
class Square extends shape {
  //constructor con los atributos de shape
  constructor(nombre, lados, longitudLado) {
    super(nombre, lados, longitudLado);
  }
  //el area es lado *lado
  calcArea() {
    return this._longitudLado * this._longitudLado;
  }
}
//creo cuadrado 2
let cuadrado2 = new Square("cuadrado2", 4, 5);
//calculo perimetro
cuadrado2.calcPerimeter();
//calculo area
console.log(cuadrado2.calcArea());
