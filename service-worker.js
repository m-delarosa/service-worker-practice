self.addEventListener("install", event => {
    self.skipWaiting()
    //Activates it right away even someone is using an old SW.
})

self.addEventListener("activate", event => {
    //Destroys old caches and renders open tabs out of operation.
    self.clients.claim()
    //Similar to above this will not make it wait until the next time you load the page.
})

self.addEventListener("fetch", event => {
    //Any network event, not just fetch's you write in your JS files.
    if (event.request.url.includes("pokeapi.co")) {
        console.log("You're trying to access the pokemon API")
        event.respondWith(new Response(JSON.stringify({
            name: "Charmander",
            sprites: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            }
        })))
    }
})