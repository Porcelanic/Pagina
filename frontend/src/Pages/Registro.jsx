import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Header from "../Components/Header";

function Registro() {
  const [showAlert, setShowAlert] = useState(false); // Nuevo estado para manejar la visibilidad de la alerta
  const [alertText, setAlertText] = useState(""); // Nuevo estado para manejar la visibilidad de la alerta
  const [alertState, setAlertState] = useState(""); // Nuevo estado para manejar la visibilidad de la alerta

  const [cliente, setCliente] = useState({
    nombre: "",
    email: "",
    password: "",
    tipoCliente: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const clientSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (cliente.nombre.length > 45) {
        setShowAlert(true);
        setAlertText("El nombre es mayor a 45 caracteres");
        setAlertState("danger");
        setLoading(false);
      } else if (cliente.email.length > 45) {
        setShowAlert(true);
        setAlertText("El correo es mayor a 45 caracteres");
        setAlertState("danger");
        setLoading(false);
      } else if (cliente.password.length > 45) {
        setShowAlert(true);
        setAlertText("La contraseña es mayor a 45 caracteres");
        setAlertState("danger");
        setLoading(false);
      } else {
        if (cliente.tipoCliente == "Artista") {
          const response = await fetch("http://localhost:4000/artists", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cliente),
          });
          const text = await response.text();
          if ("error" == text) {
            setLoading(false);
            setShowAlert(true);
            setAlertText("El usuario está duplicado");
            setAlertState("danger");
            setLoading(false);
          } else {
            setLoading(false);
            setLoading(false);
            setAlertText("El registro se realizó correctamente");
            setAlertState("success");
            setShowAlert(true);
            setTimeout(() => navigate("/login"), 500);
          }
        } else if (cliente.tipoCliente == "Cliente") {
          const response = await fetch("http://localhost:4000/clients", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cliente),
          });

          const text = await response.text();
          if ("error" == text) {
            setShowAlert(true);
            setAlertText("El usuario está duplicado");
            setAlertState("danger");
            setLoading(false);
          } else {
            setLoading(false);
            setAlertText("El registro se realizó correctamente");
            setAlertState("success");
            setShowAlert(true);
            setTimeout(() => navigate("/login"), 500);
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
          onClose={() => setShowAlert(false)}
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
