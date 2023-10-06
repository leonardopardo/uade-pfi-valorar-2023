import Error500 from 'MyApp/components/errors/Error500';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Error500Page = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Error500 />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Error500Page;
