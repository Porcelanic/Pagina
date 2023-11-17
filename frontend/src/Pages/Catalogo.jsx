{
  /* React-Bootstrap */
}
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
{
  /* My components */
}
import Carta from "../Components/Carta";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ThemeSwitcher from "../Components/ThemeSwitcher";
{
  /* My css */
}
import "../Styles/Offcanvas.css";
{
  /* Hooks */
}
import { useState } from "react";

function Catalogo() {
  const cardData = [
    { id: 1, img: "/RM.jpg", text: "Real Madrid 2023" },
    { id: 2, img: "/RM.jpg", text: "Real Madrid 2023" },
    { id: 3, img: "/RM.jpg", text: "Real Madrid 2023" },
    { id: 4, img: "/Bayer.png", text: "Bayer Much 2023" },
    { id: 5, img: "/Liverpool.jpeg", text: "Liverpool 2023" },
    { id: 6, img: "/Bayer.png", text: "Bayer Much 2023" },
    { id: 7, img: "/Liverpool.jpeg", text: "Liverpool 2023" },
    { id: 8, img: "/Tottenham.jpg", text: "Tottenham 2023" },
  ];

  const Cartas = cardData.map((data) => (
    <Col
      key={data.id}
      xs="12"
      sm="6"
      md="4"
      lg="3"
      className="text-center mt-3"
    >
      <div onClick={() => handleShow(data.img)}>
        <Carta img={data.img} text={data.text} />
      </div>
    </Col>
  ));

  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShow(true);
  };

  return (
    <>
      <Header />
      <br />
      <Container fluid className=" align-items-center content ">
        <div className="align-self-end">
          <a href="#" className="btn">
            Ver más camisas deportivas &rarr;
          </a>
        </div>
        <Row className="align-items-center"> {Cartas} </Row>
        <br />

        <div className="align-self-end">
          <a href="#" className="btn">
            Ver más camisas para estampar &rarr;
          </a>
        </div>
        <Row className="align-items-center"> {Cartas} </Row>
      </Container>
      <ThemeSwitcher />
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>¿Como quieres tu camisa?</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className=" centered-items text-center">
          {selectedImage && (
            <Image
              src={selectedImage}
              className=" img-to-size"
              fluid
              thumbnail
              alt="Selected Image"
            />
          )}
          <br />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicTipo">
              <Form.Select data-testid="Talla">
                <option value="">Talla</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </Form.Select>
              <Form.Text>¿De qué talla quieres la camisa?.</Form.Text>
            </Form.Group>
            <Form.Group>
              <InputGroup className="mb-3">
                <InputGroup.Text>Cantidad</InputGroup.Text>
                <Form.Control aria-label="Cantidad" />
              </InputGroup>
              <Form.Text>¿Cuantas de estas camisas quieres?.</Form.Text>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Check
                disabled
                type="checkbox"
                label={`¿Deseas agregar un estampado a la camisa?`}
                id={`disabled-default-checkbox`}
              />
              <br />
              <Button disabled="true">Agregar Estampado</Button>
            </Form.Group>
            <Form.Group>
              <br />
              <Button>Agregar al carrito de compras</Button>
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
      <Footer />
    </>
  );
}

export default Catalogo;
