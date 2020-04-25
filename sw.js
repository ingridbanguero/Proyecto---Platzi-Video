const VERSION = "v1";

self.addEventListener('install', (e)=>{
    e.waitUntil(precache()); // wait espera que la promesa se resuelva
}) // Evento que se llama cuando se llama el SesrviceWorker

self.addEventListener('fetch', (e)=>{
    const request = e.request;
    // Para que solamente acepte GET
    if(request.method !== "GET"){
        return; // Que no haga nada
    }
    e.respondWith(cachedResponse(request));

    // Actualizar el cache
    e.waitUntil(updateCache(request))
})
async function precache(){
    const cache = await caches.open(VERSION);// Instancia de un cache (version 1)
    return cache.addAll([ // Todos los archivos que hemos escrito
        /* '/',
        '/mediaplayer.html',
        '/JS/mediaPlayer.js',
        '/JS/mediaPlayer2.js',
        '/JS/plugins/AutoPlay.js',
        '/JS/plugins/AutoPause.js',
        '/Style/mediaplayer.css',
        '/Style/style.css',
        '/Assets/BigBuckBunny.mp4' */
    ]);
}

async function cachedResponse(request){
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request){
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response).catch(error => {
        console.log(error.message)
    })
}