
// le pedimos que inserte un numero impar
let numero = parseInt(prompt("Por favor, ingrese un número impar:"));

//verificamos que el numero es impar
if (numero % 2 === 0) {
    document.write("El número ingresado no es impar. Por favor, ingrese un número impar.");
} else {
    //con un for creamos la x
    for (let i = 0; i < numero; i++) {
        for (let j = 0; j < numero; j++) {
            if (i === j || j === numero - 1 - i) {
                document.write("x");
            } 
            else {
                //esto es para que saque por pantalla un espacio
                document.write("&nbsp");
            }
        }
        document.write("<br>");
    } 
}





