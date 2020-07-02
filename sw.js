const VERSION = "v1"

// se llama cuando el navegador instale el SW
self.addEventListener("install", event => {
    //crear un precache para no buscar en internet sino lo que esta en cache
    event.waitUntil(precache())
})

// evento de peticion
self.addEventListener("fetch", event => {
    const request = event.request //extraemos la peticion
    //get
    if (request.method !== "GET") {
        return
    }  

    //buscar en cache
    event.respondWith(cachedResponse(request))

    // actualizar el cache
    event.waitUntil(updateCache(request))
})

async function cachedResponse(request) {
    const cache = await caches.open(VERSION)
    const response = await cache.match(request) //pregunta al cache si tenemos una copia del request
    return response || fetch(request)
}

async function updateCache(request) {
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request, response)
}

async function precache() {
    const cache = await caches.open(VERSION)
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4',
    ])
}



// Sirven para hacer que nuestras aplicaciones funcionen Offline.

// Muy usados en las Progressive Web Apps (PWA) los ServiceWorkers son una capa que vive entre el navegador y el Internet.

// Parecido a como lo hacen los proxys van a interceptar peticiones para guardar el resultado en cache y la próxima vez que se haga la petición tomar del cache ese resultado.