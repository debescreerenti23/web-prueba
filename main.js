
// Obtenemos el input por su ID
let entrada = document.getElementById("input-content");

// Obtenemos el párrafo donde mostraremos el texto
let parrafo = document.getElementById("p-text");

// Función que se ejecuta al pulsar el botón
function enviar() {

    // Guardamos el texto del input
    let mensaje = entrada.value;

    // Si el campo está vacío
    if (mensaje === "") {
        alert("Has dejado el campo vacío");
    } else {

        // Mostramos el texto en el párrafo
        parrafo.innerText = "El texto introducido es: " + mensaje;

        // Limpiamos el input
        entrada.value = ""; 
    }
}
    