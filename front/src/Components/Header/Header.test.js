import { render, screen } from '@testing-library/react';
import Header from "./Header"
import { MemoryRouter } from 'react-router-dom';



describe('Header', () => {
  it('should be a function', () => {
    expect(typeof Header).toBe('function')
  })
  it('should render an h1 element', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>);
    const headingElement = screen.getByText('Mis fotos favoritas', { query: 'h1' })
    expect(headingElement).toBeInTheDocument();
  });
});