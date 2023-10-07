import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const ResponsePrice = ({ price, data }) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Text>
            <h4>Estimación del Precio</h4>
            <h6>El cálculo de estimación se encuentra experesado en USD</h6>
            <hr />
            <Row>
              <Col>
                <Card.Text>
                  <strong>Ambientes:</strong> {data.ambients}
                </Card.Text>{" "}
                <Card.Text>
                  <strong>Baños:</strong> {data.bathrooms}
                </Card.Text>{" "}
                <Card.Text>
                  <strong>Superficie Total:</strong> {data.surface} métros
                  cuadrados
                </Card.Text>{" "}
                <Card.Text>
                  <strong>Barrio:</strong> {data.neighborhood}
                </Card.Text>{" "}
                <Card.Text>
                  <strong>Amenities:</strong>{" "}
                  {data.amenities.map((amenitie) => amenitie + ", ")}
                </Card.Text>{" "}
                <Card.Text>
                  <strong>Characterísticas:</strong>{" "}
                  {data.features.map((feature) => feature + ", ")}
                </Card.Text>{" "}
              </Col>
              <Col>
                <h2>Precio Estimado</h2>
                <hr />
                <h3>USD {price}.-</h3>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ResponsePrice;
