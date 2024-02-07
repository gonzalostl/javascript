//creo la expesion regular
let regExp = /^https:\/\/[^ñ]+\.es$/;
//compruebo si el texto cumple con la expresión regular
console.log(regExp.test("https://juanypepe.es"));
