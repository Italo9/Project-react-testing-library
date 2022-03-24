import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o Componente App', () => {
  test('Verifica link de navegação com texto Home', () => {
    renderWithRouter(<App />);
    const linkAppHome = screen.getByRole('link', { name: /home/i });
    expect(linkAppHome).toBeDefined();
  });
  test('Verifica link de navegação com texto About', () => {
    renderWithRouter(<App />);
    const linkAppAbout = screen.getByRole('link', { name: /About/i });
    expect(linkAppAbout).toBeDefined();
  });
  test('Verifica link de navegação com texto Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const linkAppFavoritePokemons = screen.getByRole('link',
      { name: /Favorite Pokémons/i });
    expect(linkAppFavoritePokemons).toBeDefined();
  });
  test('Verifica url de /', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    userEvent.click(linkHome);
    expect(history.location.pathname).toBe('/');
  });
  test('Verifica url de /about', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /about/i });
    console.log(linkAbout);
    userEvent.click(linkAbout);
    expect(history.location.pathname).toBe('/about');
  });
  test('Verifica url de /favorites', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavorites = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(linkFavorites);
    expect(history.location.pathname).toBe('/favorites');
  });
});
