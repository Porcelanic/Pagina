import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import { ConversionEmail } from "../Classes/Adapter/conversionEmail";
import Header from "../Classes/Header/Header";
import { FachadaDeEstados } from "../Classes/Estados/Fachada/FachadaDeEstados";


function Registro() {
  const fachada= new FachadaDeEstados();

  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(fachada.getMostrarAlerta());
  const [alertState, setAlertState] = useState(fachada.getEstadoDeAlerta());

  const [cliente, setCliente] = useState({
    nombre: "",
    email: "",
    password: "",
    tipoCliente: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const emailAdapter = new ConversionEmail();

  const clientSubmit = async (e) => {
    console.log(cliente.email);
    e.preventDefault();
    setLoading(true);
    try {
      if (cliente.nombre.length > 45) {
        setShowAlert(fachada.cambioMostrarAlerta());
        setAlertText("El nombre es mayor a 45 caracteres");
        setAlertState(fachada.cambioEstadoDeAlerta(1));
        setLoading(false);
      } else if (cliente.email.length > 45) {
        setShowAlert(fachada.cambioMostrarAlerta());
        setAlertText("El correo es mayor a 45 caracteres");
        setAlertState(fachada.cambioEstadoDeAlerta(1));
        setLoading(false);
      } else if (cliente.password.length > 45) {
        setShowAlert(fachada.cambioMostrarAlerta());
        setAlertText("La contraseña es mayor a 45 caracteres");
        setAlertState(fachada.cambioEstadoDeAlerta(1));
        setLoading(false);
      } else {
        cliente.email = emailAdapter.convertirEmailAMinuscula(cliente.email);
        if (cliente.tipoCliente == "Artista") {
          const res = await fetch("http://localhost:3000/artista/crearArtista", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cliente),
          });
          const data = await res.json();
          if (data.statusCode == 200) {
            setLoading(false);
            setShowAlert(fachada.cambioMostrarAlerta());
            setAlertText("El usuario está duplicado");
            setAlertState(fachada.cambioEstadoDeAlerta(1));
            setLoading(false);
          } else {
            setLoading(false);
            setLoading(false);
            console.log("emailMinuscula");
            setAlertText("El registro se realizó correctamente");
            setAlertState(fachada.cambioEstadoDeAlerta(0));
            setShowAlert(fachada.cambioMostrarAlerta());
            setTimeout(() => navigate("/login"), 500);
          }
        } else if (cliente.tipoCliente == "Cliente") {
          const res = await fetch("http://localhost:3000/cliente/crearCliente", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cliente),
          });
          const data = await res.json();
          if (data.statusCode == 200) {
            setShowAlert(fachada.cambioMostrarAlerta());
            setAlertText("El usuario está duplicado");
            setAlertState(fachada.cambioEstadoDeAlerta(1));
            setLoading(false);
          } else {
            setLoading(false);
            setAlertText("El registro se realizó correctamente");
            setAlertState(fachada.cambioEstadoDeAlerta(0));
            setShowAlert(fachada.cambioMostrarAlerta());
            setTimeout(() => navigate("/login"), 500);
            console.log(emailAdapter.convertirEmailAMinuscula(cliente.email));
          }
        }
      }
    } catch (error) {
      console.log("Error");
    }
  };

  const clientChange = (e) =>
    setCliente({ ...cliente, [e.target.name]: e.target.value });

  const handleSelect = (e) => {
    setCliente({ ...cliente, tipoCliente: e.target.value });
  };
  return (
    <>
      <Header />
      <div className="text-center content">
        <ThemeSwitcher />
        <Alert
          className="mt-5"
          variant={alertState}
          show={showAlert}
          onClose={() => setShowAlert(fachada.cambioMostrarAlerta())}
          dismissible
        >
          {alertText}
        </Alert>

        <Form onSubmit={clientSubmit} data-testid="Form">
          <Form.Group className="mb-5 mt-5" controlId="formBasicTipo">
            <Image src="/logo.png" fluid width="50%" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTipo">
            <Form.Select
              aria-label="Default select example"
              onChange={handleSelect}
              data-testid="Tipo de registro"
            >
              <option value="">Tipo de registro</option>
              <option value="Cliente">Cliente</option>
              <option value="Artista">Artista</option>
            </Form.Select>
            <Form.Text>¿Bajo qué rol deseas registrate?.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control
              type="username"
              name="nombre"
              placeholder="Nombre"
              onChange={clientChange}
              value={cliente.nombre}
              data-testid="Nombre"
            />
            <Form.Text>
              Escribe tu nombre para que tus amigos te reconozcan.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Correo electrónico"
              onChange={clientChange}
              value={cliente.email}
              data-testid="Correo"
            />

            <Form.Text className="text-muted">
              Nunca compartiremos su dirección de correo electrónico.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={clientChange}
              value={cliente.password}
              data-testid="Contraseña"
            />
            <Form.Text className="text-muted">
              Debe contener por lo menos un número.
            </Form.Text>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={
              !cliente.nombre ||
              !cliente.email ||
              !cliente.password ||
              !cliente.tipoCliente
            }
            data-testid="Registrarme"
          >
            {loading ? loading : "Registrarme"}
          </Button>
        </Form>
        <Form.Group>
          <hr />
          <Link to={"/login"}>
            <Button variant="outline-primary" type="submit">
              Login
            </Button>
          </Link>
        </Form.Group>
      </div>
    </>
  );
}

export default Registro;