//creo la expesion regular
let regExp = /^([01]\d|2[0-3]):[0-5]\d$/;
//compruebo si el texto cumple con la expresión regular
console.log(regExp.test("04:59"));
