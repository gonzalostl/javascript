function realizarAccion1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.write("10 + 5 <br>");
      resolve("15");
    }, 1000);
  });
}

function realizarAccion2(resultadoAccion1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.write("Sumar 5 a la operación 1: ", resultadoAccion1, "<br>");
      resolve("20");
    }, 1000);
  });
}

function realizarAccion3(resultadoAccion2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.write("Restar 10 a la operación 2: ", resultadoAccion2, "<br>");
      resolve("10");
    }, 1000);
  });
}

realizarAccion1()
  .then((resultadoAccion1) => realizarAccion2(resultadoAccion1))
  .then((resultadoAccion2) => realizarAccion3(resultadoAccion2))
  .then((resultadoAccion3) => {
    document.write("Resultado final: ", resultadoAccion3);
  })
  .catch((error) => {
    console.error("Se produjo un error:", error);
  });
