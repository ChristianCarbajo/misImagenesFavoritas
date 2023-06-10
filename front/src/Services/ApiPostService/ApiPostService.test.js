import axios from "axios";
import ApiPostService from "./ApiPostService"; 


jest.mock('axios');

const consoleLogSpy = jest.spyOn(console, 'log');



describe ('ApiPostService', ()=>{
  it('should be a function', ()=>{
    expect(typeof ApiPostService).toBe('function')
  })
  it('shoul have try-catch', async () => {
    const url = 'https://api.example.com';
    const item = { id: 123, name: 'Example Item' };

    axios.post.mockRejectedValue(new Error('Error de prueba'));
    
    await ApiPostService(url, item);
  
    expect(axios.post).toHaveBeenCalledWith(`${url}/save` , item);

    expect(consoleLogSpy).toHaveBeenCalledWith(expect.any(Error));
  });
}
)