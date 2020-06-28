function AutoPlay() {}

//recibe la instancia del MediaPlayer
AutoPlay.prototype.run = function (player) {
    player.mute()
    player.play()
}

export default AutoPlay