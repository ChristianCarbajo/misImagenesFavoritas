import { MemoryRouter } from "react-router-dom";
import ImageCard from "./ImageCard"
import { render, screen } from '@testing-library/react';

describe('ImageCard', () => {
  it('should be a function', () => {
    expect(typeof ImageCard).toBe('function')
  });

  it('should be a image', () => {
    render(
      <MemoryRouter>
        <ImageCard />
      </MemoryRouter>
    );
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
  })
});