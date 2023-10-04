import React from "react";
import Hero from "MyApp/components/pages/landing/Hero";
import Partners from "MyApp/components/pages/landing/Partners";
import Processes from "MyApp/components/pages/landing/Processes";
import Services from "MyApp/components/pages/landing/Services";
import Testimonial from "MyApp/components/pages/landing/Testimonial";
import Cta from "MyApp/components/pages/landing/Cta";
import PricingAlt from "MyApp/components/pages/pricing/pricing-alt/PricingAlt";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Processes />
      <Container>
        <PricingAlt />
      </Container>
      <Services />
      <Testimonial />
      <Cta />
    </>
  );
};

export default HomePage;
