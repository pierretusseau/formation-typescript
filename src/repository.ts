import type { OwnedPokemon, PokemonName } from "./pokemon.js"

const db = new Map<PokemonName, OwnedPokemon>()

export const addPokemon = (pokemon: OwnedPokemon) => {
  db.set(pokemon.name, pokemon)
}

export const getPokemonByName = (name: PokemonName) => db.get(name)

export const getAllPokemons = () => [...db.values()]
