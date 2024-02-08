function toggleMute(){
    var video=document.getElementById("video")
    var botonSonido=document.getElementById("botonSonido")

    if(video.muted){
        video.muted=false
        botonSonido.style.backgroundImage="url('assets/images/volume-up-fill.svg')"
    }else{
        video.muted=true
        botonSonido.style.backgroundImage="url('assets/images/volume-mute-fill.svg')"
    }
}