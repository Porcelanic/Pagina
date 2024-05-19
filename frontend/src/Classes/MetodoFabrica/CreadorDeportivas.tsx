import Contenedor from "./Contenedor";
import Creador from "./Creador";
import ContenedorDeportivas from "./ContenedorDeportivas";


class CreadorDeportivas extends Creador {
  crearContenedor(): Contenedor {
    return new ContenedorDeportivas();
  }
}

export default CreadorDeportivas;
