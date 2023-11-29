import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../Components/Header";
import "../Styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [cliente, setCliente] = useState({
    nombre: "",
    telefono: null,
    email: "",
    password: "",
    storedPassword: "",
    direccion_iddireccion: null,
    trial372: null,
  });

  const [showAlert, setShowAlert] = useState(false); // Nuevo estado para manejar la visibilidad de la alerta
  const [alertText, setAlertText] = useState(""); // Nuevo estado para manejar la visibilidad de la alerta
  const [alertState, setAlertState] = useState(""); // Nuevo estado para manejar la visibilidad de la alerta

  const loadCliente = async (email) => {
    try {
      let tipoUsuario = document.querySelector("#tipoUsuario").value;
      if (tipoUsuario) {
        if (cliente.email.length > 45) {
          setAlertText("El correo es mayor a 45 caracteres");
          setAlertState("danger");
          setShowAlert(true);
        } else if (cliente.password.length > 45) {
          setAlertText("La contraseña es mayor a 45 caracteres");
          setAlertState("danger");
          setShowAlert(true);
        } else {
          if (tipoUsuario == "Cliente") {
            const res = await fetch(`http://localhost:4000/clients/${email}`);
            if (res.ok) {
              const data = await res.json();
              cliente.nombre = data.nombre;
              cliente.email = data.email;
              cliente.storedPassword = data.password;

              if (cliente.password !== cliente.storedPassword) {
                setAlertText("Cotraseña incorrecta");
                setAlertState("danger");
                setShowAlert(true);
              } else {
                setAlertText("Correo y contraseña válidos :D");
                setAlertState("success");
                setShowAlert(true);
                localStorage.setItem("email", cliente.email);
                localStorage.setItem("username", cliente.nombre);
                localStorage.setItem("dinero", 3000000);
                localStorage.setItem("tipoDeCliente", "Cliente");
                setTimeout(() => navigate("/"), 200);
              }
            } else {
              setAlertText("Correo no registrado");
              setAlertState("danger");
              setShowAlert(true); // Mostrar la alerta en caso de error
            }
          } else if (tipoUsuario == "Artista") {
            const res = await fetch(`http://localhost:4000/artists/${email}`);
            if (res.ok) {
              const data = await res.json();
              cliente.nombre = data.nombre;
              cliente.email = data.email;
              cliente.storedPassword = data.password;

              if (cliente.password !== cliente.storedPassword) {
                setAlertText("Cotraseña incorrecta");
                setAlertState("danger");
                setShowAlert(true);
              } else {
                setAlertText("Correo y contraseña válidos :D");
                setAlertState("success");
                setShowAlert(true);
                localStorage.setItem("email", cliente.email);
                localStorage.setItem("username", cliente.nombre);
                localStorage.setItem("tipoDeCliente", "Artista");
                setTimeout(() => navigate("/catalogoEstampado"), 200);
              }
            } else {
              setAlertText("Correo no registrado");
              setAlertState("danger");
              setShowAlert(true); // Mostrar la alerta en caso de error
            }
          }
        }
      } else {
        setAlertText("¿Qué tipo de usuario eres?");
        setAlertState("danger");
        setShowAlert(true);
      }
    } catch (error) {
      setShowAlert(true); // Mostrar la alerta en caso de error
      // Manejar errores de red o del servidor
      console.error(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (cliente.email && cliente.password) {
      await loadCliente(cliente.email); // Espera a que loadCliente termine antes de continuar
      //await loadCliente(cliente.password);
    }
  };

  const clientChange = (e) =>
    setCliente({ ...cliente, [e.target.name]: e.target.value });

  return (
    <>
      <Header />
      <Alert
        className="alert mt-5"
        variant={alertState}
        show={showAlert}
        onClose={() => setShowAlert(false)}
        dismissible
      >
        {alertText}
      </Alert>
      <div className="text-center content">
        <h1>WaySoft</h1>
        <Form.Group className="mb-5 mt-5" controlId="formBasicTipo">
          <Image src="/logo.png" fluid width="50%" />
        </Form.Group>
        <Form onSubmit={handleFormSubmit} data-testid="Form">
          <Form.Group className="mb-3" controlId="tipoUsuario">
            <Form.Select
              aria-label="Default select example"
              data-testid="Tipo de registro"
              onChange={null}
            >
              <option value="">Tipo de registro</option>
              <option value="Cliente">Cliente</option>
              <option value="Artista">Artista</option>
            </Form.Select>
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
            <Form.Text className="text-muted"></Form.Text>
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
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group> */}
          <Button
            variant="primary"
            type="submit"
            disabled={!cliente.email || !cliente.password}
          >
            Iniciar sesión
          </Button>
        </Form>
        <Form.Group>
          <hr />
          <Link to={"/registro"}>
            <Button
              variant="outline-primary"
              type="submit"
              data-testid="Crear cuenta"
            >
              Crear cuenta
            </Button>
          </Link>
        </Form.Group>
      </div>
      <ThemeSwitcher />
    </>
  );
}

export default Login;
