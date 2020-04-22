class AutoPause {
    constructor(){
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this);
    }
    run(player){
        this.player = player;
        // IntersectionObserver recibe dos parametros
        // 1. Un handler, que notifica de la intercepcion
        // 2. Objeto con la accion de interceptacion
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold // Limite
        });
        observer.observe(this.player.media);
    }

    handleIntersection(entries){
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold
       if(isVisible){
          this.player.play(); 
       }else{
           this.player.pause();
       } 
    }
}

export default AutoPause;