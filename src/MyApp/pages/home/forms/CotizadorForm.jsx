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
import { geocodeByPlaceId } from "react-google-places-autocomplete";
import DemoValidationForm from "../validations/DemoValidationForm";
import ResponsePrice from "./ResponsePrice";

const CotizadorForm = () => {
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

  const geoCode = async (location) => {
    if (!location) return;

    const result = await geocodeByPlaceId(location.value?.place_id);

    const addressComponents = result[0].address_components;

    const components = addressComponents.map((address) => {
      return address.long_name;
    });

    const barrio = neighborhood.find((item) => {
      return components.includes(item.label);
    });

    if (barrio) setNeighborhoodValue(barrio);

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
      data.token = localStorage.getItem("token");

      const { price, sentiment } = await PriceService.getPrice(data);

      setInputValues(data);
      setPrice(price);
      setSentiment(sentiment);
    } catch (err) {
      console.log(err);
    } finally {
      reset();
      setLoading(false);
    }
  };

  const DemoFormReset = () => {
    setPrice(null);
    setSentiment(null);
    setInputValues(null);
    setFeatureValue(null);
    setAmenitiesValue(null);
    setLocationValue(null);
    setNeighborhoodValue(null);
    setGeo(null);
    reset();
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

  useEffect(() => {
    reset();
  }, [reset]);
  return (
    <>
      <Row>
        <Col className="mb-5">
          <Card>
            <Card.Body>
              <Card.Title className="mb-4">
                <h4 className="text-primary fw-bold mb-0">
                  Cotizar <br />
                  <span className="text-info fw-medium">
                    Probá nuestro sistema de valuación de propiedades en tiempo
                    real.
                  </span>
                </h4>
              </Card.Title>
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

                <Row className="mb-4">
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
                  <>
                    <Button variant="primary" type="submit" size="md">
                      <FiDollarSign /> Calcular Precio
                    </Button>
                    <Button
                      variant="secondary"
                      size="md"
                      className="ms-2"
                      onClick={DemoFormReset}
                    >
                      <FiRefreshCw /> Limpiar Formulario
                    </Button>
                  </>
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
    </>
  );
};

export default CotizadorForm;
