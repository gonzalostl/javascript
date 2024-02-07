let mensaje1 = "Introduce una frase : ";
let frase = prompt(mensaje1);

function CaracteresNoEspanol(arr) {
  const alfabeto = new Set("abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZáéíóúñÁÉÍÓÚÑ");

  const resultado = arr.map((cadena) =>
    cadena
      .split("")
      .filter((caracter) => !alfabeto.has(caracter))
      .join("")
  );

  return resultado;
}

const arrayDeCadenas = [frase];
const resultadoFiltrado = CaracteresNoEspanol(arrayDeCadenas);

document.write(resultadoFiltrado);
