import Comando from "./Comando";
import DetallesPedido from "../Tipos/DetallesPedido";
import Receptor from "./Receptor";

// Comando para crear un pedido
class ComandoPedido extends Comando {
  private detallesPedido: DetallesPedido;

  // Constructor de la clase que pide los detalles del pedido
  constructor(detallesPedido: DetallesPedido) {
    super();
    this.detallesPedido = detallesPedido;
  }

  // Llama al metodo de la clase Receptor para crear el pedido
  public async ejecutar(): Promise<void> {
    await Receptor.createOrder(this.detallesPedido);
  }
}
export default ComandoPedido;
