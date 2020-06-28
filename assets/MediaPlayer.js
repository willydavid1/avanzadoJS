function MediaPlayer(config) {
    this.media = config.el
}

// metodo del objeto MediaPlayer
MediaPlayer.prototype.handlePlayOrPause = function () {
    this.media.paused ? this.media.play() : this.media.pause()
    console.log(`Esta pausado el video: ${this.media.paused}`)
    return undefined
}

export default MediaPlayer