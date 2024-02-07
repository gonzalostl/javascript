//creo la clase
class Pelicula {
  //creo el constructor
  constructor(nombre, anoEstreno, duracion, genero, actoresImportantes = []) {
    this._nombre = nombre;
    this._anoEstreno = anoEstreno;
    this._duracion = duracion;
    this._genero = genero;
    //hago que solo coja los 6 primeros actores
    this._actoresImportantes = actoresImportantes.slice(0, 6);
  }

  //hago los getters y los setters de los atributos de la clase
  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  get anoEstreno() {
    return this._anoEstreno;
  }

  set anoEstreno(value) {
    this._anoEstreno = value;
  }

  get duracion() {
    return this._duracion;
  }

  set duracion(value) {
    this._duracion = value;
  }

  get genero() {
    return this._genero;
  }

  set genero(value) {
    this._genero = value;
  }

  get actoresImportantes() {
    return this._actoresImportantes;
  }

  set actoresImportantes(value) {
    this._actoresImportantes = value.slice(0, 6);
  }
}

const pelicula1 = new Pelicula("Forest Gump", 2000, 120, "Drama", [
  "Actor1",
  "Actor2",
  "Actor3",
  "Actor4",
  "Actor5",
  "Actor6",
]);

//pruebo a gestionar la informacion
console.log(pelicula1.nombre);
pelicula1.nombre = "El Magon de Oz";

console.log(pelicula1.nombre);
console.log(pelicula1.anoEstreno);
pelicula1.anoEstreno = 1989;

console.log(pelicula1.anoEstreno);
