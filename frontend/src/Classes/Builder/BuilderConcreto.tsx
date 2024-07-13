import React from "react";
import { Col, Card } from "react-bootstrap";
import { Builder } from "./Builder";
import Carta from "./Carta";

export class BuilderConcreto extends Builder {
  constructor() {
    super();
  }

  construirParte(propiedades: { img: string, text: string, price?: number, artista?: string, style?: string }): void {
    this.carta.setPropiedades(propiedades);
  }

  crearCarta() {
    this.createImg();
    this.createText();
    this.createBody();
    this.createCard();
    this.createCol();
  }

  createText(): JSX.Element {
    const { text, price, artista } = this.carta.getPropiedades();
    const cardText = (
      <Card.Text>
        {text}
        <br />
        {price ? `$${price}` : `${artista}`}
      </Card.Text>
    );
    this.carta.setCardText(cardText);
    return cardText;
  }

  createBody(): JSX.Element {
    const textElement = this.carta.getCardText();
    const cardBody = <Card.Body>{textElement}</Card.Body>;
    this.carta.setCardBody(cardBody);
    return cardBody;
  }

  createImg(): JSX.Element {
    let { img } = this.carta.getPropiedades();
    img = `http://localhost:3000/uploads/${img}`;
    const createImg = <Card.Img className="custom-img" variant="top" src={img} />;
    this.carta.setCreateImg(createImg);
    return createImg;
  }

  createCard(): JSX.Element {
    const imgElement = this.carta.getCreateImg();
    const bodyElement = this.carta.getCardBody();
    const createCard = (
      <Card className="custom-card">
        {imgElement}
        {bodyElement}
      </Card>
    );
    this.carta.setCreateCard(createCard);
    return createCard;
  }

  createCol(): JSX.Element {
    const cardElement = this.carta.getCreateCard();
    const { style } = this.carta.getPropiedades();
    const createCol = (
      <Col className={style ? style : "text-center centered"}>
        {cardElement}
      </Col>
    );
    this.carta.setCreateCol(createCol);
    return createCol;
  }

  getResultado(): Carta {
    return this.getCarta();
  }
}
