//creo la clase
class Calculadora {
  //creo el constructor
  constructor(numero1, numero2) {
    this.numero1 = numero1;
    this.numero2 = numero2;
  }
  //creo los métodos
  sumar() {
    //uso el objeto this para usar las propiedades de la clase
    return this.numero1 + this.numero2;
  }

  restar() {
    //uso el objeto this para usar las propiedades de la clase
    return this.numero1 - this.numero2;
  }

  multiplicar() {
    //uso el objeto this para usar las propiedades de la clase
    return this.numero1 * this.numero2;
  }

  dividir() {
    //uso el objeto this para usar las propiedades de la clase
    if (this.numero2 !== 0) {
      return this.numero1 / this.numero2;
    } else {
      console.log("Error: No se puede dividir por cero.");
    }
  }
}

//creo el objeto y verifico los métodos
const miCalculadora = new Calculadora(10, 5);
console.log("Suma:", miCalculadora.sumar());
console.log("Resta:", miCalculadora.restar());
console.log("Multiplicación:", miCalculadora.multiplicar());
console.log("División:", miCalculadora.dividir());
