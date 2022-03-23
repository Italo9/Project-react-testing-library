import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { Router, MemoryRouter } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
import NotFound from '../components/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Testando o Componente NotFound', () => {
  test('Verifica se página contém um heading h2 com o texto Page requested ', () => {
    renderWithRouter(<NotFound />);
    const headingEl = screen.getByRole('heading', { level: 2,
      name: /Page requested not found/i });
    expect(headingEl).toBeInTheDocument();
  });
  test('Verifica se página mostra a imagem', () => {
    renderWithRouter(<NotFound />);
    const img = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const imgEl = screen.getAllByRole('img', { src: img });
    // console.log(imgEl);
    expect(imgEl[1].src).toBe(img);
  });
});
