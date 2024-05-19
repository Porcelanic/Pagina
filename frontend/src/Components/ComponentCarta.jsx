//import React from "react";
import Director from "../Classes/Builder/Director";
import "../Styles/Carta.css";

function CartaComponent({ img, text, price, artista, style }) {
  const director = new Director({ img, text, price, artista, style });
  const carta = director.construir();

  return carta.getCreateCol();
}

export default CartaComponent;
