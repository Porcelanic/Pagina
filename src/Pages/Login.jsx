import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ThemeSwitcher from '../Components/ThemeSwitcher';

function Login() {
  return (
    <>
    <ThemeSwitcher/>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="username" placeholder="Username" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
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

export default Login;