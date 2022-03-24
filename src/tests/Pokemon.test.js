import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pokemon from '../components/Pokemon';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

describe('Testando o Componente Pokedex', () => {
  test('Verifica se é renderizado um card com as informações do pokémon.', () => {
    const dataPokemons = pokemons;
    renderWithRouter(<Pokemon pokemon={ dataPokemons[0] } isFavorite />);
    const namePokemon = screen.getByText(/Pikachu/i);
    expect(namePokemon).toBeInTheDocument();
    const typePokemon = screen.getByText(/Electric/i);
    expect(typePokemon).toBeInTheDocument();
    const averageWeightPokemon = screen.getByText(/Average weight: 6.0 kg/i);
    expect(averageWeightPokemon).toBeInTheDocument();
    const img = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const imgEl = screen.getAllByRole('img', { name: /Pikachu sprite/i }); // name=alt
    console.log(imgEl);
    expect(imgEl[0].src).toBe(img);
  });
  test('Verifica se o card tem um link de navegação', () => {
    const dataPokemons = pokemons;
    renderWithRouter(<Pokemon pokemon={ dataPokemons[0] } isFavorite />);
    const linkEle = screen.getByRole('link',
      { name: /More details/i, href: '/pokemons/25' });
    expect(linkEle).toBeInTheDocument();
  });
  test('Verifica se redireciona a aplicação para a página de detalhes', () => {
    const dataPokemons = pokemons;
    const { history } = renderWithRouter(
      <Pokemon pokemon={ dataPokemons[0] } isFavorite />,
    );
    const linkDetails = screen.getByRole('link', { name: /More details/i });
    console.log(linkDetails);
    userEvent.click(linkDetails);
    expect(history.location.pathname).toBe('/pokemons/25');
  });
  //   test('Verifica se a URL exibida no navegador muda para /pokemon/<id>', () => {});
  test('Verifica se existe um ícone de estrela nos Pokémons favoritados', () => {
    const dataPokemons = pokemons;
    renderWithRouter(<Pokemon pokemon={ dataPokemons[0] } isFavorite />);
    const img = 'http://localhost/star-icon.svg';
    const imgEl = screen.getByRole('img',
      { name: /Pikachu is marked as favorite/i }); // name=alt
    expect(imgEl.src).toBe(img);
  });
});
