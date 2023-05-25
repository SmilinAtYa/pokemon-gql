const pokemonResolver = {
    pokemon: async (_parent, args, context) => {
        const data = await context.dataSources.pokemonAPI.getPokemon(args.pokemonName);
        return {
            id: data.id,
            name: data.name
        };
    },
    ability: async (_parent, args, context) => {
        const data = await context.dataSources.pokemonAPI.getAbility(args.abilityName);
        return {
            ability: data.name,
            pokemons: data.pokemon.map(pokemon => (
                {
                    isHiddenAbility: pokemon.is_hidden,
                    slot: pokemon.slot,
                    name: pokemon.pokemon.name
                }))
        };
    }
}

export const resolvers = {
    Query: pokemonResolver
}

