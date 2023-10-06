import React from 'react';
import { Card } from 'react-bootstrap';

const Error500 = () => (
  <Card className="text-center h-100">
    <Card.Body className="p-5">
      <div className="display-1 text-300 fs-error">500</div>
      <p className="lead mt-4 text-800 font-sans-serif fw-semi-bold">
        ¡Vaya, algo salió mal!
      </p>
      <hr />
      <p>
        Intente actualizar la página o retroceda e intente la acción nuevamente.
        Si este problema persiste,
        <a href="mailto:info@valorar.ar" className="ms-1">
          ponete en contacto
        </a>
        .
      </p>
    </Card.Body>
  </Card>
);

export default Error500;
