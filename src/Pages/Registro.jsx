import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ThemeSwitcher from '../Components/ThemeSwitcher';
import Image from 'react-bootstrap/Image';

function Registro() {
    return (
        <>
            <ThemeSwitcher />

            <Form>
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
                    <Form.Control type="username" placeholder="Usuario" />
                    <Form.Text>Se creativo, tu nombre de usuario te representara a ti</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Correo Electronico" />
                    <Form.Text className="text-muted">Nunca compartiremos su direccion de correo electronico.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Contraseña" />
                    <Form.Text className="text-muted">Debe contener por lo menos un numero</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default Registro;