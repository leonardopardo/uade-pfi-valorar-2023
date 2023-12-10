import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Form, Row, Col, Toast, Spinner } from "react-bootstrap";
import AuthService from "MyApp/data/AuthService";

const LoginForm = ({ hasLabel, layout }) => {
  // State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [loading, setLoading] = useState(false);

  // Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const {token} = await AuthService.Login(
        formData.email,
        formData.password
      );
      console.log(token);
      if (token) {
        localStorage.setItem("token", token);
        window.location.href = "/admin";
      }
    } catch (err) {
      alert(err)
    } finally {
      setLoading(false);
      setFormData({
        email: "",
        password: "",
        remember: false,
      });
    }
  };

  const handleFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          {hasLabel && <Form.Label>Email</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? "Email" : ""}
            value={formData.email}
            name="email"
            onChange={handleFieldChange}
            type="email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          {hasLabel && <Form.Label>Password</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? "Password" : ""}
            value={formData.password}
            name="password"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>

        <Row className="justify-content-between align-items-center">
          <Col xs="auto">
            <Form.Check type="checkbox" id="rememberMe">
              <Form.Check.Input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    remember: e.target.checked,
                  })
                }
              />
              <Form.Check.Label className="mb-0">Recordarme</Form.Check.Label>
            </Form.Check>
          </Col>

          <Col xs="auto">
            <Link
              className="fs--1 mb-0"
              to={`/authentication/${layout}/forgot-password`}
            >
              Olvidó su Password?
            </Link>
          </Col>
        </Row>

        <Form.Group>
          <Button
            type="submit"
            color="primary"
            className="mt-3 w-100"
            disabled={!formData.email || !formData.password}
          >
            {loading ? <Spinner animation="border" /> : 'Ingresar'}
          </Button>
        </Form.Group>

        {/* <Divider className="mt-4">or log in with</Divider> */}

        {/* <SocialAuthButtons /> */}
      </Form>
    </>
  );
};

LoginForm.propTypes = {
  layout: PropTypes.string,
  hasLabel: PropTypes.bool,
};

LoginForm.defaultProps = {
  layout: "simple",
  hasLabel: false,
};

export default LoginForm;
