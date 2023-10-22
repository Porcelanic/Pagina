import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import Image from "react-bootstrap/Image";
import { useNavigate, useParams, Link } from "react-router-dom";
import React, { useState } from "react";

function Registro() {
  const [cliente, setCliente] = useState({
    nombre: "",
    email: "",
    password: "",
    tipoCliente: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

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
        await response.json();

        setLoading(false);
        navigate("/");
      } else if (cliente.tipoCliente == "Cliente") {
        const response = await fetch("http://localhost:4000/clients", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cliente),
        });
        await response.json();

        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      //      if (error.code === '23505' && (error.constraint === 'pk_cliente' || error.constraint === 'pk_artista')) {
    }
  };

  const clientChange = (e) =>
    setCliente({ ...cliente, [e.target.name]: e.target.value });

  const handleSelect = (e) => {
    setCliente({ ...cliente, tipoCliente: e.target.value });
  };
  return (
    <>
      <ThemeSwitcher />

      <Form onSubmit={clientSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTipo">
          <Image src="/logo.png" rounded />
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
    </>
  );
}

export default Registro;
