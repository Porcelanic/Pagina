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
import Alert from "react-bootstrap/Alert";
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
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertState, setAlertState] = useState("");

  const cardData = [
    { id: 1, img: "/RM.jpg", text: "Real Madrid 2023", price: 100000 },
    { id: 2, img: "/RM.jpg", text: "Real Madrid 2023", price: 100000 },
    { id: 3, img: "/RM.jpg", text: "Real Madrid 2023", price: 100000 },
    { id: 4, img: "/Bayer.png", text: "Bayer Much 2023", price: 100000 },
    { id: 5, img: "/Liverpool.jpeg", text: "Liverpool 2023", price: 100000 },
    { id: 6, img: "/Bayer.png", text: "Bayer Much 2023", price: 100000 },
    { id: 7, img: "/Liverpool.jpeg", text: "Liverpool 2023", price: 100000 },
    { id: 8, img: "/Tottenham.jpg", text: "Tottenham 2023", price: 100000 },
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
      <div onClick={() => handleShow(data)}>
        <Carta img={data.img} text={data.text} price={data.price} />
      </div>
    </Col>
  ));

  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (data) => {
    if (localStorage.getItem("username") != null) {
      localStorage.setItem("selectedShirt", JSON.stringify(data));
      setSelectedImage(data.img);
      setShow(true);
    }
  };

  const agregarAlCarrito = () => {
    let cantidad = document.querySelector("#cantidad").value;
    let talla = document.querySelector("#formBasicTipo").value;
    let selectedShirt = JSON.parse(localStorage.getItem("selectedShirt"));
    let id = selectedShirt.id;
    let img = selectedShirt.img;
    let text = selectedShirt.text;
    let price = selectedShirt.price;
    if (!talla) {
      setShowAlert(true);
      setAlertText("Pon una talla");
      setAlertState("danger");
    } else if (!cantidad || cantidad <= 0 || cantidad > 100) {
      setShowAlert(true);
      setAlertText("La cantidad debe estar entre 1 y 100");
      setAlertState("danger");
    } else {
      let order = {
        cantidad,
        talla,
        id,
        img,
        text,
        price,
      };
      let itemData;
      if (JSON.parse(localStorage.getItem("itemData"))) {
        itemData = JSON.parse(localStorage.getItem("itemData"));
      } else {
        itemData = [];
      }

      itemData.push(order);
      localStorage.setItem("itemData", JSON.stringify(itemData));

      setShowAlert(true);
      setAlertText("Se agrego al carrito :D");
      setAlertState("success");
    }
  };
  return (
    <>
      <Container fluid className=" align-items-center content m-0 p-0">
        <Row className="width-100vw">
          <Header />
        </Row>

        <Row className="width-100vw">
          <Col xs={{ span: 8, offset: 2 }}>
            <Row width="100%" className=" p-5">
              <Col className="centered" width="80%">
                <img src="../public/logo.png" alt="" />
              </Col>
              <Col>
                <br />
                <br />
                <h1>Waysoft</h1>
                <br />
                <h3>Los mejores precios!</h3>
                <br />
                <h5>Tu página de confianza</h5>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="align-self-start ps-5 pt-5">
          <h1>Camisas deportivas: </h1>
        </div>
        <Row className="align-items-center"> {Cartas} </Row>
        <div className="align-self-start ps-5 pt-5 mb-5">
          <h1>Camisas para estampar: </h1>
        </div>
        <Row className="align-items-center"> {Cartas} </Row>

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
                  <Form.Control
                    type="number"
                    aria-label="Cantidad"
                    id="cantidad"
                  />
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
                <Button disabled>Agregar Estampado</Button>
              </Form.Group>
              <Form.Group>
                <br />
                <Button onClick={agregarAlCarrito}>
                  Agregar al carrito de compras
                </Button>
              </Form.Group>
            </Form>
            <Alert
              className="mt-5"
              variant={alertState}
              show={showAlert}
              onClose={() => setShowAlert(false)}
              dismissible
            >
              {alertText}
            </Alert>
          </Offcanvas.Body>
        </Offcanvas>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </Container>
    </>
  );
}

export default Catalogo;
