navigator.serviceWorker.register("service-worker.js")

fetchPokemon().then(displayPokemon)

function fetchPokemon(){
  return fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
}

function displayPokemon(pokemon){
  const $pokemon = document.querySelector(".pokemon")

  $pokemon.innerHTML = `
    <h2>${capitalize(pokemon.name)}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
  `
}

function capitalize(string){
  return string.charAt(0).toUpperCase() + string.substring(1)
}

document.querySelector("button").addEventListener("click", () => {
  fetchPokemon().then(displayPokemon)
})
