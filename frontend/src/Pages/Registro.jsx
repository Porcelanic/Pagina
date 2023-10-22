import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Registro() {
  const [showAlert, setShowAlert] = useState(false); // Nuevo estado para manejar la visibilidad de la alerta

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
      if (cliente.tipoCliente == "Artista") {
        const response = await fetch("http://localhost:4000/artists", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cliente),
        });
        const text = await response.text();
        if ("error" == text) {
          setShowAlert(true);
          setLoading(false);
        } else {
          setLoading(false);
          navigate("/");
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
          setLoading(false);
        } else {
          setLoading(false);
          navigate("/");
        }
      }
    } catch (error) {
      console.log("hola");
    }
  };

  const clientChange = (e) =>
    setCliente({ ...cliente, [e.target.name]: e.target.value });

  const handleSelect = (e) => {
    setCliente({ ...cliente, tipoCliente: e.target.value });
  };
  return (
    <div className="text-center">
      <ThemeSwitcher />
      <Alert
        variant="danger"
        show={showAlert}
        onClose={() => setShowAlert(false)}
        dismissible
      >
        El correo electronico digitado ya esta en uso
      </Alert>
      <Form onSubmit={clientSubmit}>
        <Form.Group className="mb-5 mt-5" controlId="formBasicTipo">
          <Image src="/logo.png" fluid width="50%" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTipo">
          <Form.Select
            aria-label="Default select example"
            onChange={handleSelect}
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
            maxLength={45}
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
            maxLength={45}
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
            maxLength={45}
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
        >
          {loading ? loading : "Registrarme"}
        </Button>
      </Form>
      <Form.Group>
        <hr />
        <Link to={"/"}>
          <Button variant="outline-primary" type="submit">
            Login
          </Button>
        </Link>
      </Form.Group>
    </div>
  );
}

export default Registro;
