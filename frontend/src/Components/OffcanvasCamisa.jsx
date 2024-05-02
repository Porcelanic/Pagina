import { useOffcanvas } from "../Placeholding/OffcanvasContext";
import Image from "react-bootstrap/Image";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function OffcanvasCamisa() {
  const {
    show,
    handleClose,
    selectedImage,
    estampable,
    showAlert,
    alertState,
    alertText,
    setShow,
    setShow2,
    setShowAlert,
    setAlertText,
    setAlertState,
    estampadoElegido,
    estampados,
  } = useOffcanvas();

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
              <Form.Control type="number" aria-label="Cantidad" id="cantidad" />
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
  );
}

export default OffcanvasCamisa;
