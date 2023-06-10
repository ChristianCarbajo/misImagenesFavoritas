import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  
  
  const appElement = screen.getByTestId('app-component');
  expect(appElement).toBeInTheDocument();
  

  const mainPageElement = screen.getByTestId('mainPage-component');
  expect(mainPageElement).toBeInTheDocument();


  const formPageElement = screen.queryByTestId('formPage-component');
  expect(formPageElement).toBeNull();
});














