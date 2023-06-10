import Confirmation from "./Confirmation";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";



describe('Confirmation', () => {
    it('should be a function', () => {
      expect(typeof Confirmation).toBe('function')
    });

    it('should contain 2 buttons', () => {
        render(
          <MemoryRouter>
            <Confirmation />
          </MemoryRouter>);
    
        const buttonElements = screen.getAllByRole('button');
        expect(buttonElements).toHaveLength(2);
      });
});

