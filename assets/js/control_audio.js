const transcripcion = document.querySelector('#transcripcion')

//Funcion para mostrar la transcripción del podcast  
function toggleTexto() {
    if (transcripcion.style.display === "none") {
        transcripcion.style.display = "block";
    } else {
        transcripcion.style.display = "none";
    }
}