import axios from 'axios';
import ApiDeleteService from "./ApiDeleteService"


jest.mock('axios');

const consoleLogSpy = jest.spyOn(console, 'log');



describe ('ApiDeleteService', ()=>{
  it('should be a async function', ()=>{
    expect(typeof ApiDeleteService).toBe('function')
  })
  it('should have try-catch', async () => {
    const url = 'https://api.example.com';
    const id = 123;

    // Mockear la función axios.delete para simular una excepción
    axios.delete.mockRejectedValue(new Error('Error de prueba'));

    // Ejecutar la función ApiDeleteService
    await ApiDeleteService(url, id);
   
    // Verificar que axios.delete fue llamada con los argumentos correctos
    expect(axios.delete).toHaveBeenCalledWith(`${url}/delete/${id}`);

    // Verificar que el error fue capturado en el bloque catch
    expect(console.log).toHaveBeenCalledWith(expect.any(Error));
  });
}
)