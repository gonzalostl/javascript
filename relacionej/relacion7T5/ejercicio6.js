//creo la clase
class Club {
  //creo el constructor
  constructor(anoFundacion, numSocios, nombreEstadio, ciudad, palmares) {
    this._anoFundacion = anoFundacion;
    this._numSocios = numSocios;
    this._nombreEstadio = nombreEstadio;
    this._ciudad = ciudad;
    this._palmares = palmares;
  }
  //creo el método
  verClub() {
    //si no existe la variable saca por pantalla no disponible
    console.log(`Año de fundación: ${this._anoFundacion || "No disponible"}`);
    console.log(`Número de socios: ${this._numSocios || "No disponible"}`);
    console.log(`Nombre del estadio: ${this._nombreEstadio || "No disponible"}`);
    console.log(`Ciudad: ${this._ciudad || "No disponible"}`);
    console.log(`Palmarés: ${this._palmares || "No disponible"}`);
  }
}

//creo los cubles y muestro sus datos
let barcelona = new Club();
barcelona.verClub();
//esto es para separar los datos
console.log("------------------------------");
let madrid = new Club(1889);
madrid.verClub();
console.log("------------------------------");
let cadiz = new Club(1892, 20394);
cadiz.verClub();
console.log("------------------------------");
let rayo = new Club(1907, 19234, "estadio del rayo");
rayo.verClub();
console.log("------------------------------");
let celta = new Club(1920, 33721, "balaidos", "vigo");
celta.verClub();
console.log("------------------------------");
let cordoba = new Club(1904, 21234, "estadio del cordoba", "cordoba", "1 copa, 2002");
cordoba.verClub();
console.log("------------------------------");
