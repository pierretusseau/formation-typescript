import { pokemons } from "./pokemon.js"
import type { PokemonName } from "./pokemon.js"

export const getAllPokemons = () => pokemons

export const findPokemonByName = (name: PokemonName) =>
  pokemons.find((p) => p.name === name)
