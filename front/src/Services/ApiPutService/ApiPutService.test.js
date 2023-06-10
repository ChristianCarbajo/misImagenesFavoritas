import axios from "axios";
import ApiPutService from "./ApiPutService"



jest.mock('axios');
const consoleLogSpy = jest.spyOn(console, 'log');


describe ('ApiPutService', ()=>{
    it('should be a function', ()=>{
      expect(typeof ApiPutService).toBe('function')
    })

    it('should have try-catch', async () => {
      const url = 'https://api.example.com';
      const id = 123;
      const item = { id: 123, name: 'Example Item' };
    
      axios.put.mockRejectedValue(new Error('Error de prueba'));
  
      await ApiPutService(url, item, id);
         
      expect(axios.put).toHaveBeenCalledWith(`${url}/update/${id}`, item);
  
      expect(console.log).toHaveBeenCalledWith(expect.any(Error));
    });
  }
  )
 