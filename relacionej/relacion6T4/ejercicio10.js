let mensaje = "Introduce un número";
let numero = prompt(mensaje);


function esPrimo(numero) {
    if (numero < 2) {
        return false; 
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i == 0) {
            return false; 
        }
    }

    return true; 
}


if (esPrimo(numero)) {
    document.write(numero + " es un número primo");
} else {
    document.write(numero + " no es un número primo");
}