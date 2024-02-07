//creamos nuestro mapa de módulos
const modulos = new Map();

    modulos.set("DWEC","Desarrollo Web en Entorno Cliente");
    modulos.set("DWES","Desarrollo Web en Entorno Servidor");
    modulos.delete("DAW","Despliegue de aplicaciones web");
    modulos.set("DIW","Diseño de interfaces web");
//utilizamos este for para que nos muestre el contenido de la estructura
    for (mod of modulos)
    console.log(mod);
    console.log("Hay 3 módulos.");
    console.log("");
    //utilizamos los métodos keys y values para que nos lo separe por partes
        for (let modulo of modulos.keys())
    console.log(modulo);
    for (let nommodulo of modulos.values())
    console.log(nommodulo);
    console.log("");
    //utilizamos el metodo has para que nos detecte si el modulo DAW esta en el mapa
    if (modulos.has("DAW")){
        console.log("El modulo DAW esta en el mapa")
    } else {
        console.log("El modulo DAW no está en el mapa")}

