function AutoPlay(){}
AutoPlay.prototype.run = function(player){
    if (!player.muted){
        player.muted = true; // Si no esta mute lo hacemos mute
    }
    player.play();
}
export default AutoPlay;