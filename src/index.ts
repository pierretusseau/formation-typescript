import { addPokemonToPokedex } from "./use-cases/add-pokemon.js"
import { listOwnedPokemons } from "./use-cases/list-pokemons.js"

console.log(addPokemonToPokedex("Pikachu"))
console.log(addPokemonToPokedex("Dracaufeu"))
console.log(addPokemonToPokedex("Pikachu"))
console.log(addPokemonToPokedex("Mewtwo"))

console.log(listOwnedPokemons())
