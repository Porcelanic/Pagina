import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import "../Styles/pago.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";

export default function FormEstampado() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      fetch("http://localhost:4000/image", {
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
          console.log("File uploaded successfully! Path:", data.filePath);
          // Use the path as needed in your application
        })
        .catch((error) => {
          // Handle errors
          console.error("Error uploading file:", error);
        });
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row className="d-flex justify-content-around mt-5 pt-5">
            <Col className="recuadro bordered p-5" md={{ span: 6, offset: 4 }}>
              <h2 className="text-center mb-5">Publica tu estampado</h2>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Publica tu estampado</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  maxLength={20}
                />
                <Form.Text>Ponle un nombre unico a tu estampado</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="Categoria">
                <Form.Select data-testid="Categoria">
                  <option value="">Categoria</option>
                  <option value="Abstracto">Abstracto</option>
                  <option value="Naturales">Naturales</option>
                  <option value="Retro">Retro</option>
                  <option value="Tematicos">Temáticos</option>
                  <option value="Grafico">Otro</option>
                </Form.Select>
                <Form.Text>Con que categoria crees que se identifica tu estampado?</Form.Text>
              </Form.Group>
              <div className="d-grid ">
                <Button
                  variant="outline-light"
                  type="submit"
                  className="ms-3 d-grid"
                  size="md"
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
