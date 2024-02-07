class Empresario {
  constructor(codigo, listaDeHoteles = []) {
    //creo la expresion regular y la valido
    const codRegex = /^[A-Z]([a-zA-Z]){2}-\d{1,5}\.\W{1}$/;
    if (!codRegex.test(codigo)) {
      console.log("codigo erroneo ");
      return;
    }
    this._codigo = codigo;
    this._listaDeHoteles = listaDeHoteles;
  }
  listaDeHoteles() {
    //devuelvo la lista de hoteles
    return this._listaDeHoteles;
  }
  comprobarHotel(hotel) {
    //creo un bucle y comparo los hoteles si lo encuentra lo devuelve si no devuuelve lo contrario
    for (let i = 0; i < this._listaDeHoteles.length; i++) {
      if (this._listaDeHoteles[i] == hotel) {
        return "Si se encuentra el hotel";
      }
    }
    return "no se enceuntra el hotel";
  }
}

//creo la clase hoteles
class Hoteles {
  //costructor
  constructor(nombre, ubicacion, estrellas, precio, nDobles, reservasFecha) {
    this._nombre = nombre;
    this._ubicacion = ubicacion;
    this._estrellas = estrellas;
    this._precio = precio;
    this._nDobles = nDobles;
    this._reservasFecha = reservasFecha || [];
  }
  //getters y setters
  get nombre() {
    return this._nombre;
  }
  set nombre(value) {
    this._nombre = value;
  }
  get ubicacion() {
    return this._ubicacion;
  }
  set ubicacion(value) {
    this._ubicacion = value;
  }
  get estrellas() {
    return this._estrellas;
  }
  set estrellas(value) {
    this._estrellas = value;
  }
  get precio() {
    return this._precio;
  }
  set precio(value) {
    this._precio = value;
  }
  get nDobles() {
    return this._nDobles;
  }
  set nDobles(values) {
    this._nDobles = values;
  }
  get reservasFecha() {
    return this._reservasFecha;
  }
  set reservasFecha(value) {
    this._reservasFecha = value;
  }

  reservarHabitacion(fecha, cliente) {
    //creo un objeto reserva para guardar las reservas con la fecha y el nombre del cliente
    const reserva = { fecha, cliente };
    //guardo la reserva en el array de reservas
    this._reservasFecha.push(reserva);
    //saco por pantalla que se ha guardado correctamente
    console.log(
      `Habitación reservada para ${cliente} en ${this._nombre} el ${fecha}`
    );
  }
  consultarClientes(fecha) {
    //filtro las reservas por la fecha indicada
    let reservasEnFecha = this._reservasFecha.filter(
      (reserva) => reserva.fecha === fecha
    );
    // obtengo una lista de los clientes del hotel
    let clientesEnFecha = reservasEnFecha.map((reserva) => reserva.cliente);
    //saco por pantalla los clientes
    console.log(
      `Clientes en ${this._nombre} el ${fecha}: ${clientesEnFecha.join(", ")}`
    );
  }
  obtenerPrecio() {
    //guardo el aumento segun el procentaje
    let porcentajeAumento;
    switch (this._estrellas) {
      case 1:
        porcentajeAumento = 2;
        break;
      case 2:
        porcentajeAumento = 5;
        break;
      case 3:
        porcentajeAumento = 7;
        break;
      case 4:
        porcentajeAumento = 10;
        break;
      case 5:
        porcentajeAumento = 15;
        break;
      default:
        porcentajeAumento = 0;
        break;
    }
    //creo el aumento
    let aumentoPorEstrellas = (this._precio * porcentajeAumento) / 100;
    //se lo añado al precio
    let precioConAumento = this._precio + aumentoPorEstrellas;
    //saco por pantalla el precio total
    console.log(`Precio en ${this._nombre}: ${precioConAumento} €`);
  }
}

class Clientes {
  constructor(nombre, apellidos, DNI, edad) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._DNI = DNI;
    this._edad = edad;
  }
  alta() {
    return `${this._nombre} esta dado de alta`;
  }
  baja() {
    return `${this._nombre} esta dado de baja`;
  }
}

let mario = new Empresario("Cad-75643./", ["hotel1", "hotel2", "hotel3"]);
console.log(mario.listaDeHoteles());
console.log(mario.comprobarHotel("Hotel el Puerto"));

let hotel1 = new Hoteles("hotel1", "cadiz", 3, 39, 10, 0);
let hotel2 = new Hoteles("hotel1", "jerez", 2, 29, 10, 0);
let hotel3 = new Hoteles("hotel1", "chiclana", 4, 69, 20, 0);

let cliente1 = new Clientes("juan", "perez", "34564345i", 23);
console.log(cliente1.alta());
hotel1.reservarHabitacion("2024-01-21", "Juan Perez");
hotel1.consultarClientes("2024-01-21");
hotel1.obtenerPrecio();
console.log(cliente1.baja());
