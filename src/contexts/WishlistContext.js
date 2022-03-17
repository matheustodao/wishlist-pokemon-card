import {
  useState,
  createContext,
  useMemo,
} from 'react';

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const hasBeenAdd = (_id) => wishlist.find((item) => item.id === _id);

  function handleAddToWishlist(pokemon) {
    const pokemonAlreadyExists = wishlist.find((item) => item.id === pokemon.id);
    if (pokemonAlreadyExists) {
      return handleRemoveToCart(pokemon.id);
    }

    setWishlist((prevState) => [...prevState, { ...pokemon, quantity: 1 }]);
  }

  function handleRemoveOnWishlist(_id) {
    setWishlist((prevState) => (
      prevState.filter((item) => item.id !== _id)
    ));
  }

  const values = useMemo(() => (({
    wishlist,
    handleAddToWishlist: (pokemon) => handleAddToWishlist(pokemon),
    handleRemoveOnWishlist: (_id) => handleRemoveOnWishlist(_id),
    hasBeenAdd: (_id) => hasBeenAdd(_id),
  })), [
    wishlist,
  ]);

  return (
    <WishlistContext.Provider
      value={values}
    >
      {children}
    </WishlistContext.Provider>
  );
}
