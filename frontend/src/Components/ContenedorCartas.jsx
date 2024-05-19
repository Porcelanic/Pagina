//import React from "react";
import CreadorEstampable from "../Classes/MetodoFabrica/CreadorEstampable";
import CreadorDeportivas from "../Classes/MetodoFabrica/CreadorDeportivas";

// eslint-disable-next-line react/prop-types
function ContenedorCartas({ tipo }) {
  const creador = tipo === "estampables" ? new CreadorEstampable : new CreadorDeportivas();
  const producto = creador.crearContenedor();

  return <>{producto.render()}</>;
}

export default ContenedorCartas;
