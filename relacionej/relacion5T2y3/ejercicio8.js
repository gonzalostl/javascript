let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


let dniNum= parseInt(prompt("Introduce tu número de DNI "));


if (dniNum < 0 || dniNum > 99999999 || isNaN(dniNum)) {
    document.write("El número proporcionado no es válido.");
} else {
   
    let resto = dniNum % 23;
    let letraCalculada = letras[resto];

   
    let letraUsuario = prompt("Introduce la letra de tu DNI ");

    
    if (letraUsuario !== letraCalculada) {
        document.write("La letra que has indicado no es correcta.");
    } else {
        document.write("El DNI es correcto.");
    }
}