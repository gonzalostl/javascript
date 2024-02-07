//creo la expesion regular
let regExp = /^\d+([.,]\d{2}) €$/;
//compruebo si el texto cumple con la expresión regular
console.log(regExp.test("3455.63 €"));
