self.addEventListener("install", event => {
  event.waitUntil(
    self.skipWaiting()
  )
})

self.addEventListener("activate", event => {
  event.waitUntil(
    self.clients.claim()
  )
})

self.addEventListener("fetch", event => {
  if (/pokeapi\.co/.test(event.request.url)){
    event.respondWith(new Response(JSON.stringify({
      name: "Charmander",
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
      }
    })))
  }
})
