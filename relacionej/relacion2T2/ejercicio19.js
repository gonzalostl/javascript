let mensaje1 = "Escribe un número: ";
let numero1 = prompt(mensaje1);

let mensaje2 = "Escribe otro número: ";
let numero2 = prompt(mensaje2);

if ((numero1 || numero2) > 49 && (numero1 || numero2) < 100){
    document.write("verdadero");
}