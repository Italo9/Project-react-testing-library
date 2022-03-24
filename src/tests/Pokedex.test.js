import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pokedex from '../components/Pokedex';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

describe('Testando o Componente Pokedex', () => {
  test('Verifica se página contém um h2 com o texto Encountered pokémons', () => {
    const dataPokemons = pokemons;
    renderWithRouter(
      <Pokedex
        pokemons={ [dataPokemons[0], dataPokemons[1]] }
        isPokemonFavoriteById={ { [dataPokemons[0].id]: false,
          [dataPokemons[1].id]: false } }
      />,
    );
    const headingEl = screen.getByRole('heading', { level: 2,
      name: /Encountered pokémons/i });
    expect(headingEl).toBeInTheDocument();
  });
  test('Verifica se é exibido o próximo Pokémon quando o botão  é clicado', () => {
    const dataPokemons = pokemons;
    renderWithRouter(
      <Pokedex
        pokemons={ [dataPokemons[0], dataPokemons[1]] }
        isPokemonFavoriteById={ { [dataPokemons[0].id]: false,
          [dataPokemons[1].id]: false } }
      />,
    );
    const buttonElProximo = screen.getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(buttonElProximo);
    const cardsPokemon = screen.getByText(/Charmander/i);
    expect(cardsPokemon).toBeInTheDocument();
  });
  //   test('Verifica se é mostrado apenas um Pokémon por vez', () => {});
  test('Verifica se a Pokédex tem os botões de filtro', () => {
    const dataPokemons = pokemons;
    renderWithRouter(<Pokedex
      pokemons={ [dataPokemons[0], dataPokemons[1], dataPokemons[2], dataPokemons[3]] }
      isPokemonFavoriteById={ { [dataPokemons[0].id]: false,
        [dataPokemons[1].id]: false,
        [dataPokemons[2].id]: false,
        [dataPokemons[3].id]: false } }
    />);
    const buttonElAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(buttonElAll);
    expect(buttonElAll).toBeInTheDocument();

    const buttonElElec = screen.getByRole('button', { name: /electric/i });
    userEvent.click(buttonElElec);
    expect(buttonElElec).toBeInTheDocument();

    const buttonElFire = screen.getAllByTestId(/pokemon-type-button/i);
    userEvent.click(buttonElFire[0]);
    const quatro = 4;
    expect(buttonElFire).toHaveLength(quatro);
  });
//   test('Verifica se a Pokédex contém um botão para resetar o filtro', () => {});
});
