import React from 'react';
import { Col, Form, FormCheck } from 'react-bootstrap';
import Flex from 'components/common/Flex';

const PricingAltHeader = () => {
  return (
    <Col xs={12} className="text-center mb-4">
      <div className="fs-1"></div>
      <h3 className="fs-2 fs-md-3">
        Mirá nuestras suscripciones.{' '}
        <br className="d-none d-md-block" /> Elegí la que mejor se adapte a tu negocio.
      </h3>
      <Flex justifyContent="center">
        <FormCheck.Label htmlFor="custom-switch" className="me-2">
          Mensual
        </FormCheck.Label>
        <Form.Check type="switch" id="yearly">
          <Form.Check.Input type="checkbox" defaultChecked />
          <Form.Check.Label className="ms-2 align-top">Anual</Form.Check.Label>
        </Form.Check>
      </Flex>
    </Col>
  );
};

export default PricingAltHeader;
