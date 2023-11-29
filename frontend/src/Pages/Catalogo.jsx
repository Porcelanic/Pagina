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
import "../Styles/Catalogo.css";
import { useEffect, useState } from "react";

function Catalogo() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertState, setAlertState] = useState("");
  const [estampable, setEstampable] = useState(false);
  const [estampados, setEstampados] = useState([]);
  const [estampadoElegido, setEstampadoElegido] = useState(-1);

  const CartaEstampado = estampados.map((data, index) => (
    <Col
      key={index}
      xs="12"
      sm="6"
      md="4"
      lg="3"
      className="text-center mt-3"
      // Agregar lógica de clic aquí si es necesario
      onClick={() => {
        setEstampadoElegido(index);
      }}
    >
      <Carta
        style={"d-block"}
        img={data.diseño}
        text={data.nombre}
        artista={data.nombre_artista}
      />
    </Col>
  ));

  const cardData = [
    {
      id: 1,
      img: "/Camisas/Deportivas/1.png",
      text: "Beja 2024",
      price: 100000,
    },
    {
      id: 2,
      img: "/Camisas/Deportivas/2.png",
      text: "Andres pulido 1778",
      price: 100000,
    },
    {
      id: 3,
      img: "/Camisas/Deportivas/3.png",
      text: "Millonarios 2023",
      price: 100000,
    },
    {
      id: 4,
      img: "/Camisas/Deportivas/4.png",
      text: "No c 1999",
      price: 100000,
    },
    {
      id: 5,
      img: "/Camisas/Deportivas/5.png",
      text: "Real Madrid 2023",
      price: 100000,
    },
    {
      id: 6,
      img: "/Camisas/Deportivas/6.png",
      text: "Tottenham 2023",
      price: 100000,
    },
    {
      id: 7,
      img: "/Camisas/Deportivas/7.png",
      text: "Bayer Much 2023",
      price: 100000,
    },
    {
      id: 8,
      img: "/Camisas/Deportivas/8.png",
      text: "Cucuta 2023",
      price: 100000,
    },
  ];
  const estampablesData = [
    { id: 1, img: "/Camisas/Estampables/1.png", text: "Azul", price: 100000 },
    { id: 2, img: "/Camisas/Estampables/2.png", text: "Verde", price: 100000 },
    { id: 3, img: "/Camisas/Estampables/3.png", text: "Rojo", price: 100000 },
    { id: 4, img: "/Camisas/Estampables/4.png", text: "Blanco", price: 100000 },
    {
      id: 5,
      img: "/Camisas/Estampables/5.png",
      text: "Azul oscuro",
      price: 100000,
    },
    { id: 6, img: "/Camisas/Estampables/6.png", text: "Rosado", price: 100000 },
    {
      id: 7,
      img: "/Camisas/Estampables/7.png",
      text: "Verde oscuro",
      price: 100000,
    },
    { id: 8, img: "/Camisas/Estampables/8.png", text: "Gris", price: 100000 },
  ];

  useEffect(() => {
    // Llamar al endpoint para obtener los estampados
    fetch("http://localhost:4000/getEstampados") // Asegúrate de que la ruta sea correcta según tu configuración de servidor
      .then((response) => response.json())
      .then((data) => {
        if (data.rowCount != 0) {
          setEstampados(data); // Establecer los estampados en el estado local
        }
      })
      .catch((error) => {
        console.error("Error al obtener los estampados:", error);
      });
  }, []); // La dependencia vacía asegura que esta llamada solo se haga una vez al cargar el componente

  const CartasDeportivas = cardData.map((data) => (
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
  const CartasEstampables = estampablesData.map((data) => (
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
  const [show2, setShow2] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleClose = () => {
    setShow(false);
  };
  const handleClose1 = () => {
    setShow2(false);
  };
  const handleShow = (data) => {
    if (localStorage.getItem("username") != null) {
      localStorage.setItem("selectedShirt", JSON.stringify(data));
      setSelectedImage(data.img);
      setShow(true);
    }
  };

  const agregarAlCarrito = async () => {
    let cantidad = document.querySelector("#cantidad").value;
    let talla = document.querySelector("#Talla").value;
    let material = document.querySelector("#Material").value;
    let materialNumber = null;
    let selectedShirt = JSON.parse(localStorage.getItem("selectedShirt"));
    let id = selectedShirt.id;
    let img = selectedShirt.img;
    let text = selectedShirt.text;
    let price = selectedShirt.price;
    let limite;
    try {
      const res = await fetch(
        `http://localhost:4000/materialQuantity/${material}`
      );
      if (res.ok) {
        const data = await res.json();
        limite = data.cantidad;
      } else {
        console.log("Sucedio un error buscando el material");
        limite = -1;
      }
    } catch (error) {
      console.error(error);
    }
    let estampa =
      estampadoElegido >= 0 ? estampados[estampadoElegido].diseño : "";
    console.log(estampa);
    if (limite == 0) {
      setShowAlert(true);
      setAlertText("Ya no queda este material");
      setAlertState("danger");
    } else if (!talla) {
      setShowAlert(true);
      setAlertText("Pon una talla");
      setAlertState("danger");
    } else if (!material) {
      setShowAlert(true);
      setAlertText("Elige un material");
      setAlertState("danger");
    } else if (!cantidad || cantidad <= 0 || cantidad > limite) {
      setShowAlert(true);
      setAlertText("La cantidad debe estar entre 1 y " + limite);
      setAlertState("danger");
    } else {
      let order = {
        cantidad,
        talla,
        id,
        img,
        text,
        price,
        estampa,
        materialNumber,
        material,
      };
      let itemData;
      if (JSON.parse(localStorage.getItem("itemData"))) {
        itemData = JSON.parse(localStorage.getItem("itemData"));
      } else {
        itemData = [];
      }
      restarCantidad(material, cantidad);
      itemData.push(order);
      localStorage.setItem("itemData", JSON.stringify(itemData));

      setShowAlert(true);
      setAlertText("Se agrego al carrito :D");
      setAlertState("success");
    }
    setTimeout(() => {
      setShow(false);
      setShow2(false);
      setShowAlert(false);
    }, 1000);
  };

  const restarCantidad = async (material, cantidad) => {
    fetch("http://localhost:4000/updateQuantity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        material: material,
        cantidad: cantidad,
      }),
    });
  };

  return (
    <>
      <Container fluid className=" align-items-center m-0 p-0">
        <Row className="width-100vw">
          <Header />
        </Row>

        <Row className="width-100vw">
          <Col xs={{ span: 8, offset: 2 }}>
            <Row width="100%" className=" p-5">
              <Col className="centered" width="80%">
                <img src="/logo.png" alt="" />
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
          <h1 data-testid="Camisas deportivas">Camisas deportivas: </h1>
        </div>
        <Row
          className="align-items-center"
          onClick={() => {
            setEstampable(false);
            setEstampadoElegido(-1);
          }}
          data-testid="Camisas"
        >
          {" "}
          {CartasDeportivas}{" "}
        </Row>
        <div className="align-self-start ps-5 pt-5 mb-5">
          <h1 data-testid="Camisas para estampar">Camisas para estampar: </h1>
        </div>
        <Row
          className="align-items-center"
          onClick={() => {
            setEstampable(true);
            setEstampadoElegido(-1);
          }}
        >
          {CartasEstampables}
        </Row>

        <ThemeSwitcher />
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>¿Como quieres tu camisa?</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className=" centered-items text-center">
            <div className="contenedor">
              {selectedImage && (
                <Image
                  src={selectedImage}
                  className=" img-to-size imagen-fondo"
                  fluid
                  thumbnail
                  alt="Selected Image"
                />
              )}

              {estampadoElegido >= 0 ? (
                <Image
                  className="imagen-centrada"
                  src={estampados[estampadoElegido].diseño}
                />
              ) : (
                <></>
              )}
            </div>

            <br />

            <Form>
              <Form.Group className="mb-3" controlId="Talla">
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
              <Form.Group className="mb-3" controlId="Material">
                <Form.Select data-testid="Material">
                  <option value="">Material</option>
                  <option value="Poliester">Poliester</option>
                  <option value="Lino">Lino</option>
                  <option value="Lana">Lana</option>
                  <option value="Algodon">Algodon</option>
                </Form.Select>
                <Form.Text>¿De qué material quieres la camisa?.</Form.Text>
              </Form.Group>
              <br />
              <Form.Group>
                {/* <Form.Check
                  disabled={!estampable}
                  type="checkbox"
                  label={`¿Deseas agregar un estampado a la camisa?`}
                  id={`disabled-default-checkbox`}
                /> */}
                <br />
                {estampable ? (
                  <Button
                    onClick={() => {
                      setShow2(true);
                    }}
                  >
                    Agregar Estampado
                  </Button>
                ) : (
                  <></>
                )}
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

        <Offcanvas show={show2} onHide={handleClose1} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Selecciona tu estampado</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className=" centered-items text-center">
            {CartaEstampado.length > 0 ? (
              CartaEstampado
            ) : (
              <p className="h2">No hay estampados disponibles</p>
            )}
            <br />
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
