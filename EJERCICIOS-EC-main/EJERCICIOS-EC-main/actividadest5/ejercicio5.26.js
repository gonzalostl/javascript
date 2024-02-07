//creo la expesion regular
let regExp = /^[a-záéíóúüñ]+$/iu;
//compruebo si el texto cumple con la expresión regular
console.log(regExp.test("hola"));
