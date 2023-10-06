import React from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import imageHeader from "../../../assets/img/generic/bg-9.jpg";

const ContactoPage = () => {
  return (
    <>
      <Image src={imageHeader} fluid />
      <Container>
        <Row className="my-5">
          <Col>
            <div style={{ height: 500 }}>
              <h1>Formulario de Contacto</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactoPage;