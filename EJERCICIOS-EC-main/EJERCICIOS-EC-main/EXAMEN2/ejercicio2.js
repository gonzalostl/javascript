//le pedimos que inserte la base i la guardamos
let baseIntro = prompt("inserte la base");
//guardamos el exponente cuando es positivo
let exponenteIntro = -1;
while (exponenteIntro < 0) {
  exponenteIntro = prompt("inserte el exponente POSITIVO");
}
//creamos la funcion
function potencia(base, exponente) {
  let resultado = 1;
  if (exponente === 0) {
    return resultado;
  } else {
    return base * potencia(base, exponente - 1);
  }
}

document.write(potencia(baseIntro, exponenteIntro));
