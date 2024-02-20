async function fetchDatos(url) {
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  return datos;
}

async function getInfo() {
  const personData = await fetchDatos("https://swapi.dev/api/people/1/");
  const planetData = await fetchDatos("https://swapi.dev/api/planets/1/");
  const starshipData = await fetchDatos("https://swapi.dev/api/starships/1/");

  const htmlContent = `
        <div style="display: flex; justify-content: space-around;">
            <div style="flex: 1;">
                <h2>Person</h2>
               <pre> ${JSON.stringify(personData, null, 1)} </pre>
            </div>
            <div style="flex: 1;">
                <h2>Planet</h2>
                <pre> ${JSON.stringify(planetData, null, 1)}</pre>
            </div>
            <div style="flex: 1;">
                <h2>Starship</h2>
                <pre> ${JSON.stringify(starshipData, null, 1)}</pre>
            </div>
        </div>
    `;

  document.getElementById("app").innerHTML = htmlContent;
}

getInfo();
