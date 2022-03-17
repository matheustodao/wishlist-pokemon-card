import { Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Button, ButtonLabel, Container, Icon, Title } from './styled';

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
  },
});

export default function Card({ pokemon }) {
  return (
    <Container>
      <Image
        style={styles.image}
        source={{
          uri: pokemon.image
        }}
      />

      <Title>{pokemon.name}</Title>

      <Button bgColor="add">
        <Icon name="ios-heart-outline" size={24} />
        <ButtonLabel>
          Adicionar na lista
        </ButtonLabel>
      </Button>
    </Container>
  )
}
