import { findPokemonByName } from "../gateway.js"
import type { PokemonName } from "../pokemon.js"
import * as repository from "../repository.js"

export const addPokemonToPokedex = (name: PokemonName) => {
  const pokemon = findPokemonByName(name)

  if (!pokemon) {
    return { success: false as const, reason: `Pokemon "${name}" not found` }
  }

  const owned = repository.getPokemonByName(name)

  if (owned) {
    const leveled = { ...owned, ownedLevel: owned.ownedLevel + 1 }
    repository.addPokemon(leveled)
    return { success: true as const, action: "leveled-up" as const, pokemon: leveled }
  }

  const newPokemon = { ...pokemon, ownedLevel: 1 }
  repository.addPokemon(newPokemon)
  return { success: true as const, action: "added" as const, pokemon: newPokemon }
}
