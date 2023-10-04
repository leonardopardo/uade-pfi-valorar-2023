import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../../../assets/img/illustrations/logo.svg";
import imageHeader from "../../../assets/img/generic/bg-7.jpg";

const PrivacidadPage = () => {
    return (
        <>
            <Image src={imageHeader} fluid />
            <Container className="my-5">
                <Row className="my-5">
                    <Col>
                        <div>
                            <h1>Política de Privacidad de Valorar.ar</h1>
                            <p>
                                <ol>
                                    <li>
                                        <h4>Información que Recopilamos</h4>
                                        <p>
                                            En [Nombre de tu Sitio Web], valoramos y respetamos tu privacidad. En el curso de brindar nuestros servicios, podemos recopilar y procesar la siguiente información personal:
                                        </p>
                                        <p>
                                            <strong>1.1.</strong> Información que nos proporcionas: Esto puede incluir, pero no se limita a, tu nombre, dirección de correo electrónico, información de contacto y cualquier otra información que elijas proporcionarnos al utilizar nuestro sitio web.
                                        </p>
                                        <p>
                                            <strong>1.2.</strong> Información recopilada automáticamente: Utilizamos tecnologías de seguimiento, como cookies y registros del servidor, para recopilar información sobre tu comportamiento de navegación y tu uso del sitio web. Esto puede incluir información sobre tu dirección IP, navegador web, dispositivo y ubicación aproximada.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Uso de la Información</h4>
                                        <p>
                                            <strong>2.1.</strong> Utilizamos la información recopilada para los siguientes propósitos:
                                            Personalizar y mejorar tu experiencia en el sitio web.
                                            Proporcionarte información, productos o servicios solicitados.
                                            Enviar comunicaciones promocionales y actualizaciones (si has dado tu consentimiento).
                                            Cumplir con nuestras obligaciones legales y reglamentarias.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Compartir Información con Terceros</h4>
                                        <p>
                                            No compartimos tu información personal con terceros, excepto en las siguientes circunstancias:
                                            Cuando sea necesario para cumplir con una solicitud tuya, como procesar un pedido.
                                            Cuando sea necesario para cumplir con obligaciones legales o regulaciones.
                                            Con proveedores de servicios de confianza que nos ayudan a operar el sitio web y brindar servicios.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Seguridad de la Información</h4>
                                        <p>
                                            Tomamos medidas razonables para proteger tu información personal y mantenerla segura. Sin embargo, ten en cuenta que ninguna transmisión de datos por Internet es completamente segura, y no podemos garantizar la seguridad absoluta de tu información.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Tus Derechos de Privacidad</h4>
                                        <p>
                                            Tienes ciertos derechos con respecto a tus datos personales, incluyendo el derecho a acceder, corregir, eliminar y objetar al procesamiento de tus datos personales. Para ejercer estos derechos, ponte en contacto con nosotros a través de la información de contacto proporcionada en la sección 7.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Cambios en la Política de Privacidad</h4>
                                        <p>
                                            Nos reservamos el derecho de actualizar y modificar esta Política de Privacidad en cualquier momento. Te recomendamos que revises periódicamente esta página para estar informado sobre cualquier cambio. La fecha de la última actualización se encuentra en la parte superior de esta página.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Contáctanos</h4>
                                        <p>
                                            Si tienes preguntas, comentarios o preocupaciones sobre esta Política de Privacidad o nuestras prácticas de privacidad, puedes contactarnos a través de la siguiente información de contacto:
                                            <br /><a href="https://valorar.ar">valorar.ar</a>
                                            <br /><a href="mailto:info@valorar.ar">info@valorar.ar</a>
                                        </p>
                                    </li>
                                </ol>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PrivacidadPage;