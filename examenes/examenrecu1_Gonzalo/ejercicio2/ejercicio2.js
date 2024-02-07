/*Realiza un programa en JavaScript que contenga un menú con 3 opciones:
Opción 1: Suma recursiva. Donde el usuario introduce 2 número a sumar por teclado.
Para ello vamos a estipular que cualquier número sumado a otro es la suma del primer
número más 1, más el segundo número decrementado en 1
Opción 2: Cadena con más vocales. Escribe una función flecha que reciba dos
cadenas que introduce el usuario por teclado y devuelva la cadena que contiene más vocales
Opción 3: Salir. Para ello debe mostrar un mensaje por la web o la consola informativo
de que el programa ha terminado y el resultado de una función con el número de veces 
que se ha elegido una opción antes de salir.*/

//Hacemos la funcion de la suma recursiva
function sumaRecursiva(num1, num2) {
  if (num2 === 0) {
    return num1;
  } else {
    // Aquí sumo el primer número más 1 y el segundo número decrementado en 1
    return sumaRecursiva(num1 + 1, num2 - 1);
  }
}

//creo la funcion flecha
const cadenaConMasVocales = (cadena1, cadena2) => {
  const contVocales = (cadena) => {
    return cadena
      .toLowerCase()
      .split("")
      .filter((char) => "aeiou".includes(char)).length;
  };

  const vocalesCadena1 = contVocales(cadena1);
  const vocalesCadena2 = contVocales(cadena2);

  return vocalesCadena1 > vocalesCadena2 ? cadena1 : cadena2;
};

// esto sirve para contar la cantidad de veces que se elige cada opción
let contadorOpciones = { 1: 0, 2: 0, 3: 0 };

//creo la funcion opcion que me va ha permitir ejecutar mis opciónes
function ejecutarOpcion(opcion) {
  contadorOpciones[opcion]++; // Esto es para incrementar el contador de la opción seleccionada

  switch (opcion) {
    case 1:
      //Suma recursiva
      var numero1 = parseInt(prompt("Introduce el primer número:"));
      var numero2 = parseInt(prompt("Introduce el segundo número:"));

      var resultado = sumaRecursiva(numero1, numero2);

      alert("El resultado es: " + resultado);
      break;

    case 2:
      //Cadena que contenga mas vocales
      var cadena1 = prompt("Introduce la primera cadena:");
      var cadena2 = prompt("Introduce la segunda cadena:");

      var resultCadenas = cadenaConMasVocales(cadena1, cadena2);

      alert("La cadena que contiene más vocales es: " + resultCadenas);
      break;

    case 3:
      // Salir
      alert("El programa ha finalizado");
      console.log("Contador de opciones:", contadorOpciones);
      break;

    default:
      alert("Opción inválida.");
  }
}

// Bucle para seleccionar opciones hasta que el usuario elija salir
do {
  // Hacemos un menú para poder elegir
  var opcionSeleccionada = parseInt(
    prompt("Selecciona una opción:\n1. Suma recursiva\n2. Cadena con más vocales\n3. Salir")
  );

  // Ejecución de la opción que hemos elegido
  ejecutarOpcion(opcionSeleccionada);
} while (opcionSeleccionada !== 3);
