import { Col, Card } from "react-bootstrap";

import "../Styles/Carta.css";

function Carta(prop) {
  return (
    <Col className={prop.style ? prop.style:"text-center centered"}>
      <Card className="custom-card ">
        <Card.Img className="custom-img" variant="top" src={prop.img} />
        <Card.Body>
          <Card.Text>
            {prop.text} 
            <br/>
            {prop.price ? `$${prop.price}` : `${prop.artista}`}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Carta;
