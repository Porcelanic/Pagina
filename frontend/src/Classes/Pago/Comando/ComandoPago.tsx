import Comando from "./Comando";
import Receptor from "./Receptor";

class ComandoPago extends Comando {
  private infoPago: { fechaPago: string };

  // Se pide la inforamcion de pago para realizar el pago
  constructor(infoPago: { fechaPago: string }) {
    super();
    this.infoPago = infoPago;
  }

  async ejecutar() {
    await Receptor.processPayment(this.infoPago);
  }
}

export default ComandoPago;
