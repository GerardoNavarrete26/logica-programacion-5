const NumeroSecreto = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
const NumerosIntentados = [];

function checkNumber() {
  const inputElement = document.getElementById('numberInput');
  const messageElement = document.getElementById('message');
  const userInput = inputElement.value.trim();
  const numero = parseInt(userInput); 

  // Validar que la entrada sea un número
  if (isNaN(numero)) {
    messageElement.textContent = 'Error: Debes ingresar un número válido.';
    messageElement.className = 'message error';
    return;
  }

  // Validar que el número esté en el rango correcto
  if (numero < 1 || numero > 100) {
    messageElement.textContent = 'Error: El número debe estar entre 1 y 100.';
    messageElement.className = 'message error'; // le da color rojo
    return;
  }

  // Agregar el número a la lista de intentos
  NumerosIntentados.push(numero);

  // Verificar si el usuario adivinó el número secreto
  if (numero === NumeroSecreto) {
    messageElement.innerHTML = `¡Felicidades, adivinaste el número secreto!<br>Números introducidos antes de adivinar: ${NumerosIntentados.join(', ')}`;
    messageElement.className = 'message success'; // le da color verde
    inputElement.disabled = true; // Desactivar el input después de adivinar
  } else {
    messageElement.textContent = 'Ups, el número secreto es incorrecto, vuelve a intentarlo.';
    messageElement.className = 'message error'; // le da color rojo
    inputElement.value = ''; // Limpiar el input para el siguiente intento
  }
}