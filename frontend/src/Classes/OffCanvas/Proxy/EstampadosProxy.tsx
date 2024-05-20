import EstampadosService from "./EstampadosService";
import EstampadosServiceImpl from "./EstampadosServiceImpl";

// Proxy para el acceso a los estampados
class EstampadosProxy implements EstampadosService {
  private estampadosService: EstampadosService;
  private estampadosCache: any[];

  constructor() {
    this.estampadosService = new EstampadosServiceImpl();
    this.estampadosCache = [];
  }

  // Método que devuelve los estampados si no existen en caché, y si existen, los devuelve de la caché
  async getEstampados(): Promise<any> {
    if (this.estampadosCache.length === 0) {
      this.estampadosCache = await this.estampadosService.getEstampados();
    }
    return this.estampadosCache;
  }
}

export default EstampadosProxy;