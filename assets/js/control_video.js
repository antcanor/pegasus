const video=document.querySelector("#video")
const botonSonido = document.querySelector("#botonSonido")
const botonPausa = document.querySelector("#botonPausa")


// Agrega esta función
video.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        botonPausa.style.backgroundImage="url('assets/images/pause-fill.svg')"
    } else {
        video.pause();
        botonPausa.style.backgroundImage="url('assets/images/play-fill.svg')"
    }
});

// Funciones existentes para el control de sonido y pausa
function toggleMute() {
    if(video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

function togglePause() {
    if (video.paused) {
        video.play();
        
    } else {
        video.pause();
        
    }
}

function toggleMute(){
    if(video.muted){
        video.muted=false
        botonSonido.style.backgroundImage="url('assets/images/volume-up-fill.svg')"
    }else{
        video.muted=true
        botonSonido.style.backgroundImage="url('assets/images/volume-mute-fill.svg')"
    }
}

function togglePause() {
    if (video.paused) {
      video.play();
      botonPausa.style.backgroundImage="url('assets/images/pause-fill.svg')"
    } else {
      video.pause();
      botonPausa.style.backgroundImage="url('assets/images/play-fill.svg')"
    }
  }

  function toggleTexto(){
    alert("Imagina un coche que combina diseño, tecnología y rendimiento en un paquete elegante. Eso es exactamente lo que ofrece Pegasus. Nuestros coches están diseñados para aquellos que no se conforman con lo ordinario y buscan lo extraordinario. Cada coche Pegasus es una obra maestra de la ingeniería y el diseño. Con líneas aerodinámicas y una estética moderna, nuestros coches son tan atractivos visualmente como emocionantes de conducir. En Pegasus, creemos que la tecnología y la comodidad deben ir de la mano. Por eso, nuestros coches están equipados con las ultimas innovaciones tecnológicas para garantizar una experiencia de conducción segura y cómoda. Pegasus no es solo una marca de coches, es una declaración de intenciones. Nuestros coches ofrecen un rendimiento excepcional sin comprometer la eficiencia del combustible. Pegasus donde los sueños se encuentran con la carretera.")
  }

  document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    video.volume = 0.2; 
});
