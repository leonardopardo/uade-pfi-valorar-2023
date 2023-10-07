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
} from "react-icons/fi";
import Select from "react-select";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import BarriosService from "MyApp/data/BarriosService";

const DemoPage = () => {
  const [loading, setLoading] = React.useState(false);

  const [featureValue, setFeatureValue] = useState([]);

  const [amenitiesValue, setAmenitiesValue] = useState(null);

  const [locationValue, setLocationValue] = useState(null);

  const [neighborhoodValue, setNeighborhoodValue] = useState(null);

  const [neighborhood, setNeighborhood] = useState([]);

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

  const DemoFormSubmit = async (data) => {
    setLoading(true);
    try {
      data.features = featureValue;
      data.amenities = amenitiesValue;
      data.location = locationValue;
      data.neighborhood = neighborhoodValue.label;
      console.log(data);
    } catch (err) {
      console.log(err);
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

  return (
    <>
      <Image src={imageHeader} fluid />
      <Container>
        <Row>
          <Col className="my-5">
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
                      options={features}
                      value={featureValue}
                      onChange={(value) => setFeatureValue(value)}
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
                      closeMenuOnSelect={false}
                      options={amenities}
                      value={amenitiesValue}
                      onChange={(value) => setAmenitiesValue(value)}
                      isMulti
                      isClearable
                    />
                    <p className="text-danger small my-2">
                      {errors.features && errors.features.message}
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
                          className={isValid(errors.antiquity)}
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
                            closeMenuOnSelect={true}
                            options={neighborhood}
                            value={neighborhoodValue}
                            onChange={(value) => setNeighborhoodValue(value)}
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
      </Container>
    </>
  );
};

export default DemoPage;

// {
//     "caracteristicas": [
//         "balcony"
//     ],
//     "amenities": [],
//     "lat": -30,
//     "lon": -30,
//     "antiguedad": 10,
//     "ambientes": 1,
//     "cuartos": 0,
//     "banos": 1,
//     "superficie_total": 45,
//     "barrio": "Palermo",
//     "localidad": "Buenos Aires"
// }
