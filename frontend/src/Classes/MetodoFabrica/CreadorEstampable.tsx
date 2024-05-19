import Contenedor from "./Contenedor";
import Creador from "./Creador";
import ContenedorEstampable from "./ContenedorEstampable";


class CreadorEstampable extends Creador {
  crearContenedor(): Contenedor {
    return new ContenedorEstampable();
  }
}

export default CreadorEstampable;
