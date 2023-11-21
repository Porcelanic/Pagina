import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import "../Styles/pago.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function FormEstampado() {
  return (
    <>
      <Header />
      <Form>
        <div className="recuadro">
          <h2 className="text-center mb-5">Publica tu estampado</h2>

          <Row className="d-flex justify-content-around">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Publica tu estampado</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Descripcion"
                maxLength={45}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Categoria">
              <Form.Select data-testid="Categoria">
                <option value="">Talla</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </Form.Select>
              <Form.Text>¿De qué talla quieres la camisa?.</Form.Text>
            </Form.Group>
          </Row>
        </div>

        <Button
          variant="outline-primary"
          type="submit"
          className="ms-3"
          // disabled={!telefono || !datosEnvio.barrio || !datosEnvio.pais || !datosEnvio.ciudad || !datosEnvio.barrio || !datosEnvio.codigopostal || !datosEnvio.direccion || !infoPago.numeroTarjeta || !infoPago.nombreTitular || !infoPago.fechaVencimiento || !infoPago.cvv}
        >
          Pagar
        </Button>
      </Form>
      <ThemeSwitcher />
      <Footer />
    </>
  );
}
