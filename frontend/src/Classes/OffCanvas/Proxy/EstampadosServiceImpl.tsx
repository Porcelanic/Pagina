import EstampadosService from "./EstampadosService";

// Implementación real del servicio de estampados
class EstampadosServiceImpl implements EstampadosService {
  // Método que devuelve una promesa que resuelve un array de objetos
  async getEstampados(): Promise<any> {
    return fetch(import.meta.env.VITE_API_BASE_URL+"/estampado/consultarEstampado")
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error al obtener los estampados:", error);
        return [];
      });
  }
}

export default EstampadosServiceImpl;
