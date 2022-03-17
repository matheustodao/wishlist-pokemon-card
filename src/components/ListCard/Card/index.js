import { useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { Button, ButtonLabel, Container, Icon, Title } from './styled';
import { WishlistContext } from '../../../contexts/WishlistContext';

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
  },
});

export default function Card({ pokemon }) {
  const { hasBeenAdd, handleAddToWishlist } = useContext(WishlistContext)
  return (
    <Container>
      <Image
        style={styles.image}
        source={{
          uri: pokemon.image
        }}
      />

      <Title>{pokemon.name}</Title>

      {hasBeenAdd(pokemon.id)
        ? (
          <Button bgColor="add">
            <Icon name="ios-heart" size={32} />
            <ButtonLabel>
              Adicionado
            </ButtonLabel>
          </Button>
        )
        : (
          <Button bgColor="add" onPress={() => handleAddToWishlist(pokemon)}>
            <Icon name="ios-heart-outline" size={24} />
            <ButtonLabel>
              Adicionar na lista
            </ButtonLabel>
          </Button>
        )}
    </Container>
  )
}
