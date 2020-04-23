import MediaPlayer from "./mediaPlayer2.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video") // El unico elemento con video es el que necesitamos
const player = new MediaPlayer({
    el:video, 
    plugins: [new AutoPlay(), new AutoPause()]
});

const button = document.querySelector('button');
button.onclick = () => player.togglePlay()

const buttonMute = document.querySelector('#mute');
buttonMute.onclick = () => {
    if (player.media.muted) {
      player.unmute();
    } else {
      player.mute();
    }
  };
console.log(navigator);
//Detectar si el navegador del usuario da soporte a ServiceWorkers
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error)
  });
}else{
  console.log('Tu navegador no soporta ServiceWorker')
};
  
