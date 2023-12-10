import React from "react";
import { Button, Card, Col, Row, Tabs, Tab } from "react-bootstrap";
import FalconCardHeader from "MyApp/components/common/FalconCardHeader";
import FalconEditor from "MyApp/components/common/FalconEditor";
import Flex from "MyApp/components/common/Flex";
import barChart from 'assets/img/illustrations/crm-bar-chart.png';

const AuthenticationPage = () => {
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
                    API de autenticación
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

            <h7>Request de Autenticarse</h7>
            <Tabs defaultActiveKey="curl" id="uncontrolled-tab-example">
              <Tab eventKey="curl" title="cURL" style={{ minHeight: 100 }}>
                <pre className="small">
                  <FalconEditor
                    className="mb-4"
                    code={`curl --location 'https://valorar.ar/api/auth/login' --header 'Content-Type: application/json' --data '{ "username": "test", "password": "test"}'`}
                    language="bash"
                    hidePreview
                  />
                </pre>
              </Tab>
              <Tab eventKey="javascript" title="javascript">
                <pre className="small">
                  <FalconEditor
                    className="mb-4"
                    code={`const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": "test",
  "password": "test"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://valorar.ar/api/auth/login", requestOptions)
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
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTY3YmJhNjM5ZWQwNDMyZmE4OWUwYTIiLCJpYXQiOjE3MDIyMzU5NjgsImV4cCI6MTcwMjI1NzU2OH0.ipfL4LX_OVAcQgxlG8C6__-a886A43eJ6ZbU5haS-_M"
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
export default AuthenticationPage;
