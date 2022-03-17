import React from 'react'
import { useContext } from 'react';
import { WishlistContext } from '../../contexts/WishlistContext';
import WishlistCard from '../../components/WishlistCard';
import { ContainerGlobal, List } from '../../assets/styles/GlobalStyle';
import { Message, WrapperMessage } from './styled';

export default function Wishlist() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <ContainerGlobal>
      {wishlist.length > 0
        ? (
          <List
            data={wishlist}
            keyExtractor={pokemon => pokemon.name}
            showsVerticalScrollIndicator={false}
            alignItems="center"
            renderItem={({ item: pokemon }) => (
              <WishlistCard pokemon={pokemon}/>
            )}
          />
        )
        : (
          <WrapperMessage>
            <Message>Não tem nenhum pokemon na lista de desejo</Message>
          </WrapperMessage>
        )}
    </ContainerGlobal>
  )
}
