import { render, screen } from '@testing-library/react';
import Header from "./Header"



describe ('Header', ()=>{
    it('should be a function', ()=>{
      expect(typeof Header).toBe('function')
    })
    it('should render an h1 element', () => {
      render(<Header />);
      const headingElement = screen.getByRole('heading', { level: 1 });
      expect(headingElement).toBeInTheDocument();
    });
  });