import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import imageHeader from "../../../../assets/img/generic/bg-7.jpg";
import DemoValidationForm from "./validations/DemoValidationForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MyButtonSpinner from "MyApp/my-components/MyButtonSpinner";
import {
  FiMapPin,
  FiCheckSquare,
  FiClock,
  FiSquare,
  FiBox,
  FiLayers,
  FiHexagon,
  FiDollarSign,
  FiRefreshCw,
} from "react-icons/fi";
import Select from "react-select";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import BarriosService from "MyApp/data/BarriosService";
import PriceService from "MyApp/data/PriceService";
import ResponsePrice from "./components/ResponsePrice";
import { geocodeByPlaceId } from "react-google-places-autocomplete";
import CountUp from "react-countup";

const DemoPage = () => {
  const [loading, setLoading] = React.useState(false);

  const [featureValue, setFeatureValue] = useState([]);

  const [amenitiesValue, setAmenitiesValue] = useState(null);

  const [locationValue, setLocationValue] = useState(null);

  const [neighborhoodValue, setNeighborhoodValue] = useState(null);

  const [neighborhood, setNeighborhood] = useState([]);

  const [inputValues, setInputValues] = useState(null);

  const [price, setPrice] = useState(null);

  const [sentiment, setSentiment] = useState(null);

  const [geo, setGeo] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(DemoValidationForm),
  });

  useEffect(() => {
    const getNeighborhood = async () => {
      try {
        const barrios = BarriosService.getBarrios();
        setNeighborhood(barrios);
      } catch (err) {
        console.log(err);
      }
    };
    getNeighborhood();
  }, []);

  const geoCode = async (location) => {
    if (!location) return;
    const result = await geocodeByPlaceId("ChIJXQwVsTvJvJUR_wI0CzFU6Uk");
    setGeo({
      lat: result[0].geometry.location.lat(),
      lng: result[0].geometry.location.lng(),
    });
  };

  const DemoFormSubmit = async (data) => {
    setLoading(true);
    try {
      data.features = featureValue.map((item) => item.value);
      data.amenities = amenitiesValue.map((item) => item.value);
      data.location = locationValue;
      data.neighborhood = neighborhoodValue.label;

      const { price, sentiment } = await PriceService.getPrice(data);

      setInputValues(data);
      setPrice(price);
      setSentiment(sentiment);
    } catch (err) {
    } finally {
      reset();
      setLoading(false);
    }
  };

  const isValid = (value) => {
    return value ? "is-invalid" : "";
  };

  const features = [
    { value: "balcony", label: "Balcón" },
    { value: "yard", label: "Patio" },
    { value: "rooftop", label: "Terraza" },
    { value: "garage", label: "Garage" },
  ];

  const amenities = [
    { value: "amoblado", label: "Amoblado" },
    { value: "cancha_paddle", label: "Cancha de paddle" },
    { value: "cancha_tenis", label: "Cancha de tenis" },
    { value: "gimnasio", label: "Gimnasio" },
    { value: "hidromasaje", label: "Hidromasaje" },
    { value: "laundry", label: "Laundry" },
    { value: "microcine", label: "Microcine" },
    { value: "parrilla", label: "Parrilla" },
    { value: "piscina", label: "Piscina" },
    { value: "sala_de_juegos", label: "Sala de juegos" },
    { value: "sauna", label: "Sauna" },
    { value: "solarium", label: "Solarium" },
    { value: "spa", label: "Spa" },
    { value: "sum", label: "SUM" },
    { value: "estacionamiento_visitas", label: "Estacionamiento de visitas" },
  ];

  useEffect(() => {
    geoCode(locationValue);
  }, [locationValue]);

  return (
    <>
      <Image src={imageHeader} fluid />
      <Container>
        <Row className="mt-4">
          <Col>
            <h4 className="mb-3">
              <FiRefreshCw /> Realice una demostración de nuestro <br />{" "}
              estimador de Alquilers
            </h4>
            <Card>
              <Card.Body>
                <CountUp
                  className="fs-3"
                  start={0}
                  end={70000}
                  duration={2.75}
                  suffix=" propiedades escaneadas"
                  prefix="Más de "
                  separator=","
                  decimals={0}
                  decimal="."
                />
                <Card.Text>
                  Nuestro sistema de cálculo de alquileres se basa en un
                  algoritmo de <strong>Machine Learning</strong> que utiliza
                  información de alquileres publicados en los principales
                  portales de propiedades en los últimos meses en la Ciudad de
                  Buenos Aires.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="mb-5 mt-3">
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit(DemoFormSubmit)}>
                  {/* Características */}
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FiCheckSquare /> Características
                    </Form.Label>
                    <Select
                      {...register("features")}
                      closeMenuOnSelect={false}
                      placeholder="Selecciona las características"
                      options={features}
                      value={featureValue}
                      onChange={(value) => setFeatureValue(value)}
                      className={isValid(errors.features)}
                      isMulti
                      isClearable
                    />
                    <p className="text-danger small my-2">
                      {errors.features && errors.features.message}
                    </p>
                  </Form.Group>

                  {/* Amenities */}
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FiLayers /> Amenities
                    </Form.Label>
                    <Select
                      {...register("amenities")}
                      placeholder="Selecciona los amenities"
                      closeMenuOnSelect={false}
                      options={amenities}
                      value={amenitiesValue}
                      onChange={(value) => setAmenitiesValue(value)}
                      className={isValid(errors.amenities)}
                      isMulti
                      isClearable
                    />
                    <p className="text-danger small my-2">
                      {errors.amenities && errors.amenities.message}
                    </p>
                  </Form.Group>

                  <Row>
                    <Col>
                      {/* Antiguedad */}
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FiClock /> Antiguedad
                        </Form.Label>
                        <Form.Control
                          {...register("antiquity")}
                          type="number"
                          placeholder="Ingresa la antiguedad"
                          size="md"
                          className={isValid(errors.antiquity)}
                        />
                        <p className="text-danger small">
                          {errors.antiquity && errors.antiquity.message}
                        </p>
                      </Form.Group>
                    </Col>
                    <Col>
                      {/* Ambientes */}
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FiSquare /> Ambientes
                        </Form.Label>
                        <Form.Control
                          {...register("ambients")}
                          type="number"
                          placeholder="Ingresa la cantidad de ambientes"
                          size="md"
                          className={isValid(errors.ambients)}
                        />
                        <p className="text-danger small">
                          {errors.ambients && errors.ambients.message}
                        </p>
                      </Form.Group>
                    </Col>
                    <Col>
                      {/* Cuartos */}
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FiHexagon /> Cuartos
                        </Form.Label>
                        <Form.Control
                          {...register("rooms")}
                          type="number"
                          placeholder="Ingresa la cantidad de cuartos"
                          size="md"
                          className={isValid(errors.rooms)}
                        />
                        <p className="text-danger small">
                          {errors.rooms && errors.rooms.message}
                        </p>
                      </Form.Group>
                    </Col>
                    <Col>
                      {/* Baños */}
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FiCheckSquare /> Baños
                        </Form.Label>
                        <Form.Control
                          {...register("bathrooms")}
                          type="number"
                          placeholder="Ingresa la cantidad de ambientes"
                          size="md"
                          className={isValid(errors.bathrooms)}
                        />
                        <p className="text-danger small">
                          {errors.bathrooms && errors.bathrooms.message}
                        </p>
                      </Form.Group>
                    </Col>
                    <Col>
                      {/* Superficie Total */}
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FiBox /> Superficie Total
                        </Form.Label>
                        <Form.Control
                          {...register("surface")}
                          type="number"
                          placeholder="Ingresa la superficie total"
                          size="md"
                          className={isValid(errors.surface)}
                        />
                        <p className="text-danger small">
                          {errors.surface && errors.surface.message}
                        </p>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      {/* Ubicación */}
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FiMapPin /> Ubicación
                        </Form.Label>
                        <GooglePlacesAutocomplete
                          apiKey="AIzaSyC1SKfM0hkWaDGNv0O4Q2lXXrZ1HO2Nl2c"
                          apiOptions={{ language: "es", region: "ar" }}
                          selectProps={{
                            locationValue,
                            onChange: setLocationValue,
                            onMenuClose: geoCode,
                          }}
                        />
                        <p className="text-danger small">
                          {errors.location && errors.location.message}
                        </p>
                      </Form.Group>
                    </Col>
                    <Col>
                      {/* Barrios */}
                      {neighborhood && (
                        <Form.Group className="mb-3">
                          <Form.Label>
                            <FiLayers /> Barrio
                          </Form.Label>
                          <Select
                            {...register("neighborhood")}
                            placeholder="Selecciona el Barrio"
                            closeMenuOnSelect={true}
                            options={neighborhood}
                            value={neighborhoodValue}
                            onChange={(value) => setNeighborhoodValue(value)}
                            className={isValid(errors.neighborhood)}
                            isClearable
                          />
                          <p className="text-danger small my-2">
                            {errors.neighborhood && errors.neighborhood.message}
                          </p>
                        </Form.Group>
                      )}
                    </Col>
                  </Row>

                  {/* Submit */}
                  {!loading ? (
                    <Button variant="primary" type="submit" size="md">
                      <FiDollarSign /> Calcular Precio
                    </Button>
                  ) : (
                    <MyButtonSpinner />
                  )}
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="mb-5">
            {price && inputValues && geo && (
              <ResponsePrice
                price={price}
                sentiment={sentiment}
                data={inputValues}
                geo={geo}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DemoPage;
