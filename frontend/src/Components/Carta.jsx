import { Col, Card } from "react-bootstrap";

import "../Styles/Carta.css";

function Carta(prop) {
  return (
    <Col className="text-center centered">
      <Card className="custom-card ">
        <Card.Img className="custom-img" variant="top" src={prop.img} />
        <Card.Body>
          <Card.Text>
            {prop.text} ${prop.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Carta;
