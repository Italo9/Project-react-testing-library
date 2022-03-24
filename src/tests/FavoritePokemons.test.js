import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../components';
import pokemons from '../data';

describe('Testando o Componente Favorite', () => {
  test('Verifica se a pessoa não tiver pokémons favoritos', () => {
    const pokemon = [];
    renderWithRouter(<FavoritePokemons pokemons={ pokemon } />);
    const notFavoritePok = screen.queryByText(/No favorite pokemon found/i);
    expect(notFavoritePok).toBeInTheDocument();
  });
  test('Verifica se é exibido todos os cards de pokémons favoritados', () => {
    const dataPokemons = pokemons;
    renderWithRouter(<FavoritePokemons pokemons={ dataPokemons } />);
    const cardsPokemonFavori = screen.getByText(/Pikachu/i);
    expect(cardsPokemonFavori).toBeInTheDocument();
  });
});
