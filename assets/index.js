import MediaPlayer from "./MediaPlayer.js" // importamos un modulo
import AutoPlay from "./plugins/AutoPlay.js"

const video = document.querySelector("video")
const button = document.querySelector("#playButton")
const buttonMute = document.querySelector("#muteButton")

// instancia
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay
    ]
})

button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMuted();