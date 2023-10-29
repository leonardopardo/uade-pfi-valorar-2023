import React, { useState, useEffect} from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import {
  FiAlertTriangle,
  FiAnchor,
  FiDollarSign,
  FiHome,
  FiMapPin,
  FiPieChart,
} from "react-icons/fi";
import logo from "assets/img/illustrations/logo.svg";
import GoogleMap from "MyApp/components/map/GoogleMap";

const ResponsePrice = ({ price, sentiment, data, geo }) => {
  const [sntm, setSntm] = useState(sentiment?.result);

  const getSentimentResult = () => {
    switch (sntm) {
      case "Positive":
        return "alert alert-success d-inline-block";
      case "Negative":
        return "alert alert-danger d-inline-block";
      case "Neutral":
        return "alert alert-info d-inline-block";
      default:
        return "alert alert-primary d-inline-block";
    }
  };

  const getSentimentNews = (news) => {
    return (
      <>
        {news?.map((n) => {
          return (
            <li>
              <a target="_blank" href={n}>
                {n}
              </a>
            </li>
          );
        })}
      </>
    );
  };

  useEffect(() => {
    setSntm(sentiment?.result);
  }, [sntm]);

  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Image src={logo} width={150} className="mb-3" />
              <h4>Estimación del Precio</h4>
              <h6 className="fw-light">
                El cálculo de estimación se encuentra experesado en{" "}
                <strong>ARS</strong>
              </h6>
            </Col>
            <Col>
              <p className="text-end small mb-3">
                <strong>Fecha:</strong> {new Date().toLocaleDateString()}
              </p>
            </Col>
            <Col xs={12}>
              <hr />
            </Col>
          </Row>
          {/* Información del Inmueble */}
          <Row className="mb-4">
            <Col xs={12} xl={5} xxl={5} className="small">
              <h5 className="mb-3">
                <FiHome /> Información Del Inmueble a Estimar
              </h5>
              <Card.Text className="mb-2">
                <strong>Antigüedad:</strong> {data?.antiquity || "No informada"}
              </Card.Text>{" "}
              <Card.Text className="mb-2">
                <strong>Ambientes:</strong> {data?.ambients || "No informada"}
              </Card.Text>{" "}
              <Card.Text className="mb-2">
                <strong>Cuartos</strong> {data?.rooms || "No informada"}
              </Card.Text>{" "}
              <Card.Text className="mb-2">
                <strong>Baños:</strong> {data?.bathrooms || "No informada"}
              </Card.Text>{" "}
              <Card.Text className="mb-2">
                <strong>Superficie Total:</strong> {data?.surface || 0} métros
                cuadrados
              </Card.Text>{" "}
              <Card.Text className="mb-2">
                <strong>Barrio:</strong> {data?.neighborhood || "No informado"}
              </Card.Text>{" "}
              <Card.Text className="mb-2">
                <strong>Amenities:</strong>{" "}
                {data?.amenities.map((amenitie) => amenitie + ", ")}
              </Card.Text>{" "}
              <Card.Text className="mb-2">
                <strong>Characterísticas:</strong>{" "}
                {data?.features.map((feature) => feature + ", ")}
              </Card.Text>{" "}
            </Col>
            <Col xs={12} xl={7} xxl={7}>
              <h5 className="mb-3">
                <FiMapPin /> Ubicación
              </h5>
              <Card>
                <GoogleMap lat={geo?.lat} lng={geo?.lng} />
              </Card>
            </Col>
          </Row>
          <hr />
          {/* Análisis de Sentimiento */}
          <Row>
            <Col className="small">
              <h5 className="mb-2">
                <FiPieChart /> Análisis de Sentimiento
              </h5>
              <h5 className={getSentimentResult(sntm)}>{sntm.toString()}</h5>
              <div>
                <h6>
                  <FiAnchor /> Noticias Relacionadas
                </h6>
                <ul>{getSentimentNews(sentiment?.examples)}</ul>
                <p>
                  * El análisis de sentimiento es el resutltado promedio
                  ponderado del análisis semanal de noticias en los principales
                  medios de comunicación del país.
                </p>
              </div>
            </Col>
          </Row>
          <hr />
          {/* Precio Estimado */}
          <Row>
            <Col>
              <h5 className="mb-2">
                <FiDollarSign /> Precio Estimado
              </h5>
              <h5 className="alert alert-success d-inline-block">
                ARS {Math.floor(price)}.-
              </h5>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="bg-light">
          <Card.Text className="small">
            <strong>
              <FiAlertTriangle /> Importante:
            </strong>
            <br />
            Las fluctuaciones del mercado y factores imprevistos pueden influir
            en la precisión de las estimaciones. Esta información debe
            utilizarse como una guía, no como un valor definitivo. Se recomienda
            combinar el análisis con la experiencia de profesionales
            inmobiliarios y otras fuentes de información.
          </Card.Text>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ResponsePrice;
