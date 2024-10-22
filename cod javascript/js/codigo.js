/*

alert ('Hola desde JS')


let nombre = prompt ('Ingrese su nombre')

if (nombre == 'root') {
    alert ('Acceso correcto')
}
else {
    alert ('Acceso denegado')
}
*/
// Solicita el nombre del usuario
let nombreUsuario = prompt("Por favor, introduce tu nombre:");

// Muestra el mensaje de bienvenida
if (nombreUsuario) {
  alert("¡Bienvenido, " + nombreUsuario + "!");
} else {
  alert("No se ha introducido ningún nombre.");
}
