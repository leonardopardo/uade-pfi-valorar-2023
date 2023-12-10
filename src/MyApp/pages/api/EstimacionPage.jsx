import React from "react";
import { Card, Row, Col, Tabs, Tab } from "react-bootstrap";
import FalconCardHeader from "MyApp/components/common/FalconCardHeader";
import FalconEditor from "MyApp/components/common/FalconEditor";
import Flex from "MyApp/components/common/Flex";
import barChart from "assets/img/illustrations/crm-bar-chart.png";

const EstimacionPage = () => {
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
                    API de Estimación
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

            <h7>Request de Estimación</h7>
            <Tabs defaultActiveKey="curl" id="uncontrolled-tab-example">
              <Tab eventKey="curl" title="cURL" style={{ minHeight: 100 }}>
                <pre className="small">
                  <FalconEditor
                    className="mb-4"
                    code={`curl --location 'https://valorar.ar/api/rent/predict'
--header 'Content-Type: application/json'
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTY3YmJhNjM5ZWQwNDMyZmE4OWUwYTIiLCJpYXQiOjE3MDIyNDU5MzUsImV4cCI6MTcwMjI2NzUzNX0.ZuKrxEAUT28WDB7z58gQG_mdwDWpfR3djLWsadb9H3Q'
--data '{
    "username": "test",
    "data": {
        "caracteristicas": ["balcony"],
        "amenities": ["gimnasio"],
        "lat": -30,
        "lon": -30,
        "antiguedad": 30,
        "ambientes": 3,
        "cuartos": 2,
        "banos": 1,
        "superficie_total": 60,
        "barrio": "Recoleta",
        "localidad": "Buenos Aires"
    }
}'`}
                    language="bash"
                    hidePreview
                  />
                </pre>
              </Tab>
              <Tab eventKey="javascript" title="javascript">
                <pre className="small">
                  <FalconEditor
                    className="mb-4"
                    code={`var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTY3YmJhNjM5ZWQwNDMyZmE4OWUwYTIiLCJpYXQiOjE3MDIyNDU5MzUsImV4cCI6MTcwMjI2NzUzNX0.ZuKrxEAUT28WDB7z58gQG_mdwDWpfR3djLWsadb9H3Q");
  
  var raw = JSON.stringify({
    "username": "test",
    "data": {
      "caracteristicas": [
        "balcony"
      ],
      "amenities": [
        "gimnasio"
      ],
      "lat": -30,
      "lon": -30,
      "antiguedad": 30,
      "ambientes": 3,
      "cuartos": 2,
      "banos": 1,
      "superficie_total": 60,
      "barrio": "Recoleta",
      "localidad": "Buenos Aires"
    }
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://valorar.ar/api/rent/predict", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
`}
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
"price": 544,
"sentiment": {
    "result": "Neutral",
    "examples": [
        "https://www.ambito.com/economia/alquileres-un-limbo-se-frenaron-operaciones-y-no-hay-precios-referencia-la-espera-del-nuevo-gobierno-n5882265",
        "https://www.ambito.com/politica/alquileres-sergio-massa-se-reunio-inquilinos-y-anuncio-una-medida-facilitar-el-acceso-n5876594",
        "https://lanacion.com.ar/propiedades/casas-y-departamentos/alquileres-aumentos-de-mas-de-200-en-un-ano-en-los-tres-ambientes-nid08112023/",
        "https://clarin.com//viste/aplicacion-citas-coincidio-joven-descubrio-mundo-panuelo_0_SnElVDPwID.html",
        "https://clarin.com//servicios/arrancar-cero-negocio-9-claves-instalar-marca-rentable-poca-plata_0_NBbhQHwi74.html"
    ]
  }
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
export default EstimacionPage;
