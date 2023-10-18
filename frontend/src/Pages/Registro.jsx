import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import Image from "react-bootstrap/Image";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";

function Registro() {
  const [cliente, setCliente] = useState({
    idcliente: 2,
    nombre: "a",
    telefono: 55555,
    email: "a@m.com",
    password: "Hola11111",
    direccion_iddireccion: 1,
    trial372: "a",
  });

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const clientSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (params.id) {
        const response = await fetch(
          "http://localhost:4000/clients/" + params.id,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
          }
        );
        await response.json();
      } else {
        const response = await fetch("http://localhost:4000/clients", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cliente),
        });
        await response.json();
      }

      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (params.id) {
        const response = await fetch(
          "http://localhost:4000/tasks/" + params.id,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
          }
        );
        await response.json();
      } else {
        const response = await fetch("http://localhost:4000/tasks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(task),
        });
        await response.json();
      }

      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const clientChange = (e) =>
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  return (
    <>
      <ThemeSwitcher />

      <Form onSubmit={clientSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTipo">
          <Image src="/logo.png" rounded />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTipo">
          <Form.Select aria-label="Default select example">
            <option>Tipo de registro</option>
            <option value="Client">Cliente</option>
            <option value="Artist">Artista</option>
          </Form.Select>
          <Form.Text>¿Bajo que rol deseas registrate?</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Control
            type="username"
            name="nombre"
            placeholder="Write your title"
            onChange={clientChange}
            value={cliente.nombre}
          />
          <Form.Text>
            Se creativo, tu nombre de usuario te representara a ti
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Correo Electronico"
            onChange={clientChange}
            value={cliente.email}
          />
          <Form.Text className="text-muted">
            Nunca compartiremos su direccion de correo electronico.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Contraseña" />
          <Form.Text className="text-muted">
            Debe contener por lo menos un numero
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disabled={!cliente.nombre || !cliente.email}
        >
          {loading
            ? // <CircularProgress color="inherit" size={25} />
              loading
            : "Publicar"}
        </Button>
      </Form>
    </>
  );
}

export default Registro;