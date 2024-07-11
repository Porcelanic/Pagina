import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
//import Row from "react-bootstrap/Row";
//import Container from "react-bootstrap/Container";
//import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
//import Alert from "react-bootstrap/Alert";

import Pluralidad from "./Pluralidad";
//import { Link } from "react-router-dom";
import { useSpecific } from "../../Utils/SpecificContext";
function Items(prop) {

  const {
    setShowAlert,
    setAlertText,
    setAlertState,
  } = useSpecific();
  const eliminarDelCarrito = (posicion) => {
    let material = prop.itemData[posicion].material;
    restarCantidad(material, -prop.itemData[posicion].cantidad);
    prop.itemData.splice(posicion, 1);
    localStorage.setItem("itemData", JSON.stringify(prop.itemData));
    window.location.reload();
  };

  const cambiarCantidad = async (posicion) => {
    let cantidad = document.querySelector("#cantidad" + posicion).value;
    let material = prop.itemData[posicion].material;
    let limite;
    try {
      const res = await fetch(
        `http://localhost:3000/material/consultarNombre/${material}`
      );
      if (res.ok) {
        const data = await res.json();
        limite = Number(data.cantidad) + Number(prop.itemData[posicion].cantidad);
      } else {
        console.log("Sucedio un error buscando el material");
        limite = -1;
      }
    } catch (error) {
      console.error(error);
    }
    if (limite == 0) {
      setShowAlert(true);
      setAlertText("Ya no queda este material");
      setAlertState("danger");
    } else if (!cantidad || cantidad <= 0 || cantidad > limite) {
      setShowAlert(true);
      setAlertText("La cantidad debe estar entre 1 y " + limite);
      setAlertState("danger");
    } else {
      restarCantidad(material, cantidad - prop.itemData[posicion].cantidad);
      prop.itemData[posicion].cantidad = cantidad;
      localStorage.setItem("itemData", JSON.stringify(prop.itemData));

      window.location.reload();
    }
  };

  const restarCantidad = async (material, cantidad) => {
    const cantidadNumber = parseInt(cantidad);
    try {
      const res = await fetch(`http://localhost:3000/material/actualizarMaterial/${material}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Material: material, cantidad: cantidadNumber, }),
      });
      if (res.ok) {
        console.log('Material updated successfully');
      } else {
        console.log('Failed to update material');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Carousel className=" text-center" interval={null}>
      {prop.itemData.map((data, index) => (
        <Carousel.Item key={index}>
          <div className="contenedor-img">
            <Image
              src={`http://localhost:3000/uploads/${data.img}`}
              className="camisa-fondo"
              alt="Selected Image"
            />
            {data.estampa != "" ? (
              <Image src={data.estampa} className="camisa-centrada" />
            ) : (
              <></>
            )}
          </div>
          <Carousel.Caption>
            <Pluralidad data={data} />
            <Button
              className="btn-dark btn-outline-light"
              onClick={() => eliminarDelCarrito(prop.itemData.indexOf(data))}
            >
              Eliminar del carrito
            </Button>
            <InputGroup className="my-3">
              <Form.Control
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="number"
                defaultValue={data.cantidad}
                id={"cantidad" + prop.itemData.indexOf(data)}
              />
              <Button
                variant="outline-light"
                onClick={() => cambiarCantidad(prop.itemData.indexOf(data))}
              >
                Cambiar cantidad
              </Button>
            </InputGroup>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Items;
