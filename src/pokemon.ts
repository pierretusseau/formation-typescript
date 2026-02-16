export type Pokemon = {
  name: string
  type: string
  level: number
  stats: { hp: number; attack: number; defense: number; speed: number }
}

export type OwnedPokemon = {
  name: string
  level: number
}
