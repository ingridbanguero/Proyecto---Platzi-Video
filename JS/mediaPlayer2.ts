class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;
    constructor(config) {
        this.media = config.el; // Toma el elemento del objeto el (video)
        this.plugins = config.plugins || []; // Toma el elemento del objeto plugins (new AutoPlay())
        this.initPlayer();
        this.initPlugins();
    }
    initPlayer(){
        this.container = document.createElement('div');
        this.container.style.position = "absolute";
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media)
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toggleMute() {
        if (this.media.muted) {
            this.unmute();
        }
        else {
            this.mute();
        }
    }
}

export default MediaPlayer;