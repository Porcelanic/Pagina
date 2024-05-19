import Contenedor from "./Contenedor";

abstract class Creador {
  abstract crearContenedor(): Contenedor;
}

export default Creador;
