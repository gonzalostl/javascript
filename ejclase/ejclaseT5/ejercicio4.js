function Viaje(origen, destino, dias, precio) {
  this.origen = origen;
  this.destino = destino;
  this.dias = dias;
  this.precio = precio;
  this.mostrar = function () {
    console.log(`${this.origen}/${this.precio}`);
    console.log(`durante ${this.dias} dias: EUR${this.precio}`);
  };
}

let viaje1 = new Viaje("Barcelona", "Ibiza", 2, 112);
console.log(viaje1);
