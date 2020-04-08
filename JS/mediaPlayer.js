import MediaPlayer from "./mediaPlayer2.js";
import AutoPlay from "./plugins/Autoplay.js" // Esto aun no existe

const video = document.querySelector("video") // El unico elemento con video es el que necesitamos
const button = document.querySelector('button');
const buttonMute = document.querySelector('#mute');

const player = new MediaPlayer({el:video, plugins: [new AutoPlay()]});
button.onclick = () => player.togglePlay()
buttonMute.onclick = () => player.toggleMute();