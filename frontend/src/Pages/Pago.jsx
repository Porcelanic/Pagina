import { useState } from 'react';
import Header from '../Components/Header';
import Footer from "../Components/Footer";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import './Pago.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default function Pago() {

    const [infoPago, setInfoPago] = useState({
        barrio: "",
        ciudad: "",
        pais: "",
        codigopostal: "",
        direccion: ""
    });

    const clientSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch("http://localhost:4000/addresses", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(infoPago),
            })

            const text = await response.text();
            if ("error" == text) {
                alert("Error")
            } else {
                alert("Exito")
            }
        } catch (error) {
            console.log("error");
        }
    }

    const infoChange = (e) => {
        setInfoPago({ ...infoPago, [e.target.name]: e.target.value })

    };


    return (
        <>
            <Header />
            <div className='recuadro'>
                <h2 className='text-center mb-5'>Datos de envio</h2>


                <Form onSubmit={clientSubmit}>
                    <Row className='d-flex justify-content-around'>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Control
                                type="number"
                                name="telefono"
                                placeholder="Telefono"

                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Control
                                type="text"
                                name="pais"
                                placeholder="Pais"
                                maxLength={45}
                                onChange={infoChange}
                                value={infoPago.pais}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Control
                                type="text"
                                name="ciudad"
                                placeholder="Ciudad"
                                maxLength={45}
                                onChange={infoChange}
                                value={infoPago.ciudad}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='d-flex justify-content-around'>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Control
                                type="text"
                                name="barrio"
                                placeholder="Barrio"
                                maxLength={45}
                                onChange={infoChange}
                                value={infoPago.barrio}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Control
                                type="number"
                                name="codigopostal"
                                placeholder="Codigo Postal"
                                onChange={infoChange}
                                value={infoPago.codigopostal}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Control
                                type="text"
                                name="direccion"
                                placeholder="Direccion"
                                maxLength={45}
                                onChange={infoChange}
                                value={infoPago.direccion}
                            />
                        </Form.Group>
                    </Row>

                </Form>
            </div>
            <div className='recuadro'>
                <h2 className='text-center mb-5'>Información de Pago</h2>

                <Form onSubmit={clientSubmit}>
                    <Row className='d-flex justify-content-around'>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Control
                                type="text"
                                name="numeroTarjeta"
                                placeholder="Numero de tarjeta"
                                maxLength={45}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Control
                                type="text"
                                name="nombreTitular"
                                placeholder="Nombre del titular"
                                maxLength={45}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='d-flex justify-content-around'>
                        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicUsername">
                            <Form.Control
                                type="text"
                                name="fechaVencimiento"
                                placeholder="Nombre"
                                maxLength={45}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicUsername">
                            <Form.Control
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                maxLength={45}
                            />
                        </Form.Group>
                    </Row>

                </Form>
            </div>
            <ThemeSwitcher />
            <Footer />
        </>
    )
}