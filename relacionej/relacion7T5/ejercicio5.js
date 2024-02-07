/*Crea una clase donde demuestres la utilidad del objeto this*/

class Jugador {
  constructor(nombre, equipo) {
    this.nombre = nombre;
    this.equipo = equipo;
  }

  mostrarInformacion() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Equipo: ${this.equipo}`);
  }

  mostrarMensaje() {
    setTimeout(function () {
      console.log(`Mi nombre es ${this.nombre}`);
    }, 1000);
  }

  mostrarMensajeArrow() {
    setTimeout(() => {
      console.log(`Mi nombre es ${this.nombre}`);
    }, 1000);
  }
}

let jugador = new Jugador("Carlos", "Real Madrid");
jugador.mostrarInformacion();
jugador.mostrarMensaje();
jugador.mostrarMensajeArrow();
