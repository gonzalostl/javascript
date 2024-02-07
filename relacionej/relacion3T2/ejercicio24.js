let cadena = "Hola, buenas dias. Hola buenas tardes. Hola, buenas noches";
let subcadena = "buenas";

function Apariciones(cadena, subcadena) {
    if (subcadena.length <= 0) {
        return null;
    }

    let contador = 0;
    let posicion = 0;
    while (true) {
        posicion = cadena.indexOf(subcadena, posicion);
        if (posicion >= 0) {
            contador++;
            posicion += subcadena.length;
        } else {
            break;
        }
    }
    return contador;
}



let resultado = Apariciones(cadena, subcadena);
document.write("La subcadena "+ subcadena + " aparece " + resultado + " veces en la cadena ");