import { render } from '@testing-library/react';
import MainSection from "./MainSection";
import { MemoryRouter } from 'react-router-dom';


describe('MainSection', () => {
  it('should be a function', () => {

    expect(typeof MainSection).toBe('function')

  });
  it('should render with an id called "MainSection"', () => {

    const { container } = render(
      <MemoryRouter>
        <MainSection />
      </MemoryRouter>
    );

    const mainSectionElement = container.querySelector('.mainSection');

    expect(mainSectionElement).toBeInTheDocument();


  });

});