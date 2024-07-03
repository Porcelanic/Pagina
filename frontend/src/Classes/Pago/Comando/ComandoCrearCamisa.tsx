import Comando from "./Comando";
import ItemData from "../Tipos/ItemData";
import Receptor from "./Receptor";

// Comando para crear una camisa
class ComandoCrearCamisa extends Comando {
  private itemData: ItemData[];

  // Constructor de la clase que pide al arreglo itemData que contiene a las camisas del usuario
  constructor(itemData: ItemData[]) {
    super();
    this.itemData = itemData;
  }

  // Llama al metodo de la clase Receptor para crear las camisas
  public async ejecutar(): Promise<void> {
    await Receptor.createShirts(this.itemData);
  }
}
export default ComandoCrearCamisa;
