/*Diseña una jerarquía de clases donde la Música y Tecnología sean clases derivadas de Aula, 
para moderar las instalaciones de un instituto de enseñanza secundaria.
Elige un método con el que evidenciar el concepto del polimorfismo.*/

class Aula {
  constructor(id, capacidad) {
    this.id = id;
    this.capacidad = capacidad;
  }

  obtenerDatos() {
    return `Aula ID: ${this.id}, Capacidad: ${this.capacidad}`;
  }
}

class Música extends Aula {
  constructor(id, capacidad, instrumentos) {
    super(id, capacidad);
    this.instrumentos = instrumentos;
  }

  obtenerDatos() {
    return `${super.obtenerDatos()}, Instrumentos: ${this.instrumentos.join(", ")}`;
  }
}

class Tecnología extends Aula {
  constructor(id, capacidad, equipos) {
    super(id, capacidad);
    this.equipos = equipos;
  }

  obtenerDatos() {
    return `${super.obtenerDatos()}, Equipos: ${this.equipos.join(", ")}`;
  }
}

const aula1 = new Aula(1, 23);
const aula2 = new Música(2, 32, ["Batería", "Piano"]);
const aula3 = new Tecnología(3, 28, ["Ordenadores", "Impresora"]);

console.log(aula1.obtenerDatos());
console.log(aula2.obtenerDatos());
console.log(aula3.obtenerDatos());
