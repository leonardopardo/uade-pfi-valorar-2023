import React from "react";
import FalconCardHeader from "MyApp/components/common/FalconCardHeader";
import FalconEditor from "MyApp/components/common/FalconEditor";
import { Card, Col } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const HomeStartedPage = () => {
  return (
    <>
      <Card className="mb-3">
        <FalconCardHeader title="Comience con los conceptos básicos de la API" />
        <Card.Body>
          <Card.Title>Empezando</Card.Title>
          <Col xs={12} sm={10} md={8}>
            <p>Bienvenido a la versión 1 de la API Valorar.ar.</p>
            <p>
              La API de Valorar.ar es una API RESTful que utiliza JSON para
              devolver respuestas. Actualmente, la API solo devuelve datos en
              español.
            </p>
            <p>
              Para comenzar a usar la API, debe familiarizarse con los conceptos
              básicos de la API. La API de Valorar.ar utiliza autenticación de
              clave de API para autenticar todas las solicitudes.
            </p>
            <p>
              Para obtener una clave de API, debe registrarse en el sitio web de
              Valorar.ar. Una vez que haya iniciado sesión, puede generar una
              clave de API en su página de perfil.
            </p>
            <p>
              Para autenticar una solicitud, debe incluir su clave de API en la
              solicitud. Puede hacerlo de dos maneras:
            </p>
            <ul>
              <li>Incluya su clave de API en el encabezado de la solicitud.</li>
              <li>
                Incluya su clave de API como parámetro de consulta en la URL de
                la solicitud.
              </li>
            </ul>
            <FalconEditor
              code={`curl --location 'http://localhost:9000/auth/login' \
--header 'Content-Type: application/json' \
--data '{
    "username": "test",
    "password": "test"
}'`}
              language="bash"
              hidePreview
            />
          </Col>
        </Card.Body>
      </Card>
    </>
  );
};

export default HomeStartedPage;
