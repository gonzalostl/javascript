//creo la clase madre
class telefono {
  //creo el constructor
  constructor(numero, propietario) {
    this._numero = numero;
    this._propietario = propietario;
  }
  //creo un método
  llamar(numtelf) {
    return `Esta llamando al numero ${numtelf}`;
  }
}
//creo la clases hijas
class Movil extends telefono {
  //creo el constructor
  constructor(numero, propietario, marca, modelo) {
    super(numero, propietario);
    this._marca = marca;
    this._modelo = modelo;
  }
}

class Fijo extends telefono {
  //creo el constructor
  constructor(numero, propietario, dirección) {
    super(numero, propietario);
    this._direccion = dirección;
  }
}

//creo los objetos
let telefono1 = new Movil(6768768, "juan", "apple", "iphone12");
let telefono2 = new Fijo(95676576, "pepe", "c/liebre 22");

//pongo a prueba los objetos
console.log(telefono1);
console.log(telefono2);
console.log(telefono2.llamar(6768768));
console.log(telefono1.llamar(95676576));
