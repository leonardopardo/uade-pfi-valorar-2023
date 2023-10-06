import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Error404 from 'MyApp/components/errors/Error404';

const Error404Page = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Error404 />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Error404Page;
