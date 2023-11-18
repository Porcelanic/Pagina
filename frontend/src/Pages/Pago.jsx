import { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from "../Components/Footer";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import './Pago.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default function Pago() {

    const [datosEnvio, setDatosEnvio] = useState({
        iddireccion: "",
        barrio: "",
        ciudad: "",
        pais: "",
        codigopostal: "",
        direccion: ""
    });

    const [infoPago, setInfoPago] = useState({
        numeroTarjeta: "",
        nombreTitular: "",
        fechaVencimiento: "",
        cvv: ""
    })

    const [telefono, setTelefono] = useState("")

    const VALOR = parseFloat(localStorage.valor).toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
    })

    console.log(VALOR);

    useEffect(() => {
        if (localStorage.email) {
            obtenerDatosEnvio(localStorage.email);
        } else {
            alert("Debe logerse, o no funciona >:V")
        }
    }, [localStorage.email])

    const obtenerDatosEnvio = async (email) => {
        try {
            const datosEnvio = await fetch(`http://localhost:4000/addresses/${email}`);
            if (datosEnvio.ok) {
                const data = await datosEnvio.json();
                console.log(data);
                setDatosEnvio({ ...datosEnvio, iddireccion: data.iddireccion, barrio: data.barrio, ciudad: data.ciudad, codigopostal: data.codigopostal, direccion: data.direccion, pais: data.pais })
            } else {
                alert("El cliente no tiene datos de envio")
            }

            const datosCliente = await fetch(`http://localhost:4000/clients/${email}`);
            if (datosCliente.ok) {
                const data = await datosCliente.json();
                console.log(data);
                // setDatosEnvio({ ...datosEnvio, barrio: data.barrio, ciudad: data.ciudad, codigopostal: data.codigopostal, direccion: data.direccion, pais: data.pais })
            } else {
                alert("El cliente no tiene datos de envio")
            }

        } catch (error) {
            setShowAlert(true); // Mostrar la alerta en caso de error
            // Manejar errores de red o del servidor
            console.error(error);
        }
    }

    const crearDireccion = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch("http://localhost:4000/addresses", { // agregar a la tabla direccion
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datosEnvio),
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

    const clientSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:4000/payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fechaPago: obtenerFecha(), valor: localStorage.valor }),
            });

            const text = await response.text();
            if ("error" == text) {
                alert("Error al procesar el pago")
            } else {
                alert("Pago exitoso !!")
            }
        } catch (error) {
            console.log("error");
        }
    }

    function obtenerFecha() {
        // Obtén la fecha actual
        const fechaActual = new Date();

        // Obtén los componentes de la fecha (año, mes, día)
        const anio = fechaActual.getFullYear();
        const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // El mes es devuelto en base 0
        const dia = String(fechaActual.getDate()).padStart(2, '0');

        // Formatea la fecha en el formato deseado (AAAA-MM-DD)
        const fechaFormateada = `${anio}-${mes}-${dia}`;

        return (fechaFormateada);

    }

    const datosEnvioChange = (e) => {
        setDatosEnvio({ ...datosEnvio, [e.target.name]: e.target.value })
    };

    const infoPagoChange = (e) => {
        setInfoPago({ ...infoPago, [e.target.name]: e.target.value })
    };



    return (
        <>
            <Header />
            <Form onSubmit={clientSubmit}>
                <div className='recuadro'>
                    <h2 className='text-center mb-5'>Datos de envio</h2>


                    <Row className='d-flex justify-content-around'>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Control
                                type="number"
                                name="telefono"
                                placeholder="Telefono"
                                onChange={(e) => { setTelefono(e.target.value) }}
                                value={telefono}

                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Control
                                type="text"
                                name="pais"
                                placeholder="Pais"
                                maxLength={45}
                                onChange={datosEnvioChange}
                                value={datosEnvio.pais}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Control
                                type="text"
                                name="ciudad"
                                placeholder="Ciudad"
                                maxLength={45}
                                onChange={datosEnvioChange}
                                value={datosEnvio.ciudad}
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
                                onChange={datosEnvioChange}
                                value={datosEnvio.barrio}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Control
                                type="number"
                                name="codigopostal"
                                placeholder="Codigo Postal"
                                onChange={datosEnvioChange}
                                value={datosEnvio.codigopostal}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Control
                                type="text"
                                name="direccion"
                                placeholder="Direccion"
                                maxLength={45}
                                onChange={datosEnvioChange}
                                value={datosEnvio.direccion}
                            />
                        </Form.Group>
                    </Row>

                </div>
                <div className='recuadro'>
                    <h2 className='text-center mb-5'>Información de Pago</h2>

                    <Row className='d-flex justify-content-around'>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Control
                                type="text"
                                name="numeroTarjeta"
                                placeholder="Numero de tarjeta"
                                maxLength={45}
                                onChange={infoPagoChange}
                                value={infoPago.numeroTarjeta}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3" >
                            <Form.Control
                                type="text"
                                name="nombreTitular"
                                placeholder="Nombre del titular"
                                maxLength={45}
                                onChange={infoPagoChange}
                                value={infoPago.nombreTitular}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='d-flex justify-content-around'>
                        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicUsername">
                            <Form.Control
                                type="text"
                                name="fechaVencimiento"
                                placeholder="Fecha de vencimiento"
                                maxLength={45}
                                onChange={infoPagoChange}
                                value={infoPago.fechaVencimiento}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicUsername">
                            <Form.Control
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                maxLength={45}
                                onChange={infoPagoChange}
                                value={infoPago.cvv}
                            />
                        </Form.Group>
                    </Row>

                </div>

                <p className='ms-4 mb-3 h3'>Valor a pagar {VALOR}</p>

                <Button variant="outline-primary" type="submit" className='ms-3'
                // disabled={!telefono || !datosEnvio.barrio || !datosEnvio.pais || !datosEnvio.ciudad || !datosEnvio.barrio || !datosEnvio.codigopostal || !datosEnvio.direccion || !infoPago.numeroTarjeta || !infoPago.nombreTitular || !infoPago.fechaVencimiento || !infoPago.cvv}
                >
                    Pagar
                </Button>
            </Form>
            <ThemeSwitcher />
            <Footer />
            <button onClick={() => { console.log(datosEnvio); }}>clib</button>
        </>
    )
}