import MediaPlayer from "./mediaPlayer2";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";

const video = document.querySelector("video") // El unico elemento con video es el que necesitamos
const player = new MediaPlayer({
    el:video,
    plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});

const button: HTMLElement = document.querySelector('button');
button.onclick = () => player.togglePlay()

const buttonMute: HTMLElement = document.querySelector('#mute');
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
  
