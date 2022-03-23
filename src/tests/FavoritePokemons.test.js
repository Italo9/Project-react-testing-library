// import React from 'react';
// import { screen } from '@testing-library/react';
// // import userEvent from '@testing-library/user-event';
// // import { Router, MemoryRouter } from 'react-router-dom';
// // import { createMemoryHistory } from 'history';
// // import About from '../components/About';
// import renderWithRouter from '../renderWithRouter';
// import { FavoritePokemons } from '../components';

// describe('Testando o Componente Favorite', () => {
//   test('Verifica se a pessoa não tiver pokémons favoritos', () => {
//     renderWithRouter(<FavoritePokemons />);
//     const notFavoritePok = screen.queryByText(/No favorite pokemon found/i);
//     expect(notFavoritePok).toBeDefined();
//   });
//   test('Verifica se é exibido todos os cards de pokémons favoritados', () => {
//     const cardsPokemonFavori = screen.queryAllByRole('dialog');
//     expect(cardsPokemonFavori).toBe(cardsPokemonFavori.length);
//   });
// });
