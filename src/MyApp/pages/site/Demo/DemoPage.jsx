import React, { useState } from "react";
import { Container, Row, Col, Image, Form, Button, Card } from "react-bootstrap";
import imageHeader from "../../../../assets/img/generic/bg-7.jpg";
import DemoValidationForm from "./validations/DemoValidationForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MyButtonSpinner from "MyApp/my-components/MyButtonSpinner";
import { FiMapPin, FiCheckSquare, FiClock, FiSquare, FiBox, FiLayers, FiHexagon } from "react-icons/fi";
import Select from 'react-select';

const DemoPage = () => {
    const [loading, setLoading] = React.useState(false);

    const [featureValue, setFeatureValue] = useState(null);

    const [amenitiesValue, setAmenitiesValue] = useState(null);


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(DemoValidationForm),
    });

    const DemoFormSubmit = async (data) => {
        setLoading(true);
        try {
            console.log(data)
            reset();
        } catch (err) {
        } finally {
            setLoading(false);
        }
    };

    const isValid = (value) => {
        return value ? "is-invalid" : "";
    };

    const features = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const amenities = [
        { value: 'pera', label: 'Pera' },
        { value: 'manzana', label: 'Manzana' },
        { value: 'banana', label: 'Banana' }
    ]

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
                                            closeMenuOnSelect={true}
                                            options={features}
                                            value={featureValue}
                                            onChange={value => setFeatureValue(value)}
                                            isMulti
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
                                            closeMenuOnSelect={true}
                                            options={amenities}
                                            value={amenitiesValue}
                                            onChange={value => setAmenitiesValue(value)}
                                            isMulti
                                        />
                                        <p className="text-danger small my-2">
                                            {errors.features && errors.features.message}
                                        </p>
                                    </Form.Group>

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

                                    {/* Ubicación */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            <FiMapPin /> Ubicación
                                        </Form.Label>
                                        <Form.Control
                                            {...register("location")}
                                            type="text"
                                            placeholder="Ingresa la dirección"
                                            size="md"
                                            className={isValid(errors.location)}
                                        />
                                        <p className="text-danger small">
                                            {errors.location && errors.location.message}
                                        </p>
                                    </Form.Group>

                                    {/* Submit */}
                                    {!loading ? (
                                        <Button variant="primary" type="submit" size="md">
                                            Calcular Precio
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
}

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