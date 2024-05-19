import Comando from "./Comando";
// El invocador se encarga de ejecutar los comandos
class Invocador {
  private comandos: Comando[] = [];

  // Agrega un comando a la lista de comandos
  agregarComando(comando: Comando) {
    this.comandos.push(comando);
  }

  // Ejecuta los comandos en orden de llegada
  async ejecutarComandos() {
    for (const comando of this.comandos) {
      await comando.ejecutar();
    }
  }
}

export default Invocador;
