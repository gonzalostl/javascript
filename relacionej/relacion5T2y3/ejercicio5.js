function eliminarNoDup(arr) {
    let contador = {};
    let resultado = [];

    
    arr.forEach(item => {
        if (contador[item]) {
            contador[item] += 1;
        } else {
            contador[item] = 1;
        }
    });

    
    arr.forEach(item => {
        if (contador[item] > 1) {
            resultado.push(item);
        }
    });

    return resultado;
}


let array = [1, 2, 4, 3, 4, 5, 7, 6, 7, 3];
let resultado = eliminarNoDup(array);
document.write(resultado);