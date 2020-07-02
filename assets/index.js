import MediaPlayer from "./MediaPlayer.js" // importamos un modulo
import AutoPlay from "./plugins/AutoPlay.js"
import AutoPause from "./plugins/AutoPause.js"

const video = document.querySelector("video")
const button = document.querySelector("#playButton")
const buttonMute = document.querySelector("#muteButton")

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log(err.message)
    })
}

// instancia
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause()
    ]
})

button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMuted();