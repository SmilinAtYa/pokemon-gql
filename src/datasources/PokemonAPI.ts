import { RESTDataSource } from '@apollo/datasource-rest';
import { Pokemon, PokemonAbility } from 'pokenode-ts';

export class PokemonAPI extends RESTDataSource {
    override baseURL = 'https://pokeapi.co/api/v2/';

    async getPokemon(name: string): Promise<Pokemon> {
        try {
            const data = await this.get<Pokemon>(`pokemon/${name}`);
            return data;

        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async getAbility(name: string): Promise<PokemonAbility> {
        try {
            const data = await this.get<PokemonAbility>(`ability/${name}`);
            return data;

        } catch (e) {
            console.log(e);
            return null;
        }
    }

}