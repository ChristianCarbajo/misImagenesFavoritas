import axios from "axios"
import ApiGetService from "./ApiGetService"

jest.mock('axios');

describe('ApiGetService', () => {
  it('should be a async function', () => {
    expect(typeof ApiGetService).toBe('function')
  })
  it('should be call a url', async () => {
    const url = 'https://api.example.com'

    axios.get.mockResolvedValue({ data: 'Response data' });

    await ApiGetService(url);

    expect(axios.get).toHaveBeenCalledWith(url)
  });

});