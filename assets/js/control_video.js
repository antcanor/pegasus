const video=document.querySelector("#video")
const botonSonido = document.querySelector("#botonSonido")
const botonPausa = document.querySelector("#botonPausa")


// Agrega esta función
video.addEventListener('click', function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
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