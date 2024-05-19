import EstampadosService from "./EstampadosService";

// Implementación real del servicio de estampados
class EstampadosServiceImpl implements EstampadosService {
  // Método que devuelve una promesa que resuelve un array de objetos
  async getEstampados(): Promise<any> {
    return fetch("http://localhost:4000/getEstampados")
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error al obtener los estampados:", error);
        return [];
      });
  }
}

export default EstampadosServiceImpl;
