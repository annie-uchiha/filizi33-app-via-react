import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Login.scss";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const username = event.currentTarget.elements.username.value;
    const password = event.currentTarget.elements.password.value;
  };

  return (
    <div className="login-form">
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col md={100}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Col md={100}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <a href="/forgot-password">Forgot password?</a>{" "}
            {/* Added Forgot password link */}
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;
