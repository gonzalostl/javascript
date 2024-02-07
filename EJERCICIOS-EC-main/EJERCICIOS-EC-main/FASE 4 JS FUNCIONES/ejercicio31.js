//creamos la funcion para que se puedan meter 3 numeros
function mas_alto(num1, num2, num3) {
    //si el primero es más grande que los otros 2 lo devuelve
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    }
    //si el segundo es más grande que los otros 2 lo devuelve
    if (num2 >= num1 && num2 >= num3) {
        return num2;
    }
    //si el tercero es más grande que los otros 2 lo devuelve
    if (num3 >= num2 && num3 >= num1) {
        return num3;
    }
} 

document.write(mas_alto(7,20,76));