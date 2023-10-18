import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ThemeSwitcher from '../Components/ThemeSwitcher';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom'

function Login() {


  return (
    <div className='text-center'>
      <ThemeSwitcher />
      <h1>WaySoft</h1>
      <Form.Group className="mb-5 mt-5" controlId="formBasicTipo">
        <Image src="/logo.png" fluid width="50%" />
      </Form.Group>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="username" placeholder="Correo electrónico" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group> */}
        <Button variant="primary" type="submit" >
          Iniciar sesión
        </Button>
      </Form>
      <Form.Group>
        <hr />
        <Link to={"/registro"}>
          <Button variant='outline-primary' type='submit'>
            Crear cuenta
          </Button>
        </Link>
      </Form.Group>
    </div>
  );
}

export default Login;