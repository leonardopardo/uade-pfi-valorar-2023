import React from "react";
import { Card, Row, Col, Tabs, Tab } from "react-bootstrap";
import FalconCardHeader from "MyApp/components/common/FalconCardHeader";
import FalconEditor from "MyApp/components/common/FalconEditor";
import Flex from "MyApp/components/common/Flex";
import barChart from "assets/img/illustrations/crm-bar-chart.png";

const SentimientoPage = () => {
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
                    API de Sentimiento
                    <span className="text-info fw-medium"> </span>
                  </h4>
                </div>
              </Flex>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <FalconCardHeader title="Comience con los conceptos básicos de la API" />
        <Card.Body>
          <Card.Title>Empezando</Card.Title>
          <Col xs={12} sm={12} md={12}>
            <p>Bienvenido a la versión 1 de la API Valorar.ar.</p>
            <p>
              La API de Valorar.ar es una API RESTful que utiliza JSON para
              devolver respuestas. Actualmente, la API solo devuelve datos en
              español.
            </p>

            <h7>Request de Sentimiento</h7>
            <Tabs defaultActiveKey="curl" id="uncontrolled-tab-example">
              <Tab eventKey="curl" title="cURL" style={{ minHeight: 100 }}>
                <pre className="small">
                  <FalconEditor
                    className="mb-4"
                    code={`curl --location 'https://valorar.ar/api/sentiment'`}
                    language="bash"
                    hidePreview
                  />
                </pre>
              </Tab>
              <Tab eventKey="javascript" title="javascript">
                <pre className="small">
                  <FalconEditor
                    className="mb-4"
                    code={`var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://valorar.ar/api/sentiment", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`}
                    language="javascript"
                    hidePreview
                  />
                </pre>
              </Tab>
            </Tabs>

            <h7>Respuesta</h7>
            <pre className="small">
              <FalconEditor
                code={`{
    "result": "Neutral",
    "examples": [
        "https://lanacion.com.ar/propiedades/casas-y-departamentos/costa-esmeralda-barrio-cerrado-con-playa-cerca-de-pinamar-y-carilo-nid07112023/",
        "https://www.ambito.com/economia/hecha-la-ley-hecha-la-trampa-que-hay-detras-las-publicaciones-alquileres-que-dicen-consultar-precio-n5872389",
        "https://clarin.com//viste/mejor-comprar-vivienda-usada-nueva_0_ZLsFMJBbYC.html",
        "https://www.ambito.com/economia/vacaciones-2024-cuanto-sale-alquilar-una-carpa-la-costa-argentina-n5861911",
        "https://clarin.com//economia/javier-milei-quiere-derogar-ley-alquileres-opinan-inmobiliarias-inquilinos_0_lc6kGlhaVY.html"
    ]
}`}
                language="json"
                hidePreview
                copy={true}
              />
            </pre>
            <small></small>
          </Col>
        </Card.Body>
      </Card>
    </>
  );
};
export default SentimientoPage;
