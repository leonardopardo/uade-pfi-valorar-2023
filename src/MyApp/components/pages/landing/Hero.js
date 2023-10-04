import React, { useContext } from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg1 from 'assets/img/generic/bg-1.jpg';
import dashboard from 'assets/img/generic/dashboard-alt.png';
import dashboardDark from 'assets/img/generic/dashboard-alt-dark.png';
import Section from 'components/common/Section';
import AppContext from 'context/Context';

const Hero = () => {
  const {
    config: { isDark }
  } = useContext(AppContext);

  return (
    <Section
      className="py-0 overflow-hidden light"
      image={bg1}
      position="center top"
      overlay
    >
      <Row className="justify-content-center align-items-center pt-8 pt-lg-10 pb-lg-9 pb-xl-0">
        <Col
          md={11}
          lg={8}
          xl={4}
          className="pb-7 pb-xl-9 text-center text-xl-start"
        >
          <Button
            as={Link}
            variant="danger"
            className="mb-4 fs--1 border-2 rounded-pill"
            to="#!"
          >
            <span className="me-2" role="img" aria-label="Gift">
              🎁
            </span>
            Probá Gratis Nuestra Demo
          </Button>
          <h1 className="text-white fw-light">
            Inteligencia Artificial para
            <Typed
              strings={['Calcular', 'Probar', 'Cotizar', 'Analizar']}
              typeSpeed={40}
              backSpeed={50}
              className="fw-bold ps-2"
              loop
            />
            <br />
            tus operaciones 
          </h1>
          <p className="lead text-white opacity-75">
            Calculá tus operaciones inmobiliarias de forma rápida y precisa, utilizando la tecnología de la inteligencia artificial.
          </p>
          <Button
            as={Link}
            variant="outline-light"
            size="lg"
            className="border-2 rounded-pill mt-4 fs-0 py-2"
            to="#!"
          >
            Registrate y Comenzá a trabajar como un Pro
            <FontAwesomeIcon icon="play" transform="shrink-6 down-1 right-5" />
          </Button>
        </Col>
        <Col
          xl={{ span: 7, offset: 1 }}
          className="align-self-end mt-4 mt-xl-0"
        >
          {/* <Link to="/" className="img-landing-banner">
            <img
              className="img-fluid"
              src={isDark ? dashboardDark : dashboard}
              alt=""
            />
          </Link> */}
        </Col>
      </Row>
    </Section>
  );
};

export default Hero;
