
var array = [1, 5, 3, 5, 2, 3, 4, 5, 2, 5, 5];
function NumMasfrecuente (array2) {
    let Masfrecuente;
    let maxFrecuencia = 0;
    let elemento = {};

    array2.forEach(item => {
        elemento[item] = (elemento[item] || 0) + 1;
        if (elemento[item] > maxFrecuencia) {
            maxFrecuencia = elemento[item];
            Masfrecuente = item;
        }
    });

    return Masfrecuente;
}

let result = NumMasfrecuente (array);
document.write("El elemento más frecuente en esta array es: " + result);