import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  Card,
  Modal,
  Nav,
  OverlayTrigger,
  Tooltip,
  NavDropdown,
} from "react-bootstrap";
import Login from "components/authentication/simple/Login";
import Registration from "components/authentication/simple/Registration";
import is from "is_js";
import { set } from "react-hook-form";
import { FiLogOut, FiUser } from "react-icons/fi";

const breakpoint = "lg";

const LandingRightSideNavItem = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isUserAuthenticated = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    setIsAuthenticated(token && user);
  };

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    isUserAuthenticated();
  }, []);

  return (
    <Nav navbar className="ms-auto">
      {!isAuthenticated ? (
        <>
          <NavDropdown title="Ingresar" align="end">
            <Card className="navbar-card-login shadow-none">
              <Card.Body className="fs--1 fw-normal p-4">
                <Login />
              </Card.Body>
            </Card>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="#!"
              onClick={() => setShowRegistrationModal(!showRegistrationModal)}
            >
              Registrarse
            </Nav.Link>
            <Modal
              show={showRegistrationModal}
              centered
              onHide={() => setShowRegistrationModal(false)}
            >
              <Modal.Body className="p-0">
                <Card>
                  <Card.Body className="fs--1 fw-normal p-4">
                    <Registration />
                  </Card.Body>
                </Card>
              </Modal.Body>
            </Modal>
          </Nav.Item>
        </>
      ) : (
        <>
          <Nav.Item>
            <Nav.Link as={Link} to="/admin">
              {localStorage.getItem("user")} <FiUser />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={Logout}>
              Salir <FiLogOut />
            </Nav.Link>
          </Nav.Item>
        </>
      )}
    </Nav>
  );
};

export default LandingRightSideNavItem;
