import { MemoryRouter } from "react-router-dom";
import Form from "./Form";
import { render, screen } from "@testing-library/react";





describe('Form', () => {
  it('should be a function', () => {
    expect(typeof Form).toBe('function')
  });


  it('should contain 2 inputs and 1 buttons', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>);


    const inputElements = screen.getAllByRole('textbox');
    expect(inputElements).toHaveLength(2);


    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements).toHaveLength(1);
  });


}
)