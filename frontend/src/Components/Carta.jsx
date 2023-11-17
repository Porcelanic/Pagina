import { Col, Card } from "react-bootstrap";

import "../Styles/Carta.css";

function Carta(prop) {
  return (
    <Col className="text-center">
      <Card className="custom-card">
        <Card.Img className="custom-img" variant="top" src={prop.img} />
        <Card.Body className="custom-body d-flex align-items-center justify-content-center">
          <Card.Text>
            <a>{prop.text}</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Carta;
