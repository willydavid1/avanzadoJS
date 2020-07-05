import MediaPlayer from "@willydavid1/platzimediaplayer" // importamos un modulo
import AutoPlay from "@willydavid1/platzimediaplayer/lib/plugins/AutoPlay"
import AutoPause from "@willydavid1/platzimediaplayer/lib/plugins/AutoPause"
import Ads from "@willydavid1/platzimediaplayer/lib/plugins/Ads"


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
        new AutoPause(),
        new Ads()
    ]
})

button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMuted();