//le pedimos al usuario que inserte el numero del dni
let mensaje = "inserte el NUMERO del DNI";
//guardamos la variable
let num = prompt(mensaje);
//le pedimos al usuario que inserte la letra del dni
let mensaje2 = "inserte la letra del DNI";
//guardamos la variable
let letra = prompt(mensaje2);
//la ponemos en mayúscula
letra = letra.toUpperCase();
//guardamos el array con las letras
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
//si el número es menor que 0 o mayor que 99999999 muestra el mensaje
if (num < 0 || num > 99999999) {
    document.write("El número ingresado es erróneo ");
}
//si esta bien introducido
else {
    //calcula el resto 
    let resto = num % 23;
    //lo compara con la letra y si es correcto lo saca por pantalla
    if (letras[resto] == letra) {
        document.write("El número y la letra del dni son correctos");
    }
    // si es incorrecto lo saca por pantalla 
    else {
        document.write("La letra del dni no es correcta");
    }
}