import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imageHeader from "../../../assets/img/generic/bg-4.jpg";
import logo from "../../../assets/img/illustrations/logo.svg";

const NosotrosPage = () => {
  return (
    <>
      <Image src={imageHeader} fluid />
      <Container>
        <Row className="my-5 justify-content-center">
          <Col xxl={3}>
            <Image src={logo} fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Nuestra Misión</h1>
            <p>
              En <strong>Valorar</strong>, nuestra misión es revolucionar la
              industria inmobiliaria a través de la aplicación innovadora de la
              inteligencia artificial y el machine learning. Nos comprometemos a
              proporcionar a nuestros clientes soluciones de vanguardia que
              optimicen la toma de decisiones, impulsen la eficiencia operativa
              y maximicen el valor de sus activos inmobiliarios. Trabajamos
              incansablemente para ofrecer servicios personalizados, datos
              precisos y asesoramiento experto, fortaleciendo así el éxito y la
              rentabilidad de nuestros clientes en el mercado de bienes raíces.
            </p>
            <h1>Nuestra Visión</h1>
            <p>
              En <strong>Valorar</strong>, aspiramos a ser líderes indiscutibles
              en el campo de la inteligencia artificial y el machine learning
              aplicados al sector inmobiliario. Visualizamos un mundo en el que
              cada inversión y decisión en bienes raíces esté respaldada por
              análisis avanzados y datos predictivos, facilitando la prosperidad
              y la sostenibilidad en el mercado inmobiliario global. Nuestra
              visión es impulsar la innovación constante, estableciendo
              estándares excepcionales de calidad y confiabilidad en nuestros
              servicios, y contribuir de manera significativa a la
              transformación digital de la industria inmobiliaria." Recuerda que
              estos son solo ejemplos, y debes personalizarlos para que se
              adapten a la identidad y los objetivos específicos de tu empresa
              que ofrece servicios de machine learning para el sector
              inmobiliario. Además, es importante que estas declaraciones
              reflejen los valores y la cultura de tu empresa, y que sean
              compartidas y comprendidas por todo tu equipo y tus clientes.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NosotrosPage;
