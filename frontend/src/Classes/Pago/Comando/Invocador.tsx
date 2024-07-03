import Comando from "./Comando";
// El invocador se encarga de ejecutar los comandos
class Invocador {
  private comandos: Comando[] = [];

  // Agrega un comando a la lista de comandos
  public agregarComando(comando: Comando): void {
    this.comandos.push(comando);
  }

  // Ejecuta los comandos en orden de llegada
  public async ejecutarComandos(): Promise<void> {
    for (const comando of this.comandos) {
      await comando.ejecutar();
    }
  }
}

export default Invocador;
