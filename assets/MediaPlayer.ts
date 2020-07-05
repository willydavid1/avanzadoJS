class MediaPlayer {
    media: HTMLMediaElement //media va ser de tipo HTMLMediaElement
    plugins: Array<any>
    container: HTMLElement

    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
        this.initPlayer()
        this.initPlugins()
    }
    
    initPlayer() {
        this.container = document.createElement("div")
        this.container.style.position = "relative"
        this.media.parentNode.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)
    }

    private initPlugins() {
        // getters = se usan para acceder a las propiedades de un objeto
        // settters = se usan para cambiar esas propiedades
        // const player = {
        //     play: () => this.play(),
        //     pause: () => this.pause(),
        //     media: this.media,
        //     get muted() {
        //         return this.media.muted
        //     },
        //     set muted(value) {
        //         this.media.muted = value
        //     }
        // }

        this.plugins.forEach(plugin => {
            plugin.run(this) //contexto de MediaPlayer
        })
    }
    play() {
        this.media.play()
    }
    pause() {
        this.media.pause()
    }
    mute() {
        this.media.muted = true
    }
    unmute() {
        this.media.muted = false
    }
    togglePlay() {
        if (this.media.paused) {
            this.play()
        }
        else {
            this.pause()
        }
    }
    toggleMuted() {
        this.media.muted ? this.unmute() : this.mute()
    }
}








// // metodo del objeto MediaPlayer
// MediaPlayer.prototype.handlePlayOrPause = function () {
//     this.media.paused ? this.media.play() : this.media.pause()
//     console.log(`Esta pausado el video: ${this.media.paused}`)
//     return undefined
// }

export default MediaPlayer