class Telefonos {
  CPU = "AMD Ryzen 2";
  RAM = "4GB";
  Almacenamiento = "128GB";
  Ancho = "7,5cm";
  Alto = "14,65cm";
  numCamaras = 3;

  constructor(CPUp, RAMp, Almacenamientop, Anchop, Altop, numCamarasp) {
    this.CPU = CPUp;
    this.RAM = RAMp;
    this.Almacenamiento = Almacenamientop;
    this.Ancho = Anchop;
    this.Alto = Altop;
    this.numCamaras = numCamarasp;
  }
}

let telefono1 = new Telefonos("AMD ryzen 3", "8 GB", "256 GB", "7CM", "13CM", 4);
console.log(telefono1.CPU);
