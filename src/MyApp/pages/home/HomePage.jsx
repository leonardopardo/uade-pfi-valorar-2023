import React from "react";
import GreetingCard from "components/dashboards/e-commerce/greetings/GreetingCard";
import { notifications } from "data/dashboard/ecom";
import { Row, Col, Card } from "react-bootstrap";
import HomeStartedPage from "./sections/HomeStartedPage";

const HomePage = () => {
  return (
    <>
      <Row className="">
        <Col xl={12}>
          <Row className="mb-3">
            <Col>
              <GreetingCard notifications={notifications} />
            </Col>
          </Row>
          <Row>
            <Col>
              <HomeStartedPage />
            </Col>
          </Row>
        </Col>
        <Col xl={4}></Col>
      </Row>
    </>
  );
};

export default HomePage;
