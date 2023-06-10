import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './Components/Header/Header';
import MainSection from './Components/MainSection/MainSection';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';


describe ('Header', ()=>{
  it('should be a function', ()=>{
    expect(typeof Header).toBe('function')
  })
}
)
describe ('MainSection', ()=>{
  it('should be a function', ()=>{
    expect(typeof MainSection).toBe('function')
  })
}
)
describe ('Footer', ()=>{
  it('should be a function', ()=>{
    expect(typeof Footer).toBe('function')
  })
}
)
describe ('Form', ()=>{
  it('should be a function', ()=>{
    expect(typeof Form).toBe('function')
  })
}
)








