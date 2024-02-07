//creamos el array
let valores = [];
let nulo = false
//creamo el while para que no guarde nulos
while (nulo == false) {
    nulo = true;
    //creamos un for para que transforme los valores y los guarde en el array
    for (i = 0; i < 6; i++) {

        let valor = prompt("introduce el valor " + (i + 1));
        if (valor === "null") {
            nulo = false;
        }
        if (Boolean(valor) == valor) {
            valor = Boolean(valor);
            valores.push(Boolean(valor));
        }
        if (Number(valor) == valor) {
            valor = Number(valor);
            valores.push(Number(valor));
        }
        else {
            valores.push(valor);
        }

    }
    //si es nulo elimina el array
    if (nulo == false) {
        for (i = 0; i < 6; i++) {
            
            valores.pop();
        }
    }
}


//creamos un array para dividir los elementos y trabajar con ellos
//dependiendo de lo que son
let cadenas = [];
let numeros = [];
let buleanos = [];
//guardamos los elementos en sus arrays correspondientes
for (i = 0; i < valores.length; i++) {

    if (typeof (valores[i]) == "string") {
        cadenas.push(valores[i]);
    }
    if (typeof (valores[i]) == "number") {
        numeros.push(valores[i]);
    }
    if (typeof (valores[i]) == "boolean") {
        buleanos.push(valores[i]);
    }

}

//sacamos la cadena mayor
if (cadenas[0].length < cadenas[1].length) {
    document.write("La cadena mayor es " + cadenas[1]);
}
if (cadenas[0].length > cadenas[1].length) {
    document.write("La cadena mayor es " + cadenas[0]);
}
if (cadenas[0].length == cadenas[1].length) {
    document.write("ambas cadenas son iguales");
}

//sacamos las operaciones
document.write("<br>La operacion AND es " + ((buleanos[0] && buleanos[1])) + " la operacion or es " + ((buleanos[0] || buleanos[1])));
//sacamos las operaciones con los numeros
document.write("<br>La suma de los numero es " + (numeros[0] + numeros[1])+" La resta de los numero es " + (numeros[0] - numeros[1]));

//creamos el nuevo array
let nuevo = []
//los añadimos ordenadamente usando for
for (i = 0; i < buleanos.length; i++) {
    nuevo.push([buleanos[i]]);
}
for (i = 0; i < cadenas.length; i++) {
    nuevo.push([cadenas[i]]);
}
for (i = 0; i < numeros.length; i++) {
    nuevo.push([numeros[i]]);
}
//sacamos por pantalla el nuevo array
document.write("<br> el nuevo array ordenado es: " + nuevo);
