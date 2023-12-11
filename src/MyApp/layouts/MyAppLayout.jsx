import React from "react";
import { Outlet } from "react-router-dom";
import MyRoutesScheme from "MyApp/routes/MyRoutesScheme";
import NavbarVertical from "MyApp/components/navbar/vertical/NavbarVertical";
import { Container } from "react-bootstrap";
import NavbarTop from "MyApp/components/navbar/top/NavbarTop";
import Footer from "components/footer/Footer";
import AuthService from "MyApp/data/AuthService";
import is from "is_js";
import { set } from "react-hook-form";

const MyAppLayout = () => {
  const [isAuthenticate, setIsAuthenticate] = React.useState(false);

  const redirect = () => {
    window.location.href = "/";
  };

  const validate = async () => {
    try {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      const isValid = await AuthService.IsValid(user, token);
      if (isValid) {
        setIsAuthenticate(isValid);
      } else {
        redirect();
      }
    } catch (err) {
      alert(err);
      redirect();
    }
  };

  React.useEffect(() => {
    validate();
  }, []);

  return (
    <>
      <main>
        {isAuthenticate ? (
          <Container fluid>
            <NavbarVertical routes={MyRoutesScheme} />
            <div className="content">
              <NavbarTop />
              <Outlet />
              <Footer />
            </div>
          </Container>
        ) : (
          <>
            <h6>No Autorizado</h6>
          </>
        )}
      </main>
    </>
  );
};

export default MyAppLayout;
