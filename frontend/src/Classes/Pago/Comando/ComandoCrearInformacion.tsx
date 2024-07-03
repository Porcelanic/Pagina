import Comando from "./Comando";
import DatosEnvio from "../Tipos/DatosEnvio";
import Receptor from "./Receptor";

// Comando para crear la informacion de envio
class ComandoCrearInformacion extends Comando {
  private datosEnvio: DatosEnvio;

  constructor(datosEnvio: DatosEnvio) {
    super();
    this.datosEnvio = datosEnvio;
  }

  // Llama al metodo de la clase Receptor para crear la informacion de envio
  public async ejecutar(): Promise<void> {
    await Receptor.createInformations(this.datosEnvio);
  }
}

export default ComandoCrearInformacion;
