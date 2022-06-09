import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setEmailError("Email Not Valid");
      return false;
    }
    setEmailError("");
    formIsValid = true;

    const regex = new RegExp(
      '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
        '(\\".+\\"))@((\\d{1,3}\\.d{1,3}\\.d{1,3}\\.d{1,3}\\])' +
        "|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{1,5}))$"
    );

    if (regex.test(password)) {
      formIsValid = false;
      setPasswordError("Only Letters and length must best min 8 Characters and Max 22 Characters");
      return false;
    }
    setPasswordError("");
    formIsValid = true;
    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      navigate("/");
    }
  };

  return (
    <Container className="container">
      <Row className="d-flex justify-content-center">
        <Col className="col-md-4">
          <Form className="login-container shadow" onSubmit={loginSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                className="form-control"
                id="EmailInput"
                name="EmailInput"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <span id="emailHelp" className="text-danger form-text">
                {emailError}
              </span>
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-3">Password</Form.Label>
              <Form.Control
                type="password"
                className="form-control mb-3"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <span id="passworderror" className="text-danger form-text">
                {passwordError}
              </span>
            </Form.Group>
            <Form.Group>
              <Form.Check.Label className="form-check-label">Remember Me</Form.Check.Label>
              <Form.Check.Input type="checkbox" className="form-check-input m-1" />
            </Form.Group>
            <Row className="row-btn">
              <Col className="col-btn">
                <button type="submit" className="login-button underline-link m-3">
                  Login
                </button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
