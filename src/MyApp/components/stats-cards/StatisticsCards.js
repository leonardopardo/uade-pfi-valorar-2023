import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import StatisticsCard from "./StatisticsCard";
import { FiInfo, FiServer } from "react-icons/fi";

const StatisticsCards = ({ suscription, uses }) => {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const cantidadPeticiones = (suscription) => {
    switch (suscription) {
      case "basic":
        return 100;
      case "pro":
        return 500;
      case "full":
        return "Ilimitado";
      default:
        return "No definido";
    }
  }

  const title = "Consultas Mensuales (" + months[new Date().getMonth()] + ")";

  const statsData = [
    {
      title: title,
      value: uses,
      decimal: false,
      suffix: " / " + cantidadPeticiones(suscription),
      prefix: "",
      valueClassName: "text-info",
      badgeBg: "info",
      badgeText: "0.0%",
      link: "/",
      linkText: "All orders",
      image: "",
    },
  ];

  return (
    <Row className="g-3 mb-3">
      <Col>
        <Card style={{ minHeight: "7rem" }}>
          <Card.Body>
            <h6>
              <FiServer /> Suscripción
            </h6>
            {suscription ? (
              <>
                <div>
                  <h4 className="fw-light">
                    Plan Suscripto:{" "}
                    <strong>{suscription.toUpperCase()}</strong>
                  </h4>
                </div>
              </>
            ) : (
              <>
                <div>
                  <span>
                    <FiInfo /> Aún no está suscripto a ningún Plan
                  </span>
                  <Button size="sm" className="ms-3">
                    Suscribirme
                  </Button>
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
      {statsData.map((stat, index) => (
        <Col key={stat.title} sm={index === 2 ? 12 : 6} md={4}>
          <StatisticsCard
            stat={stat}
            style={{ minWidth: "12rem", minHeight: "7rem" }}
          />
        </Col>
      ))}
    </Row>
  );
};

export default StatisticsCards;
