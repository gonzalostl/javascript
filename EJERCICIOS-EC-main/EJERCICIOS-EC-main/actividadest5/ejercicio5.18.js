//creo la clase
class Persona {
  //creo el constructor
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }
  //creo los métodos
  saludar() {
    return `hola soy ${this._nombre} y mi edad es ${this._edad}`;
  }
  comer() {
    return `${this._nombre} esta comiendo`;
  }
  //creo getters y setter de la propiedad nombre
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
}
//creo el objeto persona1
let persona1 = new Persona("Moisés", 20);

//pongo a prueba el bojeto
console.log(persona1);

console.log(persona1.saludar());

console.log(persona1.comer());

console.log(persona1.nombre);

persona1.nombre = "pepe";

console.log(persona1.nombre);
