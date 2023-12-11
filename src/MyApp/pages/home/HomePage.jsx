import React, { useState, useEffect } from "react";
import GreetingCard from "components/dashboards/e-commerce/greetings/GreetingCard";
import { notifications } from "data/dashboard/ecom";
import { Row, Col, Card } from "react-bootstrap";
import HomeStartedPage from "./sections/HomeStartedPage";
import StatisticsCards from "MyApp/components/stats-cards/StatisticsCards";
import UsersService from "MyApp/data/UsersService";
import { set } from "react-hook-form";
import { use } from "echarts";

const HomePage = () => {
  const [activities, setActivities] = useState([]);

  const [usage, setUsage] = useState({});

  const getHistory = async () => {
    try {
      const username = localStorage.getItem("user");
      const response = await UsersService.GetHistory(username);
      console.log(response.slice(0, 5));
      setActivities(response);
    } catch (error) {
      alert(error);
    }
  };

  const getUsage = async () => {
    try {
      const username = localStorage.getItem("user");
      const response = await UsersService.GetUsage(username);
      setUsage(response);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  useEffect(() => {
    getUsage();
  }, []);

  return (
    <>
      <Row className="">
        <Col xl={12}>
          <Row className="mb-3">
            <Col>
              <GreetingCard />
            </Col>
          </Row>
          <Row>
            <Col>
              <StatisticsCards suscription={usage.subscriptionPlan} uses={usage.usesThisMonth} />
            </Col>
          </Row>
          <Row>
            <Col xs={7}>
              <HomeStartedPage />
            </Col>
            <Col xs={5}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h5 className="mb-0">Últimas Consultas</h5>
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    {activities.length === 0 ? (
                      <>
                        <Row>
                          <Col>
                            <ul>
                              <li>No hay consultas recientes</li>
                            </ul>
                          </Col>
                        </Row>
                      </>
                    ) : (
                      <>
                        {activities.map((activity) => (
                          <>
                            <Row>
                              <Col>
                                <ul>
                                  <li>Localidad: {activity.localidad}</li>
                                  <li>Barrio: {activity.barrio}</li>
                                  <li>
                                    Superficie: {activity.superficie_total}
                                  </li>
                                </ul>
                                <hr />
                              </Col>
                            </Row>
                          </>
                        ))}
                      </>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
