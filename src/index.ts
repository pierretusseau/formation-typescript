import { addPokemonToPokedex } from "./use-cases/add-pokemon.js"
import { listOwnedPokemons } from "./use-cases/list-pokemons.js"

console.log(addPokemonToPokedex("Pikachu"))
console.log(addPokemonToPokedex("Dracaufeu"))
console.log(addPokemonToPokedex("Pikachu"))

// @ts-expect-error "Mewtwo" n'est pas un PokemonName valide
console.log(addPokemonToPokedex("Mewtwo"))

console.log(listOwnedPokemons())
