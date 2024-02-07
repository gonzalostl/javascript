let mensaje1 = "Escribe un número: ";
let numero = prompt(mensaje1);

if (numero <= 13) {
    document.write(13-numero);
} else {
    document.write((13-numero)*(-2));
}