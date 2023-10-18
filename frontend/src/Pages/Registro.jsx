import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import Image from "react-bootstrap/Image";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";

function Registro() {
  const [cliente, setCliente] = useState({
    idcliente: 4,
    nombre: "",
    telefono: null,
    email: "",
    password: "",
    direccion_iddireccion: null,
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
          <Form.Text>¿Bajo qué rol deseas registrate?.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Control
            type="username"
            name="nombre"
            placeholder="Nombre"
            onChange={clientChange}
            value={cliente.nombre}
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
          />
          <Form.Text className="text-muted">
            Debe contener por lo menos un número.
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disabled={!cliente.nombre || !cliente.email || !cliente.password}
        >
          {loading
            ? // <CircularProgress color="inherit" size={25} />
              loading
            : "Registrarme"}
        </Button>
      </Form>
    </>
  );
}

export default Registro;
