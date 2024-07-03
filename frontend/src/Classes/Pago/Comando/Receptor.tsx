import DatosEnvio from "../Tipos/DatosEnvio";
import DetallesPedido from "../Tipos/DetallesPedido";
import ItemData from "../Tipos/ItemData";

// Clase que se encarga de realizar las peticiones a la base de datos
namespace Receptor {
  // Funcion asincrónica que se encarga de enviar los datos de envio a la base de datos
  export async function createInformations(
    datosEnvio: DatosEnvio
  ): Promise<void> {
    await fetch(`http://localhost:4000/createInformations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosEnvio),
    });
  }

  export async function processPayment(infoPago: {
    fechaPago: string;
  }): Promise<void> {
    await fetch("http://localhost:4000/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fechaPago: infoPago.fechaPago,
        valor: localStorage.getItem("precioTotalIVA"),
      }),
    });
  }

  export async function createOrder(
    detallesPedido: DetallesPedido
  ): Promise<void> {
    await fetch("http://localhost:4000/createOrders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(detallesPedido),
    });
  }

  export async function createShirts(itemData: ItemData[]): Promise<void> {
    await fetch("http://localhost:4000/createShirts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData),
    });
  }
}

export default Receptor;
