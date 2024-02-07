//creo la clase madre aulaa
class Aula {
  //creo el constructor
  constructor(nombre, capacidad) {
    this._nombre = nombre;
    this._capacidad = capacidad;
  }
}

//creo las clases hijas

class Musica extends Aula {
  //creo el constructor
  constructor(nombre, capacidad, instrumentos) {
    super(nombre, capacidad);
    this._instrumentos = instrumentos;
  }
  //creo el método con el mismo nombre
  revision() {
    return "estan todos los instrumentos en la clase de música";
  }
}

class Tecnologia extends Aula {
  //creo el constructor
  constructor(nombre, capacidad, herramientas) {
    super(nombre, capacidad);
    this._herramientas = herramientas;
  }
  //creo el método con el mismo nombre
  revision() {
    return "estan todas las herramientas en la clase de tecnología";
  }
}

//creo los objtetos
let musica1 = new Musica("aula 200", 25, 17);
let tecnologia1 = new Tecnologia("aula 301", 30, 22);

//compruebo el polimorfismo de los métodos
console.log(musica1.revision());
console.log(tecnologia1.revision());
