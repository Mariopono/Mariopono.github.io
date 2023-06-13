function login(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Obtén los valores de los campos de inicio de sesión
  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;

  // Realiza la lógica de autenticación (puede ser en el servidor)
  // ...

  // Si la autenticación es exitosa, redirige al usuario al otro index.html
  if (autenticacionExitosa) {
    window.location.href = "/pagina/inicio.html";
  }
}

function register(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Obtén los valores de los campos de registro
  var username = document.getElementById("register-username").value;
  var password = document.getElementById("register-password").value;

  // Realiza la lógica de registro (puede ser en el servidor)
  // ...

  // Guarda los datos en un archivo o base de datos (puede ser en el servidor)
  // ...

  // Redirige al usuario al otro index.html después del registro exitoso
  window.location.href = "/pagina/inicio.html";
}
