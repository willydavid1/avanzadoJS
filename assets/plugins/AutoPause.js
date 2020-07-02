class AutoPause {
    constructor() {
        this.threshold = 0.25
        this.handlerIntersection = this.handlerIntersection.bind(this)
    }
    run(player) {
        this.player = player
        
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold, //define el % de intersección
        })
        observer.observe(this.player.media)
    }

    //recibimos todos los objetos que estamos observando
    handlerIntersection(entries) {
        const entry = entries[0]

        const isVisible = entry.intersectionRatio >= this.threshold
        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }
}

export default AutoPause