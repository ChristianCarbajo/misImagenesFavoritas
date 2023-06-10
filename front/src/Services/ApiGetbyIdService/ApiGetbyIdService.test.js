import axios from "axios";
import ApiGetbyIdService from "./ApiGetbyIdService"


jest.mock('axios');

describe ('ApiGetbyIdService', ()=>{
    it('should be a function', async()=>{
      expect(typeof ApiGetbyIdService).toBe('function')
      
    })
    it('should be a function and call the URL and ID', async () => {
      const url = 'https://api.example.com';
      const id = 2;
  
      axios.get.mockResolvedValue({ data: 'Response data' });
  
      await ApiGetbyIdService(url, id);
  
      expect(axios.get).toHaveBeenCalledWith(`${url}/${id}`);
    });
  });