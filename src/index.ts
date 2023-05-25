import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers, typeDefs } from './Pokemon/pokemon';
import { PokemonAPI } from './datasources/PokemonAPI';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    context: async () => {
        const { cache } = server;
        return {
            dataSources: {
                pokemonAPI: new PokemonAPI({ cache }),
            }
        }
    },
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
