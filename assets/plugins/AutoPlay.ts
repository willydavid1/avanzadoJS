import MediaPlayer from "../MediaPlayer"

class AutoPlay {
   constructor() { }
    //recibe la instancia del MediaPlayer
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true //llamamos al setter y le pasamos true son un valor virtual
        }
        player.play()
    }
}


export default AutoPlay