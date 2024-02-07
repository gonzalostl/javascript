//creamos el conjunto
let conjunto = new Set([2,3,4,5,6,7,8,8,7,6,4]);
//con un for of lo sacamos por pantalla ya que no mostrara los duplicados
for (let elemento of conjunto){
    document.write(elemento+", ");
}
