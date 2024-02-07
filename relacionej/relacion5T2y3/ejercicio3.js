let array = [1, 2, 3, 3, 4, 5, 5];
function eliminarDup(array) {
    let array2 = [];
    for (var i = 0; i < array.length; i++) {
        if (array2.indexOf(array[i]) == -1) {
            array2.push(array[i]);
        }
    }
    return array2;
}


let arraySinDup = eliminarDup(array);
document.write(arraySinDup);