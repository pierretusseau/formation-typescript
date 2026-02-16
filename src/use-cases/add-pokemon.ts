import { findPokemonByName } from "../gateway.js"
import * as repository from "../repository.js"

export const addPokemonToPokedex = (name: string) => {
  const pokemon = findPokemonByName(name)

  if (!pokemon) {
    return { success: false as const, reason: `Pokemon "${name}" not found` }
  }

  const owned = repository.getPokemonByName(name)

  if (owned) {
    const leveled = { name: owned.name, level: owned.level + 1 }
    repository.addPokemon(leveled)
    return { success: true as const, action: "leveled-up" as const, pokemon: leveled }
  }

  const newPokemon = { name: pokemon.name, level: pokemon.level }
  repository.addPokemon(newPokemon)
  return { success: true as const, action: "added" as const, pokemon: newPokemon }
}
