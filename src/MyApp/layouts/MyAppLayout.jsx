import React from "react";
import { Outlet } from "react-router-dom";
import MyRoutesScheme from "MyApp/routes/MyRoutesScheme";
import NavbarVertical from "MyApp/components/navbar/vertical/NavbarVertical";
import { Container } from "react-bootstrap";
import NavbarTop from "MyApp/components/navbar/top/NavbarTop";
import Footer from "components/footer/Footer";

const MyAppLayout = () => {
  return (
    <>
      <main>
        <Container fluid>
          <NavbarVertical routes={MyRoutesScheme} />
          <div className="content">
            <NavbarTop />
            <Outlet />
            <Footer />
          </div>
        </Container>
      </main>
    </>
  );
};

export default MyAppLayout;
