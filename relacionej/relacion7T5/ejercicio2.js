/*Escribe un programa con herencia de clases que permita modelar los objetos
Teléfono, Fijo y Móvil, de manera que Teléfono sea de clase madre y Fijo y Móvil,
clases derivadas*/

class Telefono {
  constructor(id, tipo) {
    this.id = id;
    this.tipo = tipo;
  }

  mostrarTelefono() {
    console.log(`ID: ${this.id}, Tipo: ${this.tipo}`);
  }
}

class Fijo extends Telefono {
  constructor(id, tipo, num) {
    super(id, tipo);
    this.num = num;
  }

  mostrarFijo() {
    super.mostrarTelefono();
    console.log(`Número: ${this.num}`);
  }
}

class Movil extends Telefono {
  constructor(id, tipo, num, operador) {
    super(id, tipo);
    this.num = num;
    this.operador = operador;
  }

  mostrarMovil() {
    super.mostrarTelefono();
    console.log(`Número: ${this.num}, Operador: ${this.operador}`);
  }
}

let telefono1 = new Fijo(1, "Fijo", 911545676);
let telefono2 = new Movil(2, "Móvil", 988989776, "Movistar");

telefono1.mostrarFijo();
telefono2.mostrarMovil();
