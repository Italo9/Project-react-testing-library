import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { Router, MemoryRouter } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
import About from '../components/About';
import renderWithRouter from '../renderWithRouter';

describe('Testando o Componente About', () => {
//   test('Verifica se a página contém as informações sobre a Pokédex', () => {
//   });
  test('Verifica se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const headingEl = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });
    expect(headingEl).toBeInTheDocument();
  });
  test('Verifica se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const p1 = screen.getByText(/This application simulates a Pokédex,/i);
    expect(p1).toBeDefined();
    const p2 = screen.getByText(/One can filter Pokémons by type/i);
    expect(p2).toBeDefined();
  });
  test('Verifica se a página contém a seguinte imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    const img = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const imgEl = screen.getByRole('img', { src: img });
    expect(imgEl.src).toBe(img);
  });
});
