class Película {
  constructor(json) {
    const data = JSON.parse();

    this.nombre = data.nombre;
    this.añoEstreno = data.añoEstreno;
    this.duracion = data.duracion;
    this.género = data.género;
    this.actores = data.actores.slice(0, 6);
    this.urlCartel = data.urlCartel;
    this.director = data.director;
  }

  mostrarInformación() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Año de estreno: ${this.añoEstreno}`);
    console.log(`Duración: ${this.duracion}`);
    console.log(`Género: ${this.género}`);
    console.log(`Actores principales:`);
    this.actores.forEach((actor, index) => {
      console.log(`${index + 1}. ${actor}`);
    });
    console.log(`URL del cartel promocional: ${this.urlCartel}`);
    console.log(`Director: ${this.director}`);
  }
}

// Ejemplo de uso:
const jsonData = `{
    "nombre": "Oppenheimer",
    "añoEstreno": 2023,
    "duracion": "180 min",
    "género": "Suspenso",
    "actores": ["Actor 1", "Actor 2", "Actor 3", "Actor 4", "Actor 5", "Actor 6"],
    "urlCartel": "https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=900x900",
    "director": "Christopher Nolan"
  }`;

const película = new Película(jsonData);
película.mostrarInformación();
