import React, { useEffect, useState } from 'react'
import { Text } from 'react-native';
import { ContainerGlobal, List } from '../../assets/styles/GlobalStyle';
import ListCard from '../../components/ListCard';
import PokeService from '../../services/PokeService';

const LIMIT = 5
export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  async function loadPokemons() {
    if (isLoading) {
      return (
        <Text>Loading...</Text>
      )
    }
    setIsLoading(true);
    const response = await PokeService.getAll({ limit: LIMIT, offset });
    setPokemons((prevState) => prevState.concat(...response.results));
    setOffset((prevState) => prevState  + LIMIT);
    setIsLoading(false)
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <ContainerGlobal>
      <List
        data={pokemons}
        keyExtractor={pokemon => pokemon.name}
        showsVerticalScrollIndicator={false}
        alignItems="center"
        renderItem={({ item: pokemon }) => (
          <ListCard pokemonURL={pokemon.url}/>
        )}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.2}
        ListFooterComponent={isLoading && <Text>Loading...</Text>}
      />
    </ContainerGlobal>
  )
}
