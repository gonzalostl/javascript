// Creo la clase Empresa
class Empresa {
    // Atributos
    codigo;
    hoteles;

    // Método constructor
    constructor(codigo, hoteles) {
        // Expresión regular para validar el código de empresa
        let regex = /^[A-Z][a-z]{2}-[0-9]{1,5}\.[^a-zA-Z0-9]$/;
        // Si el codigo dado no cumple las especificaciones necesarias, entonces lanzo un error y lo indico por consola
        if (!regex.test(codigo)) {
            throw new Error("El código recibido no sigue las especificaciones dadas. Debe empezar por una letra mayúscula y dos minúsculas, seguidas por un guión, luego tener un número de entre 1 y 5 dígitos, y finalmente un punto y un caracter especial.");
        }
        // Si llego a este punto se asume que el código es correcto, termino de construir la instancia de esta clase
        this.codigo = codigo;
        this.hoteles = hoteles;
    }

    // Método de consulta de hoteles por consola
    verHoteles() {
        let mensaje = "Hoteles manejados por esta empresa:";
        // Hago un recorrido de la lista de hoteles de la empresa
        for (let hotel of this.hoteles) {
            // Añado al mensaje el atributo nombre del hotel actual
            mensaje += "\n" + hotel.nombre;
        }
        // Muestro el mensaje por pantalla
        console.log(mensaje);
    }

    // Método para comprobar si algún hotel existe en la lista de hoteles
    hayHotel(nombre) {
        // Asumo que no existe
        let existe = false;
        // Hago un recorrido de la lista de hoteles de la empresa
        for (let hotel of this.hoteles) {
            // Si en algún momento el atributo nombre del hotel actual es igual que el nombre recibido, entonces sí existe
            if (hotel.nombre == nombre) existe = true;
        }
        if (existe) {
            console.log("Esta empresa maneja el hotel " + nombre + ".");
        } else {
            console.log("Esta empresa no maneja el hotel " + nombre + ".")
        }
    }
}

// Creo la clase Hotel
class Hotel {
    // Atributos
    // NOTA: Hace falta que sean privados para la implementación de getters y setters (sin los modificadores # o _ se da un caso de iteración infinita al llamar una y otra vez al mismo método)
    #nombre;
    #ubicacion;
    #numEstrellas;
    #precioHabitacion;
    #numHabitacionDoble;
    #reservas;  // Array que contiene las reservas del hotel. Una reserva es un array en sí de forma [fecha, cliente] donde fecha es tipo Date y cliente es tipo Cliente
    #rangoEdad; // Array [edadMinima, edadMaxima]

    // Getters y setters
    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get ubicacion() {
        return this.#ubicacion;
    }

    set ubicacion(ubicacion) {
        this.#ubicacion = ubicacion;
    }

    get numEstrellas() {
        return this.#numEstrellas;
    }

    set numEstrellas(numEstrellas) {
        this.#numEstrellas = numEstrellas;
    }

    get precioHabitacion() {
        return this.#precioHabitacion;
    }

    set precioHabitacion(precioHabitacion) {
        this.#precioHabitacion = precioHabitacion;
    }

    get numHabitacionDoble() {
        return this.#numHabitacionDoble;
    }

    set numHabitacionDoble(numHabitacionDoble) {
        this.#numHabitacionDoble = numHabitacionDoble;
    }

    get reservas() {
        return this.#reservas;
    }

    set reservas(reservas) {
        this.#reservas = reservas;
    }

    get rangoEdad() {
        return this.#rangoEdad;
    }

    set rangoEdad(rangoEdad) {
        thiis.#rangoEdad = rangoEdad;
    }

    // Método constructor
    constructor(nombre, ubicacion, numEstrellas, precioHabitacion, numHabitacionDoble, rangoEdad, reservas) {
        this.#nombre = nombre;
        this.#ubicacion = ubicacion;
        this.#numEstrellas = numEstrellas;
        this.#precioHabitacion = precioHabitacion;
        this.#numHabitacionDoble = numHabitacionDoble;
        this.#rangoEdad = rangoEdad;
        this.#reservas = reservas;
    }

    // Método para hacer reserva, recibe un objeto tipo Cliente y un objeto tipo Date
    hacerReserva(fecha, cliente) {
        // Compruebo que es posible hacer la reserva
        let puedeReservar = true;
        // Primero veo que el cliente esté dado de alta
        if (!cliente.alta) puedeReservar = false;
        // Luego veo que el cliente tenga edad válida
        if (cliente.edad < this.#rangoEdad[0] || this.#rangoEdad < cliente.edad) puedeReservar = false;
        // Luego verifico que hayan habitaciones disponibles
        let numReservas = 0;
        // Recorrido para contar cuántas reservas hay en la fecha especificada
        for (reserva of this.#reservas) {
            // Si la fecha es la misma, incremento numReservas (reserva ~= [fecha, cliente])
            if (reserva[0] == fecha) numReservas++;
        }
        // Verifico si el número de reservas es igual al de habitaciones disponibles, si no lo es puedo hacer la reserva sin problema
        if (numReservas == this.#numHabitacionDoble) {
            puedeReservar = false;
        } 
        // Muestro por pantalla si se hace la reserva correctamente o no
        if (puedeReservar) {
            this.#reservas.push([fecha, cliente]);
            console.log("Se ha hecho la reserva correctamente.");
        } else {
            console.log("No se ha podido hacer la reserva.");
        }
    }

    // Método para anular la reserva de una habitación según la fecha y cliente (asumo que un cliente nunca tendrá más de una habitación reservada en cualquier momento en este hotel)
    anularReserva(fecha, cliente) {
        // Usando el método filter elimino la reserva del cliente
        // Elimino todas las reservas que tengan el cliente y fecha especificados (asumo también que la reserva que se busca sí existe)
        this.#reservas = this.#reservas.filter((reserva) => reserva[0] != fecha && reserva[1] != cliente);
        console.log("Reserva anulada correctamente.")
    }

    // Método para consultar qué clientes tienen reservadas habitaciones en una fecha dada
    comprobarReservas(fecha) {
        let mensaje = "Reservas para la fecha " + fecha;
        // Recorrido de las reservas
        for (let reserva of this.#reservas) {
            // Verifico si la reserva actual es de la fecha dada
            if (reserva[0] == fecha) mensaje += "\n" + "Fecha: " + reserva[0] + ", Cliente: " + reserva[1].nombre + " " + reserva[1].apellidos + ".";
        }
        console.log(mensaje);
    }

    // Método para comprobar cuántas habitaciones hay disponibles en una fecha dada
    comprobarHabitaciones(fecha) {
        // Asumo que no hay reservas
        let numHabitacionDisponible = this.#numHabitacionDoble;
        // Recorrido de las reservas
        for (let reserva of this.#reservas) {
            //Por cada reserva que haya para la fecha especificada resto uno al número de habitaciones disponibles
            if (reserva[0] == fecha) numHabitacionDisponible--;
        }
        // Muestro por pantalla
        console.log("Para la fecha dada hay " + numHabitacionDisponible + " habitaciones disponibles.");
    }

    // Método para obtener el precio final de una reserva
    comprobarPrecioFinal() {
        let precioFinal = 0;
        switch (this.#numEstrellas) {
            case 0:
                precioFinal = this.#precioHabitacion;
            case 1:
                precioFinal = this.#precioHabitacion * 1.2;
                break;
            case 2:
                precioFinal = this.#precioHabitacion * 1.5;
                break;
            case 3:
                precioFinal = this.#precioHabitacion * 1.7;
                break;
            case 4:
                precioFinal = this.#precioHabitacion * 1.10;
                break;
            case 5:
                precioFinal = this.#precioHabitacion * 1.15;
                break;
        }
        // Muestro por pantalla el precio final
        console.log("El precio final de la reserva es: " + precioFinal + ".");
    }
}

// Creo la clase Cliente
class Cliente {
    // Atributos
    nombre;
    apellidos;
    dni;
    edad;
    alta;   // Boolean que indicará si el cliente está o no dado de alta

    // Constructor 
    constructor(nombre, apellidos, dni, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.edad = edad;
    }

    // Método para dar de alta a este cliente
    darAlta() {
        this.alta = true;
    }

    // Método para dar de baja al cliente
    darBaja() {
        this.alta = false;
    }
}

// Seguimiento de particularidades indicadas en el enunciado
let hotel1 = new Hotel("hotel1", "cadiz", 2, 10, 10, [18, 25], []);
let hotel2 = new Hotel("hotel2", "cadiz", 2, 20, 10, [26, 35], []);
let hotel3 = new Hotel("hotel3", "cadiz", 2, 30, 20, [36, 80], []);
let empresaMario = new Empresa("Cad-75643./", [hotel1, hotel2, hotel3]);

// Prueba de métodos relevantes
empresaMario.verHoteles();
empresaMario.hayHotel("Hotel el puerto");
empresaMario.hayHotel("hotel2");

// Instancio nuevo cliente
let diego = new Cliente("Diego", "Cadenillas Nájar", "Y5560724M", 21);
// Doy de alta
diego.darAlta();
// Fecha de hoy
let fecha = new Date();
// Reserva en hotel con edad válida
hotel1.hacerReserva(fecha, diego);
// Reserva en hotel con edad inválida
hotel2.hacerReserva(fecha, diego);
// Consulto las habitaciones disponibles para el hotel en fecha
hotel1.comprobarHabitaciones(fecha);
// Consulto los clientes que han reservado en una fecha
hotel1.comprobarReservas(fecha);
// Precio final
hotel1.comprobarPrecioFinal();
// Anular reserva
hotel1.anularReserva(fecha, diego);
// Dar de baja
diego.darBaja();