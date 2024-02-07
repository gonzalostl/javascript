let fibonacciant = 0;
let fibonacci=1;
let tercero;
//sacamos los dos primero numeros
document.write(0+", ");
document.write(1+", ");
//creamos un for para que vaya haciendo la serie de fibonnacci 
for (i =0 ; i <= 999999; i++){
    tercero = fibonacci;
    fibonacci= fibonacciant+fibonacci;
    fibonacciant = tercero;
    document.write(fibonacci+", ");
}