//creamos el mapa
let daw = new Map([
    ["DWEC", "Desarrollo Web en Entrono Cliente"],
    ["ING", "Inglés"],
    ["DWES", "Desarrollo Web en Entrono Servidor"],
    ["DIW", "Diseno de Interfaces Web"],
    ["DAW", "Despliegue de Aplicaciones Web"]
]);
//mostramos por pantalla el numero de módulos almacenados
document.write("Hay "+daw.size);
document.write("<br>");
//con unfor of mostramos el contenido
for (modulo of daw){
    document.write(modulo);
    document.write("<br>");
}
//usamos ahora un for of de las keys para mostrar las abreviaturas
for (let abreviaturas of daw.keys()){
    document.write(abreviaturas);
    document.write("<br>");
}
//usamos ahora un for of de los values para mostrar las abreviaturas
for (let nombres of daw.values()){
    document.write(nombres);
    document.write("<br>");
}
//usamos has para buscar daw y le cambiamos el nombre
if (daw.has("DAW")){
    daw.set("DAW","Despliegue de Aplicaciones Web 2");
    
}
//mostramos y eliminamos daw
for (modulo of daw){
    document.write(modulo);
    document.write("<br>");
}if (daw.has("DAW")){
    daw.delete("DAW");
    
}
//mostramos 
for (modulo of daw){
    document.write(modulo);
    document.write("<br>");}