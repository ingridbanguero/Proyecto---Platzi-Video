function MediaPlayer(config){
    this.media = config.el; // Toma el elemento del objeto el (video)
    this.plugins = config.plugins || []; // Toma el elemento del objeto plugins (new AutoPlay())

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function (){
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted(){
            return this.media.muted; // True o false
        },
        set muted(value){
            this.media.muted = value;
        },
    };

    this.plugins.forEach(plugin =>{
        plugin.run(player);
    });
};

MediaPlayer.prototype.play = function(){
    this.media.play();
};

MediaPlayer.prototype.pause = function(){
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function(){
    if(this.media.paused){
        this.play();
    }else{
        this.pause();
    }
};

MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
}

MediaPlayer.prototype.toggleMute = function(){
    if(this.media.muted){
        this.unmute();
    }else{
        this.mute();
    }
  }

export default MediaPlayer;