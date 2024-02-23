// Ejemplo de operaciones sincrónicas y asíncronas en JavaScript

// Operación Síncrona
console.log("Inicio de la operación síncrona.");
console.log("Esta operación espera a que termine antes de continuar.");
console.log("Fin de la operación síncrona.");

// Operación Asíncrona con Callback (Antiguo)
console.log("Inicio de la operación asíncrona con callback.");
setTimeout(function () {
  console.log("Esta operación no detiene la ejecución del código principal.");
  console.log("Se ejecuta después de 2 segundos.");
}, 2000);
console.log("Fin de la operación así");

// Ejemplo de operaciones sincrónicas y asíncronas en JavaScript

// Operación Síncrona
console.log("Inicio de la operación síncrona.");
console.log("Esta operación espera a que termine antes de continuar.");
console.log("Fin de la operación síncrona.");

// Operación Asíncrona con Callback (Antiguo)
console.log("Inicio de la operación asíncrona con callback.");
setTimeout(function () {
  console.log("Esta operación no detiene la ejecución del código principal.");
  console.log("Se ejecuta después de 2 segundos.");
}, 2000);
console.log("Fin de la operación asíncrona con callback.");

// Operación Asíncrona con Promesa (Moderno)
console.log("Inicio de la operación asíncrona con promesa.");
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
esperar(3000).then(() => {
  console.log("Esta operación también es no bloqueante.");
  console.log("Se ejecuta después de 3 segundos.");
});
console.log("Fin de la operación asíncrona con promesa.");

// Operación Asíncrona con async/await (Moderno)
console.log("Inicio de la operación asíncrona con async/await.");
const esperarAsync = async (ms) => {
  await esperar(ms);
  console.log("Esta operación usa async/await para hacer el código más claro.");
  console.log("Se ejecuta después de 4 segundos.");
};
esperarAsync(4000);
console.log("Fin de la operación asíncrona con async/await.");

// Ejemplo de una función asíncrona con async/await
const obtenerDatos = async () => {
  try {
    console.log("Obteniendo datos...");
    // Simulando una petición a una API que tarda 2 segundos
    await esperar(2000);
    console.log("Datos obtenidos correctamente.");
  } catch (error) {
    console.error("Ocurrió un error al obtener los datos:", error);
  }
};

// Función para simular espera
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Llamando a la función
obtenerDatos();

// Ejemplo de uso de async/await para consumir una API
const obtenerUsuarios = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Usuarios obtenidos:", data);
  } catch (error) {
    console.error("Ocurrió un error al obtener los usuarios:", error);
  }
};

// Llamando a la función para obtener usuarios
obtenerUsuarios();

// Ejemplo de uso de Promise.all con async/await
const obtenerInformacion = async () => {
  try {
    const [usuario, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1").then((response) =>
        response.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(
        (response) => response.json()
      ),
    ]);

    console.log("Usuario:", usuario);
    console.log("Posts del usuario:", posts);
  } catch (error) {
    console.error("Ocurrió un error al obtener la información:", error);
  }
};

// Llamando a la función para obtener información del usuario y sus posts
obtenerInformacion();

// Ejemplo de una promesa básica
const miPromesa = new Promise((resolve, reject) => {
  // Simulando una operación asíncrona
  setTimeout(() => {
    const exito = true;
    if (exito) {
      resolve("¡La promesa se resolvió con éxito!");
    } else {
      reject("¡La promesa falló!");
    }
  }, 2000);
});

// Usando la promesa
miPromesa
  .then((mensaje) => {
    console.log("Éxito:", mensaje);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Ejemplo de encadenamiento de promesas
const promesaUno = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Primera promesa resuelta");
  }, 2000);
});

const promesaDos = (mensaje) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mensaje + ", segunda promesa resuelta");
    }, 2000);
  });
};

promesaUno
  .then((resultado) => {
    console.log(resultado);
    return promesaDos(resultado);
  })
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Ejemplo de Promise.all para manejar múltiples promesas
const promesa1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Primera promesa resuelta");
  }, 2000);
});

const promesa2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Segunda promesa resuelta");
  }, 1500);
});

Promise.all([promesa1, promesa2])
  .then((resultados) => {
    console.log("Resultados:", resultados);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Ejemplo de hacer una petición GET con fetch
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log("Datos obtenidos:", data);
    // Aquí puedes hacer lo que quieras con los datos, como mostrarlos en una página web
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });

// Ejemplo de enviar datos con fetch usando el método POST
const nuevoPost = {
  title: "Nuevo post",
  body: "Contenido del nuevo post",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(nuevoPost),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Respuesta del servidor:", data);
    // Aquí puedes trabajar con la respuesta del servidor
  })
  .catch((error) => {
    console.error("Error al enviar los datos:", error);
  });

// Ejemplo de uso de async/await con fetch
const obtenerUsuarios = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Usuarios obtenidos:", data);
    // Aquí puedes trabajar con los datos, como mostrarlos en una página web
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
  }
};

// Llamando a la función
obtenerUsuarios();

// Ejemplo de AJAX con XMLHttpRequest

// Crear una nueva instancia de XMLHttpRequest
const xhr = new XMLHttpRequest();

// Configurar la solicitud
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

// Configurar la función que manejará la respuesta
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Éxito en la solicitud
    console.log(xhr.responseText);
  } else {
    // Error en la solicitud
    console.error("Error al realizar la solicitud:", xhr.statusText);
  }
};

// Configurar la función que manejará los errores de red
xhr.onerror = function () {
  console.error("Error de red al realizar la solicitud.");
};

// Enviar la solicitud
xhr.send();

// Ejemplo de AJAX con fetch

// Realizar una solicitud GET
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Error al realizar la solicitud:", error));

// Ejemplo de AJAX para enviar datos con POST
const datos = {
  titulo: "Tarea de ejemplo",
  completado: false,
};

fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(datos),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    return response.json();
  })
  .then((data) => console.log("Respuesta del servidor:", data))
  .catch((error) => console.error("Error al enviar datos:", error));

// Ejemplo de manejo de errores con XMLHttpRequest

const xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/users/9999"; // Esta URL no existe

xhr.open("GET", url, true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log("Respuesta exitosa:", xhr.responseText);
  } else {
    console.error("Error en la solicitud:", xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error("Error de red al realizar la solicitud.");
};

xhr.send();

// Ejemplo de manejo de errores con fetch

const url = "https://jsonplaceholder.typicode.com/users/9999"; // Esta URL no existe

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    return response.json();
  })
  .then((data) => console.log("Datos recibidos:", data))
  .catch((error) => console.error("Error en la solicitud:", error));

  // Error de sintaxis: falta un paréntesis de cierre
function suma(a, b {
    return a + b;
  };
  
// Error de referencia: la variable 'x' no está definida
console.log(x);
// Error de tipo: intentando llamar un método en una variable que no es un objeto
let numero = 10;
numero.toUpperCase();  // TypeError: numero.toUpperCase is not a function
// Error de rango: creando un Array con una longitud no válida
let arreglo = new Array(-1);
// Error de división por cero
let resultado = 10 / 0;
// Error de evaluación
eval('alert("Hola Mundo")');
// Error de tiempo de ejecución: intentando llamar a una función que no existe
funcionQueNoExiste();
// Error personalizado
class MiError extends Error {
    constructor(mensaje) {
      super(mensaje);
      this.name = "MiError";
    }
  }
  
  throw new MiError("Este es mi error personalizado");
  


ncrona con callback.");

// Operación Asíncrona con Promesa (Moderno)
console.log("Inicio de la operación asíncrona con promesa.");
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
esperar(3000).then(() => {
  console.log("Esta operación también es no bloqueante.");
  console.log("Se ejecuta después de 3 segundos.");
});
console.log("Fin de la operación asíncrona con promesa.");

// Operación Asíncrona con async/await (Moderno)
console.log("Inicio de la operación asíncrona con async/await.");
const esperarAsync = async (ms) => {
  await esperar(ms);
  console.log("Esta operación usa async/await para hacer el código más claro.");
  console.log("Se ejecuta después de 4 segundos.");
};
esperarAsync(4000);
console.log("Fin de la operación asíncrona con async/await.");

// Ejemplo de una función asíncrona con async/await
const obtenerDatos = async () => {
  try {
    console.log("Obteniendo datos...");
    // Simulando una petición a una API que tarda 2 segundos
    await esperar(2000);
    console.log("Datos obtenidos correctamente.");
  } catch (error) {
    console.error("Ocurrió un error al obtener los datos:", error);
  }
};

// Función para simular espera
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Llamando a la función
obtenerDatos();

// Ejemplo de uso de async/await para consumir una API
const obtenerUsuarios = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Usuarios obtenidos:", data);
  } catch (error) {
    console.error("Ocurrió un error al obtener los usuarios:", error);
  }
};

// Llamando a la función para obtener usuarios
obtenerUsuarios();

// Ejemplo de uso de Promise.all con async/await
const obtenerInformacion = async () => {
  try {
    const [usuario, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1").then((response) =>
        response.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(
        (response) => response.json()
      ),
    ]);

    console.log("Usuario:", usuario);
    console.log("Posts del usuario:", posts);
  } catch (error) {
    console.error("Ocurrió un error al obtener la información:", error);
  }
};

// Llamando a la función para obtener información del usuario y sus posts
obtenerInformacion();

// Ejemplo de una promesa básica
const miPromesa = new Promise((resolve, reject) => {
  // Simulando una operación asíncrona
  setTimeout(() => {
    const exito = true;
    if (exito) {
      resolve("¡La promesa se resolvió con éxito!");
    } else {
      reject("¡La promesa falló!");
    }
  }, 2000);
});

// Usando la promesa
miPromesa
  .then((mensaje) => {
    console.log("Éxito:", mensaje);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Ejemplo de encadenamiento de promesas
const promesaUno = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Primera promesa resuelta");
  }, 2000);
});

const promesaDos = (mensaje) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mensaje + ", segunda promesa resuelta");
    }, 2000);
  });
};

promesaUno
  .then((resultado) => {
    console.log(resultado);
    return promesaDos(resultado);
  })
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Ejemplo de Promise.all para manejar múltiples promesas
const promesa1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Primera promesa resuelta");
  }, 2000);
});

const promesa2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Segunda promesa resuelta");
  }, 1500);
});

Promise.all([promesa1, promesa2])
  .then((resultados) => {
    console.log("Resultados:", resultados);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Ejemplo de hacer una petición GET con fetch
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log("Datos obtenidos:", data);
    // Aquí puedes hacer lo que quieras con los datos, como mostrarlos en una página web
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });

// Ejemplo de enviar datos con fetch usando el método POST
const nuevoPost = {
  title: "Nuevo post",
  body: "Contenido del nuevo post",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(nuevoPost),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Respuesta del servidor:", data);
    // Aquí puedes trabajar con la respuesta del servidor
  })
  .catch((error) => {
    console.error("Error al enviar los datos:", error);
  });

// Ejemplo de uso de async/await con fetch
const obtenerUsuarios = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Usuarios obtenidos:", data);
    // Aquí puedes trabajar con los datos, como mostrarlos en una página web
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
  }
};

// Llamando a la función
obtenerUsuarios();

// Ejemplo de AJAX con XMLHttpRequest

// Crear una nueva instancia de XMLHttpRequest
const xhr = new XMLHttpRequest();

// Configurar la solicitud
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

// Configurar la función que manejará la respuesta
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Éxito en la solicitud
    console.log(xhr.responseText);
  } else {
    // Error en la solicitud
    console.error("Error al realizar la solicitud:", xhr.statusText);
  }
};

// Configurar la función que manejará los errores de red
xhr.onerror = function () {
  console.error("Error de red al realizar la solicitud.");
};

// Enviar la solicitud
xhr.send();

// Ejemplo de AJAX con fetch

// Realizar una solicitud GET
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Error al realizar la solicitud:", error));

// Ejemplo de AJAX para enviar datos con POST
const datos = {
  titulo: "Tarea de ejemplo",
  completado: false,
};

fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(datos),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    return response.json();
  })
  .then((data) => console.log("Respuesta del servidor:", data))
  .catch((error) => console.error("Error al enviar datos:", error));

// Ejemplo de manejo de errores con XMLHttpRequest

const xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/users/9999"; // Esta URL no existe

xhr.open("GET", url, true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log("Respuesta exitosa:", xhr.responseText);
  } else {
    console.error("Error en la solicitud:", xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error("Error de red al realizar la solicitud.");
};

xhr.send();

// Ejemplo de manejo de errores con fetch

const url = "https://jsonplaceholder.typicode.com/users/9999"; // Esta URL no existe

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    return response.json();
  })
  .then((data) => console.log("Datos recibidos:", data))
  .catch((error) => console.error("Error en la solicitud:", error));

  // Error de sintaxis: falta un paréntesis de cierre
function suma(a, b {
    return a + b;
  };
  
// Error de referencia: la variable 'x' no está definida
console.log(x);
// Error de tipo: intentando llamar un método en una variable que no es un objeto
let numero = 10;
numero.toUpperCase();  // TypeError: numero.toUpperCase is not a function
// Error de rango: creando un Array con una longitud no válida
let arreglo = new Array(-1);
// Error de división por cero
let resultado = 10 / 0;
// Error de evaluación
eval('alert("Hola Mundo")');
// Error de tiempo de ejecución: intentando llamar a una función que no existe
funcionQueNoExiste();
// Error personalizado
class MiError extends Error {
    constructor(mensaje) {
      super(mensaje);
      this.name = "MiError";
    }
  }
  
  throw new MiError("Este es mi error personalizado");
  