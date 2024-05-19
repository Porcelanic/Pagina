//Interfaz que define ed servicio de la que hereda el sevicio y el proxy para camuflarse como servicio
interface EstampadosService {
  //El metodo getEstampados() devuelve una promesa con los estampados
  getEstampados(): Promise<any>;
}

export default EstampadosService;
