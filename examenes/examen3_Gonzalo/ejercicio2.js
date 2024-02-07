/*Diseñar mediante clases el siguiente problema. En esta ciudad hay Empresarios que almacenan
una lista de Hoteles y el código de su empresa (deberás controlar con expresions regulares 
que el valor del código es correcto: se compone de 3 letras empezando únicamente la primera 
por mayúscula, seguído de un guión, seguido de un número con una longitud de 1 a 5, y algún
carácter especial comp fin; por ejemplo "Cad-75643./"). De las empresas podremos consultar
la lista de hoteles y comprobar si contiene uno en particular. De los hoteles sabremos su
nombre, ubicación, el número de estrellas, el precio de la habitación, el número de 
habitaciones doble que tiene, y las reservas para una determinada fecha por un cliente.
Además de los métodos get y set de los atributos, podrás reservar una Habitación para una
fecha, anular una reserva de habitación para una fecha, consultar los clientes que tienen
reserva para una fecha y conocer las habitaciones disponibles para una fecha, y obtener el
precio final de una reserva que dependerá del precio y el número de estrellas (una estrella le
suma al precio un 2%, dos estrellas un 5%, tres estrellas un 7%, cuatro estrellas un 10% y 5
estrellas un 15%). De cada cliente se debe saber su nombre, apellidos, DNI y edad. Los clientes
se podrán dar de alta o de baja.

En particular el empresario "Mario" con código "Cad-/5643./" tiene 3 hoteles en la ciudad
hotel1, hotel2 y hotel3. En cada hotel tiene 10 habitaciones, excepto hotel3 que es de 20
habitaciones. Siendo su ubicación, estrellas y precios valores que tu decides y comienzan todos
sin reservas. Los requisitos para que un cliente pueda gestionar una nueva reserva de una habitación
en hotel1 es una edad de 18-25(inclusive), para hotel2 es una edad de 26-35(inclusive), para
hotel3 es una edad de 36-80(inclusive).

Funciones que se deben realizar:
- Crear un empresario con la lista de hoteles.
-Consultar la lista de hoteles para un empresario.
-Comprobar si el empresario tiene el hotel con nombre "Hotel el puerto".
-Crear los hoteles requeridos.
-Dar de alta al cliente.
-Reservar una habitación para un cliente (cumpliendo la edad) en una fecha.
-Intentar reservar una habitación para un cliente (sin cumplir la edad) en una fecha.
-Consultar las habitaciones libre para un hotel en un fecha.
-Consultar los clientes que han reservado para una fecha.
-Obtener el precio para una reserva.
-Anular una reserva de un cliente para una fecha.
-Dar de baja al cliente.
*/

class Cliente {
  constructor(nombre, apellidos, dni, edad) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni;
    this.edad = edad;
  }
}

class Hotel {
  constructor(nombre, ubicacion, estrellas, precioHabitacion, numHabitaciones) {
    this.nombre = nombre;
    this.ubicacion = ubicacion;
    this.estrellas = estrellas;
    this.precioHabitacion = precioHabitacion;
    this.numHabitaciones = numHabitaciones;
    this.reservas = {};
  }

  reservarHabitacion(cliente, fecha) {
    if (this.validarEdadCliente(cliente)) {
      if (!this.reservas[fecha]) {
        this.reservas[fecha] = [];
      }
      if (this.reservas[fecha].length < this.numHabitaciones) {
        const reserva = {
          cliente: cliente,
          fecha: fecha,
          precioFinal: this.calcularPrecioFinal(),
        };

        this.reservas[fecha].push(reserva);
        console.log(
          `Reserva de habitación para ${cliente.nombre} en ${this.nombre} para el ${fecha}.`
        );
      } else {
        console.log(`No hay ninguna habitaciones disponible en ${this.nombre} para el ${fecha}.`);
      }
    } else {
      console.log(
        "El cliente no cumple con la edad requerida para realizar una reserva en este hotel."
      );
    }
  }

  calcularPrecioFinal() {
    let precioFinal = this.precioHabitacion;

    switch (this.estrellas) {
      case 1:
        precioFinal *= 1.02;
        break;
      case 2:
        precioFinal *= 1.05;
        break;
      case 3:
        precioFinal *= 1.07;
        break;
      case 4:
        precioFinal *= 1.1;
        break;
      case 5:
        precioFinal *= 1.15;
        break;
    }

    return precioFinal;
  }

  validarEdadCliente(cliente) {
    if (this.nombre == "hotel1" && cliente.edad >= 18 && cliente.edad <= 25) {
      return true;
    } else if (this.nombre == "hotel2" && cliente.edad >= 26 && cliente.edad <= 35) {
      return true;
    } else if (this.nombre == "hotel3" && cliente.edad >= 36 && cliente.edad <= 80) {
      return true;
    }
    return false;
  }

  consultarHabitacionesLibres(fecha) {
    if (this.reservas[fecha]) {
      const habitsReserv = this.reservas[fecha].length;
      const habitsLibres = this.numHabitaciones - habitsReserv;
      return habitsLibres > 0 ? habitsLibres : 0;
    } else {
      return this.numHabitaciones;
    }
  }

  consultarClientesReservados(fecha) {
    return this.reservas[fecha] ? this.reservas[fecha].map((reserva) => reserva.cliente) : [];
  }

  anularReserva(cliente, fecha) {
    if (this.reservas[fecha]) {
      const index = this.reservas[fecha].findIndex((reserva) => reserva.cliente == cliente);
      if (index != -1) {
        const reservaAnulada = this.reservas[fecha].splice(index, 1)[0];
        console.log(`Reserva anulada para ${cliente.nombre} en ${this.nombre} para el ${fecha}.`);
        return reservaAnulada;
      } else {
        console.log(
          `No se encontró ninguna reserva para ${cliente.nombre} en ${this.nombre} para el ${fecha}.`
        );
        return null;
      }
    } else {
      console.log(`No hay ninguna reserva para el ${fecha} en ${this.nombre}.`);
      return null;
    }
  }

  darDeBajaCliente(cliente) {
    for (const fecha in this.reservas) {
      const index = this.reservas[fecha].findIndex((reserva) => reserva.cliente === cliente);
      if (index !== -1) {
        this.reservas[fecha].splice(index, 1);
        console.log(`El cliente ${cliente.nombre} se ha dado de baja en ${this.nombre}.`);
      }
    }
  }
}

class Empresario {
  constructor(codigo, hoteles) {
    if (/^[A-Z]{3}-\d{1,5}\./.test(codigo)) {
      this.codigo = codigo;
    } else {
      throw new Error(
        "El código de la empresa no cumple con los requisitos del formato requerido."
      );
    }

    this.hoteles = hoteles;
  }

  consultarHoteles() {
    return this.hoteles.map((hotel) => hotel.nombre);
  }

  tieneHotel(nombreHotel) {
    return this.hoteles.some((hotel) => hotel.nombre === nombreHotel);
  }
}

const cliente1 = new Cliente("Gonzalo", "Sánchez", "73437476Z", 20);
const cliente2 = new Cliente("Moisés", "Moreno", "82738223F", 21);

const hotel1 = new Hotel("Hotel el puerto", "Ciudad A", 5, 80, 15);
const hotel2 = new Hotel("Hotel vallecas", "Ciudad B", 3, 150, 10);

const empresario1 = new Empresario("HGS-98656", [hotel1, hotel2]);

console.log(empresario1.consultarHoteles());

console.log(empresario1.tieneHotel("Hotel el puerto"));

hotel1.reservarHabitacion(cliente1, "2023-01-06");
hotel2.reservarHabitacion(cliente2, "2024-07-08");

console.log(
  `Habitaciones libres en ${hotel1.nombre} para el 2023-01-06: ${hotel1.consultarHabitacionesLibres(
    "2023-01-06"
  )}`
);
console.log(
  `Habitaciones libres en ${hotel2.nombre} para el 2024-07-08: ${hotel2.consultarHabitacionesLibres(
    "2024-07-08"
  )}`
);

console.log(
  `Clientes reservados en ${hotel1.nombre} para el 2023-01-06: ${hotel1.consultarClientesReservados(
    "2023-01-06"
  )}`
);
console.log(
  `Clientes reservados en ${hotel2.nombre} para el 2024-07-08: ${hotel2.consultarClientesReservados(
    "2024-07-08"
  )}`
);

hotel1.anularReserva(cliente1, "2023-01-06");

empresario1.hoteles.forEach((hotel) => hotel.darDeBajaCliente(cliente1));
