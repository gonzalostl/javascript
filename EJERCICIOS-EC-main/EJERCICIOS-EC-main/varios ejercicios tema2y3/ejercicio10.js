//primero creamos el array
let array= [NaN,0,15,false,-22,'',undefined,47,null];
//le metemos el filter boolean que nos elimnima los valores booleanos falsos
//es decir nos borraría los que queremos borrar porque en un aspecto booleano
//esos datos tienen un aspecto falso
array =array.filter(Boolean);
//lo sacamos por pantalla
document.write(array);   