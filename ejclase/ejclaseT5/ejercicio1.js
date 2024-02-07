const usuario = {
  nombre: "Gonzalo Sánchez",
  nombreUsuario: "gsan705",
  contraseña: "1234_abc",
  login: function (nombreUsuario, contraseña) {
    if (nombreUsuario === this.nombreUsuario && contraseña === this.contraseña) {
      console.log("Sesión iniciada con éxito");
    } else {
      console.log("Credenciales no válidas");
    }
  },
};
usuario.login("gsan705", "1234abc");
usuario.login("gsan705", "1234&abc");
