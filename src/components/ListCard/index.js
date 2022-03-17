import { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import React from 'react'
import PokeService from '../../services/PokeService';
import Card from './Card';

export default function ListCard({ pokemonURL }) {
  const [pokemon, setPokemon] = useState({});
  async function loadInformationAboutPokemon() {
    const data = await PokeService.getOne(pokemonURL);
    setPokemon(data);
  }
  useEffect(() => {
    loadInformationAboutPokemon()
  }, []);

  return <Card pokemon={pokemon} />
}
