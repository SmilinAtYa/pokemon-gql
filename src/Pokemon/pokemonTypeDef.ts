export const typeDefs = `#graphql
  type Query {
    pokemons: [Pokemon]
  }

  type Pokemon {
    id: ID
    name: String
  }
`