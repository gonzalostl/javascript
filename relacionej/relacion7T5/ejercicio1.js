/*Crea una clase con dos propiedades y dos métodos donde
se evidencien los conceptos de abstracción y encapsulamiento de la programación
orientada a objetos.*/

class Coche {
  #marca;
  #clase;

  constructor(marca, clase) {
    this.#marca = marca;
    this.#clase = clase;
  }

  getMarca() {
    return this.#marca;
  }

  getApellido() {
    return this.#clase;
  }
}
