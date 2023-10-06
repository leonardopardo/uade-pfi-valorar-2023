import React from 'react';
import { Outlet } from 'react-router-dom';
import {Row, Col } from 'react-bootstrap';
import Section from 'MyApp/components/common/Section';
import Logo from 'MyApp/components/common/Logo';

const MyErrorLayout = () => {
  return (
    <>
      <Section className="py-0">
        <Row className="flex-center min-vh-100 py-6">
          <Col sm={11} md={9} lg={7} xl={6} className="col-xxl-5">
            <Logo width={300} />
            <Outlet />
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default MyErrorLayout;
