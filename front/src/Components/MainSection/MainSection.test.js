import { render } from '@testing-library/react';
import MainSection from "./MainSection";


describe ('MainSection', ()=>{
  it('should be a function', ()=>{

    expect(typeof MainSection).toBe('function')

  });
  it('should render with an id called "MainSection"', () => {
    
    const { container } = render(<MainSection />);

    const mainSectionElement = container.querySelector('.mainSection');

    expect(mainSectionElement).toBeInTheDocument();


  });
  it('should render at least one image', () => {
   
    const { container } = render(<MainSection />);

    const imageElements = container.querySelectorAll('img');

    expect(imageElements.length).toBeGreaterThan(0);
  });
    it('should contain 2 inputs and 1 button', () => {
    render(<MainSection />);
    
    // Comprueba la existencia de los inputs
    const inputElements = screen.getAllByRole('textbox');
    expect(inputElements).toHaveLength(2);
    
    // Comprueba la existencia de los botones
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements).toHaveLength(1);
  });
});