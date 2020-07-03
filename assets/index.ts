import MediaPlayer from "./MediaPlayer" // importamos un modulo
import AutoPlay from "./plugins/AutoPlay"
import AutoPause from "./plugins/AutoPause"

const video = document.querySelector("video")
const button: HTMLElement = document.querySelector("#playButton")
const buttonMute: HTMLElement = document.querySelector("#muteButton")

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