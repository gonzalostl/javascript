let mensaje1 = "Escribe un número: ";
let numero = prompt(mensaje1);

if (numero <= 19) {
    document.write(19-numero);
} else {
    document.write((19-numero)*(-3));
}