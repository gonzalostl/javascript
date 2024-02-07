// generamos un numero aleatorio entre lo introducido
function numeroRamdom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// creamos un bombo de bingo con las 90 bolas
function crearBombo() {
    const bombo = [];
    for (let i = 1; i <= 90; i++) {
        bombo.push(i);
    }
    return bombo;
}


// creamos un carton de bigo
function crearCarton(bombo) {
    const carton = [];

    for (let i = 0; i < 4; i++) {
        const fila = Array.from({ length: 8 }, () => sacarBola(bombo));
        carton.push(fila);
    }

    return carton;
}

// generamos los 5 cartones
function generarCartones(bombo) {
    return Array.from({ length: 5 }, () => crearCarton(bombo));
}

// sacamos una bola del bombo y registramos los números sacados
function sacarBola(bombo) {
    const bolaIndex = numeroRamdom(0, bombo.length - 1);
    const numero = bombo.splice(bolaIndex, 1)[0];
    return numero;
}

//  comprobamos si un número está en un cartón
function comprobarCarton(numero, carton) {
    return carton.some(fila => fila.includes(numero));
}

//comprobamos si un número está en un cartón específico y actualizamos 
function compruebaNumero(numero, iCarton, cartones, aciertos) {
    const carton = cartones[iCarton];
    if (comprobarCarton(numero, carton)) {
        aciertos[iCarton]++;
    }
}

//  comprobar el cartón ganador
function compruebaGanador(aciertos) {
    return aciertos.findIndex(aciertos => aciertos === 32);
}

// el bingo
function bingo() {
    const bombo = crearBombo();
    const cartones = generarCartones([...bombo]); // Clonamos el bombo para evitar modificar el original
    const aciertos = [0, 0, 0, 0, 0];
    let cartonGanador;

    for (let i = 0; i < 90; i++) {
        const numero = sacarBola(bombo); // Se extrae un número del bombo

        // Se comprueba si el número está en algún cartón y se actualizan los aciertos
        for (let iCarton = 0; iCarton < cartones.length; iCarton++) {
            compruebaNumero(numero, iCarton, cartones, aciertos);
        }

        cartonGanador = compruebaGanador(aciertos); // Se verifica si hay un cartón ganador

        if (cartonGanador !== -1) {
            console.log(`El cartón ganador es ${cartonGanador + 1}`); // Se muestra el índice del cartón ganador
            console.log(cartones[cartonGanador]);
            return; // Se sale de la función si hay un ganador
        }
    }

    console.log("No hubo ganador en esta ronda.");
}

bingo(); 
