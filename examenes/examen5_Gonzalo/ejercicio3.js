function precalentarHorno(temperaturaDeseada) {
  return new Promise((resolve) => {
    const tiempoPrecalentado = Math.floor(temperaturaDeseada / 50) * 3;
    setTimeout(() => {
      console.log(`Temperatura horno: ${temperaturaDeseada}°C`);
      resolve();
    }, tiempoPrecalentado * 1000);
  });
}

function elegirIngredientes() {
  return new Promise((resolve) => {
    const ingredientes = prompt(
      "Introduce los ingredientes que desees para la pizza (separalos con una coma):"
    ).split(",");
    console.log(`Ingredientes seleccionados: ${ingredientes.join(", ")}`);
    resolve(ingredientes);
  });
}

function hacerPizza(ingredientes) {
  return new Promise((resolve) => {
    const pizza = {
      nombre: "Pizza Lepi",
      ingredientes: ingredientes,
      tiempoDeHorneado: 5,
    };
    console.log(pizza);
    resolve(pizza);
  });
}

function hornearPizza(pizza) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Pizza puesta en el molde y preparada para meterla en el horno.`);
      resolve();
    }, pizza.tiempoDeHorneado * 1000);
  });
}

function esperarHorno() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("¡Ring! ¡Ring! El horno esta listo.");
      resolve();
    }, 2000);
  });
}

async function main() {
  try {
    const temperaturaDeseada = 200;
    await precalentarHorno(temperaturaDeseada);

    const ingredientes = await elegirIngredientes();
    const pizza = await hacerPizza(ingredientes);

    await hornearPizza(pizza);
    await esperarHorno();

    console.log("Pizza terminada ¡Disfrutala! ;)");
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

main();
