import React from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import Flex from "MyApp/components/common/Flex";
import barChart from "assets/img/illustrations/crm-bar-chart.png";
import { FiInfo, FiServer } from "react-icons/fi";

const CuentaPage = () => {
  return (
    <>
      <Card className="bg-100 shadow-none border mb-3">
        <Card.Body className="py-0">
          <Row className="g-0 justify-content-between">
            <Col sm="auto">
              <Flex alignItems="center">
                <img src={barChart} width={90} alt="..." className="ms-n4" />
                <div>
                  <h6 className="text-primary fs--1 mb-0">Valora.ar </h6>
                  <h4 className="text-primary fw-bold mb-0">
                    Mi Cuenta
                    <span className="text-info fw-medium"> </span>
                  </h4>
                </div>
              </Flex>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row>
        <Col xs={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                <FiServer /> Mi Suscripción
              </Card.Title>
              <Row>
                <Col>
                  <FiInfo /> Usted no tiene una suscripción activa.
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                <FiInfo /> Información de la cuenta
              </Card.Title>
              <Row>
                <Col className="mb-3">
                  <Form.Label>Token</Form.Label>
                  <Form.Control
                    as="textarea"
                    size="sm"
                    value={localStorage.getItem("token")}
                  />
                </Col>
                <br />
                <small>
                  Recuerde que el token tiene una vigencia de 6hs. Debe
                  solicitar un nuevo token antes de su vencimiento para no
                  perder la sesión.
                </small>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default CuentaPage;
