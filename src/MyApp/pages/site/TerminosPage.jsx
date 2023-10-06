import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import imageHeader from "../../../assets/img/generic/bg-8.jpg";

const TerminosPage = () => {
    return (
        <>
            <Image src={imageHeader} fluid />
            <Container className="my-5">
                <Row className="my-5">
                    <Col>
                        <div>
                            <h1>Términos y Condiciones de Uso del Servicio</h1>
                        </div>
                        <ol>
                            <li>
                                <h4>Aceptación de los Términos</h4>
                                <p>
                                    Al acceder y utilizar los servicios de machine learning proporcionados por Valorar ("nosotros", "nuestro" o "la Compañía"), aceptas cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no estás de acuerdo con estos términos, no debes utilizar nuestros servicios.
                                </p>
                            </li>
                            <li>
                                <h4>Uso del Servicio</h4>
                                <p>
                                    2.1. Acceso al Servicio: Te otorgamos un acceso limitado, no exclusivo y no transferible a nuestros servicios de machine learning, sujeto a tu cumplimiento con estos términos y condiciones.
                                </p>
                                <p>
                                    2.2. Uso Adecuado: Te comprometes a utilizar nuestros servicios de manera adecuada y ética. No debes utilizarlos para actividades ilegales, inmorales o que violen los derechos de terceros.
                                </p>
                            </li>
                            <li>
                                <h4>Propiedad Intelectual</h4>
                                <p>
                                    3.1. Derechos de Propiedad: Reconoces que todos los derechos de propiedad intelectual relacionados con nuestros servicios, incluyendo pero no limitado a software, algoritmos y datos, son propiedad exclusiva de [Nombre de tu Empresa] o sus licenciantes.
                                </p>
                                <p>
                                    3.2. Licencia Limitada: Te otorgamos una licencia limitada para utilizar nuestros servicios de machine learning con fines personales o comerciales, de acuerdo con estos términos y condiciones.
                                </p>
                            </li>
                            <li>
                                <h4>Privacidad</h4>
                                <p>
                                    4.1. Datos del Usuario: Para utilizar nuestros servicios, es posible que debas proporcionar cierta información personal. Nuestra política de privacidad describe cómo recopilamos, utilizamos y protegemos tus datos. Al utilizar nuestros servicios, aceptas nuestra política de privacidad.
                                </p>
                            </li>
                            <li>
                                <h4>Limitación de Responsabilidad</h4>
                                <p>
                                    5.1. Sin Garantías: Nuestros servicios se proporcionan "tal como están". No ofrecemos garantías explícitas o implícitas con respecto a la precisión, confiabilidad o disponibilidad de los resultados de machine learning.
                                </p>
                                <p>
                                    5.2. Limitación de Responsabilidad: En ningún caso seremos responsables por daños directos, indirectos, incidentales, especiales o consecuentes, incluyendo pérdida de beneficios o datos, resultantes del uso o la imposibilidad de utilizar nuestros servicios.
                                </p>
                            </li>
                            <li>
                                <h4>Modificaciones y Terminación</h4>
                                <p>
                                    6.1. Modificaciones: Nos reservamos el derecho de modificar, suspender o descontinuar nuestros servicios en cualquier momento sin previo aviso.
                                </p>
                                <p>
                                    6.2. Terminación: Nos reservamos el derecho de terminar tu acceso a nuestros servicios si incumples estos términos y condiciones.
                                </p>
                            </li>
                            <li>
                                <h4>Ley Aplicable y Jurisdicción</h4>
                                <p>
                                    Estos términos y condiciones se rigen por las leyes del [país o región], y cualquier disputa relacionada con ellos se resolverá en los tribunales de [ciudad o jurisdicción].
                                </p>
                            </li>
                            <li>
                                <h4>Contacto</h4>
                                <p>
                                    Si tienes preguntas o comentarios sobre estos términos y condiciones, contáctanos a través de <a href="mailto:info@valorar.ar">info@valorar.ar</a>.
                                </p>
                            </li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default TerminosPage;