import { useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { Button, ButtonLabel, Container, Icon, Title } from './styled';
import { WishlistContext } from '../../contexts/WishlistContext';

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
  },
});

export default function WishlistCard({ pokemon }) {
  const { handleRemoveOnWishlist } = useContext(WishlistContext)

  return (
    <Container>
      <Image
        style={styles.image}
        source={{
          uri: pokemon.image
        }}
      />

      <Title>{pokemon.name}</Title>

      <Button bgColor="remove" onPress={() => handleRemoveOnWishlist(pokemon.id)}>
        <Icon name="ios-heart-dislike-outline" size={32} />
        <ButtonLabel>
          Remover da lista
        </ButtonLabel>
      </Button>
    </Container>
  )
}
