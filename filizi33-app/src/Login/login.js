import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col"; 
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const username = event.currentTarget.elements.username.value;
    const password = event.currentTarget.elements.password.value;
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>e-mail</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="e-mail"
              name="e-mail"
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="password"
              name="password"
            />
          </Form.Group>
        </Row>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default Login;
