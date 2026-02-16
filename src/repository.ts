import type { OwnedPokemon } from "./pokemon.js"

const db = new Map<string, OwnedPokemon>()

export const addPokemon = (pokemon: OwnedPokemon) => {
  db.set(pokemon.name, pokemon)
}

export const getPokemonByName = (name: string) => db.get(name)

export const getAllPokemons = () => [...db.values()]
