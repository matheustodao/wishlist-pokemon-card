import React, { useEffect, useState, useCallback } from 'react'
import { FlatList } from 'react-native';
import ListCard from '../../components/ListCard';
import PokeService from '../../services/PokeService';
import { Container } from './styled';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  const loadPokemons = useCallback(async () => {
    const response = await PokeService.getAll({ limit: 5, offset });
    setPokemons(response.results);
  }, [])

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  return (
    <Container>
      <FlatList
        data={pokemons}
        keyExtractor={pokemon => pokemon.name}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          setOffset((prevState) => prevState + 1)
          return loadPokemons()
        }}
        renderItem={({ item: pokemon }) => (
          <ListCard pokemonURL={pokemon.url}/>
        )}
      />
    </Container>
  )
}
