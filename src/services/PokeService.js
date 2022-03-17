import { pokeAPI } from './configs/PokeAPI';

class PokeService {
  async getAll({ limit, offset }) {
    const response = await pokeAPI.get('pokemon', {
      params: {
        offset,
        limit,
      }
    });
    return response.data;
  }

  async getOne(url) {
    const endpoint = url.split('v2/')[1];
    const { data } = await pokeAPI.get(endpoint);
    const pokemon = {
      id: data.id,
      name: data.name,
      image: data.sprites.other.home.front_default,
    }
    return pokemon;
  }
}

export default new PokeService()
