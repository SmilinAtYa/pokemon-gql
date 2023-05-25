const pokemonResolver = {
    pokemons: () => {
        return [{
            id: 123,
            name: 'Gengar'
        }]
    }
}

export const resolvers = {
    Query: pokemonResolver
}

