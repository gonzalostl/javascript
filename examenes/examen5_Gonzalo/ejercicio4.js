async function obtenerCandidatos() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=3");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error al obtener candidatos:", error);
  }
}

function infoCandidato(candidato) {
  const candidatoDiv = document.getElementById("candidatos");
  candidatoDiv.innerHTML = `
            <p>Nombre: ${candidato.name.first} ${candidato.name.last}</p>
            <p>Edad: ${candidato.dob.age}</p>
            <p>Género: ${candidato.gender}</p>
            <p>Email: ${candidato.email}</p>
            <p>Teléfono: ${candidato.phone}</p>
            <p>Ciudad: ${candidato.location.city}</p>
            <img src="${candidato.picture.large}" alt="Foto de ${candidato.name.first}">
        `;
}

async function mostrarCandidatos() {
  const candidatos = await obtenerCandidatos();

  candidatos.forEach((candidato, index) => {
    const boton = document.createElement("button");
    boton.textContent = `Candidato ${index + 1}`;
    boton.addEventListener("click", () => infoCandidato(candidato));
    document.body.appendChild(boton);
  });
}

mostrarCandidatos();
