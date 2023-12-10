import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Form, Row, Col, Spinner } from "react-bootstrap";
import UsersService from "MyApp/data/UsersService";

const RegistrationForm = ({ hasLabel }) => {
  // State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [loading, setLoading] = useState(false);

  // Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (formData.password !== formData.confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }
      
      const register = await UsersService.RegisterUser(formData);
      
      alert(register);

      window.location.href = "/";
    
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false,
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
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Nombre</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? "Nombre" : ""}
          value={formData.name}
          name="name"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Email</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? "Email" : ""}
          value={formData.email}
          name="email"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>

      <Row className="g-2 mb-3">
        <Form.Group as={Col} sm={12}>
          {hasLabel && <Form.Label>Razón Social</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? "Empresa" : ""}
            value={formData.company}
            name="company"
            onChange={handleFieldChange}
            type="text"
          />
        </Form.Group>
      </Row>

      <Row className="g-2 mb-3">
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>Password</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? "Password" : ""}
            value={formData.password}
            name="password"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>Confirmar Password</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? "Confirmar Password" : ""}
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Check type="checkbox" id="acceptCheckbox" className="form-check">
          <Form.Check.Input
            type="checkbox"
            name="isAccepted"
            checked={formData.isAccepted}
            onChange={(e) =>
              setFormData({
                ...formData,
                isAccepted: e.target.checked,
              })
            }
          />
          <Form.Check.Label className="form-label">
            Aceptos los <Link to="/terminos">terminos</Link> y{" "}
            <Link to="/privacidad">políticas de privacidad</Link>
          </Form.Check.Label>
        </Form.Check>
      </Form.Group>

      <Form.Group className="mb-4">
        <Button
          className="w-100"
          type="submit"
          disabled={
            !formData.name ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword ||
            !formData.company ||
            !formData.isAccepted
          }
        >
          {loading ? <Spinner animation="border" /> : "Registrarse"}
        </Button>
      </Form.Group>
      
      {/* <Divider>or register with</Divider> */}

      {/* <SocialAuthButtons /> */}
    </Form>
  );
};

RegistrationForm.propTypes = {
  hasLabel: PropTypes.bool,
};

export default RegistrationForm;
