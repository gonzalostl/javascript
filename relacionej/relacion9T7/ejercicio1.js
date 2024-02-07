/*Crea una página HTML con un contenedor de una imagen. Debes tener preparadas diez imágenes
y en función de la tecla numérica que se pulse(0, 1, 2, 3, 4, 5, 6, 7, 8, 9) debe aparecer esa
imagen en el contenedor. Cuando se pulse otro número, debe vaciarse el contenedor y cargarse de nuevo
su imagen correspondiente*/

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("key", function (event) {
    const tecla = event.key;

    const contenedorImagen = document.getElementById("imagenContenedor");

    contenedorImagen.innerHTML = "";

    switch (tecla) {
      case "0":
        agregarImagen("img/auto1.jpg");
        break;
      case "1":
        agregarImagen("img/auto2.jpg");
        break;
      case "2":
        agregarImagen("img/auto3.jpg");
        break;
      case "3":
        agregarImagen("img/auto4.jpg");
        break;
      case "4":
        agregarImagen("img/auto5.jpg");
        break;
      case "5":
        agregarImagen("img/auto6.jpg");
        break;
      case "6":
        agregarImagen("img/auto7.jpg");
        break;
      case "7":
        agregarImagen("img/auto8.jpg");
        break;
      case "8":
        agregarImagen("img/auto9.jpg");
        break;
      case "9":
        agregarImagen("img/auto10.jpg");
        break;
      default:
        break;
    }
  });

  function agregarImagen(ruta) {
    const imagen = document.createElement("img");

    imagen.src = ruta;

    const contenedorImagen = document.getElementById("imagenContenedor");

    contenedorImagen.appendChild(imagen);
  }
});
