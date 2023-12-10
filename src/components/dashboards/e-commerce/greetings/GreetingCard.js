import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Flex from "components/common/Flex";
import Notification from "./Notification";
import Background from "components/common/Background";
import ecomBg from "assets/img/illustrations/ecommerce-bg.png";

const GreetingCard = ({ notifications }) => {
  const usuario = localStorage.getItem("user");
  return (
    <Card className="bg-transparent-50 overflow-hidden">
      <Card.Header className="position-relative">
        <Background
          image={ecomBg}
          className="d-none d-md-block bg-card z-index-1"
          style={{
            backgroundSize: "230px",
            backgroundPosition: "right bottom",
            zIndex: "-1",
          }}
        />
        <div className="position-relative z-index-2">
          <div className="p-4">
            <h3 className="text-primary mb-1">Hola, {usuario}!</h3>
            <p>Bienvenido a tu cuenta Valorar.ar</p>
          </div>
          {/* <Flex className="py-3">
            <div className="pe-3">
              <p className="text-600 fs--1 fw-medium">Cantidad de Consultas</p>
              <h4 className="text-800 mb-0">1409</h4>
            </div>
            <div className="ps-3">
              <p className="text-600 fs--1">Cantidad de Propiedades Verificadas</p>
              <h4 className="text-800 mb-0">349</h4>
            </div>
          </Flex> */}
        </div>
      </Card.Header>
      {/* <Card.Body className="p-0">
        <ul className="mb-0 list-unstyled">
          {notifications.map((notification, index) => (
            <Notification
              key={notification.id}
              notification={notification}
              isLast={notifications.length - 1 === index}
            />
          ))}
        </ul>
      </Card.Body> */}
    </Card>
  );
};

GreetingCard.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.object),
};

export default GreetingCard;
