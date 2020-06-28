import MediaPlayer from "./MediaPlayer.js" // importamos un modulo

const video = document.querySelector("video")
const button = document.querySelector("#playButton")

// instancia
const player = new MediaPlayer({ el: video })

button.onclick = () => player.handlePlayOrPause();