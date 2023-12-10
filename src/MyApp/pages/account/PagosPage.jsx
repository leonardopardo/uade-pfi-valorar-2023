import React from "react";
import PagosListComponent from "./components/PagosListComponent";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { CardPayment } from "@mercadopago/sdk-react";
import { Col, Row } from "react-bootstrap";
import Greetings from "components/dashboards/crm/greetings/Greetings";

const PagosPage = () => {
  initMercadoPago("TEST-e5fa8b09-d30d-4e69-a10c-c82a394275e1");

  const initialization = {
    amount: 100,
  };

  const onSubmit = async (formData) => {
    // callback llamado al hacer clic en el botón enviar datos
    return new Promise((resolve, reject) => {
      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          // recibir el resultado del pago
          resolve();
        })
        .catch((error) => {
          // manejar la respuesta de error al intentar crear el pago
          reject();
        });
    });
  };

  const onError = async (error) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
  };

  const onReady = async () => {
    /*
    Callback llamado cuando Brick está listo.
    Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
  */
  };

  return (
    <>
      <Greetings />
      <Row>
        <Col xs={12} sm={4} className="mb-4">
          <CardPayment
            locale="es-AR"
            initialization={initialization}
            onSubmit={onSubmit}
            onReady={onReady}
            onError={onError}
          />
        </Col>
        <Col xs={12} sm={8}>
          <PagosListComponent />
        </Col>
      </Row>
    </>
  );
};
export default PagosPage;
