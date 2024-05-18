import React from "react";
import { Col, Card } from "react-bootstrap";

class Carta {
  private img: string;
  private text: string;
  private price?: number;
  private artista?: string;
  private style?: string;

  constructor() {
    this.img = "";
    this.text = "";
    this.price = undefined;
    this.artista = undefined;
    this.style = undefined;
  }

  setPropiedades({ img, text, price, artista, style }: { img: string, text: string, price?: number, artista?: string, style?: string }) {
    this.img = img;
    this.text = text;
    this.price = price;
    this.artista = artista;
    this.style = style;
  }

  createText(): JSX.Element {
    return (
      <Card.Text>
        {this.text}
        <br />
        {this.price ? `$${this.price}` : `${this.artista}`}
      </Card.Text>
    );
  }

  createBody(): JSX.Element {
    const textElement = this.createText();
    return <Card.Body>{textElement}</Card.Body>;
  }

  createImg(): JSX.Element {
    return <Card.Img className="custom-img" variant="top" src={this.img} />;
  }

  createCard(): JSX.Element {
    const imgElement = this.createImg();
    const bodyElement = this.createBody();
    return (
      <Card className="custom-card">
        {imgElement}
        {bodyElement}
      </Card>
    );
  }

  createCol(): JSX.Element {
    const cardElement = this.createCard();
    return (
      <Col className={this.style ? this.style : "text-center centered"}>
        {cardElement}
      </Col>
    );
  }
}

export default Carta;
