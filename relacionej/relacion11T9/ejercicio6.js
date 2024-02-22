document.addEventListener("DOMContentLoaded", () => {
  fetch("curriculum.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      return response.json();
    })
    .then((data) => {
      mostrarCurriculum(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  function mostrarCurriculum(curriculum) {
    const contenido = document.getElementById("contenido");

    contenido.innerHTML += `<h2>${curriculum.nombre}</h2>`;
    contenido.innerHTML += `<h3>${curriculum.titulo}</h3>`;

    contenido.innerHTML += `<p>${curriculum.resumen}</p>`;

    contenido.innerHTML += `<div class="experiencia"><h2>Experiencia Laboral</h2><ul>`;
    curriculum.experiencia.forEach((item) => {
      contenido.innerHTML += `<li><strong>${item.puesto}</strong> - ${item.empresa}, ${item.periodo}<br>${item.descripcion}</li>`;
    });
    contenido.innerHTML += `</ul></div>`;

    contenido.innerHTML += `<div class="educacion"><h2>Educación</h2><ul>`;
    curriculum.educacion.forEach((item) => {
      contenido.innerHTML += `<li><strong>${item.titulo}</strong> - ${item.institucion}, ${item.periodo}</li>`;
    });
    contenido.innerHTML += `</ul></div>`;

    contenido.innerHTML += `<div class="habilidades"><h2>Habilidades</h2><ul>`;
    curriculum.habilidades.forEach((habilidad) => {
      contenido.innerHTML += `<li>${habilidad}</li>`;
    });
    contenido.innerHTML += `</ul></div>`;
  }
});
