import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Classes/Header/Header";
import Footer from "../Components/Footer";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import "../Styles/pago.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";

export default function FormCamisetas() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const [Camisetas, setCamisetas] = useState({
    diseño: "",
    nombre: "",
    tipo: "",
    precio: null,
    adminEmail: localStorage.getItem("email"),
  });

  const CamisetasChange = (e) => {
    setCamisetas({ ...Camisetas, [e.target.name]: e.target.value });
  };
  const handleSelect = (e) => {
    setCamisetas({ ...Camisetas, tipo: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      fetch(`http://localhost:3000/upload/camiseta/${Camisetas.tipo}`, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          // Handle response from the server
          if (response.ok) {
            return response.json(); // Parse response JSON if status is OK
          }
          throw new Error("File upload failed");
        })
        .then((data) => {
          // Handle the file path returned from the server
          setCamisetas({ ...Camisetas, diseño: data.filePath });
        })
        .catch((error) => {
          // Handle errors
          console.error("Error uploading file:", error);
        });
    }
  };

  useEffect(() => {
    if (Camisetas.diseño !== "") {
      toDB();
    }
  }, [Camisetas.diseño]);

  const toDB = () => {
    Camisetas.precio = parseInt(Camisetas.precio);
    fetch("http://localhost:3000/camisetas/crearCamisetas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Camisetas),
    });
    setTimeout(() => navigate("/"), 200);
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row className="d-flex justify-content-around mb-5">
            <Col className="recuadro bordered" md={{ span: 6, offset: 3 }}>
              <h2 className="text-center mb-3">Publica tu Camiseta</h2>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Publica tu Camiseta</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="nombre"
                  placeholder="nombre"
                  onChange={CamisetasChange}
                  value={Camisetas.nombre}
                  maxLength={30}
                />
                <Form.Text>Ponle un nombre unico a tu Camiseta</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="tipo">
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleSelect}
                  data-testid="tipo"
                >
                  <option value="">Tipo</option>
                  <option value="Deportivas">Deportivas</option>
                  <option value="Estampables">Estampables</option>
                </Form.Select>
                <Form.Text>
                  Con que tipo crees que se identifica tu Camisetas?
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="precio"
                  placeholder="precio"
                  onChange={CamisetasChange}
                  value={Camisetas.precio}
                  maxLength={6}
                />
                <Form.Text>Ponle un precio a tu Camiseta</Form.Text>
              </Form.Group>

              <div className="d-grid ">
                <Button
                  variant="outline-light"
                  type="submit"
                  className="ms-3 d-grid"
                  size="md"
                  disabled={
                    !file ||
                    !Camisetas.nombre ||
                    !Camisetas.tipo ||
                    !Camisetas.precio
                  }
                >
                  Publicar
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
      <ThemeSwitcher />
      <Footer />
    </>
  );
}
