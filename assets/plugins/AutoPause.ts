import MediaPlayer from "../MediaPlayer" // MediaPlayer ts lo entiende como tipo por el keyword class

class AutoPause {
    private threshold: number
    player: MediaPlayer

    constructor() {
        this.threshold = 0.25
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
    }
    run(player) {
        this.player = player
        
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold, //define el % de intersección
        })
        observer.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handlerVisibilityChange) // evento que nos informa si la pagina es visible, pude ser usado para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.
    }

    //recibimos todos los objetos que estamos observando
    private handlerIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0]

        const isVisible = entry.intersectionRatio >= this.threshold
        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }

    private handlerVisibilityChange() {
        const isVisible = document.visibilityState === "visible"
        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }
}

export default AutoPause