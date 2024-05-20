import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Classes/Header/Header";
import Footer from "../Components/Footer";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import "../Styles/pago.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { FachadaDeEstados } from "../Classes/Estados/Fachada/FachadaDeEstados";
import Invocador from "../Classes/Pago/Comando/Invocador";
import ComandoPedido from "../Classes/Pago/Comando/ComandoPedido";
import ComandoCrearCamisa from "../Classes/Pago/Comando/ComandoCrearCamisa";
import ComandoPago from "../Classes/Pago/Comando/ComandoPago";
import ComandoCrearInformacion from "../Classes/Pago/Comando/ComandoCrearInformacion";
import DatosEnvio from "../Classes/Pago/Tipos/DatosEnvio";
import InfoPago from "../Classes/Pago/Tipos/InfoPago";
import ItemData from "../Classes/Pago/Tipos/ItemData";

const Pago: React.FC = () => {
  const [datosEnvio, setDatosEnvio] = useState<DatosEnvio>({
    iddireccion: "",
    barrio: "",
    ciudad: "",
    pais: "",
    codigopostal: "",
    direccion: "",
    telefono: "",
  });

  const [infoPago, setInfoPago] = useState<InfoPago>({
    numeroTarjeta: "",
    nombreTitular: "",
    fechaVencimiento: "",
    cvv: "",
  });

  const navigate = useNavigate();
  const fachada = new FachadaDeEstados();

  const [alertText, setAlertText] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(
    fachada.getMostrarAlerta()
  );
  const [alertState, setAlertState] = useState<string>(
    fachada.getEstadoDeAlerta()
  );
  // Implementacion del patron comando
  const dataSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Se crea un invocador y se agregan los comandos necesarios con la respectiva informacion
    const invocador = new Invocador();
    invocador.agregarComando(new ComandoCrearInformacion(datosEnvio));
    invocador.agregarComando(new ComandoPago({ fechaPago: obtenerFecha() }));
    invocador.agregarComando(
      new ComandoPedido({
        valor: localStorage.getItem("precioTotalIVA") || "",
        email: localStorage.getItem("email") || "",
      })
    );
    invocador.agregarComando(
      new ComandoCrearCamisa(
        agregarNumeroPorMaterial(
          JSON.parse(localStorage.getItem("itemData") || "[]")
        )
      )
    );

    // Se ejecutan los comandos y se espera a que se resuelvan
    await invocador.ejecutarComandos();

    // Se muestra la alerta de pago exitoso y se redirige al inicio
    descontarDinero();
    setAlertText("Pago exitoso");
    localStorage.removeItem("itemData");
    setAlertState(fachada.cambioEstadoDeAlerta(0));
    setShowAlert(fachada.cambioMostrarAlerta());
    setTimeout(() => navigate("/"), 1000);
  };

  const descontarDinero = () => {
    const dineroDisponible = Number(localStorage.getItem("dinero"));
    const valorDeCompra = Number(localStorage.getItem("precioTotalIVA"));
    localStorage.setItem(
      "dinero",
      (dineroDisponible - valorDeCompra).toString()
    );
  };

  const agregarNumeroPorMaterial = (itemData: ItemData[]): ItemData[] => {
    const materials = ["Poliester", "Lino", "Lana", "Algodon"];
    return itemData.map((item) => ({
      ...item,
      materialNumber: materials.indexOf(item.material) + 1,
    }));
  };

  const obtenerFecha = (): string => {
    const fechaActual = new Date();
    const anio = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
    const dia = String(fechaActual.getDate()).padStart(2, "0");
    return `${anio}-${mes}-${dia}`;
  };

  const datosEnvioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatosEnvio({ ...datosEnvio, [e.target.name]: e.target.value });
  };

  const infoPagoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoPago({ ...infoPago, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <Alert
        className="alert mt-5"
        variant={alertState}
        show={showAlert}
        onClose={() => setShowAlert(fachada.cambioMostrarAlerta())}
        dismissible
      >
        {alertText}
      </Alert>
      <Form onSubmit={dataSubmit} className="mb-5 pb-5">
        <Row className="d-flex justify-content-around">
          <Col className="recuadro bordered p-5" md={{ span: 8, offset: 2 }}>
            <h2 className="text-center mb-5">Datos de envio</h2>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    name="telefono"
                    placeholder="Telefono"
                    onChange={datosEnvioChange}
                    value={datosEnvio.telefono}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="pais"
                    placeholder="Pais"
                    maxLength={45}
                    onChange={datosEnvioChange}
                    value={datosEnvio.pais}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="ciudad"
                    placeholder="Ciudad"
                    maxLength={45}
                    onChange={datosEnvioChange}
                    value={datosEnvio.ciudad}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="barrio"
                    placeholder="Barrio"
                    maxLength={45}
                    onChange={datosEnvioChange}
                    value={datosEnvio.barrio}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    name="codigopostal"
                    placeholder="Codigo Postal"
                    onChange={datosEnvioChange}
                    value={datosEnvio.codigopostal}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="direccion"
                    placeholder="Direccion"
                    maxLength={45}
                    onChange={datosEnvioChange}
                    value={datosEnvio.direccion}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="d-flex justify-content-around">
          <Col className="recuadro bordered p-5" md={{ span: 8, offset: 2 }}>
            <h2 className="text-center mb-5">Datos de pago</h2>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    name="numeroTarjeta"
                    placeholder="Numero de Tarjeta"
                    onChange={infoPagoChange}
                    value={infoPago.numeroTarjeta}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="nombreTitular"
                    placeholder="Nombre del Titular"
                    onChange={infoPagoChange}
                    value={infoPago.nombreTitular}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="date"
                    name="fechaVencimiento"
                    placeholder="Fecha de Vencimiento"
                    onChange={infoPagoChange}
                    value={infoPago.fechaVencimiento}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    name="cvv"
                    placeholder="CVV"
                    maxLength={45}
                    onChange={infoPagoChange}
                    value={infoPago.cvv}
                  />
                </Form.Group>
              </Col>
              <p className="ms-0 mb-3 h4 align-items-center">
                Valor a pagar ${localStorage.getItem("precioTotalIVA")}
              </p>
            </Row>

            <Button
              variant="outline-light"
              type="submit"
              className="ms-3 d-grid"
              disabled={
                !datosEnvio.barrio ||
                !datosEnvio.ciudad ||
                !datosEnvio.pais ||
                !datosEnvio.codigopostal ||
                !datosEnvio.direccion ||
                !infoPago.numeroTarjeta ||
                !infoPago.nombreTitular ||
                !infoPago.fechaVencimiento ||
                !infoPago.cvv
              }
            >
              Pagar
            </Button>
          </Col>
        </Row>
      </Form>
      <ThemeSwitcher />
      <Footer />
    </>
  );
};

export default Pago;
