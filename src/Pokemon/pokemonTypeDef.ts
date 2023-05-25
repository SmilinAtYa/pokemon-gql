export const typeDefs = `#graphql
  type Query {
    pokemon(pokemonName: String!): Pokemon
    ability(abilityName: String!): PokemonAbility
  }

  type Pokemon {
    id: ID
    name: String
  }

  type PokemonAbility {
    "The ability the Pokémon may have"
    ability: String
    "pokemons with this ability"
    pokemons: [AbilityPokemon]

  }

  type AbilityPokemon {
    isHiddenAbility: Boolean
    "The slot this ability occupies in this Pokémon species" 
    slot: Int
    name: String
}

`