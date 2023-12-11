import Flex from "MyApp/components/common/Flex";
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import CotizadorForm from "./forms/CotizadorForm";

const CotizadorPage = () => {
  return (
    <>
      <Card className="bg-100 shadow-none border mb-3">
        <Card.Body className="py-0">
          <Row className="g-0 justify-content-between">
            <Col sm="auto">
              <Flex alignItems="center">
                <img src="/static/media/crm-bar-chart.a1e2dfbe.png" width={90} alt="..." className="ms-n4" />
                <div>
                  <h6 className="text-primary fs--1 mb-0">Valora.ar </h6>
                  <h4 className="text-primary fw-bold mb-0">
                    Cotizador
                    <span className="text-info fw-medium"> </span>
                  </h4>
                </div>
              </Flex>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <CotizadorForm />
    </>
  );
};

export default CotizadorPage;
