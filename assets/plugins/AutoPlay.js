function AutoPlay() {}

//recibe la instancia del MediaPlayer
AutoPlay.prototype.run = function (player) {
    if (!player.muted) {
        player.muted = true //llamamos al setter y le pasamos true son un valor virtual
    }
    player.play()
}

export default AutoPlay