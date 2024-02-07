// Función para generar un número aleatorio entre un rango específico
function generarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para crear un bombo de bingo con números del 1 al 90
function crearBombo() {
    let bombo = [];
    for (let i = 1; i <= 90; i++) {
        bombo.push(i);
    }
    return bombo;
}

// Función para crear un cartón de bingo con 4 filas y 8 columnas
function crearCarton() {
    let bombo = crearBombo();
    let carton = [];

    for (let i = 0; i < 4; i++) {
        let fila = [];
        for (let j = 0; j < 8; j++) {
            let bolaIndex = generarNumero(0, bombo.length - 1);
            let numero = bombo[bolaIndex];
            fila.push(numero);
            bombo.splice(bolaIndex, 1);
        }
        carton.push(fila);
    }
    return carton;
}

// Función para generar cinco cartones de bingo
function generarCartones() {
    let cartones = [];
    for (let i = 0; i < 5; i++) {
        cartones.push(crearCarton());
    }
    return cartones;
}

// Función para sacar una bola del bombo y registrar los números sacados
function sacarBola(bombo) {
    let bolaIndex = generarNumero(0, bombo.length - 1);
    let numero = bombo[bolaIndex];
    bombo.splice(bolaIndex, 1);
    return numero;
}

// Función para comprobar si un número está en un cartón
function comprobarCarton(numero, carton) {
    for (let fila of carton) {
        for (let columna = 0; columna < fila.length; columna++) {
            if (fila[columna] === numero) {
                return true;
            }
        }
    }
    return false;
}

// Función para comprobar si un número está en un cartón específico y actualizar los aciertos
function compruebaNumero(numero, iCarton, cartones, aciertos) {
    let carton = cartones[iCarton];
    if (comprobarCarton(numero, carton)) {
        aciertos[iCarton] += 1;
    }
}

// Función para comprobar si un cartón ha alcanzado los 32 aciertos y devolver su índice
function compruebaGanador(cartones, aciertos) {
    for (i = 0; i < aciertos.length; i++) {
        if (aciertos[i] === 32) {
            return i;
        }
    }
}

// Función principal del juego de bingo
function bingo() {
    let bombo = crearBombo();
    let numeros = [];
    let cartones = generarCartones();
    let aciertos = [0, 0, 0, 0, 0];
    let encontrado = false;
    let cartonGanador;

    for (let i = 0; i < 90; i++) {
        let numero = sacarBola(bombo); // Se extrae un número del bombo
        numeros.push(numero); // Se agrega el número a la lista de números extraídos

        // Se comprueba si el número está en algún cartón y se actualizan los aciertos
        for (let iCarton = 0; iCarton < cartones.length; iCarton++) {
            compruebaNumero(numero, iCarton, cartones, aciertos);
        }



        cartonGanador = compruebaGanador(cartones, aciertos); // Se verifica si hay un cartón ganador

        if (cartonGanador !== undefined) {
            encontrado = true; // Si hay un ganador, se establece la bandera de encontrado a true
            break; // Se sale del bucle principal del juego
        }
    }

    console.log(numeros); // Se muestran los números extraídos
    console.log(`El cartón ganador es ${cartonGanador + 1}`); // Se muestra el índice del cartón ganador
    console.log(cartones[cartonGanador]);
}

bingo(); 